import{_ as e,c as a,o as s,d as t}from"./app.a07ec8df.js";const r="/rust-book-chinese/assets/status.ad583417.svg",l="/rust-book-chinese/assets/vitepress-page.3f3be3c6.webp",f=JSON.parse('{"title":"Rust \u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00 \u7B80\u4F53\u4E2D\u6587\u7248","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9759\u6001\u9875\u9762\u6784\u5EFA\u4E0E\u6587\u6863\u64B0\u5199","slug":"\u9759\u6001\u9875\u9762\u6784\u5EFA\u4E0E\u6587\u6863\u64B0\u5199","link":"#\u9759\u6001\u9875\u9762\u6784\u5EFA\u4E0E\u6587\u6863\u64B0\u5199","children":[]},{"level":2,"title":"\u6784\u5EFA","slug":"\u6784\u5EFA","link":"#\u6784\u5EFA","children":[]},{"level":2,"title":"\u6587\u6863\u64B0\u5199","slug":"\u6587\u6863\u64B0\u5199","link":"#\u6587\u6863\u64B0\u5199","children":[]},{"level":2,"title":"\u793E\u533A\u8D44\u6E90","slug":"\u793E\u533A\u8D44\u6E90","link":"#\u793E\u533A\u8D44\u6E90","children":[]},{"level":2,"title":"PDF","slug":"pdf","link":"#pdf","children":[]}],"relativePath":"index.md","lastUpdated":1671185248000}'),n={name:"index.md"},i=t('<h1 id="rust-\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00-\u7B80\u4F53\u4E2D\u6587\u7248" tabindex="-1">Rust \u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00 \u7B80\u4F53\u4E2D\u6587\u7248 <a class="header-anchor" href="#rust-\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00-\u7B80\u4F53\u4E2D\u6587\u7248" aria-hidden="true">#</a></h1><ul><li><a href="https://github.com/KaiserY/trpl-zh-cn" target="_blank" rel="noreferrer">\u539F\u4ED3\u5E93\u5730\u5740</a></li><li><a href="https://tomxuetao.github.io/rust-book-chinese/" target="_blank" rel="noreferrer">\u5728\u7EBF\u5730\u5740</a></li></ul><p><img src="'+r+'" alt="Build Status"></p><ul><li>\u5BF9\u7167\u6E90\u7801\u4F4D\u7F6E\uFF1A<a href="https://github.com/rust-lang/book/tree/main/src" target="_blank" rel="noreferrer">https://github.com/rust-lang/book/tree/main/src</a></li><li>\u6BCF\u7AE0\u7FFB\u8BD1\u5F00\u5934\u90FD\u5E26\u6709\u5B98\u65B9\u94FE\u63A5\u548C commit hash\uFF0C\u82E5\u53D1\u73B0\u4E0E\u5B98\u65B9\u4E0D\u4E00\u81F4\uFF0C\u6B22\u8FCE Issue \u6216 PR \u{1F603}</li></ul><h2 id="\u9759\u6001\u9875\u9762\u6784\u5EFA\u4E0E\u6587\u6863\u64B0\u5199" tabindex="-1">\u9759\u6001\u9875\u9762\u6784\u5EFA\u4E0E\u6587\u6863\u64B0\u5199 <a class="header-anchor" href="#\u9759\u6001\u9875\u9762\u6784\u5EFA\u4E0E\u6587\u6863\u64B0\u5199" aria-hidden="true">#</a></h2><p><img src="'+l+`" alt="image"></p><h2 id="\u6784\u5EFA" tabindex="-1">\u6784\u5EFA <a class="header-anchor" href="#\u6784\u5EFA" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u91C7\u7528 <a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">vitepress</a> \u6253\u5305\u51FA\u9759\u6001\u7F51\u9875\u3002\u5728\u8FD9\u4E4B\u524D\uFF0C\u4F60\u9700\u8981\u5B89\u88C5 <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">Nodejs</a>\u3002</p><p>cd \u5230\u9879\u76EE\u76EE\u5F55\uFF0C\u5B89\u88C5\u5305</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm install</span></span>
<span class="line"></span></code></pre></div><p>\u6784\u5EFA\u597D\u7684\u9759\u6001\u6587\u6863\u4F1A\u51FA\u73B0\u5728 &quot;./.vitepress/dist&quot; \u4E2D</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm run build</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6587\u6863\u64B0\u5199" tabindex="-1">\u6587\u6863\u64B0\u5199 <a class="header-anchor" href="#\u6587\u6863\u64B0\u5199" aria-hidden="true">#</a></h2><p>vitepress \u4F1A\u542F\u52A8\u4E00\u4E2A\u672C\u5730\u670D\u52A1\u5668\uFF0C\u5E76\u5728\u6D4F\u89C8\u5668\u5BF9\u4F60\u4FDD\u5B58\u7684\u6587\u6863\u8FDB\u884C\u5B9E\u65F6\u70ED\u66F4\u65B0\u3002</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm run dev</span></span>
<span class="line"></span></code></pre></div><h2 id="\u793E\u533A\u8D44\u6E90" tabindex="-1">\u793E\u533A\u8D44\u6E90 <a class="header-anchor" href="#\u793E\u533A\u8D44\u6E90" aria-hidden="true">#</a></h2><ul><li>Rust\u8BED\u8A00\u4E2D\u6587\u793E\u533A\uFF1A<a href="https://rust.cc/" target="_blank" rel="noreferrer">https://rust.cc/</a></li><li>Rust English: <a href="https://doc.rust-lang.org/book/" target="_blank" rel="noreferrer">https://doc.rust-lang.org/book/</a></li><li>Rust \u7B80\u4F53\u4E2D\u6587\uFF1A<a href="https://kaisery.github.io/trpl-zh-cn/" target="_blank" rel="noreferrer">https://kaisery.github.io/trpl-zh-cn/</a></li></ul><h2 id="pdf" tabindex="-1">PDF <a class="header-anchor" href="#pdf" aria-hidden="true">#</a></h2><p><a href="https://kaisery.github.io/trpl-zh-cn/Rust%20%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E8%AF%AD%E8%A8%80%20%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%E7%89%88.pdf" target="_blank" rel="noreferrer">Rust \u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00 \u7B80\u4F53\u4E2D\u6587\u7248.pdf</a></p>`,19),o=[i];function p(h,c,d,u,g,b){return s(),a("div",null,o)}const k=e(n,[["render",p]]);export{f as __pageData,k as default};