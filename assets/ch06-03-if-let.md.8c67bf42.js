import{_ as s,c as n,o as a,d as l}from"./app.4217174b.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"if let \u7B80\u6D01\u63A7\u5236\u6D41","slug":"if-let-\u7B80\u6D01\u63A7\u5236\u6D41","link":"#if-let-\u7B80\u6D01\u63A7\u5236\u6D41","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"ch06-03-if-let.md","lastUpdated":1668668904000}'),p={name:"ch06-03-if-let.md"},o=l(`<h2 id="if-let-\u7B80\u6D01\u63A7\u5236\u6D41" tabindex="-1"><code>if let</code> \u7B80\u6D01\u63A7\u5236\u6D41 <a class="header-anchor" href="#if-let-\u7B80\u6D01\u63A7\u5236\u6D41" aria-hidden="true">#</a></h2><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/ch06-03-if-let.md" target="_blank" rel="noreferrer">ch06-03-if-let.md</a><br> commit 40c98a5118d2ba93ce9fd39c313bcbce5597818d</p></blockquote><p><code>if let</code> \u8BED\u6CD5\u8BA9\u6211\u4EEC\u4EE5\u4E00\u79CD\u4E0D\u90A3\u4E48\u5197\u957F\u7684\u65B9\u5F0F\u7ED3\u5408 <code>if</code> \u548C <code>let</code>\uFF0C\u6765\u5904\u7406\u53EA\u5339\u914D\u4E00\u4E2A\u6A21\u5F0F\u7684\u503C\u800C\u5FFD\u7565\u5176\u4ED6\u6A21\u5F0F\u7684\u60C5\u51B5\u3002\u8003\u8651\u793A\u4F8B 6-6 \u4E2D\u7684\u7A0B\u5E8F\uFF0C\u5B83\u5339\u914D\u4E00\u4E2A <code>config_max</code> \u53D8\u91CF\u4E2D\u7684 <code>Option&lt;u8&gt;</code> \u503C\u5E76\u53EA\u5E0C\u671B\u5F53\u503C\u4E3A <code>Some</code> \u6210\u5458\u65F6\u6267\u884C\u4EE3\u7801\uFF1A</p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR: here</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> config_max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Some</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#FFCB6B;">u8</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">match</span><span style="color:#A6ACCD;"> config_max </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Some</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The maximum is configured to be </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> max</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        _ </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR_END: here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><span class="caption">\u793A\u4F8B 6-6\uFF1A<code>match</code> \u53EA\u5173\u5FC3\u5F53\u503C\u4E3A <code>Some</code> \u65F6\u6267\u884C\u4EE3\u7801</span></p><p>\u5982\u679C\u503C\u662F <code>Some</code>\uFF0C\u6211\u4EEC\u5E0C\u671B\u6253\u5370\u51FA <code>Some</code> \u6210\u5458\u4E2D\u7684\u503C\uFF0C\u8FD9\u4E2A\u503C\u88AB\u7ED1\u5B9A\u5230\u6A21\u5F0F\u4E2D\u7684 <code>max</code> \u53D8\u91CF\u91CC\u3002\u5BF9\u4E8E <code>None</code> \u503C\u6211\u4EEC\u4E0D\u5E0C\u671B\u505A\u4EFB\u4F55\u64CD\u4F5C\u3002\u4E3A\u4E86\u6EE1\u8DB3 <code>match</code> \u8868\u8FBE\u5F0F\uFF08\u7A77\u5C3D\u6027\uFF09\u7684\u8981\u6C42\uFF0C\u5FC5\u987B\u5728\u5904\u7406\u5B8C\u8FD9\u552F\u4E00\u7684\u6210\u5458\u540E\u52A0\u4E0A <code>_ =&gt; ()</code>\uFF0C\u8FD9\u6837\u4E5F\u8981\u589E\u52A0\u5F88\u591A\u70E6\u4EBA\u7684\u6837\u677F\u4EE3\u7801\u3002</p><p>\u4E0D\u8FC7\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>if let</code> \u8FD9\u79CD\u66F4\u77ED\u7684\u65B9\u5F0F\u7F16\u5199\u3002\u5982\u4E0B\u4EE3\u7801\u4E0E\u793A\u4F8B 6-6 \u4E2D\u7684 <code>match</code> \u884C\u4E3A\u4E00\u81F4\uFF1A</p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR: here</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> config_max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Some</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#FFCB6B;">u8</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Some</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> config_max </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The maximum is configured to be </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> max</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR_END: here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>if let</code> \u8BED\u6CD5\u83B7\u53D6\u901A\u8FC7\u7B49\u53F7\u5206\u9694\u7684\u4E00\u4E2A\u6A21\u5F0F\u548C\u4E00\u4E2A\u8868\u8FBE\u5F0F\u3002\u5B83\u7684\u5DE5\u4F5C\u65B9\u5F0F\u4E0E <code>match</code> \u76F8\u540C\uFF0C\u8FD9\u91CC\u7684\u8868\u8FBE\u5F0F\u5BF9\u5E94 <code>match</code> \u800C\u6A21\u5F0F\u5219\u5BF9\u5E94\u7B2C\u4E00\u4E2A\u5206\u652F\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6A21\u5F0F\u662F <code>Some(max)</code>\uFF0C<code>max</code> \u7ED1\u5B9A\u4E3A <code>Some</code> \u4E2D\u7684\u503C\u3002\u63A5\u7740\u53EF\u4EE5\u5728 <code>if let</code> \u4EE3\u7801\u5757\u4E2D\u4F7F\u7528 <code>max</code> \u4E86\uFF0C\u5C31\u8DDF\u5728\u5BF9\u5E94\u7684 <code>match</code> \u5206\u652F\u4E2D\u4E00\u6837\u3002\u6A21\u5F0F\u4E0D\u5339\u914D\u65F6 <code>if let</code> \u5757\u4E2D\u7684\u4EE3\u7801\u4E0D\u4F1A\u6267\u884C\u3002</p><p>\u4F7F\u7528 <code>if let</code> \u610F\u5473\u7740\u7F16\u5199\u66F4\u5C11\u4EE3\u7801\uFF0C\u66F4\u5C11\u7684\u7F29\u8FDB\u548C\u66F4\u5C11\u7684\u6837\u677F\u4EE3\u7801\u3002\u7136\u800C\uFF0C\u8FD9\u6837\u4F1A\u5931\u53BB <code>match</code> \u5F3A\u5236\u8981\u6C42\u7684\u7A77\u5C3D\u6027\u68C0\u67E5\u3002<code>match</code> \u548C <code>if let</code> \u4E4B\u95F4\u7684\u9009\u62E9\u4F9D\u8D56\u7279\u5B9A\u7684\u73AF\u5883\u4EE5\u53CA\u589E\u52A0\u7B80\u6D01\u5EA6\u548C\u5931\u53BB\u7A77\u5C3D\u6027\u68C0\u67E5\u7684\u6743\u8861\u53D6\u820D\u3002</p><p>\u6362\u53E5\u8BDD\u8BF4\uFF0C\u53EF\u4EE5\u8BA4\u4E3A <code>if let</code> \u662F <code>match</code> \u7684\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u5B83\u5F53\u503C\u5339\u914D\u67D0\u4E00\u6A21\u5F0F\u65F6\u6267\u884C\u4EE3\u7801\u800C\u5FFD\u7565\u6240\u6709\u5176\u4ED6\u503C\u3002</p><p>\u53EF\u4EE5\u5728 <code>if let</code> \u4E2D\u5305\u542B\u4E00\u4E2A <code>else</code>\u3002<code>else</code> \u5757\u4E2D\u7684\u4EE3\u7801\u4E0E <code>match</code> \u8868\u8FBE\u5F0F\u4E2D\u7684 <code>_</code> \u5206\u652F\u5757\u4E2D\u7684\u4EE3\u7801\u76F8\u540C\uFF0C\u8FD9\u6837\u7684 <code>match</code> \u8868\u8FBE\u5F0F\u5C31\u7B49\u540C\u4E8E <code>if let</code> \u548C <code>else</code>\u3002\u56DE\u5FC6\u4E00\u4E0B\u793A\u4F8B 6-4 \u4E2D <code>Coin</code> \u679A\u4E3E\u7684\u5B9A\u4E49\uFF0C\u5176 <code>Quarter</code> \u6210\u5458\u4E5F\u5305\u542B\u4E00\u4E2A <code>UsState</code> \u503C\u3002\u5982\u679C\u60F3\u8981\u8BA1\u6570\u6240\u6709\u4E0D\u662F 25 \u7F8E\u5206\u7684\u786C\u5E01\u7684\u540C\u65F6\u4E5F\u62A5\u544A 25 \u7F8E\u5206\u786C\u5E01\u6240\u5C5E\u7684\u5DDE\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u6837\u4E00\u4E2A <code>match</code> \u8868\u8FBE\u5F0F\uFF1A</p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">derive</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Debug</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UsState</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Alabama</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Alaska</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#676E95;">    // --snip--</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Coin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Penny</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Nickel</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Dime</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Quarter</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">UsState</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> coin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Coin</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">Penny</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR: here</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">match</span><span style="color:#A6ACCD;"> coin </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Coin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Quarter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">State quarter from </span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">:?</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> state</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        _ </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR_END: here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6216\u8005\u53EF\u4EE5\u4F7F\u7528\u8FD9\u6837\u7684 <code>if let</code> \u548C <code>else</code> \u8868\u8FBE\u5F0F\uFF1A</p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">derive</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Debug</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UsState</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Alabama</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Alaska</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#676E95;">    // --snip--</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Coin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Penny</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Nickel</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Dime</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Quarter</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">UsState</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> coin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Coin</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">Penny</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR: here</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Coin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Quarter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> coin </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">State quarter from </span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">:?</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> state</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        count </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">    // ANCHOR_END: here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4F60\u7684\u7A0B\u5E8F\u9047\u5230\u4E00\u4E2A\u4F7F\u7528 <code>match</code> \u8868\u8FBE\u8D77\u6765\u8FC7\u4E8E\u5570\u55E6\u7684\u903B\u8F91\uFF0C\u8BB0\u4F4F <code>if let</code> \u4E5F\u5728\u4F60\u7684 Rust \u5DE5\u5177\u7BB1\u4E2D\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u6211\u4EEC\u6D89\u53CA\u5230\u4E86\u5982\u4F55\u4F7F\u7528\u679A\u4E3E\u6765\u521B\u5EFA\u6709\u4E00\u7CFB\u5217\u53EF\u5217\u4E3E\u503C\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\u3002\u6211\u4EEC\u4E5F\u5C55\u793A\u4E86\u6807\u51C6\u5E93\u7684 <code>Option&lt;T&gt;</code> \u7C7B\u578B\u662F\u5982\u4F55\u5E2E\u52A9\u4F60\u5229\u7528\u7C7B\u578B\u7CFB\u7EDF\u6765\u907F\u514D\u51FA\u9519\u7684\u3002\u5F53\u679A\u4E3E\u503C\u5305\u542B\u6570\u636E\u65F6\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u9700\u8981\u5904\u7406\u591A\u5C11\u60C5\u51B5\u6765\u9009\u62E9\u4F7F\u7528 <code>match</code> \u6216 <code>if let</code> \u6765\u83B7\u53D6\u5E76\u4F7F\u7528\u8FD9\u4E9B\u503C\u3002</p><p>\u4F60\u7684 Rust \u7A0B\u5E8F\u73B0\u5728\u80FD\u591F\u4F7F\u7528\u7ED3\u6784\u4F53\u548C\u679A\u4E3E\u5728\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\u5185\u8868\u73B0\u5176\u5185\u5BB9\u4E86\u3002\u5728\u4F60\u7684 API \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u7C7B\u578B\u4FDD\u8BC1\u4E86\u7C7B\u578B\u5B89\u5168\uFF1A\u7F16\u8BD1\u5668\u4F1A\u786E\u4FDD\u4F60\u7684\u51FD\u6570\u53EA\u4F1A\u5F97\u5230\u5B83\u671F\u671B\u7684\u7C7B\u578B\u7684\u503C\u3002</p><p>\u4E3A\u4E86\u5411\u4F60\u7684\u7528\u6237\u63D0\u4F9B\u4E00\u4E2A\u7EC4\u7EC7\u826F\u597D\u7684 API\uFF0C\u5B83\u4F7F\u7528\u8D77\u6765\u5F88\u76F4\u89C2\u5E76\u4E14\u53EA\u5411\u7528\u6237\u66B4\u9732\u4ED6\u4EEC\u786E\u5B9E\u9700\u8981\u7684\u90E8\u5206\uFF0C\u90A3\u4E48\u73B0\u5728\u5C31\u8BA9\u6211\u4EEC\u8F6C\u5411 Rust \u7684\u6A21\u5757\u7CFB\u7EDF\u5427\u3002</p>`,20),e=[o];function c(t,r,D,F,y,C){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
