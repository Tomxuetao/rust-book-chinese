import{_ as s,c as a,o as n,d as e}from"./app.a07ec8df.js";const D=JSON.parse('{"title":"Cargo \u5DE5\u4F5C\u7A7A\u95F4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u5DE5\u4F5C\u7A7A\u95F4","slug":"\u521B\u5EFA\u5DE5\u4F5C\u7A7A\u95F4","link":"#\u521B\u5EFA\u5DE5\u4F5C\u7A7A\u95F4","children":[]},{"level":2,"title":"\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u521B\u5EFA\u7B2C\u4E8C\u4E2A\u5305","slug":"\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u521B\u5EFA\u7B2C\u4E8C\u4E2A\u5305","link":"#\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u521B\u5EFA\u7B2C\u4E8C\u4E2A\u5305","children":[]}],"relativePath":"ch14-03-cargo-workspaces.md","lastUpdated":1669168124000}'),p={name:"ch14-03-cargo-workspaces.md"},l=e(`<h1 id="cargo-\u5DE5\u4F5C\u7A7A\u95F4" tabindex="-1">Cargo \u5DE5\u4F5C\u7A7A\u95F4 <a class="header-anchor" href="#cargo-\u5DE5\u4F5C\u7A7A\u95F4" aria-hidden="true">#</a></h1><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/ch14-03-cargo-workspaces.md" target="_blank" rel="noreferrer">ch14-03-cargo-workspaces.md</a><br> commit 7ddc28cfe0bfa6c531a6475c7fa41dfa66e8943c</p></blockquote><p>\u7B2C\u5341\u4E8C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u6784\u5EFA\u4E00\u4E2A\u5305\u542B\u4E8C\u8FDB\u5236 crate \u548C\u5E93 crate \u7684\u5305\u3002\u4F60\u53EF\u80FD\u4F1A\u53D1\u73B0\uFF0C\u968F\u7740\u9879\u76EE\u5F00\u53D1\u7684\u6DF1\u5165\uFF0C\u5E93 crate \u6301\u7EED\u589E\u5927\uFF0C\u800C\u4F60\u5E0C\u671B\u5C06\u5176\u8FDB\u4E00\u6B65\u62C6\u5206\u6210\u591A\u4E2A\u5E93 crate\u3002\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\uFF0CCargo \u63D0\u4F9B\u4E86\u4E00\u4E2A\u53EB <strong>\u5DE5\u4F5C\u7A7A\u95F4</strong>\uFF08<em>workspaces</em>\uFF09\u7684\u529F\u80FD\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u7BA1\u7406\u591A\u4E2A\u76F8\u5173\u7684\u534F\u540C\u5F00\u53D1\u7684\u5305\u3002</p><h2 id="\u521B\u5EFA\u5DE5\u4F5C\u7A7A\u95F4" tabindex="-1">\u521B\u5EFA\u5DE5\u4F5C\u7A7A\u95F4 <a class="header-anchor" href="#\u521B\u5EFA\u5DE5\u4F5C\u7A7A\u95F4" aria-hidden="true">#</a></h2><p><strong>\u5DE5\u4F5C\u7A7A\u95F4</strong> \u662F\u4E00\u7CFB\u5217\u5171\u4EAB\u540C\u6837\u7684 <em>Cargo.lock</em> \u548C\u8F93\u51FA\u76EE\u5F55\u7684\u5305\u3002\u8BA9\u6211\u4EEC\u4F7F\u7528\u5DE5\u4F5C\u7A7A\u95F4\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE \u2014\u2014 \u8FD9\u91CC\u91C7\u7528\u5E38\u89C1\u7684\u4EE3\u7801\u4EE5\u4FBF\u53EF\u4EE5\u5173\u6CE8\u5DE5\u4F5C\u7A7A\u95F4\u7684\u7ED3\u6784\u3002\u6709\u591A\u79CD\u7EC4\u7EC7\u5DE5\u4F5C\u7A7A\u95F4\u7684\u65B9\u5F0F\uFF1B\u6211\u4EEC\u5C06\u5C55\u793A\u4E00\u4E2A\u5E38\u7528\u65B9\u6CD5\u3002\u6211\u4EEC\u7684\u5DE5\u4F5C\u7A7A\u95F4\u6709\u4E00\u4E2A\u4E8C\u8FDB\u5236\u9879\u76EE\u548C\u4E24\u4E2A\u5E93\u3002\u4E8C\u8FDB\u5236\u9879\u76EE\u4F1A\u63D0\u4F9B\u4E3B\u8981\u529F\u80FD\uFF0C\u5E76\u4F1A\u4F9D\u8D56\u53E6\u4E24\u4E2A\u5E93\u3002\u4E00\u4E2A\u5E93\u4F1A\u63D0\u4F9B <code>add_one</code> \u65B9\u6CD5\u800C\u7B2C\u4E8C\u4E2A\u4F1A\u63D0\u4F9B <code>add_two</code> \u65B9\u6CD5\u3002\u8FD9\u4E09\u4E2A crate \u5C06\u4F1A\u662F\u76F8\u540C\u5DE5\u4F5C\u7A7A\u95F4\u7684\u4E00\u90E8\u5206\u3002\u8BA9\u6211\u4EEC\u4EE5\u65B0\u5EFA\u5DE5\u4F5C\u7A7A\u95F4\u76EE\u5F55\u5F00\u59CB\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ mkdir add</span></span>
<span class="line"><span style="color:#A6ACCD;">$ cd add</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u7740\u5728 <em>add</em> \u76EE\u5F55\u4E2D\uFF0C\u521B\u5EFA <em>Cargo.toml</em> \u6587\u4EF6\u3002\u8FD9\u4E2A <em>Cargo.toml</em> \u6587\u4EF6\u914D\u7F6E\u4E86\u6574\u4E2A\u5DE5\u4F5C\u7A7A\u95F4\u3002\u5B83\u4E0D\u4F1A\u5305\u542B <code>[package]</code> \u6216\u5176\u4ED6\u6211\u4EEC\u5728 <em>Cargo.toml</em> \u4E2D\u89C1\u8FC7\u7684\u5143\u4FE1\u606F\u3002\u76F8\u53CD\uFF0C\u5B83\u4EE5 <code>[workspace]</code> \u90E8\u5206\u4F5C\u4E3A\u5F00\u59CB\uFF0C\u5E76\u901A\u8FC7\u6307\u5B9A <em>adder</em> \u7684\u8DEF\u5F84\u6765\u4E3A\u5DE5\u4F5C\u7A7A\u95F4\u589E\u52A0\u6210\u5458\uFF0C\u5982\u4E0B\u4F1A\u52A0\u5165\u4E8C\u8FDB\u5236 crate\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: Cargo.toml</span></p><div class="language-toml"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">workspace</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">members </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">adder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>\u63A5\u4E0B\u6765\uFF0C\u5728 <em>add</em> \u76EE\u5F55\u8FD0\u884C <code>cargo new</code> \u65B0\u5EFA <code>adder</code> \u4E8C\u8FDB\u5236 crate\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo new adder</span></span>
<span class="line"><span style="color:#A6ACCD;">     Created binary (application) \`adder\` package</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5230\u6B64\u4E3A\u6B62\uFF0C\u53EF\u4EE5\u8FD0\u884C <code>cargo build</code> \u6765\u6784\u5EFA\u5DE5\u4F5C\u7A7A\u95F4\u3002<em>add</em> \u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u5E94\u8BE5\u770B\u8D77\u6765\u50CF\u8FD9\u6837\uFF1A</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 Cargo.lock</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 Cargo.toml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 adder</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 Cargo.toml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502       \u2514\u2500\u2500 main.rs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 target</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5DE5\u4F5C\u7A7A\u95F4\u5728\u9876\u7EA7\u76EE\u5F55\u6709\u4E00\u4E2A <em>target</em> \u76EE\u5F55\uFF1B<code>adder</code> \u5E76\u6CA1\u6709\u81EA\u5DF1\u7684 <em>target</em> \u76EE\u5F55\u3002\u5373\u4F7F\u8FDB\u5165 <em>adder</em> \u76EE\u5F55\u8FD0\u884C <code>cargo build</code>\uFF0C\u6784\u5EFA\u7ED3\u679C\u4E5F\u4F4D\u4E8E <em>add/target</em> \u800C\u4E0D\u662F <em>add/adder/target</em>\u3002\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u7684 crate \u4E4B\u95F4\u76F8\u4E92\u4F9D\u8D56\u3002\u5982\u679C\u6BCF\u4E2A crate \u6709\u5176\u81EA\u5DF1\u7684 <em>target</em> \u76EE\u5F55\uFF0C\u4E3A\u4E86\u5728\u81EA\u5DF1\u7684 <em>target</em> \u76EE\u5F55\u4E2D\u751F\u6210\u6784\u5EFA\u7ED3\u679C\uFF0C\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u7684\u6BCF\u4E00\u4E2A crate \u90FD\u4E0D\u5F97\u4E0D\u76F8\u4E92\u91CD\u65B0\u7F16\u8BD1\u5176\u4ED6 crate\u3002\u901A\u8FC7\u5171\u4EAB\u4E00\u4E2A <em>target</em> \u76EE\u5F55\uFF0C\u5DE5\u4F5C\u7A7A\u95F4\u53EF\u4EE5\u907F\u514D\u5176\u4ED6 crate \u591A\u4F59\u7684\u91CD\u590D\u6784\u5EFA\u3002</p><h2 id="\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u521B\u5EFA\u7B2C\u4E8C\u4E2A\u5305" tabindex="-1">\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u521B\u5EFA\u7B2C\u4E8C\u4E2A\u5305 <a class="header-anchor" href="#\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u521B\u5EFA\u7B2C\u4E8C\u4E2A\u5305" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u6307\u5B9A\u53E6\u4E00\u4E2A\u6210\u5458 crate\u3002\u8FD9\u4E2A crate \u4F4D\u4E8E <em>add_one</em> \u76EE\u5F55\u4E2D\uFF0C\u6240\u4EE5\u4FEE\u6539\u9876\u7EA7 <em>Cargo.toml</em> \u4E3A\u4E5F\u5305\u542B <em>add_one</em> \u8DEF\u5F84\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: Cargo.toml</span></p><div class="language-toml"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">workspace</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">members </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">adder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">add_one</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>\u63A5\u7740\u65B0\u751F\u6210\u4E00\u4E2A\u53EB\u505A <code>add_one</code> \u7684\u5E93\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo new add_one --lib</span></span>
<span class="line"><span style="color:#A6ACCD;">     Created library \`add_one\` package</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u73B0\u5728 <em>add</em> \u76EE\u5F55\u5E94\u8BE5\u6709\u5982\u4E0B\u76EE\u5F55\u548C\u6587\u4EF6\uFF1A</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 Cargo.lock</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 Cargo.toml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 add_one</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 Cargo.toml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502       \u2514\u2500\u2500 lib.rs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 adder</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 Cargo.toml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502       \u2514\u2500\u2500 main.rs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 target</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 <em>add_one/src/lib.rs</em> \u6587\u4EF6\u4E2D\uFF0C\u589E\u52A0\u4E00\u4E2A <code>add_one</code> \u51FD\u6570\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: add_one/src/lib.rs</span></p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add_one</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u73B0\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u6709\u4E86\u4E00\u4E2A\u5E93 crate\uFF0C\u8BA9 <code>adder</code> \u4F9D\u8D56\u5E93 crate <code>add_one</code>\u3002\u9996\u5148\u9700\u8981\u5728 <em>adder/Cargo.toml</em> \u6587\u4EF6\u4E2D\u589E\u52A0 <code>add_one</code> \u4F5C\u4E3A\u8DEF\u5F84\u4F9D\u8D56\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: adder/Cargo.toml</span></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Invalid code snippet option</span></span></code></pre></div><p>cargo\u5E76\u4E0D\u5047\u5B9A\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u7684Crates\u4F1A\u76F8\u4E92\u4F9D\u8D56\uFF0C\u6240\u4EE5\u9700\u8981\u660E\u786E\u8868\u660E\u5DE5\u4F5C\u7A7A\u95F4\u4E2D crate \u7684\u4F9D\u8D56\u5173\u7CFB\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u5728 <code>adder</code> crate \u4E2D\u4F7F\u7528 <code>add_one</code> crate \u7684\u51FD\u6570 <code>add_one</code>\u3002\u6253\u5F00 <em>adder/src/main.rs</em> \u5728\u9876\u90E8\u589E\u52A0\u4E00\u884C <code>use</code> \u5C06\u65B0 <code>add_one</code> \u5E93 crate \u5F15\u5165\u4F5C\u7528\u57DF\u3002\u63A5\u7740\u4FEE\u6539 <code>main</code> \u51FD\u6570\u6765\u8C03\u7528 <code>add_one</code> \u51FD\u6570\uFF0C\u5982\u793A\u4F8B 14-7 \u6240\u793A\u3002</p><p><span class="filename">\u6587\u4EF6\u540D: adder/src/main.rs</span></p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> add_one</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, world! </span><span style="color:#89DDFF;">{}</span><span style="color:#C3E88D;"> plus one is </span><span style="color:#89DDFF;">{}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        num</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">add_one</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">add_one</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><span class="caption">\u793A\u4F8B 14-7\uFF1A\u5728 <code>adder</code> crate \u4E2D\u4F7F\u7528 <code>add_one</code> \u5E93 crate</span></p><p>\u5728 <em>add</em> \u76EE\u5F55\u4E2D\u8FD0\u884C <code>cargo build</code> \u6765\u6784\u5EFA\u5DE5\u4F5C\u7A7A\u95F4\uFF01</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo build</span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling add_one v0.1.0 (file:///projects/add/add_one)</span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling adder v0.1.0 (file:///projects/add/adder)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Finished dev [unoptimized + debuginfo] target(s) in 0.68s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3A\u4E86\u5728\u9876\u5C42 <em>add</em> \u76EE\u5F55\u8FD0\u884C\u4E8C\u8FDB\u5236 crate\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>-p</code> \u53C2\u6570\u548C\u5305\u540D\u79F0\u6765\u8FD0\u884C <code>cargo run</code> \u6307\u5B9A\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u6211\u4EEC\u5E0C\u671B\u4F7F\u7528\u7684\u5305\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo run -p adder</span></span>
<span class="line"><span style="color:#A6ACCD;">    Finished dev [unoptimized + debuginfo] target(s) in 0.0s</span></span>
<span class="line"><span style="color:#A6ACCD;">     Running \`target/debug/adder\`</span></span>
<span class="line"><span style="color:#A6ACCD;">Hello, world! 10 plus one is 11!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4F1A\u8FD0\u884C <em>adder/src/main.rs</em> \u4E2D\u7684\u4EE3\u7801\uFF0C\u5176\u4F9D\u8D56 <code>add_one</code> crate</p><h4 id="\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u4F9D\u8D56\u5916\u90E8\u5305" tabindex="-1">\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u4F9D\u8D56\u5916\u90E8\u5305 <a class="header-anchor" href="#\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u4F9D\u8D56\u5916\u90E8\u5305" aria-hidden="true">#</a></h4><p>\u8FD8\u9700\u6CE8\u610F\u7684\u662F\u5DE5\u4F5C\u7A7A\u95F4\u53EA\u5728\u6839\u76EE\u5F55\u6709\u4E00\u4E2A <em>Cargo.lock</em>\uFF0C\u800C\u4E0D\u662F\u5728\u6BCF\u4E00\u4E2A crate \u76EE\u5F55\u90FD\u6709 <em>Cargo.lock</em>\u3002\u8FD9\u786E\u4FDD\u4E86\u6240\u6709\u7684 crate \u90FD\u4F7F\u7528\u5B8C\u5168\u76F8\u540C\u7248\u672C\u7684\u4F9D\u8D56\u3002\u5982\u679C\u5728 <em>Cargo.toml</em> \u548C <em>add_one/Cargo.toml</em> \u4E2D\u90FD\u589E\u52A0 <code>rand</code> crate\uFF0C\u5219 Cargo \u4F1A\u5C06\u5176\u90FD\u89E3\u6790\u4E3A\u540C\u4E00\u7248\u672C\u5E76\u8BB0\u5F55\u5230\u552F\u4E00\u7684 <em>Cargo.lock</em> \u4E2D\u3002\u4F7F\u5F97\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u7684\u6240\u6709 crate \u90FD\u4F7F\u7528\u76F8\u540C\u7684\u4F9D\u8D56\u610F\u5473\u7740\u5176\u4E2D\u7684 crate \u90FD\u662F\u76F8\u4E92\u517C\u5BB9\u7684\u3002\u8BA9\u6211\u4EEC\u5728 <em>add_one/Cargo.toml</em> \u4E2D\u7684 <code>[dependencies]</code> \u90E8\u5206\u589E\u52A0 <code>rand</code> crate \u4EE5\u4FBF\u80FD\u591F\u5728 <code>add_one</code> crate \u4E2D\u4F7F\u7528 <code>rand</code> crate\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: add_one/Cargo.toml</span></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Invalid code snippet option</span></span></code></pre></div><p>\u73B0\u5728\u5C31\u53EF\u4EE5\u5728 <em>add_one/src/lib.rs</em> \u4E2D\u589E\u52A0 <code>use rand;</code> \u4E86\uFF0C\u63A5\u7740\u5728 <em>add</em> \u76EE\u5F55\u8FD0\u884C <code>cargo build</code> \u6784\u5EFA\u6574\u4E2A\u5DE5\u4F5C\u7A7A\u95F4\u5C31\u4F1A\u5F15\u5165\u5E76\u7F16\u8BD1 <code>rand</code> crate\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo build</span></span>
<span class="line"><span style="color:#A6ACCD;">    Updating crates.io index</span></span>
<span class="line"><span style="color:#A6ACCD;">  Downloaded rand v0.8.3</span></span>
<span class="line"><span style="color:#A6ACCD;">   --snip--</span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling rand v0.8.3</span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling add_one v0.1.0 (file:///projects/add/add_one)</span></span>
<span class="line"><span style="color:#A6ACCD;">warning: unused import: \`rand\`</span></span>
<span class="line"><span style="color:#A6ACCD;"> --&gt; add_one/src/lib.rs:1:5</span></span>
<span class="line"><span style="color:#A6ACCD;">  |</span></span>
<span class="line"><span style="color:#A6ACCD;">1 | use rand;</span></span>
<span class="line"><span style="color:#A6ACCD;">  |     ^^^^</span></span>
<span class="line"><span style="color:#A6ACCD;">  |</span></span>
<span class="line"><span style="color:#A6ACCD;">  = note: \`#[warn(unused_imports)]\` on by default</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">warning: 1 warning emitted</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling adder v0.1.0 (file:///projects/add/adder)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Finished dev [unoptimized + debuginfo] target(s) in 10.18s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u73B0\u5728\u9876\u7EA7\u7684 <em>Cargo.lock</em> \u5305\u542B\u4E86 <code>add_one</code> \u7684 <code>rand</code> \u4F9D\u8D56\u7684\u4FE1\u606F\u3002\u7136\u800C\uFF0C\u5373\u4F7F <code>rand</code> \u88AB\u7528\u4E8E\u5DE5\u4F5C\u7A7A\u95F4\u7684\u67D0\u5904\uFF0C\u4E5F\u4E0D\u80FD\u5728\u5176\u4ED6 crate \u4E2D\u4F7F\u7528\u5B83\uFF0C\u9664\u975E\u4E5F\u5728\u4ED6\u4EEC\u7684 <em>Cargo.toml</em> \u4E2D\u52A0\u5165 <code>rand</code>\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u5728\u9876\u7EA7\u7684 <code>adder</code> crate \u7684 <em>adder/src/main.rs</em> \u4E2D\u589E\u52A0 <code>use rand;</code>\uFF0C\u4F1A\u5F97\u5230\u4E00\u4E2A\u9519\u8BEF\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo build</span></span>
<span class="line"><span style="color:#A6ACCD;">  --snip--</span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling adder v0.1.0 (file:///projects/add/adder)</span></span>
<span class="line"><span style="color:#A6ACCD;">error[E0432]: unresolved import \`rand\`</span></span>
<span class="line"><span style="color:#A6ACCD;"> --&gt; adder/src/main.rs:2:5</span></span>
<span class="line"><span style="color:#A6ACCD;">  |</span></span>
<span class="line"><span style="color:#A6ACCD;">2 | use rand;</span></span>
<span class="line"><span style="color:#A6ACCD;">  |     ^^^^ no external crate \`rand\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3A\u4E86\u4FEE\u590D\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u4FEE\u6539\u9876\u7EA7 <code>adder</code> crate \u7684 <em>Cargo.toml</em> \u6765\u8868\u660E <code>rand</code> \u4E5F\u662F\u8FD9\u4E2A crate \u7684\u4F9D\u8D56\u3002\u6784\u5EFA <code>adder</code> crate \u4F1A\u5C06 <code>rand</code> \u52A0\u5165\u5230 <em>Cargo.lock</em> \u4E2D <code>adder</code> \u7684\u4F9D\u8D56\u5217\u8868\u4E2D\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u4F1A\u4E0B\u8F7D <code>rand</code> \u7684\u989D\u5916\u62F7\u8D1D\u3002Cargo \u786E\u4FDD\u4E86\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u4EFB\u4F55\u4F7F\u7528 <code>rand</code> \u7684 crate \u90FD\u91C7\u7528\u76F8\u540C\u7684\u7248\u672C\u3002\u5728\u6574\u4E2A\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u4F7F\u7528\u76F8\u540C\u7248\u672C\u7684 <code>rand</code> \u8282\u7701\u4E86\u7A7A\u95F4\uFF0C\u56E0\u4E3A\u8FD9\u6837\u5C31\u65E0\u9700\u591A\u4E2A\u62F7\u8D1D\u5E76\u786E\u4FDD\u4E86\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u7684 crate \u5C06\u662F\u76F8\u4E92\u517C\u5BB9\u7684\u3002</p><h4 id="\u4E3A\u5DE5\u4F5C\u7A7A\u95F4\u589E\u52A0\u6D4B\u8BD5" tabindex="-1">\u4E3A\u5DE5\u4F5C\u7A7A\u95F4\u589E\u52A0\u6D4B\u8BD5 <a class="header-anchor" href="#\u4E3A\u5DE5\u4F5C\u7A7A\u95F4\u589E\u52A0\u6D4B\u8BD5" aria-hidden="true">#</a></h4><p>\u4F5C\u4E3A\u53E6\u4E00\u4E2A\u63D0\u5347\uFF0C\u8BA9\u6211\u4EEC\u4E3A <code>add_one</code> crate \u4E2D\u7684 <code>add_one::add_one</code> \u51FD\u6570\u589E\u52A0\u4E00\u4E2A\u6D4B\u8BD5\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: add_one/src/lib.rs</span></p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add_one</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">cfg</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#C792EA;">mod</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">tests</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">super</span><span style="color:#89DDFF;">::*;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">it_works</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add_one</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u9876\u7EA7 <em>add</em> \u76EE\u5F55\u8FD0\u884C <code>cargo test</code>\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo test</span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling add_one v0.1.0 (file:///projects/add/add_one)</span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling adder v0.1.0 (file:///projects/add/adder)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Finished test [unoptimized + debuginfo] target(s) in 0.27s</span></span>
<span class="line"><span style="color:#A6ACCD;">     Running target/debug/deps/add_one-f0253159197f7841</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">running 1 test</span></span>
<span class="line"><span style="color:#A6ACCD;">test tests::it_works ... ok</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     Running target/debug/deps/adder-49979ff40686fa8e</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">running 0 tests</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   Doc-tests add_one</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">running 0 tests</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8F93\u51FA\u7684\u7B2C\u4E00\u90E8\u5206\u663E\u793A <code>add_one</code> crate \u7684 <code>it_works</code> \u6D4B\u8BD5\u901A\u8FC7\u4E86\u3002\u4E0B\u4E00\u4E2A\u90E8\u5206\u663E\u793A <code>adder</code> crate \u4E2D\u627E\u5230\u4E86 0 \u4E2A\u6D4B\u8BD5\uFF0C\u6700\u540E\u4E00\u90E8\u5206\u663E\u793A <code>add_one</code> crate \u4E2D\u6709 0 \u4E2A\u6587\u6863\u6D4B\u8BD5\u3002\u5728\u50CF\u8FD9\u6837\u7684\u5DE5\u4F5C\u7A7A\u95F4\u7ED3\u6784\u4E2D\u8FD0\u884C <code>cargo test</code> \u4F1A\u8FD0\u884C\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u6240\u6709 crate \u7684\u6D4B\u8BD5\u3002</p><p>\u4E5F\u53EF\u4EE5\u9009\u62E9\u8FD0\u884C\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u7279\u5B9A crate \u7684\u6D4B\u8BD5\uFF0C\u901A\u8FC7\u5728\u6839\u76EE\u5F55\u4F7F\u7528 <code>-p</code> \u53C2\u6570\u5E76\u6307\u5B9A\u5E0C\u671B\u6D4B\u8BD5\u7684 crate \u540D\u79F0\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo test -p add_one</span></span>
<span class="line"><span style="color:#A6ACCD;">    Finished test [unoptimized + debuginfo] target(s) in 0.00s</span></span>
<span class="line"><span style="color:#A6ACCD;">     Running target/debug/deps/add_one-b3235fea9a156f74</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">running 1 test</span></span>
<span class="line"><span style="color:#A6ACCD;">test tests::it_works ... ok</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   Doc-tests add_one</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">running 0 tests</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8F93\u51FA\u663E\u793A\u4E86 <code>cargo test</code> \u53EA\u8FD0\u884C\u4E86 <code>add_one</code> crate \u7684\u6D4B\u8BD5\u800C\u6CA1\u6709\u8FD0\u884C <code>adder</code> crate \u7684\u6D4B\u8BD5\u3002</p><p>\u5982\u679C\u4F60\u9009\u62E9\u5411 <a href="https://crates.io/" target="_blank" rel="noreferrer">crates.io</a>\u53D1\u5E03\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u7684 crate\uFF0C\u6BCF\u4E00\u4E2A\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u7684 crate \u9700\u8981\u5355\u72EC\u53D1\u5E03\u3002<code>cargo publish</code> \u547D\u4EE4\u5E76\u6CA1\u6709 <code>--all</code> \u6216\u8005 <code>-p</code> \u53C2\u6570\uFF0C\u6240\u4EE5\u5FC5\u987B\u8FDB\u5165\u6BCF\u4E00\u4E2A crate \u7684\u76EE\u5F55\u5E76\u8FD0\u884C <code>cargo publish</code> \u6765\u53D1\u5E03\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u7684\u6BCF\u4E00\u4E2A crate\u3002</p><p>\u73B0\u5728\u5C1D\u8BD5\u4EE5\u7C7B\u4F3C <code>add_one</code> crate \u7684\u65B9\u5F0F\u5411\u5DE5\u4F5C\u7A7A\u95F4\u589E\u52A0 <code>add_two</code> crate \u6765\u4F5C\u4E3A\u66F4\u591A\u7684\u7EC3\u4E60\uFF01</p><p>\u968F\u7740\u9879\u76EE\u589E\u957F\uFF0C\u8003\u8651\u4F7F\u7528\u5DE5\u4F5C\u7A7A\u95F4\uFF1A\u6BCF\u4E00\u4E2A\u66F4\u5C0F\u7684\u7EC4\u4EF6\u6BD4\u4E00\u5927\u5757\u4EE3\u7801\u8981\u5BB9\u6613\u7406\u89E3\u3002\u5982\u679C\u5B83\u4EEC\u7ECF\u5E38\u9700\u8981\u540C\u65F6\u88AB\u4FEE\u6539\u7684\u8BDD\uFF0C\u5C06 crate \u4FDD\u6301\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u66F4\u6613\u4E8E\u534F\u8C03\u4ED6\u4EEC\u7684\u6539\u53D8\u3002</p>`,60),o=[l];function c(t,r,d,i,C,A){return n(),a("div",null,o)}const g=s(p,[["render",c]]);export{D as __pageData,g as default};
