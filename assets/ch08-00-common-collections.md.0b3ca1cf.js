import{_ as e,c as o,o as t,d as c}from"./app.a07ec8df.js";const f=JSON.parse('{"title":"\u5E38\u89C1\u96C6\u5408","description":"","frontmatter":{},"headers":[],"relativePath":"ch08-00-common-collections.md","lastUpdated":1669167574000}'),r={name:"ch08-00-common-collections.md"},a=c('<h1 id="\u5E38\u89C1\u96C6\u5408" tabindex="-1">\u5E38\u89C1\u96C6\u5408 <a class="header-anchor" href="#\u5E38\u89C1\u96C6\u5408" aria-hidden="true">#</a></h1><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/ch08-00-common-collections.md" target="_blank" rel="noreferrer">ch08-00-common-collections.md</a><br> commit 1fd890031311612e54965f7f800a8c8bd4464663</p></blockquote><p>Rust \u6807\u51C6\u5E93\u4E2D\u5305\u542B\u4E00\u7CFB\u5217\u88AB\u79F0\u4E3A <strong>\u96C6\u5408</strong>\uFF08<em>collections</em>\uFF09\u7684\u975E\u5E38\u6709\u7528\u7684\u6570\u636E\u7ED3\u6784\u3002\u5927\u90E8\u5206\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u90FD\u4EE3\u8868\u4E00\u4E2A\u7279\u5B9A\u7684\u503C\uFF0C\u4E0D\u8FC7\u96C6\u5408\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u503C\u3002\u4E0D\u540C\u4E8E\u5185\u5EFA\u7684\u6570\u7EC4\u548C\u5143\u7EC4\u7C7B\u578B\uFF0C\u8FD9\u4E9B\u96C6\u5408\u6307\u5411\u7684\u6570\u636E\u662F\u50A8\u5B58\u5728\u5806\u4E0A\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u6570\u636E\u7684\u6570\u91CF\u4E0D\u5FC5\u5728\u7F16\u8BD1\u65F6\u5C31\u5DF2\u77E5\uFF0C\u5E76\u4E14\u8FD8\u53EF\u4EE5\u968F\u7740\u7A0B\u5E8F\u7684\u8FD0\u884C\u589E\u957F\u6216\u7F29\u5C0F\u3002\u6BCF\u79CD\u96C6\u5408\u90FD\u6709\u7740\u4E0D\u540C\u529F\u80FD\u548C\u6210\u672C\uFF0C\u800C\u6839\u636E\u5F53\u524D\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684\u96C6\u5408\uFF0C\u8FD9\u662F\u4E00\u9879\u5E94\u5F53\u9010\u6E10\u638C\u63E1\u7684\u6280\u80FD\u3002\u5728\u8FD9\u4E00\u7AE0\u91CC\uFF0C\u6211\u4EEC\u5C06\u8BE6\u7EC6\u7684\u4E86\u89E3\u4E09\u4E2A\u5728 Rust \u7A0B\u5E8F\u4E2D\u88AB\u5E7F\u6CDB\u4F7F\u7528\u7684\u96C6\u5408\uFF1A</p><ul><li><em>vector</em> \u5141\u8BB8\u6211\u4EEC\u4E00\u4E2A\u6328\u7740\u4E00\u4E2A\u5730\u50A8\u5B58\u4E00\u7CFB\u5217\u6570\u91CF\u53EF\u53D8\u7684\u503C</li><li><strong>\u5B57\u7B26\u4E32</strong>\uFF08<em>string</em>\uFF09\u662F\u5B57\u7B26\u7684\u96C6\u5408\u3002\u6211\u4EEC\u4E4B\u524D\u89C1\u8FC7 <code>String</code> \u7C7B\u578B\uFF0C\u4E0D\u8FC7\u5728\u672C\u7AE0\u6211\u4EEC\u5C06\u6DF1\u5165\u4E86\u89E3\u3002</li><li><strong>\u54C8\u5E0C map</strong>\uFF08<em>hash map</em>\uFF09\u5141\u8BB8\u6211\u4EEC\u5C06\u503C\u4E0E\u4E00\u4E2A\u7279\u5B9A\u7684\u952E\uFF08key\uFF09\u76F8\u5173\u8054\u3002\u8FD9\u662F\u4E00\u4E2A\u53EB\u505A <em>map</em> \u7684\u66F4\u901A\u7528\u7684\u6570\u636E\u7ED3\u6784\u7684\u7279\u5B9A\u5B9E\u73B0\u3002</li></ul><p>\u5BF9\u4E8E\u6807\u51C6\u5E93\u63D0\u4F9B\u7684\u5176\u4ED6\u7C7B\u578B\u7684\u96C6\u5408\uFF0C\u8BF7\u67E5\u770B<a href="https://doc.rust-lang.org/std/collections/index.html" target="_blank" rel="noreferrer">\u6587\u6863</a>\u3002</p><p>\u6211\u4EEC\u5C06\u8BA8\u8BBA\u5982\u4F55\u521B\u5EFA\u548C\u66F4\u65B0 vector\u3001\u5B57\u7B26\u4E32\u548C\u54C8\u5E0C map\uFF0C\u4EE5\u53CA\u5B83\u4EEC\u6709\u4EC0\u4E48\u7279\u522B\u4E4B\u5904\u3002</p>',6),n=[a];function s(l,m,i,d,_,p){return t(),o("div",null,n)}const g=e(r,[["render",s]]);export{f as __pageData,g as default};