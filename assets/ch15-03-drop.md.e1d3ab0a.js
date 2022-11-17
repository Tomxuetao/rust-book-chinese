import{_ as s,c as n,o as a,d as o}from"./app.4217174b.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528 Drop Trait \u8FD0\u884C\u6E05\u7406\u4EE3\u7801","slug":"\u4F7F\u7528-drop-trait-\u8FD0\u884C\u6E05\u7406\u4EE3\u7801","link":"#\u4F7F\u7528-drop-trait-\u8FD0\u884C\u6E05\u7406\u4EE3\u7801","children":[]}],"relativePath":"ch15-03-drop.md","lastUpdated":1668668904000}'),p={name:"ch15-03-drop.md"},l=o(`<h2 id="\u4F7F\u7528-drop-trait-\u8FD0\u884C\u6E05\u7406\u4EE3\u7801" tabindex="-1">\u4F7F\u7528 <code>Drop</code> Trait \u8FD0\u884C\u6E05\u7406\u4EE3\u7801 <a class="header-anchor" href="#\u4F7F\u7528-drop-trait-\u8FD0\u884C\u6E05\u7406\u4EE3\u7801" aria-hidden="true">#</a></h2><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/ch15-03-drop.md" target="_blank" rel="noreferrer">ch15-03-drop.md</a> <br> commit d44317c3122b44fb713aba66cc295dee3453b24b</p></blockquote><p>\u5BF9\u4E8E\u667A\u80FD\u6307\u9488\u6A21\u5F0F\u6765\u8BF4\u7B2C\u4E8C\u4E2A\u91CD\u8981\u7684 trait \u662F <code>Drop</code>\uFF0C\u5176\u5141\u8BB8\u6211\u4EEC\u5728\u503C\u8981\u79BB\u5F00\u4F5C\u7528\u57DF\u65F6\u6267\u884C\u4E00\u4E9B\u4EE3\u7801\u3002\u53EF\u4EE5\u4E3A\u4EFB\u4F55\u7C7B\u578B\u63D0\u4F9B <code>Drop</code> trait \u7684\u5B9E\u73B0\uFF0C\u540C\u65F6\u6240\u6307\u5B9A\u7684\u4EE3\u7801\u88AB\u7528\u4E8E\u91CA\u653E\u7C7B\u4F3C\u4E8E\u6587\u4EF6\u6216\u7F51\u7EDC\u8FDE\u63A5\u7684\u8D44\u6E90\u3002\u6211\u4EEC\u5728\u667A\u80FD\u6307\u9488\u4E0A\u4E0B\u6587\u4E2D\u8BA8\u8BBA <code>Drop</code> \u662F\u56E0\u4E3A\u5176\u529F\u80FD\u51E0\u4E4E\u603B\u662F\u7528\u4E8E\u5B9E\u73B0\u667A\u80FD\u6307\u9488\u3002\u4F8B\u5982\uFF0C\u5F53 <code>Box&lt;T&gt;</code> \u88AB\u4E22\u5F03\u65F6\u4F1A\u91CA\u653E box \u6307\u5411\u7684\u5806\u7A7A\u95F4\u3002</p><p>\u5728\u5176\u4ED6\u4E00\u4E9B\u8BED\u8A00\u4E2D\uFF0C\u6211\u4EEC\u4E0D\u5F97\u4E0D\u8BB0\u4F4F\u5728\u6BCF\u6B21\u4F7F\u7528\u5B8C\u667A\u80FD\u6307\u9488\u5B9E\u4F8B\u540E\u8C03\u7528\u6E05\u7406\u5185\u5B58\u6216\u8D44\u6E90\u7684\u4EE3\u7801\u3002\u5982\u679C\u5FD8\u8BB0\u7684\u8BDD\uFF0C\u8FD0\u884C\u4EE3\u7801\u7684\u7CFB\u7EDF\u53EF\u80FD\u4F1A\u56E0\u4E3A\u8D1F\u8377\u8FC7\u91CD\u800C\u5D29\u6E83\u3002\u5728 Rust \u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A\u6BCF\u5F53\u503C\u79BB\u5F00\u4F5C\u7528\u57DF\u65F6\u88AB\u6267\u884C\u7684\u4EE3\u7801\uFF0C\u7F16\u8BD1\u5668\u4F1A\u81EA\u52A8\u63D2\u5165\u8FD9\u4E9B\u4EE3\u7801\u3002\u4E8E\u662F\u6211\u4EEC\u5C31\u4E0D\u9700\u8981\u5728\u7A0B\u5E8F\u4E2D\u5230\u5904\u7F16\u5199\u5728\u5B9E\u4F8B\u7ED3\u675F\u65F6\u6E05\u7406\u8FD9\u4E9B\u53D8\u91CF\u7684\u4EE3\u7801 \u2014\u2014 \u800C\u4E14\u8FD8\u4E0D\u4F1A\u6CC4\u6F0F\u8D44\u6E90\u3002</p><p>\u6307\u5B9A\u5728\u503C\u79BB\u5F00\u4F5C\u7528\u57DF\u65F6\u5E94\u8BE5\u6267\u884C\u7684\u4EE3\u7801\u7684\u65B9\u5F0F\u662F\u5B9E\u73B0 <code>Drop</code> trait\u3002<code>Drop</code> trait \u8981\u6C42\u5B9E\u73B0\u4E00\u4E2A\u53EB\u505A <code>drop</code> \u7684\u65B9\u6CD5\uFF0C\u5B83\u83B7\u53D6\u4E00\u4E2A <code>self</code> \u7684\u53EF\u53D8\u5F15\u7528\u3002\u4E3A\u4E86\u80FD\u591F\u770B\u51FA Rust \u4F55\u65F6\u8C03\u7528 <code>drop</code>\uFF0C\u8BA9\u6211\u4EEC\u6682\u65F6\u4F7F\u7528 <code>println!</code> \u8BED\u53E5\u5B9E\u73B0 <code>drop</code>\u3002</p><p>\u793A\u4F8B 15-14 \u5C55\u793A\u4E86\u552F\u4E00\u5B9A\u5236\u529F\u80FD\u5C31\u662F\u5F53\u5176\u5B9E\u4F8B\u79BB\u5F00\u4F5C\u7528\u57DF\u65F6\uFF0C\u6253\u5370\u51FA <code>Dropping CustomSmartPointer!</code> \u7684\u7ED3\u6784\u4F53 <code>CustomSmartPointer</code>\u3002\u8FD9\u4F1A\u6F14\u793A Rust \u4F55\u65F6\u8FD0\u884C <code>drop</code> \u51FD\u6570\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: src/main.rs</span></p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomSmartPointer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Drop</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomSmartPointer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">drop</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Dropping CustomSmartPointer with data \`</span><span style="color:#89DDFF;">{}</span><span style="color:#C3E88D;">\`!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomSmartPointer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">from</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my stuff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomSmartPointer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">from</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">other stuff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CustomSmartPointers created.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><span class="caption">\u793A\u4F8B 15-14\uFF1A\u7ED3\u6784\u4F53 <code>CustomSmartPointer</code>\uFF0C\u5176\u5B9E\u73B0\u4E86\u653E\u7F6E\u6E05\u7406\u4EE3\u7801\u7684 <code>Drop</code> trait</span></p><p><code>Drop</code> trait \u5305\u542B\u5728 prelude \u4E2D\uFF0C\u6240\u4EE5\u65E0\u9700\u5BFC\u5165\u5B83\u3002\u6211\u4EEC\u5728 <code>CustomSmartPointer</code> \u4E0A\u5B9E\u73B0\u4E86 <code>Drop</code> trait\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4E00\u4E2A\u8C03\u7528 <code>println!</code> \u7684 <code>drop</code> \u65B9\u6CD5\u5B9E\u73B0\u3002<code>drop</code> \u51FD\u6570\u4F53\u662F\u653E\u7F6E\u4EFB\u4F55\u5F53\u7C7B\u578B\u5B9E\u4F8B\u79BB\u5F00\u4F5C\u7528\u57DF\u65F6\u671F\u671B\u8FD0\u884C\u7684\u903B\u8F91\u7684\u5730\u65B9\u3002\u8FD9\u91CC\u9009\u62E9\u6253\u5370\u4E00\u4E9B\u6587\u672C\u4EE5\u5C55\u793A Rust \u4F55\u65F6\u8C03\u7528 <code>drop</code>\u3002</p><p>\u5728 <code>main</code> \u4E2D\uFF0C\u6211\u4EEC\u65B0\u5EFA\u4E86\u4E24\u4E2A <code>CustomSmartPointer</code> \u5B9E\u4F8B\u5E76\u6253\u5370\u51FA\u4E86 <code>CustomSmartPointer created.</code>\u3002\u5728 <code>main</code> \u7684\u7ED3\u5C3E\uFF0C<code>CustomSmartPointer</code> \u7684\u5B9E\u4F8B\u4F1A\u79BB\u5F00\u4F5C\u7528\u57DF\uFF0C\u800C Rust \u4F1A\u8C03\u7528\u653E\u7F6E\u4E8E <code>drop</code> \u65B9\u6CD5\u4E2D\u7684\u4EE3\u7801\uFF0C\u6253\u5370\u51FA\u6700\u540E\u7684\u4FE1\u606F\u3002\u6CE8\u610F\u65E0\u9700\u663E\u5F0F\u8C03\u7528 <code>drop</code> \u65B9\u6CD5\uFF1A</p><p>\u5F53\u8FD0\u884C\u8FD9\u4E2A\u7A0B\u5E8F\uFF0C\u4F1A\u51FA\u73B0\u5982\u4E0B\u8F93\u51FA\uFF1A</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo run</span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling drop-example v0.1.0 (file:///projects/drop-example)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Finished dev [unoptimized + debuginfo] target(s) in 0.60s</span></span>
<span class="line"><span style="color:#A6ACCD;">     Running \`target/debug/drop-example\`</span></span>
<span class="line"><span style="color:#A6ACCD;">CustomSmartPointers created.</span></span>
<span class="line"><span style="color:#A6ACCD;">Dropping CustomSmartPointer with data \`other stuff\`!</span></span>
<span class="line"><span style="color:#A6ACCD;">Dropping CustomSmartPointer with data \`my stuff\`!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u5B9E\u4F8B\u79BB\u5F00\u4F5C\u7528\u57DF Rust \u4F1A\u81EA\u52A8\u8C03\u7528 <code>drop</code>\uFF0C\u5E76\u8C03\u7528\u6211\u4EEC\u6307\u5B9A\u7684\u4EE3\u7801\u3002\u53D8\u91CF\u4EE5\u88AB\u521B\u5EFA\u65F6\u76F8\u53CD\u7684\u987A\u5E8F\u88AB\u4E22\u5F03\uFF0C\u6240\u4EE5 <code>d</code> \u5728 <code>c</code> \u4E4B\u524D\u88AB\u4E22\u5F03\u3002\u8FD9\u4E2A\u4F8B\u5B50\u521A\u597D\u7ED9\u4E86\u6211\u4EEC\u4E00\u4E2A drop \u65B9\u6CD5\u5982\u4F55\u5DE5\u4F5C\u7684\u53EF\u89C6\u5316\u6307\u5BFC\uFF0C\u4E0D\u8FC7\u901A\u5E38\u9700\u8981\u6307\u5B9A\u7C7B\u578B\u6240\u9700\u6267\u884C\u7684\u6E05\u7406\u4EE3\u7801\u800C\u4E0D\u662F\u6253\u5370\u4FE1\u606F\u3002</p><h4 id="\u901A\u8FC7-std-mem-drop-\u63D0\u65E9\u4E22\u5F03\u503C" tabindex="-1">\u901A\u8FC7 <code>std::mem::drop</code> \u63D0\u65E9\u4E22\u5F03\u503C <a class="header-anchor" href="#\u901A\u8FC7-std-mem-drop-\u63D0\u65E9\u4E22\u5F03\u503C" aria-hidden="true">#</a></h4><p>\u4E0D\u5E78\u7684\u662F\uFF0C\u6211\u4EEC\u5E76\u4E0D\u80FD\u76F4\u622A\u4E86\u5F53\u7684\u7981\u7528 <code>drop</code> \u8FD9\u4E2A\u529F\u80FD\u3002\u901A\u5E38\u4E5F\u4E0D\u9700\u8981\u7981\u7528 <code>drop</code> \uFF1B\u6574\u4E2A <code>Drop</code> trait \u5B58\u5728\u7684\u610F\u4E49\u5728\u4E8E\u5176\u662F\u81EA\u52A8\u5904\u7406\u7684\u3002\u7136\u800C\uFF0C\u6709\u65F6\u4F60\u53EF\u80FD\u9700\u8981\u63D0\u65E9\u6E05\u7406\u67D0\u4E2A\u503C\u3002\u4E00\u4E2A\u4F8B\u5B50\u662F\u5F53\u4F7F\u7528\u667A\u80FD\u6307\u9488\u7BA1\u7406\u9501\u65F6\uFF1B\u4F60\u53EF\u80FD\u5E0C\u671B\u5F3A\u5236\u8FD0\u884C <code>drop</code> \u65B9\u6CD5\u6765\u91CA\u653E\u9501\u4EE5\u4FBF\u4F5C\u7528\u57DF\u4E2D\u7684\u5176\u4ED6\u4EE3\u7801\u53EF\u4EE5\u83B7\u53D6\u9501\u3002Rust \u5E76\u4E0D\u5141\u8BB8\u6211\u4EEC\u4E3B\u52A8\u8C03\u7528 <code>Drop</code> trait \u7684 <code>drop</code> \u65B9\u6CD5\uFF1B\u5F53\u6211\u4EEC\u5E0C\u671B\u5728\u4F5C\u7528\u57DF\u7ED3\u675F\u4E4B\u524D\u5C31\u5F3A\u5236\u91CA\u653E\u53D8\u91CF\u7684\u8BDD\uFF0C\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528\u7684\u662F\u7531\u6807\u51C6\u5E93\u63D0\u4F9B\u7684 <code>std::mem::drop</code>\u3002</p><p>\u5982\u679C\u6211\u4EEC\u50CF\u662F\u793A\u4F8B 15-14 \u90A3\u6837\u5C1D\u8BD5\u8C03\u7528 <code>Drop</code> trait \u7684 <code>drop</code> \u65B9\u6CD5\uFF0C\u5C31\u4F1A\u5F97\u5230\u50CF\u793A\u4F8B 15-15 \u90A3\u6837\u7684\u7F16\u8BD1\u9519\u8BEF\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: src/main.rs</span></p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomSmartPointer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Drop</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomSmartPointer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">drop</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Dropping CustomSmartPointer with data \`</span><span style="color:#89DDFF;">{}</span><span style="color:#C3E88D;">\`!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// ANCHOR: here</span></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomSmartPointer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">from</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CustomSmartPointer created.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    c</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">drop</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CustomSmartPointer dropped before the end of main.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// ANCHOR_END: here</span></span>
<span class="line"></span></code></pre></div><p><span class="caption">\u793A\u4F8B 15-15\uFF1A\u5C1D\u8BD5\u624B\u52A8\u8C03\u7528 <code>Drop</code> trait \u7684 <code>drop</code> \u65B9\u6CD5\u63D0\u65E9\u6E05\u7406</span></p><p>\u5982\u679C\u5C1D\u8BD5\u7F16\u8BD1\u4EE3\u7801\u4F1A\u5F97\u5230\u5982\u4E0B\u9519\u8BEF\uFF1A</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo run</span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling drop-example v0.1.0 (file:///projects/drop-example)</span></span>
<span class="line"><span style="color:#A6ACCD;">error[E0040]: explicit use of destructor method</span></span>
<span class="line"><span style="color:#A6ACCD;">  --&gt; src/main.rs:16:7</span></span>
<span class="line"><span style="color:#A6ACCD;">   |</span></span>
<span class="line"><span style="color:#A6ACCD;">16 |     c.drop();</span></span>
<span class="line"><span style="color:#A6ACCD;">   |     --^^^^--</span></span>
<span class="line"><span style="color:#A6ACCD;">   |     | |</span></span>
<span class="line"><span style="color:#A6ACCD;">   |     | explicit destructor calls not allowed</span></span>
<span class="line"><span style="color:#A6ACCD;">   |     help: consider using \`drop\` function: \`drop(c)\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">For more information about this error, try \`rustc --explain E0040\`.</span></span>
<span class="line"><span style="color:#A6ACCD;">error: could not compile \`drop-example\` due to previous error</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9519\u8BEF\u4FE1\u606F\u8868\u660E\u4E0D\u5141\u8BB8\u663E\u5F0F\u8C03\u7528 <code>drop</code>\u3002\u9519\u8BEF\u4FE1\u606F\u4F7F\u7528\u4E86\u672F\u8BED <strong>\u6790\u6784\u51FD\u6570</strong>\uFF08<em>destructor</em>\uFF09\uFF0C\u8FD9\u662F\u4E00\u4E2A\u6E05\u7406\u5B9E\u4F8B\u7684\u51FD\u6570\u7684\u901A\u7528\u7F16\u7A0B\u6982\u5FF5\u3002<strong>\u6790\u6784\u51FD\u6570</strong> \u5BF9\u5E94\u521B\u5EFA\u5B9E\u4F8B\u7684 <strong>\u6784\u9020\u51FD\u6570</strong>\u3002Rust \u4E2D\u7684 <code>drop</code> \u51FD\u6570\u5C31\u662F\u8FD9\u4E48\u4E00\u4E2A\u6790\u6784\u51FD\u6570\u3002</p><p>Rust \u4E0D\u5141\u8BB8\u6211\u4EEC\u663E\u5F0F\u8C03\u7528 <code>drop</code> \u56E0\u4E3A Rust \u4ECD\u7136\u4F1A\u5728 <code>main</code> \u7684\u7ED3\u5C3E\u5BF9\u503C\u81EA\u52A8\u8C03\u7528 <code>drop</code>\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u4E00\u4E2A <strong>double free</strong> \u9519\u8BEF\uFF0C\u56E0\u4E3A Rust \u4F1A\u5C1D\u8BD5\u6E05\u7406\u76F8\u540C\u7684\u503C\u4E24\u6B21\u3002</p><p>\u56E0\u4E3A\u4E0D\u80FD\u7981\u7528\u5F53\u503C\u79BB\u5F00\u4F5C\u7528\u57DF\u65F6\u81EA\u52A8\u63D2\u5165\u7684 <code>drop</code>\uFF0C\u5E76\u4E14\u4E0D\u80FD\u663E\u5F0F\u8C03\u7528 <code>drop</code>\uFF0C\u5982\u679C\u6211\u4EEC\u9700\u8981\u5F3A\u5236\u63D0\u65E9\u6E05\u7406\u503C\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>std::mem::drop</code> \u51FD\u6570\u3002</p><p><code>std::mem::drop</code> \u51FD\u6570\u4E0D\u540C\u4E8E <code>Drop</code> trait \u4E2D\u7684 <code>drop</code> \u65B9\u6CD5\u3002\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012\u5E0C\u671B\u63D0\u65E9\u5F3A\u5236\u4E22\u5F03\u7684\u503C\u4F5C\u4E3A\u53C2\u6570\u3002<code>std::mem::drop</code> \u4F4D\u4E8E prelude\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u4FEE\u6539\u793A\u4F8B 15-15 \u4E2D\u7684 <code>main</code> \u6765\u8C03\u7528 <code>drop</code> \u51FD\u6570\u3002\u5982\u793A\u4F8B 15-16 \u6240\u793A\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: src/main.rs</span></p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomSmartPointer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Drop</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomSmartPointer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">drop</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Dropping CustomSmartPointer with data \`</span><span style="color:#89DDFF;">{}</span><span style="color:#C3E88D;">\`!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// ANCHOR: here</span></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomSmartPointer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">from</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CustomSmartPointer created.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">drop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CustomSmartPointer dropped before the end of main.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// ANCHOR_END: here</span></span>
<span class="line"></span></code></pre></div><p><span class="caption">\u793A\u4F8B 15-16: \u5728\u503C\u79BB\u5F00\u4F5C\u7528\u57DF\u4E4B\u524D\u8C03\u7528 <code>std::mem::drop</code> \u663E\u5F0F\u6E05\u7406</span></p><p>\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\u4F1A\u6253\u5370\u51FA\u5982\u4E0B\uFF1A</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo run</span></span>
<span class="line"><span style="color:#A6ACCD;">   Compiling drop-example v0.1.0 (file:///projects/drop-example)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Finished dev [unoptimized + debuginfo] target(s) in 0.73s</span></span>
<span class="line"><span style="color:#A6ACCD;">     Running \`target/debug/drop-example\`</span></span>
<span class="line"><span style="color:#A6ACCD;">CustomSmartPointer created.</span></span>
<span class="line"><span style="color:#A6ACCD;">Dropping CustomSmartPointer with data \`some data\`!</span></span>
<span class="line"><span style="color:#A6ACCD;">CustomSmartPointer dropped before the end of main.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>Dropping CustomSmartPointer with data \`some data\`!</code> \u51FA\u73B0\u5728 <code>CustomSmartPointer created.</code> \u548C <code>CustomSmartPointer dropped before the end of main.</code> \u4E4B\u95F4\uFF0C\u8868\u660E\u4E86 <code>drop</code> \u65B9\u6CD5\u88AB\u8C03\u7528\u4E86\u5E76\u5728\u6B64\u4E22\u5F03\u4E86 <code>c</code>\u3002</p><p><code>Drop</code> trait \u5B9E\u73B0\u4E2D\u6307\u5B9A\u7684\u4EE3\u7801\u53EF\u4EE5\u7528\u4E8E\u8BB8\u591A\u65B9\u9762\uFF0C\u6765\u4F7F\u5F97\u6E05\u7406\u53D8\u5F97\u65B9\u4FBF\u548C\u5B89\u5168\uFF1A\u6BD4\u5982\u53EF\u4EE5\u7528\u5176\u521B\u5EFA\u6211\u4EEC\u81EA\u5DF1\u7684\u5185\u5B58\u5206\u914D\u5668\uFF01\u901A\u8FC7 <code>Drop</code> trait \u548C Rust \u6240\u6709\u6743\u7CFB\u7EDF\uFF0C\u4F60\u65E0\u9700\u62C5\u5FC3\u4E4B\u540E\u7684\u4EE3\u7801\u6E05\u7406\uFF0CRust \u4F1A\u81EA\u52A8\u8003\u8651\u8FD9\u4E9B\u95EE\u9898\u3002</p><p>\u6211\u4EEC\u4E5F\u65E0\u9700\u62C5\u5FC3\u610F\u5916\u7684\u6E05\u7406\u6389\u4ECD\u5728\u4F7F\u7528\u7684\u503C\uFF0C\u8FD9\u4F1A\u9020\u6210\u7F16\u8BD1\u5668\u9519\u8BEF\uFF1A\u6240\u6709\u6743\u7CFB\u7EDF\u786E\u4FDD\u5F15\u7528\u603B\u662F\u6709\u6548\u7684\uFF0C\u4E5F\u4F1A\u786E\u4FDD <code>drop</code> \u53EA\u4F1A\u5728\u503C\u4E0D\u518D\u88AB\u4F7F\u7528\u65F6\u88AB\u8C03\u7528\u4E00\u6B21\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u5B66\u4E60\u4E86 <code>Box&lt;T&gt;</code> \u548C\u4E00\u4E9B\u667A\u80FD\u6307\u9488\u7684\u7279\u6027\uFF0C\u8BA9\u6211\u4EEC\u804A\u804A\u6807\u51C6\u5E93\u4E2D\u5B9A\u4E49\u7684\u5176\u4ED6\u51E0\u79CD\u667A\u80FD\u6307\u9488\u3002</p>`,35),e=[l];function t(c,r,D,C,F,y){return a(),n("div",null,e)}const i=s(p,[["render",t]]);export{A as __pageData,i as default};
