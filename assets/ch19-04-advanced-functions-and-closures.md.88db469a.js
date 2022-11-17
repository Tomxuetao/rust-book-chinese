import{_ as s,c as n,o as a,d as l}from"./app.4217174b.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9AD8\u7EA7\u51FD\u6570\u4E0E\u95ED\u5305","slug":"\u9AD8\u7EA7\u51FD\u6570\u4E0E\u95ED\u5305","link":"#\u9AD8\u7EA7\u51FD\u6570\u4E0E\u95ED\u5305","children":[{"level":3,"title":"\u51FD\u6570\u6307\u9488","slug":"\u51FD\u6570\u6307\u9488","link":"#\u51FD\u6570\u6307\u9488","children":[]},{"level":3,"title":"\u8FD4\u56DE\u95ED\u5305","slug":"\u8FD4\u56DE\u95ED\u5305","link":"#\u8FD4\u56DE\u95ED\u5305","children":[]}]}],"relativePath":"ch19-04-advanced-functions-and-closures.md","lastUpdated":1668668904000}'),p={name:"ch19-04-advanced-functions-and-closures.md"},o=l(`<h2 id="\u9AD8\u7EA7\u51FD\u6570\u4E0E\u95ED\u5305" tabindex="-1">\u9AD8\u7EA7\u51FD\u6570\u4E0E\u95ED\u5305 <a class="header-anchor" href="#\u9AD8\u7EA7\u51FD\u6570\u4E0E\u95ED\u5305" aria-hidden="true">#</a></h2><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/ch19-05-advanced-functions-and-closures.md" target="_blank" rel="noreferrer">ch19-05-advanced-functions-and-closures.md</a><br> commit 9e30688e0ac4a1ad86fc60aa380bebfb1c34b8a7</p></blockquote><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u63A2\u7D22\u4E00\u4E9B\u6709\u5173\u51FD\u6570\u548C\u95ED\u5305\u7684\u9AD8\u7EA7\u529F\u80FD\uFF1A\u51FD\u6570\u6307\u9488\u4EE5\u53CA\u8FD4\u56DE\u503C\u95ED\u5305\u3002</p><h3 id="\u51FD\u6570\u6307\u9488" tabindex="-1">\u51FD\u6570\u6307\u9488 <a class="header-anchor" href="#\u51FD\u6570\u6307\u9488" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u8BA8\u8BBA\u8FC7\u4E86\u5982\u4F55\u5411\u51FD\u6570\u4F20\u9012\u95ED\u5305\uFF1B\u4E5F\u53EF\u4EE5\u5411\u51FD\u6570\u4F20\u9012\u5E38\u89C4\u51FD\u6570\uFF01\u8FD9\u5728\u6211\u4EEC\u5E0C\u671B\u4F20\u9012\u5DF2\u7ECF\u5B9A\u4E49\u7684\u51FD\u6570\u800C\u4E0D\u662F\u91CD\u65B0\u5B9A\u4E49\u95ED\u5305\u4F5C\u4E3A\u53C2\u6570\u65F6\u5F88\u6709\u7528\u3002\u901A\u8FC7\u51FD\u6570\u6307\u9488\u5141\u8BB8\u6211\u4EEC\u4F7F\u7528\u51FD\u6570\u4F5C\u4E3A\u53E6\u4E00\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u3002\u51FD\u6570\u7684\u7C7B\u578B\u662F <code>fn</code> \uFF08\u4F7F\u7528\u5C0F\u5199\u7684 \u201Cf\u201D \uFF09\u4EE5\u514D\u4E0E <code>Fn</code> \u95ED\u5305 trait \u76F8\u6DF7\u6DC6\u3002<code>fn</code> \u88AB\u79F0\u4E3A <strong>\u51FD\u6570\u6307\u9488</strong>\uFF08<em>function pointer</em>\uFF09\u3002\u6307\u5B9A\u53C2\u6570\u4E3A\u51FD\u6570\u6307\u9488\u7684\u8BED\u6CD5\u7C7B\u4F3C\u4E8E\u95ED\u5305\uFF0C\u5982\u793A\u4F8B 19-27 \u6240\u793A\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: src/main.rs</span></p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add_one</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">do_twice</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arg</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> answer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">do_twice</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">add_one</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The answer is: </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> answer</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><span class="caption">\u793A\u4F8B 19-27: \u4F7F\u7528 <code>fn</code> \u7C7B\u578B\u63A5\u53D7\u51FD\u6570\u6307\u9488\u4F5C\u4E3A\u53C2\u6570</span></p><p>\u8FD9\u4F1A\u6253\u5370\u51FA <code>The answer is: 12</code>\u3002<code>do_twice</code> \u4E2D\u7684 <code>f</code> \u88AB\u6307\u5B9A\u4E3A\u4E00\u4E2A\u63A5\u53D7\u4E00\u4E2A <code>i32</code> \u53C2\u6570\u5E76\u8FD4\u56DE <code>i32</code> \u7684 <code>fn</code>\u3002\u63A5\u7740\u5C31\u53EF\u4EE5\u5728 <code>do_twice</code> \u51FD\u6570\u4F53\u4E2D\u8C03\u7528 <code>f</code>\u3002\u5728 <code>main</code> \u4E2D\uFF0C\u53EF\u4EE5\u5C06\u51FD\u6570\u540D <code>add_one</code> \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9 <code>do_twice</code>\u3002</p><p>\u4E0D\u540C\u4E8E\u95ED\u5305\uFF0C<code>fn</code> \u662F\u4E00\u4E2A\u7C7B\u578B\u800C\u4E0D\u662F\u4E00\u4E2A trait\uFF0C\u6240\u4EE5\u76F4\u63A5\u6307\u5B9A <code>fn</code> \u4F5C\u4E3A\u53C2\u6570\u800C\u4E0D\u662F\u58F0\u660E\u4E00\u4E2A\u5E26\u6709 <code>Fn</code> \u4F5C\u4E3A trait bound \u7684\u6CDB\u578B\u53C2\u6570\u3002</p><p>\u51FD\u6570\u6307\u9488\u5B9E\u73B0\u4E86\u6240\u6709\u4E09\u4E2A\u95ED\u5305 trait\uFF08<code>Fn</code>\u3001<code>FnMut</code> \u548C <code>FnOnce</code>\uFF09\uFF0C\u6240\u4EE5\u603B\u662F\u53EF\u4EE5\u5728\u8C03\u7528\u671F\u671B\u95ED\u5305\u7684\u51FD\u6570\u65F6\u4F20\u9012\u51FD\u6570\u6307\u9488\u4F5C\u4E3A\u53C2\u6570\u3002\u503E\u5411\u4E8E\u7F16\u5199\u4F7F\u7528\u6CDB\u578B\u548C\u95ED\u5305 trait \u7684\u51FD\u6570\uFF0C\u8FD9\u6837\u5B83\u5C31\u80FD\u63A5\u53D7\u51FD\u6570\u6216\u95ED\u5305\u4F5C\u4E3A\u53C2\u6570\u3002</p><p>\u4E00\u4E2A\u53EA\u671F\u671B\u63A5\u53D7 <code>fn</code> \u800C\u4E0D\u63A5\u53D7\u95ED\u5305\u7684\u60C5\u51B5\u7684\u4F8B\u5B50\u662F\u4E0E\u4E0D\u5B58\u5728\u95ED\u5305\u7684\u5916\u90E8\u4EE3\u7801\u4EA4\u4E92\u65F6\uFF1AC \u8BED\u8A00\u7684\u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F46 C \u8BED\u8A00\u6CA1\u6709\u95ED\u5305\u3002</p><p>\u4F5C\u4E3A\u4E00\u4E2A\u65E2\u53EF\u4EE5\u4F7F\u7528\u5185\u8054\u5B9A\u4E49\u7684\u95ED\u5305\u53C8\u53EF\u4EE5\u4F7F\u7528\u547D\u540D\u51FD\u6570\u7684\u4F8B\u5B50\uFF0C\u8BA9\u6211\u4EEC\u770B\u770B\u4E00\u4E2A <code>map</code> \u7684\u5E94\u7528\u3002\u4F7F\u7528 <code>map</code> \u51FD\u6570\u5C06\u4E00\u4E2A\u6570\u5B57 vector \u8F6C\u6362\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32 vector\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u95ED\u5305\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR: here</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> list_of_numbers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> list_of_strings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">        list_of_numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">iter</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(|</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">to_string</span><span style="color:#89DDFF;">()).</span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR_END: here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6216\u8005\u53EF\u4EE5\u5C06\u51FD\u6570\u4F5C\u4E3A <code>map</code> \u7684\u53C2\u6570\u6765\u4EE3\u66FF\u95ED\u5305\uFF0C\u50CF\u662F\u8FD9\u6837\uFF1A</p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR: here</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> list_of_numbers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> list_of_strings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">        list_of_numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">iter</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ToString</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">to_string</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR_END: here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\u8FD9\u91CC\u5FC5\u987B\u4F7F\u7528 <a href="./ch19-03-advanced-traits.html#\u9AD8\u7EA7-trait">\u201C\u9AD8\u7EA7 trait\u201D</a> \u90E8\u5206\u8BB2\u5230\u7684\u5B8C\u5168\u9650\u5B9A\u8BED\u6CD5\uFF0C\u56E0\u4E3A\u5B58\u5728\u591A\u4E2A\u53EB\u505A <code>to_string</code> \u7684\u51FD\u6570\uFF1B\u8FD9\u91CC\u4F7F\u7528\u4E86\u5B9A\u4E49\u4E8E <code>ToString</code> trait \u7684 <code>to_string</code> \u51FD\u6570\uFF0C\u6807\u51C6\u5E93\u4E3A\u6240\u6709\u5B9E\u73B0\u4E86 <code>Display</code> \u7684\u7C7B\u578B\u5B9E\u73B0\u4E86\u8FD9\u4E2A trait\u3002</p><p>\u53E6\u4E00\u4E2A\u5B9E\u7528\u7684\u6A21\u5F0F\u66B4\u9732\u4E86\u5143\u7EC4\u7ED3\u6784\u4F53\u548C\u5143\u7EC4\u7ED3\u6784\u4F53\u679A\u4E3E\u6210\u5458\u7684\u5B9E\u73B0\u7EC6\u8282\u3002\u8FD9\u4E9B\u9879\u4F7F\u7528 <code>()</code> \u4F5C\u4E3A\u521D\u59CB\u5316\u8BED\u6CD5\uFF0C\u8FD9\u770B\u8D77\u6765\u5C31\u50CF\u51FD\u6570\u8C03\u7528\uFF0C\u540C\u65F6\u5B83\u4EEC\u786E\u5B9E\u88AB\u5B9E\u73B0\u4E3A\u8FD4\u56DE\u7531\u53C2\u6570\u6784\u9020\u7684\u5B9E\u4F8B\u7684\u51FD\u6570\u3002\u5B83\u4EEC\u4E5F\u88AB\u79F0\u4E3A\u5B9E\u73B0\u4E86\u95ED\u5305 trait \u7684\u51FD\u6570\u6307\u9488\uFF0C\u5E76\u53EF\u4EE5\u91C7\u7528\u7C7B\u4F3C\u5982\u4E0B\u7684\u65B9\u5F0F\u8C03\u7528\uFF1A</p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR: here</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Status</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">Value</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">u32</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Stop</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> list_of_statuses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Status</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#FFCB6B;">u32</span><span style="color:#89DDFF;">..</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Status</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">Value</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR_END: here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u521B\u5EFA\u4E86 <code>Status::Value</code> \u5B9E\u4F8B\uFF0C\u5B83\u901A\u8FC7 <code>map</code> \u7528\u8303\u56F4\u7684\u6BCF\u4E00\u4E2A <code>u32</code> \u503C\u8C03\u7528 <code>Status::Value</code> \u7684\u521D\u59CB\u5316\u51FD\u6570\u3002\u4E00\u4E9B\u4EBA\u503E\u5411\u4E8E\u51FD\u6570\u98CE\u683C\uFF0C\u4E00\u4E9B\u4EBA\u559C\u6B22\u95ED\u5305\u3002\u8FD9\u4E24\u79CD\u5F62\u5F0F\u6700\u7EC8\u90FD\u4F1A\u4EA7\u751F\u540C\u6837\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u8BF7\u4F7F\u7528\u5BF9\u4F60\u6765\u8BF4\u66F4\u660E\u767D\u7684\u5F62\u5F0F\u5427\u3002</p><h3 id="\u8FD4\u56DE\u95ED\u5305" tabindex="-1">\u8FD4\u56DE\u95ED\u5305 <a class="header-anchor" href="#\u8FD4\u56DE\u95ED\u5305" aria-hidden="true">#</a></h3><p>\u95ED\u5305\u8868\u73B0\u4E3A trait\uFF0C\u8FD9\u610F\u5473\u7740\u4E0D\u80FD\u76F4\u63A5\u8FD4\u56DE\u95ED\u5305\u3002\u5BF9\u4E8E\u5927\u90E8\u5206\u9700\u8981\u8FD4\u56DE trait \u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5B9E\u73B0\u4E86\u671F\u671B\u8FD4\u56DE\u7684 trait \u7684\u5177\u4F53\u7C7B\u578B\u6765\u66FF\u4EE3\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u3002\u4F46\u662F\u8FD9\u4E0D\u80FD\u7528\u4E8E\u95ED\u5305\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u6CA1\u6709\u4E00\u4E2A\u53EF\u8FD4\u56DE\u7684\u5177\u4F53\u7C7B\u578B\uFF1B\u4F8B\u5982\u4E0D\u5141\u8BB8\u4F7F\u7528\u51FD\u6570\u6307\u9488 <code>fn</code> \u4F5C\u4E3A\u8FD4\u56DE\u503C\u7C7B\u578B\u3002</p><p>\u8FD9\u6BB5\u4EE3\u7801\u5C1D\u8BD5\u76F4\u63A5\u8FD4\u56DE\u95ED\u5305\uFF0C\u5B83\u5E76\u4E0D\u80FD\u7F16\u8BD1\uFF1A</p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returns_closure</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">dyn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Fn</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u7F16\u8BD1\u5668\u7ED9\u51FA\u7684\u9519\u8BEF\u662F\uFF1A</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo build</span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling functions-example v0.1.0 (file:///projects/functions-example)</span></span>
<span class="line"><span style="color:#A6ACCD;">error[E0746]: return type cannot have an unboxed trait object</span></span>
<span class="line"><span style="color:#A6ACCD;"> --&gt; src/lib.rs:1:25</span></span>
<span class="line"><span style="color:#A6ACCD;">  |</span></span>
<span class="line"><span style="color:#A6ACCD;">1 | fn returns_closure() -&gt; dyn Fn(i32) -&gt; i32 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  |                         ^^^^^^^^^^^^^^^^^^ doesn&#39;t have a size known at compile-time</span></span>
<span class="line"><span style="color:#A6ACCD;">  |</span></span>
<span class="line"><span style="color:#A6ACCD;">  = note: for information on \`impl Trait\`, see &lt;https://doc.rust-lang.org/book/ch10-02-traits.html#returning-types-that-implement-traits&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">help: use \`impl Fn(i32) -&gt; i32\` as the return type, as all return paths are of type \`[closure@src/lib.rs:2:5: 2:14]\`, which implements \`Fn(i32) -&gt; i32\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  |</span></span>
<span class="line"><span style="color:#A6ACCD;">1 | fn returns_closure() -&gt; impl Fn(i32) -&gt; i32 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  |                         ~~~~~~~~~~~~~~~~~~~</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">For more information about this error, try \`rustc --explain E0746\`.</span></span>
<span class="line"><span style="color:#A6ACCD;">error: could not compile \`functions-example\` due to previous error</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9519\u8BEF\u53C8\u4E00\u6B21\u6307\u5411\u4E86 <code>Sized</code> trait\uFF01Rust \u5E76\u4E0D\u77E5\u9053\u9700\u8981\u591A\u5C11\u7A7A\u95F4\u6765\u50A8\u5B58\u95ED\u5305\u3002\u4E0D\u8FC7\u6211\u4EEC\u5728\u4E0A\u4E00\u90E8\u5206\u89C1\u8FC7\u8FD9\u79CD\u60C5\u51B5\u7684\u89E3\u51B3\u529E\u6CD5\uFF1A\u53EF\u4EE5\u4F7F\u7528 trait \u5BF9\u8C61\uFF1A</p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returns_closure</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Box</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">dyn</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fn</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Box</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(|</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6BB5\u4EE3\u7801\u6B63\u597D\u53EF\u4EE5\u7F16\u8BD1\u3002\u5173\u4E8E trait \u5BF9\u8C61\u7684\u66F4\u591A\u5185\u5BB9\uFF0C\u8BF7\u56DE\u987E\u7B2C\u5341\u4E03\u7AE0\u7684 <a href="./ch17-02-trait-objects.html#\u4E3A\u4F7F\u7528\u4E0D\u540C\u7C7B\u578B\u7684\u503C\u800C\u8BBE\u8BA1\u7684-trait-\u5BF9\u8C61">\u201C\u4E3A\u4F7F\u7528\u4E0D\u540C\u7C7B\u578B\u7684\u503C\u800C\u8BBE\u8BA1\u7684 trait \u5BF9\u8C61\u201D</a> \u90E8\u5206\u3002</p><p>\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u5B66\u4E60\u5B8F\uFF01</p>`,30),e=[o];function c(t,r,F,D,y,C){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
