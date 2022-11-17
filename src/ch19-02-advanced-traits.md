# 高级 trait

> [ch19-02-advanced-traits.md](https://github.com/rust-lang/book/blob/main/src/ch19-02-advanced-traits.md)
> <br>
> commit 81d05c9a6d06d79f2a85c8ea184f41dc82532d98

第十章 [“trait：定义共享的行为”][traits-defining-shared-behavior] 部分，我们第一次涉及到了 trait，不过就像生命周期一样，我们并没有覆盖一些较为高级的细节。现在我们更加了解 Rust 了，可以深入理解其本质了。

## 关联类型在 trait 定义中指定占位符类型

**关联类型**（*associated types*）是一个将类型占位符与 trait 相关联的方式，这样 trait 的方法签名中就可以使用这些占位符类型。trait 的实现者会针对特定的实现在这个类型的位置指定相应的具体类型。如此可以定义一个使用多种类型的 trait，直到实现此 trait 时都无需知道这些类型具体是什么。

本章所描述的大部分内容都非常少见。关联类型则比较适中；它们比本书其他的内容要少见，不过比本章中的很多内容要更常见。

一个带有关联类型的 trait 的例子是标准库提供的 `Iterator` trait。它有一个叫做 `Item` 的关联类型来替代遍历的值的类型。第十三章的 [“`Iterator` trait 和 `next` 方法”][the-iterator-trait-and-the-next-method] 部分曾提到过 `Iterator` trait 的定义如示例 19-12 所示：

<<< @/listings/ch19-advanced-features/listing-19-12/src/lib.rs

<span class="caption">示例 19-12: `Iterator` trait 的定义中带有关联类型 `Item`</span>

`Item` 是一个占位类型，同时 `next` 方法定义表明它返回 `Option<Self::Item>` 类型的值。这个 trait 的实现者会指定 `Item` 的具体类型，然而不管实现者指定何种类型, `next` 方法都会返回一个包含了此具体类型值的 `Option`。

关联类型看起来像一个类似泛型的概念，因为它允许定义一个函数而不指定其可以处理的类型。那么为什么要使用关联类型呢？

让我们通过一个在第十三章中出现的 `Counter` 结构体上实现 `Iterator` trait 的例子来检视其中的区别。在示例 13-21 中，指定了 `Item` 的类型为 `u32`：

<span class="filename">文件名: src/lib.rs</span>

<<< @/listings/ch19-advanced-features/listing-13-21-reproduced/src/lib.rs:ch19

这类似于泛型。那么为什么 `Iterator` trait 不像示例 19-13 那样定义呢？

<<< @/listings/ch19-advanced-features/listing-19-13/src/lib.rs

<span class="caption">示例 19-13: 一个使用泛型的 `Iterator` trait 假想定义</span>

区别在于当如示例 19-13 那样使用泛型时，则不得不在每一个实现中标注类型。这是因为我们也可以实现为 `Iterator<String> for Counter`，或任何其他类型，这样就可以有多个 `Counter` 的 `Iterator` 的实现。换句话说，当 trait 有泛型参数时，可以多次实现这个 trait，每次需改变泛型参数的具体类型。接着当使用 `Counter` 的 `next` 方法时，必须提供类型注解来表明希望使用 `Iterator` 的哪一个实现。

通过关联类型，则无需标注类型，因为不能多次实现这个 trait。对于示例 19-12 使用关联类型的定义，我们只能选择一次 `Item` 会是什么类型，因为只能有一个 `impl Iterator for Counter`。当调用 `Counter` 的 `next` 时不必每次指定我们需要 `u32` 值的迭代器。

## 默认泛型类型参数和运算符重载

当使用泛型类型参数时，可以为泛型指定一个默认的具体类型。如果默认类型就足够的话，这消除了为具体类型实现 trait 的需要。为泛型类型指定默认类型的语法是在声明泛型类型时使用 `<PlaceholderType=ConcreteType>`。

这种情况的一个非常好的例子是用于运算符重载。**运算符重载**（*Operator overloading*）是指在特定情况下自定义运算符（比如 `+`）行为的操作。

Rust 并不允许创建自定义运算符或重载任意运算符，不过 `std::ops` 中所列出的运算符和相应的 trait 可以通过实现运算符相关 trait 来重载。例如，示例 19-14 中展示了如何在 `Point` 结构体上实现 `Add` trait 来重载 `+` 运算符，这样就可以将两个 `Point` 实例相加了：

<span class="filename">文件名: src/main.rs</span>

<<< @/listings/ch19-advanced-features/listing-19-14/src/main.rs

<span class="caption">示例 19-14: 实现 `Add` trait 重载 `Point` 实例的 `+` 运算符</span>

`add` 方法将两个 `Point` 实例的 `x` 值和 `y` 值分别相加来创建一个新的 `Point`。`Add` trait 有一个叫做 `Output` 的关联类型，它用来决定 `add` 方法的返回值类型。

这里默认泛型类型位于 `Add` trait 中。这里是其定义：

```
trait Add<Rhs=Self> {
    type Output;

    fn add(self, rhs: Rhs) -> Self::Output;
}
```

这些代码看来应该很熟悉，这是一个带有一个方法和一个关联类型的 trait。比较陌生的部分是尖括号中的 `Rhs=Self`：这个语法叫做 **默认类型参数**（*default type parameters*）。`Rhs` 是一个泛型类型参数（“right hand side” 的缩写），它用于定义 `add` 方法中的 `rhs` 参数。如果实现 `Add` trait 时不指定 `Rhs` 的具体类型，`Rhs` 的类型将是默认的 `Self` 类型，也就是在其上实现 `Add` 的类型。

当为 `Point` 实现 `Add` 时，使用了默认的 `Rhs`，因为我们希望将两个 `Point` 实例相加。让我们看看一个实现 `Add` trait 时希望自定义 `Rhs` 类型而不是使用默认类型的例子。

这里有两个存放不同单元值的结构体，`Millimeters` 和 `Meters`。（这种将现有类型简单封装进另一个结构体的方式被称为 **newtype 模式**（*newtype pattern*，之后的 [“为了类型安全和抽象而使用 newtype 模式”][newtype] 部分会详细介绍。）我们希望能够将毫米值与米值相加，并让 `Add` 的实现正确处理转换。可以为 `Millimeters` 实现 `Add` 并以 `Meters` 作为 `Rhs`，如示例 19-15 所示。

<span class="filename">文件名: src/lib.rs</span>

<<< @/listings/ch19-advanced-features/listing-19-15/src/lib.rs

<span class="caption">示例 19-15: 在 `Millimeters` 上实现 `Add`，以便能够将 `Millimeters` 与 `Meters` 相加</span>

为了使 `Millimeters` 和 `Meters` 能够相加，我们指定 `impl Add<Meters>` 来设定 `Rhs` 类型参数的值而不是使用默认的 `Self`。

默认参数类型主要用于如下两个方面：

* 扩展类型而不破坏现有代码。
* 在大部分用户都不需要的特定情况进行自定义。

标准库的 `Add` trait 就是一个第二个目的例子：大部分时候你会将两个相似的类型相加，不过它提供了自定义额外行为的能力。在 `Add` trait 定义中使用默认类型参数意味着大部分时候无需指定额外的参数。换句话说，一小部分实现的样板代码是不必要的，这样使用 trait 就更容易了。

第一个目的是相似的，但过程是反过来的：如果需要为现有 trait 增加类型参数，为其提供一个默认类型将允许我们在不破坏现有实现代码的基础上扩展 trait 的功能。

## 完全限定语法与消歧义：调用相同名称的方法

Rust 既不能避免一个 trait 与另一个 trait 拥有相同名称的方法，也不能阻止为同一类型同时实现这两个 trait。甚至直接在类型上实现开始已经有的同名方法也是可能的！

不过，当调用这些同名方法时，需要告诉 Rust 我们希望使用哪一个。考虑一下示例 19-16 中的代码，这里定义了 trait `Pilot` 和 `Wizard` 都拥有方法 `fly`。接着在一个本身已经实现了名为 `fly` 方法的类型 `Human` 上实现这两个 trait。每一个 `fly` 方法都进行了不同的操作：

<span class="filename">文件名: src/main.rs</span>

<<< @/listings/ch19-advanced-features/listing-19-16/src/main.rs

<span class="caption">示例 19-16: 两个 trait 定义为拥有 `fly` 方法，并在直接定义有 `fly` 方法的 `Human` 类型上实现这两个 trait</span>

当调用 `Human` 实例的 `fly` 时，编译器默认调用直接实现在类型上的方法，如示例 19-17 所示。

<span class="filename">文件名: src/main.rs</span>

<<< @/listings/ch19-advanced-features/listing-19-17/src/main.rs

<span class="caption">示例 19-17: 调用 `Human` 实例的 `fly`</span>

运行这段代码会打印出 `*waving arms furiously*`，这表明 Rust 调用了直接实现在 `Human` 上的 `fly` 方法。

为了能够调用 `Pilot` trait 或 `Wizard` trait 的 `fly` 方法，我们需要使用更明显的语法以便能指定我们指的是哪个 `fly` 方法。这个语法展示在示例 19-18 中：

<span class="filename">文件名: src/main.rs</span>

<<< @/listings/ch19-advanced-features/listing-19-18/src/main.rs

<span class="caption">示例 19-18: 指定我们希望调用哪一个 trait 的 `fly` 方法</span>

在方法名前指定 trait 名向 Rust 澄清了我们希望调用哪个 `fly` 实现。也可以选择写成 `Human::fly(&person)`，这等同于示例 19-18 中的 `person.fly()`，不过如果无需消歧义的话这么写就有点长了。

运行这段代码会打印出：

<<< @/listings/ch19-advanced-features/listing-19-18/output.txt

因为 `fly` 方法获取一个 `self` 参数，如果有两个 **类型** 都实现了同一 **trait**，Rust 可以根据 `self` 的类型计算出应该使用哪一个 trait 实现。

然而，关联函数是 trait 的一部分，但没有 `self` 参数。当同一作用域的两个类型实现了同一 trait，Rust 就不能计算出我们期望的是哪一个类型，除非使用 **完全限定语法**（*fully qualified syntax*）。例如，拿示例 19-19 中的 `Animal` trait 来说，它有关联函数 `baby_name`，结构体 `Dog` 实现了 `Animal`，同时有关联函数 `baby_name` 直接定义于 `Dog` 之上：

<span class="filename">文件名: src/main.rs</span>

<<< @/listings/ch19-advanced-features/listing-19-19/src/main.rs

<span class="caption">示例 19-19: 一个带有关联函数的 trait 和一个带有同名关联函数并实现了此 trait 的类型</span>

这段代码用于一个动物收容所，他们将所有的小狗起名为 Spot，这实现为定义于 `Dog` 之上的关联函数 `baby_name`。`Dog` 类型还实现了 `Animal` trait，它描述了所有动物的共有的特征。小狗被称为 puppy，这表现为 `Dog` 的 `Animal` trait 实现中与 `Animal` trait 相关联的函数 `baby_name`。

在 `main` 调用了 `Dog::baby_name` 函数，它直接调用了定义于 `Dog` 之上的关联函数。这段代码会打印出：

<<< @/listings/ch19-advanced-features/listing-19-19/output.txt

这并不是我们需要的。我们希望调用的是 `Dog` 上 `Animal` trait 实现那部分的 `baby_name` 函数，这样能够打印出 `A baby dog is called a puppy`。示例 19-18 中用到的技术在这并不管用；如果将 `main` 改为示例 19-20 中的代码，则会得到一个编译错误：

<span class="filename">文件名: src/main.rs</span>

<<< @/listings/ch19-advanced-features/listing-19-20/src/main.rs

<span class="caption">示例 19-20: 尝试调用 `Animal` trait 的 `baby_name` 函数，不过 Rust 并不知道该使用哪一个实现</span>

因为 `Animal::baby_name` 是关联函数而不是方法，因此它没有 `self` 参数，Rust 无法计算出所需的是哪一个 `Animal::baby_name` 实现。我们会得到这个编译错误：

<<< @/listings/ch19-advanced-features/listing-19-20/output.txt

为了消歧义并告诉 Rust 我们希望使用的是 `Dog` 的 `Animal` 实现，需要使用 **完全限定语法**，这是调用函数时最为明确的方式。示例 19-21 展示了如何使用完全限定语法：

<span class="filename">文件名: src/main.rs</span>

<<< @/listings/ch19-advanced-features/listing-19-21/src/main.rs

<span class="caption">示例 19-21: 使用完全限定语法来指定我们希望调用的是 `Dog` 上 `Animal` trait 实现中的 `baby_name` 函数</span>

我们在尖括号中向 Rust 提供了类型注解，并通过在此函数调用中将 `Dog` 类型当作 `Animal` 对待，来指定希望调用的是 `Dog` 上 `Animal` trait 实现中的 `baby_name` 函数。现在这段代码会打印出我们期望的数据：

<<< @/listings/ch19-advanced-features/listing-19-21/output.txt

通常，完全限定语法定义为：

```
<Type as Trait>::function(receiver_if_method, next_arg, ...);
```

对于关联函数，其没有一个 `receiver`，故只会有其他参数的列表。可以选择在任何函数或方法调用处使用完全限定语法。然而，允许省略任何 Rust 能够从程序中的其他信息中计算出的部分。只有当存在多个同名实现而 Rust 需要帮助以便知道我们希望调用哪个实现时，才需要使用这个较为冗长的语法。

## 父 trait 用于在另一个 trait 中使用某 trait 的功能

有时我们可能会需要某个 trait 使用另一个 trait 的功能。在这种情况下，需要能够依赖相关的 trait 也被实现。这个所需的 trait 是我们实现的 trait 的 **父（超） trait**（*supertrait*）。

例如我们希望创建一个带有 `outline_print` 方法的 trait `OutlinePrint`，它会打印出带有星号框的值。也就是说，如果 `Point` 实现了 `Display` 并返回 `(x, y)`，调用以 `1` 作为 `x` 和 `3` 作为 `y` 的 `Point` 实例的 `outline_print` 会显示如下：

```text
**********
*        *
* (1, 3) *
*        *
**********
```

在 `outline_print` 的实现中，因为希望能够使用 `Display` trait 的功能，则需要说明 `OutlinePrint` 只能用于同时也实现了 `Display` 并提供了 `OutlinePrint` 需要的功能的类型。可以通过在 trait 定义中指定 `OutlinePrint: Display` 来做到这一点。这类似于为 trait 增加 trait bound。示例 19-22 展示了一个 `OutlinePrint` trait 的实现：

<span class="filename">文件名: src/main.rs</span>

<<< @/listings/ch19-advanced-features/listing-19-22/src/main.rs

<span class="caption">示例 19-22: 实现 `OutlinePrint` trait，它要求来自 `Display` 的功能</span>

因为指定了 `OutlinePrint` 需要 `Display` trait，则可以在 `outline_print` 中使用 `to_string`， 其会为任何实现 `Display` 的类型自动实现。如果不在 trait 名后增加 `: Display` 并尝试在 `outline_print` 中使用 `to_string`，则会得到一个错误说在当前作用域中没有找到用于 `&Self` 类型的方法 `to_string`。

让我们看看如果尝试在一个没有实现 `Display` 的类型上实现 `OutlinePrint` 会发生什么，比如 `Point` 结构体：

<span class="filename">文件名: src/main.rs</span>

<<< @/listings/ch19-advanced-features/no-listing-02-impl-outlineprint-for-point/src/main.rs

这样会得到一个错误说 `Display` 是必须的而未被实现：

<<< @/listings/ch19-advanced-features/no-listing-02-impl-outlineprint-for-point/output.txt

一旦在 `Point` 上实现 `Display` 并满足 `OutlinePrint` 要求的限制，比如这样：

<span class="filename">文件名: src/main.rs</span>

<<< @/listings/ch19-advanced-features/no-listing-03-impl-display-for-point/src/main.rs

那么在 `Point` 上实现 `OutlinePrint` trait 将能成功编译，并可以在 `Point` 实例上调用 `outline_print` 来显示位于星号框中的点的值。

## newtype 模式用以在外部类型上实现外部 trait

在第十章的 [“为类型实现 trait”][implementing-a-trait-on-a-type] 部分，我们提到了孤儿规则（orphan rule），它说明只要 trait 或类型对于当前 crate 是本地的话就可以在此类型上实现该 trait。一个绕开这个限制的方法是使用 **newtype 模式**（*newtype pattern*），它涉及到在一个元组结构体（第五章 [“用没有命名字段的元组结构体来创建不同的类型”][tuple-structs] 部分介绍了元组结构体）中创建一个新类型。这个元组结构体带有一个字段作为希望实现 trait 的类型的简单封装。接着这个封装类型对于 crate 是本地的，这样就可以在这个封装上实现 trait。*Newtype* 是一个源自 ~~（U.C.0079，逃）~~ Haskell 编程语言的概念。使用这个模式没有运行时性能惩罚，这个封装类型在编译时就被省略了。

例如，如果想要在 `Vec<T>` 上实现 `Display`，而孤儿规则阻止我们直接这么做，因为 `Display` trait 和 `Vec<T>` 都定义于我们的 crate 之外。可以创建一个包含 `Vec<T>` 实例的 `Wrapper` 结构体，接着可以如列表 19-23 那样在 `Wrapper` 上实现 `Display` 并使用 `Vec<T>` 的值：

<span class="filename">文件名: src/main.rs</span>

<<< @/listings/ch19-advanced-features/listing-19-23/src/main.rs

<span class="caption">示例 19-23: 创建 `Wrapper` 类型封装 `Vec<String>` 以便能够实现 `Display`</span>

`Display` 的实现使用 `self.0` 来访问其内部的 `Vec<T>`，因为 `Wrapper` 是元组结构体而 `Vec<T>` 是结构体总位于索引 0 的项。接着就可以使用 `Wrapper` 中 `Display` 的功能了。

此方法的缺点是，因为 `Wrapper` 是一个新类型，它没有定义于其值之上的方法；必须直接在 `Wrapper` 上实现 `Vec<T>` 的所有方法，这样就可以代理到`self.0` 上 —— 这就允许我们完全像 `Vec<T>` 那样对待 `Wrapper`。如果希望新类型拥有其内部类型的每一个方法，为封装类型实现 `Deref` trait（第十五章 [“通过 `Deref` trait 将智能指针当作常规引用处理”][smart-pointer-deref] 部分讨论过）并返回其内部类型是一种解决方案。如果不希望封装类型拥有所有内部类型的方法 —— 比如为了限制封装类型的行为 —— 则必须只自行实现所需的方法。

上面便是 newtype 模式如何与 trait 结合使用的；还有一个不涉及 trait 的实用模式。现在让我们将话题的焦点转移到一些与 Rust 类型系统交互的高级方法上来吧。

[newtype]: ch19-03-advanced-types.html#为了类型安全和抽象而使用-newtype-模式
[implementing-a-trait-on-a-type]: ch10-02-traits.html#为类型实现-trait
[the-iterator-trait-and-the-next-method]: ch13-02-iterators.html#iterator-trait-和-next-方法
[traits-defining-shared-behavior]: ch10-02-traits.html#trait定义共享的行为
[smart-pointer-deref]: ch15-02-deref.html#通过实现-deref-trait-将某类型像引用一样处理
[tuple-structs]: ch05-01-defining-structs.html#使用没有命名字段的元组结构体来创建不同的类型
