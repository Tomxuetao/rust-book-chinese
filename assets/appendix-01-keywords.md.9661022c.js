import{_ as e,c as o,o as c,d as l}from"./app.4217174b.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9644\u5F55 A\uFF1A\u5173\u952E\u5B57","slug":"\u9644\u5F55-a-\u5173\u952E\u5B57","link":"#\u9644\u5F55-a-\u5173\u952E\u5B57","children":[{"level":3,"title":"\u76EE\u524D\u6B63\u5728\u4F7F\u7528\u7684\u5173\u952E\u5B57","slug":"\u76EE\u524D\u6B63\u5728\u4F7F\u7528\u7684\u5173\u952E\u5B57","link":"#\u76EE\u524D\u6B63\u5728\u4F7F\u7528\u7684\u5173\u952E\u5B57","children":[]},{"level":3,"title":"\u4FDD\u7559\u505A\u5C06\u6765\u4F7F\u7528\u7684\u5173\u952E\u5B57","slug":"\u4FDD\u7559\u505A\u5C06\u6765\u4F7F\u7528\u7684\u5173\u952E\u5B57","link":"#\u4FDD\u7559\u505A\u5C06\u6765\u4F7F\u7528\u7684\u5173\u952E\u5B57","children":[]},{"level":3,"title":"\u539F\u59CB\u6807\u8BC6\u7B26","slug":"\u539F\u59CB\u6807\u8BC6\u7B26","link":"#\u539F\u59CB\u6807\u8BC6\u7B26","children":[]}]}],"relativePath":"appendix-01-keywords.md","lastUpdated":1668668904000}'),a={name:"appendix-01-keywords.md"},s=l(`<h2 id="\u9644\u5F55-a-\u5173\u952E\u5B57" tabindex="-1">\u9644\u5F55 A\uFF1A\u5173\u952E\u5B57 <a class="header-anchor" href="#\u9644\u5F55-a-\u5173\u952E\u5B57" aria-hidden="true">#</a></h2><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/appendix-01-keywords.md" target="_blank" rel="noreferrer">appendix-01-keywords.md</a><br> commit efbafdba3618487fbc9305318fcab9775132ac15</p></blockquote><p>\u4E0B\u9762\u7684\u5217\u8868\u5305\u542B Rust \u4E2D\u6B63\u5728\u4F7F\u7528\u6216\u8005\u4EE5\u540E\u4F1A\u7528\u5230\u7684\u5173\u952E\u5B57\u3002\u56E0\u6B64\uFF0C\u8FD9\u4E9B\u5173\u952E\u5B57\u4E0D\u80FD\u88AB\u7528\u4F5C\u6807\u8BC6\u7B26\uFF08\u9664\u4E86 \u201C<a href="#%E5%8E%9F%E5%A7%8B%E6%A0%87%E8%AF%86%E7%AC%A6">\u539F\u59CB\u6807\u8BC6\u7B26</a>\u201D \u90E8\u5206\u4ECB\u7ECD\u7684\u539F\u59CB\u6807\u8BC6\u7B26\uFF09\uFF0C\u8FD9\u5305\u62EC\u51FD\u6570\u3001\u53D8\u91CF\u3001\u53C2\u6570\u3001\u7ED3\u6784\u4F53\u5B57\u6BB5\u3001\u6A21\u5757\u3001crate\u3001\u5E38\u91CF\u3001\u5B8F\u3001\u9759\u6001\u503C\u3001\u5C5E\u6027\u3001\u7C7B\u578B\u3001trait \u6216\u751F\u547D\u5468\u671F \u7684\u540D\u5B57\u3002</p><h3 id="\u76EE\u524D\u6B63\u5728\u4F7F\u7528\u7684\u5173\u952E\u5B57" tabindex="-1">\u76EE\u524D\u6B63\u5728\u4F7F\u7528\u7684\u5173\u952E\u5B57 <a class="header-anchor" href="#\u76EE\u524D\u6B63\u5728\u4F7F\u7528\u7684\u5173\u952E\u5B57" aria-hidden="true">#</a></h3><p>\u5982\u4E0B\u5173\u952E\u5B57\u76EE\u524D\u6709\u5BF9\u5E94\u5176\u63CF\u8FF0\u7684\u529F\u80FD\u3002</p><ul><li><code>as</code> - \u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\uFF0C\u6D88\u9664\u7279\u5B9A\u5305\u542B\u9879\u7684 trait \u7684\u6B67\u4E49\uFF0C\u6216\u8005\u5BF9 <code>use</code> \u8BED\u53E5\u4E2D\u7684\u9879\u91CD\u547D\u540D</li><li><code>async</code> - \u8FD4\u56DE\u4E00\u4E2A <code>Future</code> \u800C\u4E0D\u662F\u963B\u585E\u5F53\u524D\u7EBF\u7A0B</li><li><code>await</code> - \u6682\u505C\u6267\u884C\u76F4\u5230 <code>Future</code> \u7684\u7ED3\u679C\u5C31\u7EEA</li><li><code>break</code> - \u7ACB\u523B\u9000\u51FA\u5FAA\u73AF</li><li><code>const</code> - \u5B9A\u4E49\u5E38\u91CF\u6216\u4E0D\u53D8\u88F8\u6307\u9488\uFF08constant raw pointer\uFF09</li><li><code>continue</code> - \u7EE7\u7EED\u8FDB\u5165\u4E0B\u4E00\u6B21\u5FAA\u73AF\u8FED\u4EE3</li><li><code>crate</code> - \u5728\u6A21\u5757\u8DEF\u5F84\u4E2D\uFF0C\u4EE3\u6307 crate root</li><li><code>dyn</code> - \u52A8\u6001\u5206\u53D1 trait \u5BF9\u8C61</li><li><code>else</code> - \u4F5C\u4E3A <code>if</code> \u548C <code>if let</code> \u63A7\u5236\u6D41\u7ED3\u6784\u7684 fallback</li><li><code>enum</code> - \u5B9A\u4E49\u4E00\u4E2A\u679A\u4E3E</li><li><code>extern</code> - \u94FE\u63A5\u4E00\u4E2A\u5916\u90E8\u51FD\u6570\u6216\u53D8\u91CF</li><li><code>false</code> - \u5E03\u5C14\u5B57\u9762\u503C <code>false</code></li><li><code>fn</code> - \u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u6216 <strong>\u51FD\u6570\u6307\u9488\u7C7B\u578B</strong> (<em>function pointer type</em>)</li><li><code>for</code> - \u904D\u5386\u4E00\u4E2A\u8FED\u4EE3\u5668\u6216\u5B9E\u73B0\u4E00\u4E2A trait \u6216\u8005\u6307\u5B9A\u4E00\u4E2A\u66F4\u9AD8\u7EA7\u7684\u751F\u547D\u5468\u671F</li><li><code>if</code> - \u57FA\u4E8E\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u5206\u652F</li><li><code>impl</code> - \u5B9E\u73B0\u81EA\u6709\u6216 trait \u529F\u80FD</li><li><code>in</code> - <code>for</code> \u5FAA\u73AF\u8BED\u6CD5\u7684\u4E00\u90E8\u5206</li><li><code>let</code> - \u7ED1\u5B9A\u4E00\u4E2A\u53D8\u91CF</li><li><code>loop</code> - \u65E0\u6761\u4EF6\u5FAA\u73AF</li><li><code>match</code> - \u6A21\u5F0F\u5339\u914D</li><li><code>mod</code> - \u5B9A\u4E49\u4E00\u4E2A\u6A21\u5757</li><li><code>move</code> - \u4F7F\u95ED\u5305\u83B7\u53D6\u5176\u6240\u6355\u83B7\u9879\u7684\u6240\u6709\u6743</li><li><code>mut</code> - \u8868\u793A\u5F15\u7528\u3001\u88F8\u6307\u9488\u6216\u6A21\u5F0F\u7ED1\u5B9A\u7684\u53EF\u53D8\u6027</li><li><code>pub</code> - \u8868\u793A\u7ED3\u6784\u4F53\u5B57\u6BB5\u3001<code>impl</code> \u5757\u6216\u6A21\u5757\u7684\u516C\u6709\u53EF\u89C1\u6027</li><li><code>ref</code> - \u901A\u8FC7\u5F15\u7528\u7ED1\u5B9A</li><li><code>return</code> - \u4ECE\u51FD\u6570\u4E2D\u8FD4\u56DE</li><li><code>Self</code> - \u5B9A\u4E49\u6216\u5B9E\u73B0 trait \u7684\u7C7B\u578B\u7684\u7C7B\u578B\u522B\u540D</li><li><code>self</code> - \u8868\u793A\u65B9\u6CD5\u672C\u8EAB\u6216\u5F53\u524D\u6A21\u5757</li><li><code>static</code> - \u8868\u793A\u5168\u5C40\u53D8\u91CF\u6216\u5728\u6574\u4E2A\u7A0B\u5E8F\u6267\u884C\u671F\u95F4\u4FDD\u6301\u5176\u751F\u547D\u5468\u671F</li><li><code>struct</code> - \u5B9A\u4E49\u4E00\u4E2A\u7ED3\u6784\u4F53</li><li><code>super</code> - \u8868\u793A\u5F53\u524D\u6A21\u5757\u7684\u7236\u6A21\u5757</li><li><code>trait</code> - \u5B9A\u4E49\u4E00\u4E2A trait</li><li><code>true</code> - \u5E03\u5C14\u5B57\u9762\u503C <code>true</code></li><li><code>type</code> - \u5B9A\u4E49\u4E00\u4E2A\u7C7B\u578B\u522B\u540D\u6216\u5173\u8054\u7C7B\u578B</li><li><code>union</code> - \u5B9A\u4E49\u4E00\u4E2A <a href="https://doc.rust-lang.org/reference/items/unions.html" target="_blank" rel="noreferrer">union</a> \u5E76\u4E14\u662F union \u58F0\u660E\u4E2D\u552F\u4E00\u7528\u5230\u7684\u5173\u952E\u5B57</li><li><code>unsafe</code> - \u8868\u793A\u4E0D\u5B89\u5168\u7684\u4EE3\u7801\u3001\u51FD\u6570\u3001trait \u6216\u5B9E\u73B0</li><li><code>use</code> - \u5F15\u5165\u5916\u90E8\u7A7A\u95F4\u7684\u7B26\u53F7</li><li><code>where</code> - \u8868\u793A\u4E00\u4E2A\u7EA6\u675F\u7C7B\u578B\u7684\u4ECE\u53E5</li><li><code>while</code> - \u57FA\u4E8E\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u5224\u65AD\u662F\u5426\u8FDB\u884C\u5FAA\u73AF</li></ul><h3 id="\u4FDD\u7559\u505A\u5C06\u6765\u4F7F\u7528\u7684\u5173\u952E\u5B57" tabindex="-1">\u4FDD\u7559\u505A\u5C06\u6765\u4F7F\u7528\u7684\u5173\u952E\u5B57 <a class="header-anchor" href="#\u4FDD\u7559\u505A\u5C06\u6765\u4F7F\u7528\u7684\u5173\u952E\u5B57" aria-hidden="true">#</a></h3><p>\u5982\u4E0B\u5173\u952E\u5B57\u6CA1\u6709\u4EFB\u4F55\u529F\u80FD\uFF0C\u4E0D\u8FC7\u7531 Rust \u4FDD\u7559\u4EE5\u5907\u5C06\u6765\u7684\u5E94\u7528\u3002</p><ul><li><code>abstract</code></li><li><code>become</code></li><li><code>box</code></li><li><code>do</code></li><li><code>final</code></li><li><code>macro</code></li><li><code>override</code></li><li><code>priv</code></li><li><code>try</code></li><li><code>typeof</code></li><li><code>unsized</code></li><li><code>virtual</code></li><li><code>yield</code></li></ul><h3 id="\u539F\u59CB\u6807\u8BC6\u7B26" tabindex="-1">\u539F\u59CB\u6807\u8BC6\u7B26 <a class="header-anchor" href="#\u539F\u59CB\u6807\u8BC6\u7B26" aria-hidden="true">#</a></h3><p>\u539F\u59CB\u6807\u8BC6\u7B26\uFF08Raw identifiers\uFF09\u5141\u8BB8\u4F60\u4F7F\u7528\u901A\u5E38\u4E0D\u80FD\u4F7F\u7528\u7684\u5173\u952E\u5B57\uFF0C\u5176\u5E26\u6709 <code>r#</code> \u524D\u7F00\u3002</p><p>\u4F8B\u5982\uFF0C<code>match</code> \u662F\u5173\u952E\u5B57\u3002\u5982\u679C\u5C1D\u8BD5\u7F16\u8BD1\u5982\u4E0B\u4F7F\u7528 <code>match</code> \u4F5C\u4E3A\u540D\u5B57\u7684\u51FD\u6570\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">fn match(needle: &amp;str, haystack: &amp;str) -&gt; bool {</span></span>
<span class="line"><span style="color:#A6ACCD;">    haystack.contains(needle)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F1A\u5F97\u5230\u8FD9\u4E2A\u9519\u8BEF\uFF1A</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">error: expected identifier, found keyword \`match\`</span></span>
<span class="line"><span style="color:#A6ACCD;"> --&gt; src/main.rs:4:4</span></span>
<span class="line"><span style="color:#A6ACCD;">  |</span></span>
<span class="line"><span style="color:#A6ACCD;">4 | fn match(needle: &amp;str, haystack: &amp;str) -&gt; bool {</span></span>
<span class="line"><span style="color:#A6ACCD;">  |    ^^^^^ expected identifier, found keyword</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8BE5\u9519\u8BEF\u8868\u793A\u4F60\u4E0D\u80FD\u5C06\u5173\u952E\u5B57 <code>match</code> \u7528\u4F5C\u51FD\u6570\u6807\u8BC6\u7B26\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u539F\u59CB\u6807\u8BC6\u7B26\u5C06 <code>match</code> \u4F5C\u4E3A\u51FD\u6570\u540D\u79F0\u4F7F\u7528\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: src/main.rs</span></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">fn r#match(needle: &amp;str, haystack: &amp;str) -&gt; bool {</span></span>
<span class="line"><span style="color:#A6ACCD;">    haystack.contains(needle)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">fn main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    assert!(r#match(&quot;foo&quot;, &quot;foobar&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u4EE3\u7801\u7F16\u8BD1\u6CA1\u6709\u4EFB\u4F55\u9519\u8BEF\u3002\u6CE8\u610F <code>r#</code> \u524D\u7F00\u9700\u540C\u65F6\u7528\u4E8E\u51FD\u6570\u540D\u5B9A\u4E49\u548C <code>main</code> \u51FD\u6570\u4E2D\u7684\u8C03\u7528\u3002</p><p>\u539F\u59CB\u6807\u8BC6\u7B26\u5141\u8BB8\u4F7F\u7528\u4F60\u9009\u62E9\u7684\u4EFB\u4F55\u5355\u8BCD\u4F5C\u4E3A\u6807\u8BC6\u7B26\uFF0C\u5373\u4F7F\u8BE5\u5355\u8BCD\u6070\u597D\u662F\u4FDD\u7559\u5173\u952E\u5B57\u3002 \u8FD9\u7ED9\u4E88\u4E86\u6211\u4EEC\u66F4\u5927\u7684\u81EA\u7531\u6765\u9009\u62E9\u540D\u5B57\uFF0C\u8FD9\u6837\u4E0E\u5176\u4ED6\u8BED\u8A00\u4EA4\u4E92\u5F0F\u5C31\u4E0D\u7528\u8003\u8651\u5230\u5173\u952E\u5B57\u95EE\u9898\uFF0C\u5728\u8981\u4EA4\u4E92\u7684\u8BED\u8A00\u4E2D\u8FD9\u4E2A\u540D\u5B57\u4E0D\u662F\u5173\u952E\u5B57\u3002\u6B64\u5916\uFF0C\u539F\u59CB\u6807\u8BC6\u7B26\u5141\u8BB8\u4F60\u4F7F\u7528\u4EE5\u4E0D\u540C\u4E8E\u4F60\u7684 crate \u4F7F\u7528\u7684 Rust \u7248\u672C\u7F16\u5199\u7684\u5E93\u3002\u6BD4\u5982\uFF0C<code>try</code> \u5728 2015 edition \u4E2D\u4E0D\u662F\u5173\u952E\u5B57\uFF0C\u800C\u5728 2018 edition \u5219\u662F\u3002\u6240\u4EE5\u5982\u679C\u7528 2015 edition \u7F16\u5199\u7684\u5E93\u4E2D\u5E26\u6709 <code>try</code> \u51FD\u6570\uFF0C\u5728 2018 edition \u4E2D\u8C03\u7528\u65F6\u5C31\u9700\u8981\u4F7F\u7528\u539F\u59CB\u6807\u8BC6\u7B26\u8BED\u6CD5\uFF0C\u5728\u8FD9\u91CC\u662F <code>r#try</code>\u3002\u6709\u5173\u7248\u672C\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u89C1<a href="./appendix-05-editions.html">\u9644\u5F55 E</a>\u3002</p>`,20),i=[s];function d(n,t,r,p,u,h){return c(),o("div",null,i)}const y=e(a,[["render",d]]);export{m as __pageData,y as default};
