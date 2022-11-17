# 安装

> [ch01-01-installation.md](https://github.com/rust-lang/book/blob/main/src/ch01-01-installation.md) <br>
> commit 1e17bf15b12f6f7b8d1711dbd343ef8993f64baa

第一步是安装 Rust。我们会通过 `rustup` 下载 Rust，这是一个管理 Rust 版本和相关工具的命令行工具。下载时需要联网。

> 注意：如果你出于某些理由倾向于不使用 `rustup`，请到 [Rust 的其他安装方法页面][otherinstall] 查看其它安装选项。

接下来的步骤会安装最新的稳定版 Rust 编译器。Rust 的稳定性确保本书所有示例在最新版本的 Rust 中能够继续编译。不同版本的输出可能略有不同，因为 Rust 经常改进错误信息和警告。也就是说，任何通过这些步骤安装的最新稳定版 Rust，都应该能正常运行本书中的内容。

> ### 命令行标记
>
> 本章和全书中，我们会展示一些在终端中使用的命令。所有需要输入到终端的行都以 `$` 开头。你不需要输入`$`字符；这里显示的`$`字符表示命令行提示符，仅用于提示每行命令的起点。不以 `$` 起始的行通常展示前一个命令的输出。另外，PowerShell 专用的示例会采用 `>` 而不是 `$`。

## 在 Linux 或 macOS 上安装 `rustup`

如果你使用 Linux 或 macOS，打开终端并输入如下命令：

```
$ curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh
```

此命令下载一个脚本并开始安装 `rustup` 工具，这会安装最新稳定版 Rust。过程中可能会提示你输入密码。如果安装成功，将会出现如下内容：

```text
Rust is installed now. Great!
```

另外，你还需要一个 *链接器（linker）*，这是 Rust 用来将其编译的输出连接到一个文件中的程序。很可能你已经有一个了。如果你遇到了链接器错误，请尝试安装一个 C 编译器，它通常包括一个链接器。C 编译器也很有用，因为一些常见的 Rust 包依赖于 C 代码，因此需要安装一个 C 编译器。

在 macOS 上，你可以通过运行以下命令获得 C 语言编译器：

```
$ xcode-select --install
```

Linux 用户通常需要根据发行版（distribution）文档安装 GCC 或 Clang。比如，如果你使用 Ubuntu，可以安装 `build-essential` 包。

## 在 Windows 上安装 `rustup`

在 Windows 上，前往 [https://www.rust-lang.org/install.html][install] 并按照说明安装 Rust。在安装过程的某个步骤，你会收到一个信息说明为什么需要安装 Visual Studio 2013 或其更新版本的 MSVC 构建工具。要获取构建工具，你需要安装 [Visual Studio 2022][visualstudio]。当被问及需要安装什么工作负载（Workload）的时候，请确保勾选了以下内容：

- “使用 C++ 的桌面开发”，
- Windows 10 （或 11） SDK，
- 英语语言包，以及其他你所需要的语言包。

本书的余下部分会使用能同时运行于 *cmd.exe* 和 PowerShell 的命令。如果存在特定差异，我们会解释使用哪一个。

## 检查安装是否正确（Troubleshooting）

要检查是否正确安装了 Rust，打开命令行并输入：

```
$ rustc --version
```

你应该可以看到按照以下格式显示的最新稳定版本的版本号、对应的 Commit Hash 和 Commit 日期：

```text
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

如果看到了这样的信息，就说明 Rust 已经安装成功了！

> 译者：恭喜入坑！（此处应该有掌声！）

如果没看到，请按照下面说明的方法检查 Rust 是否在您的 `%PATH%` 系统变量中。

在 Windows CMD 中，请使用命令：

```
> echo %PATH%
```

在 PowerShell 中，请使用命令：

```
> echo $env:Path
```

在 Linux 和 macOS 中，请使用命令：

```
echo $PATH
```

如果一切正确但 Rust 仍不能使用，有许多地方可以求助。最简单的是[位于 Rust 官方 Discord][discord] 上的 #beginners 频道。在这里你可以和其他 Rustacean（Rust 用户的称号，有自嘲意味）聊天并寻求帮助。其它给力的资源包括[用户论坛][users]和 [Stack Overflow][stackoverflow]。

> 译者注：这些资源的主要语言都是英语。

## 更新与卸载

通过 `rustup` 安装了 Rust 之后，很容易更新到最新版本，只需要在命令行中运行如下更新脚本即可：

```
$ rustup update
```

若要卸载 Rust 和 `rustup`，请在命令行中运行如下卸载脚本:

```
$ rustup self uninstall
```

## 本地文档

安装程序也自带一份文档的本地拷贝，可以离线阅读。运行 `rustup doc` 在浏览器中查看本地文档。

任何时候，如果你拿不准标准库中的类型或函数的用途和用法，请查阅应用程序接口（application programming interface，API）文档！

[otherinstall]: https://forge.rust-lang.org/infra/other-installation-methods.html
[install]: https://www.rust-lang.org/tools/install
[visualstudio]: https://visualstudio.microsoft.com/downloads/
[discord]: https://discord.gg/rust-lang
[users]: https://users.rust-lang.org/
[stackoverflow]: https://stackoverflow.com/questions/tagged/rust
