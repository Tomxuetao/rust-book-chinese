# 优雅停机与清理

> [ch20-03-graceful-shutdown-and-cleanup.md](https://github.com/rust-lang/book/blob/main/src/ch20-03-graceful-shutdown-and-cleanup.md)
> <br>
> commit 322899b375d071e4d96aaf29ce25c1a4b4ec65da

示例 20-20 中的代码如期通过使用线程池异步的响应请求。这里有一些警告说 `workers`、`id` 和 `thread` 字段没有直接被使用，这提醒了我们并没有清理所有的内容。当使用不那么优雅的 <span class="keystroke">ctrl-c</span> 终止主线程时，所有其他线程也会立刻停止，即便它们正处于处理请求的过程中。

现在我们要为 `ThreadPool` 实现 `Drop` trait 对线程池中的每一个线程调用 `join`，这样这些线程将会执行完他们的请求。接着会为 `ThreadPool` 实现一个告诉线程他们应该停止接收新请求并结束的方式。为了实践这些代码，修改 server 在优雅停机（graceful shutdown）之前只接受两个请求。

## 为 `ThreadPool` 实现 `Drop` Trait

现在开始为线程池实现 `Drop`。当线程池被丢弃时，应该 join 所有线程以确保他们完成其操作。示例 20-22 展示了 `Drop` 实现的第一次尝试；这些代码还不能够编译：

<span class="filename">文件名: src/lib.rs</span>

<<< @/listings/ch20-web-server/listing-20-22/src/lib.rs

<span class="caption">示例 20-22: 当线程池离开作用域时 join 每个线程</span>

这里首先遍历线程池中的每个 `workers`。这里使用了 `&mut` 因为 `self` 本身是一个可变引用而且也需要能够修改 `worker`。对于每一个线程，会打印出说明信息表明此特定 worker 正在关闭，接着在 worker 线程上调用 `join`。如果 `join` 调用失败，通过 `unwrap` 使得 panic 并进行不优雅的关闭。

如下是尝试编译代码时得到的错误：

<<< @/listings/ch20-web-server/listing-20-22/output.txt

这告诉我们并不能调用 `join`，因为只有每一个 `worker` 的可变借用，而 `join` 获取其参数的所有权。为了解决这个问题，需要一个方法将 `thread` 移动出拥有其所有权的 `Worker` 实例以便 `join` 可以消费这个线程。示例 17-15 中我们曾见过这么做的方法：如果 `Worker` 存放的是 `Option<thread::JoinHandle<()>`，就可以在 `Option` 上调用 `take` 方法将值从 `Some` 成员中移动出来而对 `None` 成员不做处理。换句话说，正在运行的 `Worker` 的 `thread` 将是 `Some` 成员值，而当需要清理 worker 时，将 `Some` 替换为 `None`，这样 worker 就没有可以运行的线程了。

为此需要更新 `Worker` 的定义为如下：

<span class="filename">文件名: src/lib.rs</span>

<<< @/listings/ch20-web-server/no-listing-04-update-worker-definition/src/lib.rs

现在依靠编译器来找出其他需要修改的地方。check 代码会得到两个错误：

<<< @/listings/ch20-web-server/no-listing-04-update-worker-definition/output.txt

让我们修复第二个错误，它指向 `Worker::new` 结尾的代码；当新建 `Worker` 时需要将 `thread` 值封装进 `Some`。做出如下改变以修复问题：

<span class="filename">文件名: src/lib.rs</span>

<<< @/listings/ch20-web-server/no-listing-05-fix-worker-new/src/lib.rs

第一个错误位于 `Drop` 实现中。之前提到过要调用 `Option` 上的 `take` 将 `thread` 移动出 `worker`。如下改变会修复问题：

<span class="filename">文件名: src/lib.rs</span>

<<< @/listings/ch20-web-server/no-listing-06-fix-threadpool-drop/src/lib.rs

如第十七章我们见过的，`Option` 上的 `take` 方法会取出 `Some` 而留下 `None`。使用 `if let` 解构 `Some` 并得到线程，接着在线程上调用 `join`。如果 worker 的线程已然是 `None`，就知道此时这个 worker 已经清理了其线程所以无需做任何操作。

## 向线程发送信号使其停止接收任务

有了所有这些修改，代码就能编译且没有任何警告。不过也有坏消息，这些代码还不能以我们期望的方式运行。问题的关键在于 `Worker` 中分配的线程所运行的闭包中的逻辑：调用 `join` 并不会关闭线程，因为他们一直 `loop` 来寻找任务。如果采用这个实现来尝试丢弃 `ThreadPool` ，则主线程会永远阻塞在等待第一个线程结束上。

为了修复这个问题，修改线程既监听是否有 `Job` 运行也要监听一个应该停止监听并退出无限循环的信号。所以信道将发送这个枚举的两个成员之一而不是 `Job` 实例：

<span class="filename">文件名: src/lib.rs</span>

<<< @/listings/ch20-web-server/no-listing-07-define-message-enum/src/lib.rs

`Message` 枚举要么是存放了线程需要运行的 `Job` 的 `NewJob` 成员，要么是会导致线程退出循环并终止的 `Terminate` 成员。

同时需要修改信道来使用 `Message` 类型值而不是 `Job`，如示例 20-23 所示：

<span class="filename">文件名: src/lib.rs</span>

<<< @/listings/ch20-web-server/listing-20-23/src/lib.rs

<span class="caption">示例 20-23: 收发 `Message` 值并在 `Worker` 收到 `Message::Terminate` 时退出循环</span>

为了适用 `Message` 枚举需要将两个地方的 `Job` 修改为 `Message`：`ThreadPool` 的定义和 `Worker::new` 的签名。`ThreadPool` 的 `execute` 方法需要发送封装进 `Message::NewJob` 成员的任务。然后，在 `Worker::new` 中当从信道接收 `Message` 时，当获取到 `NewJob`成员会处理任务而收到 `Terminate` 成员则会退出循环。

通过这些修改，代码再次能够编译并继续按照示例 20-20 之后相同的行为运行。不过还是会得到一个警告，因为并没有创建任何 `Terminate` 成员的消息。如示例 20-24 所示修改 `Drop` 实现来修复此问题：

<span class="filename">文件名: src/lib.rs</span>

<<< @/listings/ch20-web-server/listing-20-24/src/lib.rs

<span class="caption">示例 20-24：在对每个 worker 线程调用 `join` 之前向 worker 发送 `Message::Terminate`</span>

现在遍历了 worker 两次，一次向每个 worker 发送一个 `Terminate` 消息，一个调用每个 worker 线程上的 `join`。如果尝试在同一循环中发送消息并立即 join 线程，则无法保证当前迭代的 worker 是从信道收到终止消息的 worker。

为了更好的理解为什么需要两个分开的循环，想象一下只有两个 worker 的场景。如果在一个单独的循环中遍历每个 worker，在第一次迭代中向信道发出终止消息并对第一个 worker 线程调用 `join`。如果此时第一个 worker 正忙于处理请求，那么第二个 worker 会收到终止消息并停止。我们会一直等待第一个 worker 结束，不过它永远也不会结束因为第二个线程接收了终止消息。死锁！

为了避免此情况，首先在一个循环中向信道发出所有的 `Terminate` 消息，接着在另一个循环中 join 所有的线程。每个 worker 一旦收到终止消息即会停止从信道接收消息，意味着可以确保如果发送同 worker 数相同的终止消息，在 join 之前每个线程都会收到一个终止消息。

为了实践这些代码，如示例 20-25 所示修改 `main` 在优雅停机 server 之前只接受两个请求：

<span class="filename">文件名: src/bin/main.rs</span>

<<< @/listings/ch20-web-server/listing-20-25/src/bin/main.rs

<span class="caption">示例 20-25: 在处理两个请求之后通过退出循环来停止 server</span>

你不会希望真实世界的 web server 只处理两次请求就停机了，这只是为了展示优雅停机和清理处于正常工作状态。

`take` 方法定义于 `Iterator` trait，这里限制循环最多头 2 次。`ThreadPool` 会在 `main` 的结尾离开作用域，而且还会看到 `drop` 实现的运行。

使用 `cargo run` 启动 server，并发起三个请求。第三个请求应该会失败，而终端的输出应该看起来像这样：

```
$ cargo run
   Compiling hello v0.1.0 (file:///projects/hello)
    Finished dev [unoptimized + debuginfo] target(s) in 1.0s
     Running `target/debug/main`
Worker 0 got a job; executing.
Worker 3 got a job; executing.
Shutting down.
Sending terminate message to all workers.
Shutting down all workers.
Shutting down worker 0
Worker 1 was told to terminate.
Worker 2 was told to terminate.
Worker 0 was told to terminate.
Worker 3 was told to terminate.
Shutting down worker 1
Shutting down worker 2
Shutting down worker 3
```

可能会出现不同顺序的 worker 和信息输出。可以从信息中看到服务是如何运行的： worker 0 和 worker 3 获取了头两个请求，接着在第三个请求时，我们停止接收连接。当 `ThreadPool` 在 `main` 的结尾离开作用域时，其 `Drop` 实现开始工作，线程池通知所有线程终止。每个 worker 在收到终止消息时会打印出一个信息，接着线程池调用 `join` 来终止每一个 worker 线程。

这个特定的运行过程中一个有趣的地方在于：注意我们向信道中发出终止消息，而在任何线程收到消息之前，就尝试 join worker 0 了。worker 0 还没有收到终止消息，所以主线程阻塞直到 worker 0 结束。与此同时，每一个线程都收到了终止消息。一旦 worker 0 结束，主线程就等待其他 worker 结束，此时他们都已经收到终止消息并能够停止了。

恭喜！现在我们完成了这个项目，也有了一个使用线程池异步响应请求的基础 web server。我们能对 server 执行优雅停机，它会清理线程池中的所有线程。

如下是完整的代码参考：

<span class="filename">文件名: src/bin/main.rs</span>

<<< @/listings/ch20-web-server/no-listing-08-final-code/src/bin/main.rs

<span class="filename">文件名: src/lib.rs</span>

<<< @/listings/ch20-web-server/no-listing-08-final-code/src/lib.rs

这里还有很多可以做的事！如果你希望继续增强这个项目，如下是一些点子：

* 为 `ThreadPool` 和其公有方法增加更多文档
* 为库的功能增加测试
* 将 `unwrap` 调用改为更健壮的错误处理
* 使用 `ThreadPool` 进行其他不同于处理网络请求的任务
* 在 [crates.io](https://crates.io/) 上寻找一个线程池 crate 并使用它实现一个类似的 web server，将其 API 和鲁棒性与我们的实现做对比

## 总结

好极了！你结束了本书的学习！由衷感谢你同我们一道加入这次 Rust 之旅。现在你已经准备好出发并实现自己的 Rust 项目并帮助他人了。请不要忘记我们的社区，这里有其他 Rustaceans 正乐于帮助你迎接 Rust 之路上的任何挑战。
