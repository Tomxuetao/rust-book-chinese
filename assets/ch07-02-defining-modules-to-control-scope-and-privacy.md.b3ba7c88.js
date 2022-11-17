import{_ as s,c as n,o as a,d as e}from"./app.4217174b.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49\u6A21\u5757\u6765\u63A7\u5236\u4F5C\u7528\u57DF\u4E0E\u79C1\u6709\u6027","slug":"\u5B9A\u4E49\u6A21\u5757\u6765\u63A7\u5236\u4F5C\u7528\u57DF\u4E0E\u79C1\u6709\u6027","link":"#\u5B9A\u4E49\u6A21\u5757\u6765\u63A7\u5236\u4F5C\u7528\u57DF\u4E0E\u79C1\u6709\u6027","children":[]},{"level":2,"title":"\u6A21\u5757\u5C0F\u6284","slug":"\u6A21\u5757\u5C0F\u6284","link":"#\u6A21\u5757\u5C0F\u6284","children":[]}],"relativePath":"ch07-02-defining-modules-to-control-scope-and-privacy.md","lastUpdated":1668668904000}'),l={name:"ch07-02-defining-modules-to-control-scope-and-privacy.md"},p=e(`<h2 id="\u5B9A\u4E49\u6A21\u5757\u6765\u63A7\u5236\u4F5C\u7528\u57DF\u4E0E\u79C1\u6709\u6027" tabindex="-1">\u5B9A\u4E49\u6A21\u5757\u6765\u63A7\u5236\u4F5C\u7528\u57DF\u4E0E\u79C1\u6709\u6027 <a class="header-anchor" href="#\u5B9A\u4E49\u6A21\u5757\u6765\u63A7\u5236\u4F5C\u7528\u57DF\u4E0E\u79C1\u6709\u6027" aria-hidden="true">#</a></h2><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/ch07-02-defining-modules-to-control-scope-and-privacy.md" target="_blank" rel="noreferrer">ch07-02-defining-modules-to-control-scope-and-privacy.md</a><br> commit 310ea6cb0dd855eaf510c9ba05648bc5836ead0c</p></blockquote><p>\u5728\u672C\u8282\uFF0C\u6211\u4EEC\u5C06\u8BA8\u8BBA\u6A21\u5757\u548C\u5176\u5B83\u4E00\u4E9B\u5173\u4E8E\u6A21\u5757\u7CFB\u7EDF\u7684\u90E8\u5206\uFF0C\u5982\u5141\u8BB8\u4F60\u547D\u540D\u9879\u7684 <em>\u8DEF\u5F84</em>\uFF08<em>paths</em>\uFF09\uFF1B\u7528\u6765\u5C06\u8DEF\u5F84\u5F15\u5165\u4F5C\u7528\u57DF\u7684 <code>use</code> \u5173\u952E\u5B57\uFF1B\u4EE5\u53CA\u4F7F\u9879\u53D8\u4E3A\u516C\u6709\u7684 <code>pub</code> \u5173\u952E\u5B57\u3002\u6211\u4EEC\u8FD8\u5C06\u8BA8\u8BBA <code>as</code> \u5173\u952E\u5B57\u3001\u5916\u90E8\u5305\u548C glob \u8FD0\u7B97\u7B26\u3002\u73B0\u5728\uFF0C\u8BA9\u6211\u4EEC\u628A\u6CE8\u610F\u529B\u653E\u5728\u6A21\u5757\u4E0A\uFF01</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u5C06\u4ECE\u4E00\u7CFB\u5217\u7684\u89C4\u5219\u5F00\u59CB\uFF0C\u5728\u4F60\u672A\u6765\u7EC4\u7EC7\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u8FD9\u4E9B\u89C4\u5219\u53EF\u88AB\u7528\u4F5C\u7B80\u5355\u7684\u53C2\u8003\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4F1A\u8BE6\u7EC6\u7684\u89E3\u91CA\u6BCF\u6761\u89C4\u5219\u3002</p><h2 id="\u6A21\u5757\u5C0F\u6284" tabindex="-1">\u6A21\u5757\u5C0F\u6284 <a class="header-anchor" href="#\u6A21\u5757\u5C0F\u6284" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E2A\u7B80\u5355\u7684\u53C2\u8003\uFF0C\u7528\u6765\u89E3\u91CA\u6A21\u5757\u3001\u8DEF\u5F84\u3001<code>use</code>\u5173\u952E\u8BCD\u548C<code>pub</code>\u5173\u952E\u8BCD\u5982\u4F55\u5728\u7F16\u8BD1\u5668\u4E2D\u5DE5\u4F5C\uFF0C\u548C\u5927\u90E8\u5206\u5F00\u53D1\u8005\u5982\u4F55\u7EC4\u7EC7\u4ED6\u4EEC\u7684\u4EE3\u7801\u3002\u6211\u4EEC\u5C06\u5728\u8FD9\u4E2A\u7AE0\u8282\u4E2D\u5BF9\u6BCF\u6761\u89C4\u5219\u7684\u4F8B\u5B50\u4E00\u4E00\u5217\u4E3E\uFF0C\u4F46\u8FD9\u662F\u4E00\u4E2A\u7528\u6765\u53C2\u8003\u7684\u597D\u5730\u65B9\u7528\u4E8E\u8868\u8FBE\u6A21\u5757\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002</p><ul><li><strong>\u4ECEcrate\u6839\u8282\u70B9\u5F00\u59CB</strong>: \u5F53\u7F16\u8BD1\u4E00\u4E2Acrate, \u7F16\u8BD1\u5668\u9996\u5148\u5728crate\u6839\u6587\u4EF6\uFF08\u901A\u5E38\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u5E93crate\u800C\u8A00\u662F<em>src/lib.rs</em>\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u4E8C\u8FDB\u5236crate\u800C\u8A00\u662F<em>src/main.rs</em>\uFF09\u4E2D\u5BFB\u627E\u9700\u8981\u88AB\u7F16\u8BD1\u7684\u4EE3\u7801\u3002</li><li><strong>\u58F0\u660E\u6A21\u5757</strong>: \u5728crate\u6839\u6587\u4EF6\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u58F0\u660E\u4E00\u4E2A\u65B0\u6A21\u5757\uFF1B\u6BD4\u5982\uFF0C\u4F60\u7528<code>mod garden</code>\u58F0\u660E\u4E86\u4E00\u4E2A\u53EB\u505A<code>garden</code>\u7684\u6A21\u5757\u3002\u7F16\u8BD1\u5668\u4F1A\u5728\u4E0B\u5217\u8DEF\u5F84\u4E2D\u5BFB\u627E\u6A21\u5757\u4EE3\u7801\uFF1A <ul><li>\u5185\u8054\uFF0C\u5728\u5927\u62EC\u53F7\u4E2D\uFF0C\u5F53<code>mod garden</code>\u540E\u65B9\u4E0D\u662F\u4E00\u4E2A\u5206\u53F7\u800C\u662F\u4E00\u4E2A\u5927\u62EC\u53F7</li><li>\u5728\u6587\u4EF6 <em>src/garden.rs</em></li><li>\u5728\u6587\u4EF6 <em>src/garden/mod.rs</em></li></ul></li><li><strong>\u58F0\u660E\u5B50\u6A21\u5757</strong>: \u5728\u9664\u4E86crate\u6839\u8282\u70B9\u4EE5\u5916\u7684\u5176\u4ED6\u6587\u4EF6\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u5B9A\u4E49\u5B50\u6A21\u5757\u3002\u6BD4\u5982\uFF0C\u4F60\u53EF\u80FD\u5728<em>src/garden.rs</em>\u4E2D\u5B9A\u4E49\u4E86<code>mod vegetables;</code>\u3002\u7F16\u8BD1\u5668\u4F1A\u5728\u4EE5\u7236\u6A21\u5757\u547D\u540D\u7684\u76EE\u5F55\u4E2D\u5BFB\u627E\u5B50\u6A21\u5757\u4EE3\u7801\uFF1A <ul><li>\u5185\u8054, \u5728\u5927\u62EC\u53F7\u4E2D\uFF0C\u5F53<code>mod vegetables</code>\u540E\u65B9\u4E0D\u662F\u4E00\u4E2A\u5206\u53F7\u800C\u662F\u4E00\u4E2A\u5927\u62EC\u53F7</li><li>\u5728\u6587\u4EF6 <em>src/garden/vegetables.rs</em></li><li>\u5728\u6587\u4EF6 <em>src/garden/vegetables/mod.rs</em></li></ul></li><li><strong>\u6A21\u5757\u4E2D\u7684\u4EE3\u7801\u8DEF\u5F84</strong>: \u4E00\u65E6\u4E00\u4E2A\u6A21\u5757\u662F\u4F60crate\u7684\u4E00\u90E8\u5206\uFF0C \u4F60\u53EF\u4EE5\u5728\u9690\u79C1\u89C4\u5219\u5141\u8BB8\u7684\u524D\u63D0\u4E0B\uFF0C\u4ECE\u540C\u4E00\u4E2Acrate\u5185\u7684\u4EFB\u610F\u5730\u65B9\uFF0C\u901A\u8FC7\u4EE3\u7801\u8DEF\u5F84\u5F15\u7528\u8BE5\u6A21\u5757\u7684\u4EE3\u7801\u3002\u4E3E\u4F8B\u800C\u8A00\uFF0C\u4E00\u4E2Agarden vegetables\u6A21\u5757\u4E0B\u7684<code>Asparagus</code>\u7C7B\u578B\u53EF\u4EE5\u5728<code>crate::garden::vegetables::Asparagus</code>\u88AB\u627E\u5230\u3002</li><li><strong>\u79C1\u6709 vs \u516C\u7528</strong>: \u4E00\u4E2A\u6A21\u5757\u91CC\u7684\u4EE3\u7801\u9ED8\u8BA4\u5BF9\u5176\u7236\u6A21\u5757\u79C1\u6709\u3002\u4E3A\u4E86\u4F7F\u4E00\u4E2A\u6A21\u5757\u516C\u7528\uFF0C\u5E94\u5F53\u5728\u58F0\u660E\u65F6\u4F7F\u7528<code>pub mod</code>\u66FF\u4EE3<code>mod</code>\u3002\u4E3A\u4E86\u4F7F\u4E00\u4E2A\u516C\u7528\u6A21\u5757\u5185\u90E8\u7684\u6210\u5458\u516C\u7528\uFF0C\u5E94\u5F53\u5728\u58F0\u660E\u524D\u4F7F\u7528<code>pub</code>\u3002</li><li><strong><code>use</code> \u5173\u952E\u5B57</strong>: \u5728\u4E00\u4E2A\u4F5C\u7528\u57DF\u5185\uFF0C<code>use</code>\u5173\u952E\u5B57\u521B\u5EFA\u4E86\u4E00\u4E2A\u6210\u5458\u7684\u5FEB\u6377\u65B9\u5F0F\uFF0C\u7528\u6765\u51CF\u5C11\u957F\u8DEF\u5F84\u7684\u91CD\u590D\u3002\u5728\u4EFB\u4F55\u53EF\u4EE5\u5F15\u7528<code>crate::garden::vegetables::Asparagus</code>\u7684\u4F5C\u7528\u57DF, \u4F60\u53EF\u4EE5\u901A\u8FC7 <code>use crate::garden::vegetables::Asparagus;</code>\u521B\u5EFA\u4E00\u4E2A\u5FEB\u6377\u65B9\u5F0F\uFF0C\u7136\u540E\u4F60\u5C31\u53EF\u4EE5\u5728\u4F5C\u7528\u57DF\u4E2D\u53EA\u5199<code>Asparagus</code>\u6765\u4F7F\u7528\u8BE5\u7C7B\u578B\u3002</li></ul><p>\u8FD9\u91CC\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>backyard</code>\u7684\u4E8C\u8FDB\u5236crate\u6765\u8BF4\u660E\u8FD9\u4E9B\u89C4\u5219\u3002\u8BE5crate\u7684\u8DEF\u5F84\u540C\u6837\u547D\u540D\u4E3A<code>backyard</code>\uFF0C\u8BE5\u8DEF\u5F84\u5305\u542B\u4E86\u8FD9\u4E9B\u6587\u4EF6\u548C\u76EE\u5F55\uFF1A</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">backyard</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 Cargo.lock</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 Cargo.toml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500\u2500 garden</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502\xA0\xA0 \u2514\u2500\u2500 vegetables.rs</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500\u2500 garden.rs</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2514\u2500\u2500 main.rs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u7684crate\u6839\u6587\u4EF6\u662F*src/main.rs*\uFF0C\u8BE5\u6587\u4EF6\u5305\u62EC\u4E86\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;span class=&quot;filename&quot;&gt;Filename: src/main.rs&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`,ignore</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;&lt;&lt; @/listings/ch07-managing-growing-projects/quick-reference-example/src/main.rs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`pub mod garden;\`\u884C\u544A\u8BC9\u7F16\u8BD1\u5668\u5E94\u8BE5\u5305\u542B\u5728*src/garden.rs*\u6587\u4EF6\u4E2D\u53D1\u73B0\u7684\u4EE3\u7801:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;span class=&quot;filename&quot;&gt;Filename: src/garden.rs&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`,ignore</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;&lt;&lt; @/listings/ch07-managing-growing-projects/quick-reference-example/src/garden.rs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5728\u6B64\u5904\uFF0C \`pub mod vegetables;\`\u610F\u5473\u7740\u5728*src/garden/vegetables.rs*\u4E2D\u7684\u4EE3\u7801\u4E5F\u5E94\u8BE5\u88AB\u5305\u62EC\u3002\u8FD9\u4E9B\u4EE3\u7801\u662F:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`,ignore</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;&lt;&lt; @/listings/ch07-managing-growing-projects/quick-reference-example/src/garden/vegetables.rs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u73B0\u5728\u8BA9\u6211\u4EEC\u6DF1\u5165\u4E86\u89E3\u8FD9\u4E9B\u89C4\u5219\u7684\u7EC6\u8282\u5E76\u5728\u5B9E\u9645\u4E2D\u6F14\u793A\u5B83\u4EEC\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">### \u5728\u6A21\u5757\u4E2D\u5BF9\u76F8\u5173\u4EE3\u7801\u8FDB\u884C\u5206\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">*\u6A21\u5757* \u8BA9\u6211\u4EEC\u53EF\u4EE5\u5C06\u4E00\u4E2A crate \u4E2D\u7684\u4EE3\u7801\u8FDB\u884C\u5206\u7EC4\uFF0C\u4EE5\u63D0\u9AD8\u53EF\u8BFB\u6027\u4E0E\u91CD\u7528\u6027\u3002\u6A21\u5757\u8FD8\u53EF\u4EE5\u63A7\u5236\u9879\u7684 *\u79C1\u6709\u6027*\uFF0C\u5373\u9879\u662F\u53EF\u4EE5\u88AB\u5916\u90E8\u4EE3\u7801\u4F7F\u7528\u7684\uFF08*public*\uFF09\uFF0C\u8FD8\u662F\u4F5C\u4E3A\u4E00\u4E2A\u5185\u90E8\u5B9E\u73B0\u7684\u5185\u5BB9\uFF0C\u4E0D\u80FD\u88AB\u5916\u90E8\u4EE3\u7801\u4F7F\u7528\uFF08*private*\uFF09\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5728\u9910\u996E\u4E1A\uFF0C\u9910\u9986\u4E2D\u4F1A\u6709\u4E00\u4E9B\u5730\u65B9\u88AB\u79F0\u4E4B\u4E3A *\u524D\u53F0*\uFF08*front of house*\uFF09\uFF0C\u8FD8\u6709\u53E6\u5916\u4E00\u4E9B\u5730\u65B9\u88AB\u79F0\u4E4B\u4E3A *\u540E\u53F0*\uFF08*back of house*\uFF09\u3002\u524D\u53F0\u662F\u62DB\u5F85\u987E\u5BA2\u7684\u5730\u65B9\uFF0C\u5728\u8FD9\u91CC\uFF0C\u5E97\u4E3B\u53EF\u4EE5\u4E3A\u987E\u5BA2\u5B89\u6392\u5EA7\u4F4D\uFF0C\u670D\u52A1\u5458\u63A5\u53D7\u987E\u5BA2\u4E0B\u5355\u548C\u4ED8\u6B3E\uFF0C\u8C03\u9152\u5E08\u4F1A\u5236\u4F5C\u996E\u54C1\u3002\u540E\u53F0\u5219\u662F\u7531\u53A8\u5E08\u5DE5\u4F5C\u7684\u53A8\u623F\uFF0C\u6D17\u7897\u5DE5\u7684\u5DE5\u4F5C\u5730\u70B9\uFF0C\u4EE5\u53CA\u7ECF\u7406\u505A\u884C\u653F\u5DE5\u4F5C\u7684\u5730\u65B9\u7EC4\u6210\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6211\u4EEC\u53EF\u4EE5\u5C06\u51FD\u6570\u653E\u7F6E\u5230\u5D4C\u5957\u7684\u6A21\u5757\u4E2D\uFF0C\u6765\u4F7F\u6211\u4EEC\u7684 crate \u7ED3\u6784\u4E0E\u5B9E\u9645\u7684\u9910\u5385\u7ED3\u6784\u76F8\u540C\u3002\u901A\u8FC7\u6267\u884C \`cargo new --lib restaurant\`\uFF0C\u6765\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u540D\u4E3A \`restaurant\` \u7684\u5E93\u3002\u7136\u540E\u5C06\u793A\u4F8B 7-1 \u4E2D\u6240\u7F57\u5217\u51FA\u6765\u7684\u4EE3\u7801\u653E\u5165 *src/lib.rs* \u4E2D\uFF0C\u6765\u5B9A\u4E49\u4E00\u4E9B\u6A21\u5757\u548C\u51FD\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;span class=&quot;filename&quot;&gt;\u6587\u4EF6\u540D: src/lib.rs&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;&lt;&lt; @/listings/ch07-managing-growing-projects/listing-07-01/src/lib.rs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;span class=&quot;caption&quot;&gt;\u793A\u4F8B 7-1\uFF1A\u4E00\u4E2A\u5305\u542B\u4E86\u5176\u4ED6\u5185\u7F6E\u4E86\u51FD\u6570\u7684\u6A21\u5757\u7684 \`front_of_house\` \u6A21\u5757&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A\u6A21\u5757\uFF0C\u662F\u4EE5 \`mod\` \u5173\u952E\u5B57\u4E3A\u8D77\u59CB\uFF0C\u7136\u540E\u6307\u5B9A\u6A21\u5757\u7684\u540D\u5B57\uFF08\u672C\u4F8B\u4E2D\u53EB\u505A \`front_of_house\`\uFF09\uFF0C\u5E76\u4E14\u7528\u82B1\u62EC\u53F7\u5305\u56F4\u6A21\u5757\u7684\u4E3B\u4F53\u3002\u5728\u6A21\u5757\u5185\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5B9A\u4E49\u5176\u4ED6\u7684\u6A21\u5757\uFF0C\u5C31\u50CF\u672C\u4F8B\u4E2D\u7684 \`hosting\` \u548C \`serving\` \u6A21\u5757\u3002\u6A21\u5757\u8FD8\u53EF\u4EE5\u4FDD\u5B58\u4E00\u4E9B\u5B9A\u4E49\u7684\u5176\u4ED6\u9879\uFF0C\u6BD4\u5982\u7ED3\u6784\u4F53\u3001\u679A\u4E3E\u3001\u5E38\u91CF\u3001\u7279\u6027\u3001\u6216\u8005\u51FD\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u901A\u8FC7\u4F7F\u7528\u6A21\u5757\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u76F8\u5173\u7684\u5B9A\u4E49\u5206\u7EC4\u5230\u4E00\u8D77\uFF0C\u5E76\u6307\u51FA\u4ED6\u4EEC\u4E3A\u4EC0\u4E48\u76F8\u5173\u3002\u7A0B\u5E8F\u5458\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u66F4\u52A0\u5BB9\u6613\u5730\u627E\u5230\u4ED6\u4EEC\u60F3\u8981\u7684\u5B9A\u4E49\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u53EF\u4EE5\u57FA\u4E8E\u5206\u7EC4\u6765\u5BF9\u4EE3\u7801\u8FDB\u884C\u5BFC\u822A\uFF0C\u800C\u4E0D\u9700\u8981\u9605\u8BFB\u6240\u6709\u7684\u5B9A\u4E49\u3002\u7A0B\u5E8F\u5458\u5411\u8FD9\u6BB5\u4EE3\u7801\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u529F\u80FD\u65F6\uFF0C\u4ED6\u4EEC\u4E5F\u4F1A\u77E5\u9053\u4EE3\u7801\u5E94\u8BE5\u653E\u7F6E\u5728\u4F55\u5904\uFF0C\u53EF\u4EE5\u4FDD\u6301\u7A0B\u5E8F\u7684\u7EC4\u7EC7\u6027\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5728\u524D\u9762\u6211\u4EEC\u63D0\u5230\u4E86\uFF0C\`src/main.rs\` \u548C \`src/lib.rs\` \u53EB\u505A crate \u6839\u3002\u4E4B\u6240\u4EE5\u8FD9\u6837\u53EB\u5B83\u4EEC\u662F\u56E0\u4E3A\u8FD9\u4E24\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u90FD\u5206\u522B\u5728 crate \u6A21\u5757\u7ED3\u6784\u7684\u6839\u7EC4\u6210\u4E86\u4E00\u4E2A\u540D\u4E3A \`crate\` \u7684\u6A21\u5757\uFF0C\u8BE5\u7ED3\u6784\u88AB\u79F0\u4E3A *\u6A21\u5757\u6811*\uFF08*module tree*\uFF09\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u793A\u4F8B 7-2 \u5C55\u793A\u4E86\u793A\u4F8B 7-1 \u4E2D\u7684\u6A21\u5757\u6811\u7684\u7ED3\u6784\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`text</span></span>
<span class="line"><span style="color:#A6ACCD;">crate</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2514\u2500\u2500 front_of_house</span></span>
<span class="line"><span style="color:#A6ACCD;">     \u251C\u2500\u2500 hosting</span></span>
<span class="line"><span style="color:#A6ACCD;">     \u2502   \u251C\u2500\u2500 add_to_waitlist</span></span>
<span class="line"><span style="color:#A6ACCD;">     \u2502   \u2514\u2500\u2500 seat_at_table</span></span>
<span class="line"><span style="color:#A6ACCD;">     \u2514\u2500\u2500 serving</span></span>
<span class="line"><span style="color:#A6ACCD;">         \u251C\u2500\u2500 take_order</span></span>
<span class="line"><span style="color:#A6ACCD;">         \u251C\u2500\u2500 serve_order</span></span>
<span class="line"><span style="color:#A6ACCD;">         \u2514\u2500\u2500 take_payment</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><span class="caption">\u793A\u4F8B 7-2: \u793A\u4F8B 7-1 \u4E2D\u4EE3\u7801\u7684\u6A21\u5757\u6811</span></p><p>\u8FD9\u4E2A\u6811\u5C55\u793A\u4E86\u4E00\u4E9B\u6A21\u5757\u662F\u5982\u4F55\u88AB\u5D4C\u5165\u5230\u53E6\u4E00\u4E2A\u6A21\u5757\u7684\uFF08\u4F8B\u5982\uFF0C<code>hosting</code> \u5D4C\u5957\u5728 <code>front_of_house</code> \u4E2D\uFF09\u3002\u8FD9\u4E2A\u6811\u8FD8\u5C55\u793A\u4E86\u4E00\u4E9B\u6A21\u5757\u662F\u4E92\u4E3A <em>\u5144\u5F1F</em>\uFF08<em>siblings</em>\uFF09 \u7684\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u4EEC\u5B9A\u4E49\u5728\u540C\u4E00\u6A21\u5757\u4E2D\uFF08<code>hosting</code> \u548C <code>serving</code> \u88AB\u4E00\u8D77\u5B9A\u4E49\u5728 <code>front_of_house</code> \u4E2D\uFF09\u3002\u7EE7\u7EED\u6CBF\u7528\u5BB6\u5EAD\u5173\u7CFB\u7684\u6BD4\u55BB\uFF0C\u5982\u679C\u4E00\u4E2A\u6A21\u5757 A \u88AB\u5305\u542B\u5728\u6A21\u5757 B \u4E2D\uFF0C\u6211\u4EEC\u5C06\u6A21\u5757 A \u79F0\u4E3A\u6A21\u5757 B \u7684 <em>\u5B50</em>\uFF08<em>child</em>\uFF09\uFF0C\u6A21\u5757 B \u5219\u662F\u6A21\u5757 A \u7684 <em>\u7236</em>\uFF08<em>parent</em>\uFF09\u3002\u6CE8\u610F\uFF0C\u6574\u4E2A\u6A21\u5757\u6811\u90FD\u690D\u6839\u4E8E\u540D\u4E3A <code>crate</code> \u7684\u9690\u5F0F\u6A21\u5757\u4E0B\u3002</p><p>\u8FD9\u4E2A\u6A21\u5757\u6811\u53EF\u80FD\u4F1A\u4EE4\u4F60\u60F3\u8D77\u7535\u8111\u4E0A\u6587\u4EF6\u7CFB\u7EDF\u7684\u76EE\u5F55\u6811\uFF1B\u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u6070\u5F53\u7684\u7C7B\u6BD4\uFF01\u5C31\u50CF\u6587\u4EF6\u7CFB\u7EDF\u7684\u76EE\u5F55\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u6A21\u5757\u6765\u7EC4\u7EC7\u4F60\u7684\u4EE3\u7801\u3002\u5E76\u4E14\uFF0C\u5C31\u50CF\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u79CD\u65B9\u6CD5\u6765\u627E\u5230\u6A21\u5757\u3002</p>`,12),o=[p];function c(r,t,i,d,A,C){return a(),n("div",null,o)}const y=s(l,[["render",c]]);export{m as __pageData,y as default};
