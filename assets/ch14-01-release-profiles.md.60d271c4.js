import{_ as e,c as s,o,d as a}from"./app.4217174b.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u91C7\u7528\u53D1\u5E03\u914D\u7F6E\u81EA\u5B9A\u4E49\u6784\u5EFA","slug":"\u91C7\u7528\u53D1\u5E03\u914D\u7F6E\u81EA\u5B9A\u4E49\u6784\u5EFA","link":"#\u91C7\u7528\u53D1\u5E03\u914D\u7F6E\u81EA\u5B9A\u4E49\u6784\u5EFA","children":[]}],"relativePath":"ch14-01-release-profiles.md","lastUpdated":1668668904000}'),l={name:"ch14-01-release-profiles.md"},n=a(`<h2 id="\u91C7\u7528\u53D1\u5E03\u914D\u7F6E\u81EA\u5B9A\u4E49\u6784\u5EFA" tabindex="-1">\u91C7\u7528\u53D1\u5E03\u914D\u7F6E\u81EA\u5B9A\u4E49\u6784\u5EFA <a class="header-anchor" href="#\u91C7\u7528\u53D1\u5E03\u914D\u7F6E\u81EA\u5B9A\u4E49\u6784\u5EFA" aria-hidden="true">#</a></h2><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/ch14-01-release-profiles.md" target="_blank" rel="noreferrer">ch14-01-release-profiles.md</a><br> commit d44317c3122b44fb713aba66cc295dee3453b24b</p></blockquote><p>\u5728 Rust \u4E2D <strong>\u53D1\u5E03\u914D\u7F6E</strong>\uFF08<em>release profiles</em>\uFF09\u662F\u9884\u5B9A\u4E49\u7684\u3001\u53EF\u5B9A\u5236\u7684\u5E26\u6709\u4E0D\u540C\u9009\u9879\u7684\u914D\u7F6E\uFF0C\u4ED6\u4EEC\u5141\u8BB8\u7A0B\u5E8F\u5458\u66F4\u7075\u6D3B\u5730\u63A7\u5236\u4EE3\u7801\u7F16\u8BD1\u7684\u591A\u79CD\u9009\u9879\u3002\u6BCF\u4E00\u4E2A\u914D\u7F6E\u90FD\u5F7C\u6B64\u76F8\u4E92\u72EC\u7ACB\u3002</p><p>Cargo \u6709\u4E24\u4E2A\u4E3B\u8981\u7684\u914D\u7F6E\uFF1A\u8FD0\u884C <code>cargo build</code> \u65F6\u91C7\u7528\u7684 <code>dev</code> \u914D\u7F6E\u548C\u8FD0\u884C <code>cargo build --release</code> \u7684 <code>release</code> \u914D\u7F6E\u3002<code>dev</code> \u914D\u7F6E\u88AB\u5B9A\u4E49\u4E3A\u5F00\u53D1\u65F6\u7684\u597D\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C<code>release</code> \u914D\u7F6E\u5219\u6709\u7740\u826F\u597D\u7684\u53D1\u5E03\u6784\u5EFA\u7684\u9ED8\u8BA4\u914D\u7F6E\u3002</p><p>\u8FD9\u4E9B\u914D\u7F6E\u540D\u79F0\u53EF\u80FD\u5F88\u773C\u719F\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u51FA\u73B0\u5728\u6784\u5EFA\u7684\u8F93\u51FA\u4E2D\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cargo build</span></span>
<span class="line"><span style="color:#A6ACCD;">    Finished dev [unoptimized + debuginfo] target(s) in 0.0s</span></span>
<span class="line"><span style="color:#A6ACCD;">$ cargo build --release</span></span>
<span class="line"><span style="color:#A6ACCD;">    Finished release [optimized] target(s) in 0.0s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6784\u5EFA\u8F93\u51FA\u4E2D\u7684 <code>dev</code> \u548C <code>release</code> \u8868\u660E\u7F16\u8BD1\u5668\u5728\u4F7F\u7528\u4E0D\u540C\u7684\u914D\u7F6E\u3002</p><p>\u5F53\u9879\u76EE\u7684 <em>Cargo.toml</em> \u6587\u4EF6\u4E2D\u6CA1\u6709\u4EFB\u4F55 <code>[profile.*]</code> \u90E8\u5206\u7684\u65F6\u5019\uFF0CCargo \u4F1A\u5BF9\u6BCF\u4E00\u4E2A\u914D\u7F6E\u90FD\u91C7\u7528\u9ED8\u8BA4\u8BBE\u7F6E\u3002\u901A\u8FC7\u589E\u52A0\u4EFB\u4F55\u5E0C\u671B\u5B9A\u5236\u7684\u914D\u7F6E\u5BF9\u5E94\u7684 <code>[profile.*]</code> \u90E8\u5206\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9009\u62E9\u8986\u76D6\u4EFB\u610F\u9ED8\u8BA4\u8BBE\u7F6E\u7684\u5B50\u96C6\u3002\u4F8B\u5982\uFF0C\u5982\u4E0B\u662F <code>dev</code> \u548C <code>release</code> \u914D\u7F6E\u7684 <code>opt-level</code> \u8BBE\u7F6E\u7684\u9ED8\u8BA4\u503C\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: Cargo.toml</span></p><div class="language-toml"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">profile</span><span style="color:#A6ACCD;">.</span><span style="color:#FFCB6B;">dev</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">opt-level </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">profile</span><span style="color:#A6ACCD;">.</span><span style="color:#FFCB6B;">release</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">opt-level </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span></code></pre></div><p><code>opt-level</code> \u8BBE\u7F6E\u63A7\u5236 Rust \u4F1A\u5BF9\u4EE3\u7801\u8FDB\u884C\u4F55\u79CD\u7A0B\u5EA6\u7684\u4F18\u5316\u3002\u8FD9\u4E2A\u914D\u7F6E\u7684\u503C\u4ECE 0 \u5230 3\u3002\u8D8A\u9AD8\u7684\u4F18\u5316\u7EA7\u522B\u9700\u8981\u66F4\u591A\u7684\u65F6\u95F4\u7F16\u8BD1\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u5728\u8FDB\u884C\u5F00\u53D1\u5E76\u7ECF\u5E38\u7F16\u8BD1\uFF0C\u53EF\u80FD\u4F1A\u5E0C\u671B\u5728\u727A\u7272\u4E00\u4E9B\u4EE3\u7801\u6027\u80FD\u7684\u60C5\u51B5\u4E0B\u7F16\u8BD1\u5F97\u5FEB\u4E00\u4E9B\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48 <code>dev</code> \u7684 <code>opt-level</code> \u9ED8\u8BA4\u4E3A <code>0</code>\u3002\u5F53\u4F60\u51C6\u5907\u53D1\u5E03\u65F6\uFF0C\u82B1\u8D39\u66F4\u591A\u65F6\u95F4\u5728\u7F16\u8BD1\u4E0A\u5219\u66F4\u597D\u3002\u53EA\u9700\u8981\u5728\u53D1\u5E03\u6A21\u5F0F\u7F16\u8BD1\u4E00\u6B21\uFF0C\u800C\u7F16\u8BD1\u51FA\u6765\u7684\u7A0B\u5E8F\u5219\u4F1A\u8FD0\u884C\u5F88\u591A\u6B21\uFF0C\u6240\u4EE5\u53D1\u5E03\u6A21\u5F0F\u7528\u66F4\u957F\u7684\u7F16\u8BD1\u65F6\u95F4\u6362\u53D6\u8FD0\u884C\u66F4\u5FEB\u7684\u4EE3\u7801\u3002\u8FD9\u6B63\u662F\u4E3A\u4EC0\u4E48 <code>release</code> \u914D\u7F6E\u7684 <code>opt-level</code> \u9ED8\u8BA4\u4E3A <code>3</code>\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u9009\u62E9\u901A\u8FC7\u5728 <em>Cargo.toml</em> \u589E\u52A0\u4E0D\u540C\u7684\u503C\u6765\u8986\u76D6\u4EFB\u4F55\u9ED8\u8BA4\u8BBE\u7F6E\u3002\u6BD4\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u8981\u5728\u5F00\u53D1\u914D\u7F6E\u4E2D\u4F7F\u7528\u7EA7\u522B 1 \u7684\u4F18\u5316\uFF0C\u5219\u53EF\u4EE5\u5728 <em>Cargo.toml</em> \u4E2D\u589E\u52A0\u8FD9\u4E24\u884C\uFF1A</p><p><span class="filename">\u6587\u4EF6\u540D: Cargo.toml</span></p><div class="language-toml"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">profile</span><span style="color:#A6ACCD;">.</span><span style="color:#FFCB6B;">dev</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">opt-level </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u4F1A\u8986\u76D6\u9ED8\u8BA4\u7684\u8BBE\u7F6E <code>0</code>\u3002\u73B0\u5728\u8FD0\u884C <code>cargo build</code> \u65F6\uFF0CCargo \u5C06\u4F1A\u4F7F\u7528 <code>dev</code> \u7684\u9ED8\u8BA4\u914D\u7F6E\u52A0\u4E0A\u5B9A\u5236\u7684 <code>opt-level</code>\u3002\u56E0\u4E3A <code>opt-level</code> \u8BBE\u7F6E\u4E3A <code>1</code>\uFF0CCargo \u4F1A\u6BD4\u9ED8\u8BA4\u8FDB\u884C\u66F4\u591A\u7684\u4F18\u5316\uFF0C\u4F46\u662F\u6CA1\u6709\u53D1\u5E03\u6784\u5EFA\u90A3\u4E48\u591A\u3002</p><p>\u5BF9\u4E8E\u6BCF\u4E2A\u914D\u7F6E\u7684\u8BBE\u7F6E\u548C\u5176\u9ED8\u8BA4\u503C\u7684\u5B8C\u6574\u5217\u8868\uFF0C\u8BF7\u67E5\u770B <a href="https://doc.rust-lang.org/cargo/reference/profiles.html" target="_blank" rel="noreferrer">Cargo \u7684\u6587\u6863</a>\u3002</p>`,16),p=[n];function c(r,t,d,i,C,g){return o(),s("div",null,p)}const F=e(l,[["render",c]]);export{m as __pageData,F as default};
