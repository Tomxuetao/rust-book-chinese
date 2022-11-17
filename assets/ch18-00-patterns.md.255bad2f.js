import{_ as e,c as t,o as a,d as r}from"./app.4217174b.js";const f=JSON.parse('{"title":"\u6A21\u5F0F\u4E0E\u6A21\u5F0F\u5339\u914D","description":"","frontmatter":{},"headers":[],"relativePath":"ch18-00-patterns.md","lastUpdated":1668668904000}'),c={name:"ch18-00-patterns.md"},o=r('<h1 id="\u6A21\u5F0F\u4E0E\u6A21\u5F0F\u5339\u914D" tabindex="-1">\u6A21\u5F0F\u4E0E\u6A21\u5F0F\u5339\u914D <a class="header-anchor" href="#\u6A21\u5F0F\u4E0E\u6A21\u5F0F\u5339\u914D" aria-hidden="true">#</a></h1><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/ch18-00-patterns.md" target="_blank" rel="noreferrer">ch18-00-patterns.md</a><br> commit 1fedfc4b96c2017f64ecfcf41a0a07e2e815f24f</p></blockquote><p>\u6A21\u5F0F\u662F Rust \u4E2D\u7279\u6B8A\u7684\u8BED\u6CD5\uFF0C\u5B83\u7528\u6765\u5339\u914D\u7C7B\u578B\u4E2D\u7684\u7ED3\u6784\uFF0C\u65E0\u8BBA\u7C7B\u578B\u662F\u7B80\u5355\u8FD8\u662F\u590D\u6742\u3002\u7ED3\u5408\u4F7F\u7528\u6A21\u5F0F\u548C <code>match</code> \u8868\u8FBE\u5F0F\u4EE5\u53CA\u5176\u4ED6\u7ED3\u6784\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A\u5BF9\u7A0B\u5E8F\u63A7\u5236\u6D41\u7684\u652F\u914D\u6743\u3002\u6A21\u5F0F\u7531\u5982\u4E0B\u4E00\u4E9B\u5185\u5BB9\u7EC4\u5408\u800C\u6210\uFF1A</p><ul><li>\u5B57\u9762\u503C</li><li>\u89E3\u6784\u7684\u6570\u7EC4\u3001\u679A\u4E3E\u3001\u7ED3\u6784\u4F53\u6216\u8005\u5143\u7EC4</li><li>\u53D8\u91CF</li><li>\u901A\u914D\u7B26</li><li>\u5360\u4F4D\u7B26</li></ul><p>\u8FD9\u4E9B\u90E8\u5206\u63CF\u8FF0\u4E86\u6211\u4EEC\u8981\u5904\u7406\u7684\u6570\u636E\u7684\u5F62\u72B6\uFF0C\u63A5\u7740\u53EF\u4EE5\u7528\u5176\u5339\u914D\u503C\u6765\u51B3\u5B9A\u7A0B\u5E8F\u662F\u5426\u62E5\u6709\u6B63\u786E\u7684\u6570\u636E\u6765\u8FD0\u884C\u7279\u5B9A\u90E8\u5206\u7684\u4EE3\u7801\u3002</p><p>\u6211\u4EEC\u901A\u8FC7\u5C06\u4E00\u4E9B\u503C\u4E0E\u6A21\u5F0F\u76F8\u6BD4\u8F83\u6765\u4F7F\u7528\u5B83\u3002\u5982\u679C\u6A21\u5F0F\u5339\u914D\u8FD9\u4E9B\u503C\uFF0C\u6211\u4EEC\u5BF9\u503C\u90E8\u5206\u8FDB\u884C\u76F8\u5E94\u5904\u7406\u3002\u56DE\u5FC6\u4E00\u4E0B\u7B2C\u516D\u7AE0\u8BA8\u8BBA <code>match</code> \u8868\u8FBE\u5F0F\u65F6\u50CF\u786C\u5E01\u5206\u7C7B\u5668\u90A3\u6837\u4F7F\u7528\u6A21\u5F0F\u3002\u5982\u679C\u6570\u636E\u7B26\u5408\u8FD9\u4E2A\u5F62\u72B6\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u547D\u540D\u7684\u7247\u6BB5\u3002\u5982\u679C\u4E0D\u7B26\u5408\uFF0C\u4E0E\u8BE5\u6A21\u5F0F\u76F8\u5173\u7684\u4EE3\u7801\u5219\u4E0D\u4F1A\u8FD0\u884C\u3002</p><p>\u672C\u7AE0\u662F\u6240\u6709\u6A21\u5F0F\u76F8\u5173\u5185\u5BB9\u7684\u53C2\u8003\u3002\u6211\u4EEC\u5C06\u6D89\u53CA\u5230\u4F7F\u7528\u6A21\u5F0F\u7684\u6709\u6548\u4F4D\u7F6E\uFF0C<em>refutable</em> \u4E0E <em>irrefutable</em> \u6A21\u5F0F\u7684\u533A\u522B\uFF0C\u548C\u4F60\u53EF\u80FD\u4F1A\u89C1\u5230\u7684\u4E0D\u540C\u7C7B\u578B\u7684\u6A21\u5F0F\u8BED\u6CD5\u3002\u5728\u6700\u540E\uFF0C\u4F60\u5C06\u4F1A\u770B\u5230\u5982\u4F55\u4F7F\u7528\u6A21\u5F0F\u521B\u5EFA\u5F3A\u5927\u800C\u7B80\u6D01\u7684\u4EE3\u7801\u3002</p>',7),s=[o];function i(l,n,_,d,p,h){return a(),t("div",null,s)}const u=e(c,[["render",i]]);export{f as __pageData,u as default};
