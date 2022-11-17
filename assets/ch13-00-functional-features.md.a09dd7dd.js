import{_ as t,c as e,o as r,d as a}from"./app.4217174b.js";const m=JSON.parse('{"title":"Rust \u4E2D\u7684\u51FD\u6570\u5F0F\u8BED\u8A00\u529F\u80FD\uFF1A\u8FED\u4EE3\u5668\u4E0E\u95ED\u5305","description":"","frontmatter":{},"headers":[],"relativePath":"ch13-00-functional-features.md","lastUpdated":1668668904000}'),s={name:"ch13-00-functional-features.md"},o=a('<h1 id="rust-\u4E2D\u7684\u51FD\u6570\u5F0F\u8BED\u8A00\u529F\u80FD-\u8FED\u4EE3\u5668\u4E0E\u95ED\u5305" tabindex="-1">Rust \u4E2D\u7684\u51FD\u6570\u5F0F\u8BED\u8A00\u529F\u80FD\uFF1A\u8FED\u4EE3\u5668\u4E0E\u95ED\u5305 <a class="header-anchor" href="#rust-\u4E2D\u7684\u51FD\u6570\u5F0F\u8BED\u8A00\u529F\u80FD-\u8FED\u4EE3\u5668\u4E0E\u95ED\u5305" aria-hidden="true">#</a></h1><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/ch13-00-functional-features.md" target="_blank" rel="noreferrer">ch13-00-functional-features.md</a><br> commit 1fedfc4b96c2017f64ecfcf41a0a07e2e815f24f</p></blockquote><p>Rust \u7684\u8BBE\u8BA1\u7075\u611F\u6765\u6E90\u4E8E\u5F88\u591A\u73B0\u5B58\u7684\u8BED\u8A00\u548C\u6280\u672F\u3002\u5176\u4E2D\u4E00\u4E2A\u663E\u8457\u7684\u5F71\u54CD\u5C31\u662F <strong>\u51FD\u6570\u5F0F\u7F16\u7A0B</strong>\uFF08<em>functional programming</em>\uFF09\u3002\u51FD\u6570\u5F0F\u7F16\u7A0B\u98CE\u683C\u901A\u5E38\u5305\u542B\u5C06\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u503C\u6216\u5176\u4ED6\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u3001\u5C06\u51FD\u6570\u8D4B\u503C\u7ED9\u53D8\u91CF\u4EE5\u4F9B\u4E4B\u540E\u6267\u884C\u7B49\u7B49\u3002</p><p>\u672C\u7AE0\u6211\u4EEC\u4E0D\u4F1A\u8BA8\u8BBA\u51FD\u6570\u5F0F\u7F16\u7A0B\u662F\u6216\u4E0D\u662F\u4EC0\u4E48\u7684\u95EE\u9898\uFF0C\u800C\u662F\u5C55\u793A Rust \u7684\u4E00\u4E9B\u5728\u529F\u80FD\u4E0A\u4E0E\u5176\u4ED6\u88AB\u8BA4\u4E3A\u662F\u51FD\u6570\u5F0F\u8BED\u8A00\u7C7B\u4F3C\u7684\u7279\u6027\u3002</p><p>\u66F4\u5177\u4F53\u7684\uFF0C\u6211\u4EEC\u5C06\u8981\u6D89\u53CA\uFF1A</p><ul><li><strong>\u95ED\u5305</strong>\uFF08<em>Closures</em>\uFF09\uFF0C\u4E00\u4E2A\u53EF\u4EE5\u50A8\u5B58\u5728\u53D8\u91CF\u91CC\u7684\u7C7B\u4F3C\u51FD\u6570\u7684\u7ED3\u6784</li><li><strong>\u8FED\u4EE3\u5668</strong>\uFF08<em>Iterators</em>\uFF09\uFF0C\u4E00\u79CD\u5904\u7406\u5143\u7D20\u5E8F\u5217\u7684\u65B9\u5F0F</li><li>\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B\u529F\u80FD\u6765\u6539\u8FDB\u7B2C\u5341\u4E8C\u7AE0\u7684 I/O \u9879\u76EE\u3002</li><li>\u8FD9\u4E24\u4E2A\u529F\u80FD\u7684\u6027\u80FD\u3002\uFF08<strong>\u5267\u900F\u8B66\u544A\uFF1A</strong> \u4ED6\u4EEC\u7684\u901F\u5EA6\u8D85\u4E4E\u4F60\u7684\u60F3\u8C61\uFF01\uFF09</li></ul><p>\u8FD8\u6709\u5176\u5B83\u53D7\u51FD\u6570\u5F0F\u98CE\u683C\u5F71\u54CD\u7684 Rust \u529F\u80FD\uFF0C\u6BD4\u5982\u6A21\u5F0F\u5339\u914D\u548C\u679A\u4E3E\uFF0C\u8FD9\u4E9B\u5DF2\u7ECF\u5728\u5176\u4ED6\u7AE0\u8282\u4E2D\u8BB2\u5230\u8FC7\u4E86\u3002\u638C\u63E1\u95ED\u5305\u548C\u8FED\u4EE3\u5668\u5219\u662F\u7F16\u5199\u7B26\u5408\u8BED\u8A00\u98CE\u683C\u7684\u9AD8\u6027\u80FD Rust \u4EE3\u7801\u7684\u91CD\u8981\u4E00\u73AF\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C06\u4E13\u95E8\u7528\u4E00\u6574\u7AE0\u6765\u8BB2\u89E3\u4ED6\u4EEC\u3002</p>',7),n=[o];function c(i,l,u,_,f,p){return r(),e("div",null,n)}const h=t(s,[["render",c]]);export{m as __pageData,h as default};