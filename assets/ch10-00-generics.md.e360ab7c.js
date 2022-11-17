import{_ as s,c as n,o as a,d as l}from"./app.4217174b.js";const i=JSON.parse('{"title":"\u6CDB\u578B\u3001Trait \u548C\u751F\u547D\u5468\u671F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63D0\u53D6\u51FD\u6570\u6765\u51CF\u5C11\u91CD\u590D","slug":"\u63D0\u53D6\u51FD\u6570\u6765\u51CF\u5C11\u91CD\u590D","link":"#\u63D0\u53D6\u51FD\u6570\u6765\u51CF\u5C11\u91CD\u590D","children":[]}],"relativePath":"ch10-00-generics.md","lastUpdated":1668668904000}'),p={name:"ch10-00-generics.md"},o=l(`<h1 id="\u6CDB\u578B\u3001trait-\u548C\u751F\u547D\u5468\u671F" tabindex="-1">\u6CDB\u578B\u3001Trait \u548C\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u6CDB\u578B\u3001trait-\u548C\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h1><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/ch10-00-generics.md" target="_blank" rel="noreferrer">ch10-00-generics.md</a><br> commit 9c0fa2714859738ff73cbbb829592e4c037d7e46</p></blockquote><p>\u6BCF\u4E00\u4E2A\u7F16\u7A0B\u8BED\u8A00\u90FD\u6709\u9AD8\u6548\u5904\u7406\u91CD\u590D\u6982\u5FF5\u7684\u5DE5\u5177\u3002\u5728 Rust \u4E2D\u5176\u5DE5\u5177\u4E4B\u4E00\u5C31\u662F <strong>\u6CDB\u578B</strong>\uFF08<em>generics</em>\uFF09\u3002\u6CDB\u578B\u662F\u5177\u4F53\u7C7B\u578B\u6216\u5176\u4ED6\u5C5E\u6027\u7684\u62BD\u8C61\u66FF\u4EE3\u3002\u6211\u4EEC\u53EF\u4EE5\u8868\u8FBE\u6CDB\u578B\u7684\u5C5E\u6027\uFF0C\u6BD4\u5982\u4ED6\u4EEC\u7684\u884C\u4E3A\u6216\u5982\u4F55\u4E0E\u5176\u4ED6\u6CDB\u578B\u76F8\u5173\u8054\uFF0C\u800C\u4E0D\u9700\u8981\u5728\u7F16\u5199\u548C\u7F16\u8BD1\u4EE3\u7801\u65F6\u77E5\u9053\u4ED6\u4EEC\u5728\u8FD9\u91CC\u5B9E\u9645\u4E0A\u4EE3\u8868\u4EC0\u4E48\u3002</p><p>\u540C\u7406\u4E3A\u4E86\u7F16\u5199\u4E00\u4EFD\u53EF\u4EE5\u7528\u4E8E\u591A\u79CD\u5177\u4F53\u503C\u7684\u4EE3\u7801\uFF0C\u51FD\u6570\u5E76\u4E0D\u77E5\u9053\u5176\u53C2\u6570\u4E3A\u4F55\u503C\uFF0C\u8FD9\u65F6\u5C31\u53EF\u4EE5\u8BA9\u51FD\u6570\u83B7\u53D6\u6CDB\u578B\u800C\u4E0D\u662F\u50CF <code>i32</code> \u6216 <code>String</code> \u8FD9\u6837\u7684\u5177\u4F53\u7C7B\u578B\u3002\u6211\u4EEC\u5DF2\u7ECF\u4F7F\u7528\u8FC7\u7B2C\u516D\u7AE0\u7684 <code>Option&lt;T&gt;</code>\uFF0C\u7B2C\u516B\u7AE0\u7684 <code>Vec&lt;T&gt;</code> \u548C <code>HashMap&lt;K, V&gt;</code>\uFF0C\u4EE5\u53CA\u7B2C\u4E5D\u7AE0\u7684 <code>Result&lt;T, E&gt;</code> \u8FD9\u4E9B\u6CDB\u578B\u4E86\u3002\u672C\u7AE0\u4F1A\u63A2\u7D22\u5982\u4F55\u4F7F\u7528\u6CDB\u578B\u5B9A\u4E49\u6211\u4EEC\u81EA\u5DF1\u7684\u7C7B\u578B\u3001\u51FD\u6570\u548C\u65B9\u6CD5\uFF01</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u5C06\u56DE\u987E\u4E00\u4E0B\u63D0\u53D6\u51FD\u6570\u4EE5\u51CF\u5C11\u4EE3\u7801\u91CD\u590D\u7684\u673A\u5236\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528\u76F8\u540C\u7684\u6280\u672F\uFF0C\u4ECE\u4E24\u4E2A\u4EC5\u53C2\u6570\u7C7B\u578B\u4E0D\u540C\u7684\u51FD\u6570\u4E2D\u521B\u5EFA\u4E00\u4E2A\u6CDB\u578B\u51FD\u6570\u3002\u6211\u4EEC\u4E5F\u4F1A\u8BB2\u5230\u7ED3\u6784\u4F53\u548C\u679A\u4E3E\u5B9A\u4E49\u4E2D\u7684\u6CDB\u578B\u3002</p><p>\u4E4B\u540E\uFF0C\u6211\u4EEC\u8BA8\u8BBA <strong>trait</strong>\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5B9A\u4E49\u6CDB\u578B\u884C\u4E3A\u7684\u65B9\u6CD5\u3002trait \u53EF\u4EE5\u4E0E\u6CDB\u578B\u7ED3\u5408\u6765\u5C06\u6CDB\u578B\u9650\u5236\u4E3A\u62E5\u6709\u7279\u5B9A\u884C\u4E3A\u7684\u7C7B\u578B\uFF0C\u800C\u4E0D\u662F\u4EFB\u610F\u7C7B\u578B\u3002</p><p>\u6700\u540E\u4ECB\u7ECD <strong>\u751F\u547D\u5468\u671F</strong>\uFF08<em>lifetimes</em>\uFF09\uFF0C\u5B83\u662F\u4E00\u7C7B\u5141\u8BB8\u6211\u4EEC\u5411\u7F16\u8BD1\u5668\u63D0\u4F9B\u5F15\u7528\u5982\u4F55\u76F8\u4E92\u5173\u8054\u7684\u6CDB\u578B\u3002Rust \u7684\u751F\u547D\u5468\u671F\u529F\u80FD\u5141\u8BB8\u5728\u5F88\u591A\u573A\u666F\u4E0B\u501F\u7528\u503C\u7684\u540C\u65F6\u4ECD\u7136\u4F7F\u7F16\u8BD1\u5668\u80FD\u591F\u68C0\u67E5\u8FD9\u4E9B\u5F15\u7528\u7684\u6709\u6548\u6027\u3002</p><h2 id="\u63D0\u53D6\u51FD\u6570\u6765\u51CF\u5C11\u91CD\u590D" tabindex="-1">\u63D0\u53D6\u51FD\u6570\u6765\u51CF\u5C11\u91CD\u590D <a class="header-anchor" href="#\u63D0\u53D6\u51FD\u6570\u6765\u51CF\u5C11\u91CD\u590D" aria-hidden="true">#</a></h2><p>\u5728\u4ECB\u7ECD\u6CDB\u578B\u8BED\u6CD5\u4E4B\u524D\uFF0C\u9996\u5148\u6765\u56DE\u987E\u4E00\u4E2A\u4E0D\u4F7F\u7528\u6CDB\u578B\u7684\u5904\u7406\u91CD\u590D\u7684\u6280\u672F\uFF1A\u63D0\u53D6\u4E00\u4E2A\u51FD\u6570\u3002\u5F53\u719F\u6089\u4E86\u8FD9\u4E2A\u6280\u672F\u4EE5\u540E\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528\u76F8\u540C\u7684\u673A\u5236\u6765\u63D0\u53D6\u4E00\u4E2A\u6CDB\u578B\u51FD\u6570\uFF01\u5982\u540C\u4F60\u8BC6\u522B\u51FA\u53EF\u4EE5\u63D0\u53D6\u5230\u51FD\u6570\u4E2D\u91CD\u590D\u4EE3\u7801\u90A3\u6837\uFF0C\u4F60\u4E5F\u4F1A\u5F00\u59CB\u8BC6\u522B\u51FA\u80FD\u591F\u4F7F\u7528\u6CDB\u578B\u7684\u91CD\u590D\u4EE3\u7801\u3002</p><p>\u8003\u8651\u4E00\u4E0B\u8FD9\u4E2A\u5BFB\u627E\u5217\u8868\u4E2D\u6700\u5927\u503C\u7684\u5C0F\u7A0B\u5E8F\uFF0C\u5982\u793A\u4F8B 10-1 \u6240\u793A\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: src/main.rs</span></p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// ANCHOR: here</span></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> number_list </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">34</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> largest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> number_list</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> number </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> number_list </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> number </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> largest </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            largest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The largest number is </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> largest</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR_END: here</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">largest</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR: here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// ANCHOR_END: here</span></span>
<span class="line"></span></code></pre></div><p><span class="caption">\u793A\u4F8B 10-1\uFF1A\u5728\u4E00\u4E2A\u6570\u5B57\u5217\u8868\u4E2D\u5BFB\u627E\u6700\u5927\u503C\u7684\u51FD\u6570</span></p><p>\u8FD9\u6BB5\u4EE3\u7801\u83B7\u53D6\u4E00\u4E2A\u6574\u578B\u5217\u8868\uFF0C\u5B58\u653E\u5728\u53D8\u91CF <code>number_list</code> \u4E2D\u3002\u5B83\u5C06\u5217\u8868\u7684\u7B2C\u4E00\u9879\u653E\u5165\u4E86\u53D8\u91CF <code>largest</code> \u4E2D\u3002\u63A5\u7740\u904D\u5386\u4E86\u5217\u8868\u4E2D\u7684\u6240\u6709\u6570\u5B57\uFF0C\u5982\u679C\u5F53\u524D\u503C\u5927\u4E8E <code>largest</code> \u4E2D\u50A8\u5B58\u7684\u503C\uFF0C\u5C06 <code>largest</code> \u66FF\u6362\u4E3A\u8FD9\u4E2A\u503C\u3002\u5982\u679C\u5F53\u524D\u503C\u5C0F\u4E8E\u6216\u8005\u7B49\u4E8E\u76EE\u524D\u4E3A\u6B62\u7684\u6700\u5927\u503C\uFF0C<code>largest</code> \u4FDD\u6301\u4E0D\u53D8\u3002\u5F53\u5217\u8868\u4E2D\u6240\u6709\u503C\u90FD\u88AB\u8003\u8651\u5230\u4E4B\u540E\uFF0C<code>largest</code> \u5C06\u4F1A\u662F\u6700\u5927\u503C\uFF0C\u5728\u8FD9\u91CC\u4E5F\u5C31\u662F 100\u3002</p><p>\u5982\u679C\u9700\u8981\u5728\u4E24\u4E2A\u4E0D\u540C\u7684\u5217\u8868\u4E2D\u5BFB\u627E\u6700\u5927\u503C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91CD\u590D\u793A\u4F8B 10-1 \u4E2D\u7684\u4EE3\u7801\uFF0C\u8FD9\u6837\u7A0B\u5E8F\u4E2D\u5C31\u4F1A\u5B58\u5728\u4E24\u6BB5\u76F8\u540C\u903B\u8F91\u7684\u4EE3\u7801\uFF0C\u5982\u793A\u4F8B 10-2 \u6240\u793A\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: src/main.rs</span></p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> number_list </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">34</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> largest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> number_list</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> number </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> number_list </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> number </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> largest </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            largest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The largest number is </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> largest</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> number_list </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">102</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">34</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">89</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">54</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">43</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> largest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> number_list</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> number </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> number_list </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> number </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> largest </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            largest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The largest number is </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> largest</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><span class="caption">\u793A\u4F8B 10-2\uFF1A\u5BFB\u627E <strong>\u4E24\u4E2A</strong> \u6570\u5B57\u5217\u8868\u6700\u5927\u503C\u7684\u4EE3\u7801</span></p><p>\u867D\u7136\u4EE3\u7801\u80FD\u591F\u6267\u884C\uFF0C\u4F46\u662F\u91CD\u590D\u7684\u4EE3\u7801\u662F\u5197\u4F59\u4E14\u5BB9\u6613\u51FA\u9519\u7684\uFF0C\u5E76\u4E14\u610F\u5473\u7740\u5F53\u66F4\u65B0\u903B\u8F91\u65F6\u9700\u8981\u4FEE\u6539\u591A\u5904\u5730\u65B9\u7684\u4EE3\u7801\u3002</p><p>\u4E3A\u4E86\u6D88\u9664\u91CD\u590D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u5C42\u62BD\u8C61\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C06\u8868\u73B0\u4E3A\u4E00\u4E2A\u83B7\u53D6\u4EFB\u610F\u6574\u578B\u5217\u8868\u4F5C\u4E3A\u53C2\u6570\u5E76\u5BF9\u5176\u8FDB\u884C\u5904\u7406\u7684\u51FD\u6570\u3002\u8FD9\u5C06\u589E\u52A0\u4EE3\u7801\u7684\u7B80\u6D01\u6027\u5E76\u8BA9\u6211\u4EEC\u5C06\u8868\u8FBE\u548C\u63A8\u5BFC\u5BFB\u627E\u5217\u8868\u4E2D\u6700\u5927\u503C\u7684\u8FD9\u4E2A\u6982\u5FF5\u4E0E\u4F7F\u7528\u8FD9\u4E2A\u6982\u5FF5\u7684\u7279\u5B9A\u4F4D\u7F6E\u76F8\u4E92\u72EC\u7ACB\u3002</p><p>\u5728\u793A\u4F8B 10-3 \u7684\u7A0B\u5E8F\u4E2D\u5C06\u5BFB\u627E\u6700\u5927\u503C\u7684\u4EE3\u7801\u63D0\u53D6\u5230\u4E86\u4E00\u4E2A\u53EB\u505A <code>largest</code> \u7684\u51FD\u6570\u4E2D\u3002\u8FD9\u4E0D\u540C\u4E8E\u793A\u4F8B 10-1 \u4E2D\u7684\u4EE3\u7801\u53EA\u80FD\u5728\u4E00\u4E2A\u7279\u5B9A\u7684\u5217\u8868\u4E2D\u627E\u5230\u6700\u5927\u7684\u6570\u5B57\uFF0C\u8FD9\u4E2A\u7A0B\u5E8F\u53EF\u4EE5\u5728\u4E24\u4E2A\u4E0D\u540C\u7684\u5217\u8868\u4E2D\u627E\u5230\u6700\u5927\u7684\u6570\u5B57\u3002</p><p><span class="filename">\u6587\u4EF6\u540D: src/main.rs</span></p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// ANCHOR: here</span></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">largest</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;[</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> largest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">item </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> list </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> largest </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            largest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    largest</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> number_list </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">34</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">largest</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">number_list</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The largest number is </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR_END: here</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR: here</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> number_list </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">102</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">34</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">89</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">54</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">43</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">largest</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">number_list</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The largest number is </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR_END: here</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6000</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR: here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// ANCHOR_END: here</span></span>
<span class="line"></span></code></pre></div><p><span class="caption">\u793A\u4F8B 10-3\uFF1A\u62BD\u8C61\u540E\u7684\u5BFB\u627E\u4E24\u4E2A\u6570\u5B57\u5217\u8868\u6700\u5927\u503C\u7684\u4EE3\u7801</span></p><p><code>largest</code> \u51FD\u6570\u6709\u4E00\u4E2A\u53C2\u6570 <code>list</code>\uFF0C\u5B83\u4EE3\u8868\u4F1A\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u4EFB\u4F55\u5177\u4F53\u7684 <code>i32</code>\u503C\u7684 slice\u3002\u51FD\u6570\u5B9A\u4E49\u4E2D\u7684 <code>list</code> \u4EE3\u8868\u4EFB\u4F55 <code>&amp;[i32]</code>\u3002\u5F53\u8C03\u7528 <code>largest</code> \u51FD\u6570\u65F6\uFF0C\u5176\u4EE3\u7801\u5B9E\u9645\u4E0A\u8FD0\u884C\u4E8E\u6211\u4EEC\u4F20\u9012\u7684\u7279\u5B9A\u503C\u4E0A\u3002\u76EE\u524D\u4E0D\u9700\u8981\u62C5\u5FC3 <code>for</code> \u5FAA\u73AF\u7684\u8BED\u6CD5\u3002\u8FD9\u91CC\u4E0D\u662F\u5F15\u7528\u4E86\u4E00\u4E2A <code>i32</code> \u7684\u5F15\u7528\uFF0C\u8FD9\u91CC\u53EA\u662F\u6A21\u5F0F\u5339\u914D\u5E76\u8868\u660E\u5FAA\u73AF\u7684\u503C\u5E94\u8BE5\u662F <code>&amp;i32</code>\u3002<a href="./ch18-00-patterns.html">\u7B2C\u5341\u516B\u7AE0</a> \u4F1A\u8BE6\u7EC6\u4ECB\u7ECD\u6A21\u5F0F\u5339\u914D\u3002</p><p>\u603B\u7684\u6765\u8BF4\uFF0C\u4ECE\u793A\u4F8B 10-2 \u5230\u793A\u4F8B 10-3 \u4E2D\u6D89\u53CA\u7684\u673A\u5236\u7ECF\u5386\u4E86\u5982\u4E0B\u51E0\u6B65\uFF1A</p><ol><li>\u627E\u51FA\u91CD\u590D\u4EE3\u7801\u3002</li><li>\u5C06\u91CD\u590D\u4EE3\u7801\u63D0\u53D6\u5230\u4E86\u4E00\u4E2A\u51FD\u6570\u4E2D\uFF0C\u5E76\u5728\u51FD\u6570\u7B7E\u540D\u4E2D\u6307\u5B9A\u4E86\u4EE3\u7801\u4E2D\u7684\u8F93\u5165\u548C\u8FD4\u56DE\u503C\u3002</li><li>\u5C06\u91CD\u590D\u4EE3\u7801\u7684\u4E24\u4E2A\u5B9E\u4F8B\uFF0C\u6539\u4E3A\u8C03\u7528\u51FD\u6570\u3002</li></ol><p>\u5728\u4E0D\u540C\u7684\u573A\u666F\u4F7F\u7528\u4E0D\u540C\u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5229\u7528\u76F8\u540C\u7684\u6B65\u9AA4\u548C\u6CDB\u578B\u6765\u51CF\u5C11\u91CD\u590D\u4EE3\u7801\u3002\u4E0E\u51FD\u6570\u4F53\u53EF\u4EE5\u5728\u62BD\u8C61<code>list</code>\u800C\u4E0D\u662F\u7279\u5B9A\u503C\u4E0A\u64CD\u4F5C\u7684\u65B9\u5F0F\u76F8\u540C\uFF0C\u6CDB\u578B\u5141\u8BB8\u4EE3\u7801\u5BF9\u62BD\u8C61\u7C7B\u578B\u8FDB\u884C\u64CD\u4F5C\u3002</p><p>\u5982\u679C\u6211\u4EEC\u6709\u4E24\u4E2A\u51FD\u6570\uFF0C\u4E00\u4E2A\u5BFB\u627E\u4E00\u4E2A <code>i32</code> \u503C\u7684 slice \u4E2D\u7684\u6700\u5927\u9879\u800C\u53E6\u4E00\u4E2A\u5BFB\u627E <code>char</code> \u503C\u7684 slice \u4E2D\u7684\u6700\u5927\u9879\u8BE5\u600E\u4E48\u529E\uFF1F\u8BE5\u5982\u4F55\u6D88\u9664\u91CD\u590D\u5462\uFF1F\u8BA9\u6211\u4EEC\u62ED\u76EE\u4EE5\u5F85\uFF01</p>`,29),e=[o];function c(t,r,D,C,y,F){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};