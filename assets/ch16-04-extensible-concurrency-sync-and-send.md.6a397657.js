import{_ as e,c,o as d,d as o}from"./app.4217174b.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528 Sync \u548C Send trait \u7684\u53EF\u6269\u5C55\u5E76\u53D1","slug":"\u4F7F\u7528-sync-\u548C-send-trait-\u7684\u53EF\u6269\u5C55\u5E76\u53D1","link":"#\u4F7F\u7528-sync-\u548C-send-trait-\u7684\u53EF\u6269\u5C55\u5E76\u53D1","children":[{"level":3,"title":"\u901A\u8FC7 Send \u5141\u8BB8\u5728\u7EBF\u7A0B\u95F4\u8F6C\u79FB\u6240\u6709\u6743","slug":"\u901A\u8FC7-send-\u5141\u8BB8\u5728\u7EBF\u7A0B\u95F4\u8F6C\u79FB\u6240\u6709\u6743","link":"#\u901A\u8FC7-send-\u5141\u8BB8\u5728\u7EBF\u7A0B\u95F4\u8F6C\u79FB\u6240\u6709\u6743","children":[]},{"level":3,"title":"Sync \u5141\u8BB8\u591A\u7EBF\u7A0B\u8BBF\u95EE","slug":"sync-\u5141\u8BB8\u591A\u7EBF\u7A0B\u8BBF\u95EE","link":"#sync-\u5141\u8BB8\u591A\u7EBF\u7A0B\u8BBF\u95EE","children":[]},{"level":3,"title":"\u624B\u52A8\u5B9E\u73B0 Send \u548C Sync \u662F\u4E0D\u5B89\u5168\u7684","slug":"\u624B\u52A8\u5B9E\u73B0-send-\u548C-sync-\u662F\u4E0D\u5B89\u5168\u7684","link":"#\u624B\u52A8\u5B9E\u73B0-send-\u548C-sync-\u662F\u4E0D\u5B89\u5168\u7684","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"ch16-04-extensible-concurrency-sync-and-send.md","lastUpdated":1668668904000}'),n={name:"ch16-04-extensible-concurrency-sync-and-send.md"},t=o('<h2 id="\u4F7F\u7528-sync-\u548C-send-trait-\u7684\u53EF\u6269\u5C55\u5E76\u53D1" tabindex="-1">\u4F7F\u7528 <code>Sync</code> \u548C <code>Send</code> trait \u7684\u53EF\u6269\u5C55\u5E76\u53D1 <a class="header-anchor" href="#\u4F7F\u7528-sync-\u548C-send-trait-\u7684\u53EF\u6269\u5C55\u5E76\u53D1" aria-hidden="true">#</a></h2><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/ch16-04-extensible-concurrency-sync-and-send.md" target="_blank" rel="noreferrer">ch16-04-extensible-concurrency-sync-and-send.md</a> <br> commit a7a6804a2444ee05ff8b93f54973a9ce0f6511c1</p></blockquote><p>Rust \u7684\u5E76\u53D1\u6A21\u578B\u4E2D\u4E00\u4E2A\u6709\u8DA3\u7684\u65B9\u9762\u662F\uFF1A\u8BED\u8A00\u672C\u8EAB\u5BF9\u5E76\u53D1\u77E5\u4E4B <strong>\u751A\u5C11</strong>\u3002\u6211\u4EEC\u4E4B\u524D\u8BA8\u8BBA\u7684\u51E0\u4E4E\u6240\u6709\u5185\u5BB9\uFF0C\u90FD\u5C5E\u4E8E\u6807\u51C6\u5E93\uFF0C\u800C\u4E0D\u662F\u8BED\u8A00\u672C\u8EAB\u7684\u5185\u5BB9\u3002\u7531\u4E8E\u4E0D\u9700\u8981\u8BED\u8A00\u63D0\u4F9B\u5E76\u53D1\u76F8\u5173\u7684\u57FA\u7840\u8BBE\u65BD\uFF0C\u5E76\u53D1\u65B9\u6848\u4E0D\u53D7\u6807\u51C6\u5E93\u6216\u8BED\u8A00\u6240\u9650\uFF1A\u6211\u4EEC\u53EF\u4EE5\u7F16\u5199\u81EA\u5DF1\u7684\u6216\u4F7F\u7528\u522B\u4EBA\u7F16\u5199\u7684\u5E76\u53D1\u529F\u80FD\u3002</p><p>\u7136\u800C\u6709\u4E24\u4E2A\u5E76\u53D1\u6982\u5FF5\u662F\u5185\u5D4C\u4E8E\u8BED\u8A00\u4E2D\u7684\uFF1A<code>std::marker</code> \u4E2D\u7684 <code>Sync</code> \u548C <code>Send</code> trait\u3002</p><h3 id="\u901A\u8FC7-send-\u5141\u8BB8\u5728\u7EBF\u7A0B\u95F4\u8F6C\u79FB\u6240\u6709\u6743" tabindex="-1">\u901A\u8FC7 <code>Send</code> \u5141\u8BB8\u5728\u7EBF\u7A0B\u95F4\u8F6C\u79FB\u6240\u6709\u6743 <a class="header-anchor" href="#\u901A\u8FC7-send-\u5141\u8BB8\u5728\u7EBF\u7A0B\u95F4\u8F6C\u79FB\u6240\u6709\u6743" aria-hidden="true">#</a></h3><p><code>Send</code> \u6807\u8BB0 trait \u8868\u660E\u5B9E\u73B0\u4E86 <code>Send</code> \u7684\u7C7B\u578B\u503C\u7684\u6240\u6709\u6743\u53EF\u4EE5\u5728\u7EBF\u7A0B\u95F4\u4F20\u9001\u3002\u51E0\u4E4E\u6240\u6709\u7684 Rust \u7C7B\u578B\u90FD\u662F<code>Send</code> \u7684\uFF0C\u4E0D\u8FC7\u6709\u4E00\u4E9B\u4F8B\u5916\uFF0C\u5305\u62EC <code>Rc&lt;T&gt;</code>\uFF1A\u8FD9\u662F\u4E0D\u80FD <code>Send</code> \u7684\uFF0C\u56E0\u4E3A\u5982\u679C\u514B\u9686\u4E86 <code>Rc&lt;T&gt;</code> \u7684\u503C\u5E76\u5C1D\u8BD5\u5C06\u514B\u9686\u7684\u6240\u6709\u6743\u8F6C\u79FB\u5230\u53E6\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u8FD9\u4E24\u4E2A\u7EBF\u7A0B\u90FD\u53EF\u80FD\u540C\u65F6\u66F4\u65B0\u5F15\u7528\u8BA1\u6570\u3002\u4E3A\u6B64\uFF0C<code>Rc&lt;T&gt;</code> \u88AB\u5B9E\u73B0\u4E3A\u7528\u4E8E\u5355\u7EBF\u7A0B\u573A\u666F\uFF0C\u8FD9\u65F6\u4E0D\u9700\u8981\u4E3A\u62E5\u6709\u7EBF\u7A0B\u5B89\u5168\u7684\u5F15\u7528\u8BA1\u6570\u800C\u4ED8\u51FA\u6027\u80FD\u4EE3\u4EF7\u3002</p><p>\u56E0\u6B64\uFF0CRust \u7C7B\u578B\u7CFB\u7EDF\u548C trait bound \u786E\u4FDD\u6C38\u8FDC\u4E5F\u4E0D\u4F1A\u610F\u5916\u7684\u5C06\u4E0D\u5B89\u5168\u7684 <code>Rc&lt;T&gt;</code> \u5728\u7EBF\u7A0B\u95F4\u53D1\u9001\u3002\u5F53\u5C1D\u8BD5\u5728\u793A\u4F8B 16-14 \u4E2D\u8FD9\u4E48\u505A\u7684\u65F6\u5019\uFF0C\u4F1A\u5F97\u5230\u9519\u8BEF <code>the trait Send is not implemented for Rc&lt;Mutex&lt;i32&gt;&gt;</code>\u3002\u800C\u4F7F\u7528\u6807\u8BB0\u4E3A <code>Send</code> \u7684 <code>Arc&lt;T&gt;</code> \u65F6\uFF0C\u5C31\u6CA1\u6709\u95EE\u9898\u4E86\u3002</p><p>\u4EFB\u4F55\u5B8C\u5168\u7531 <code>Send</code> \u7684\u7C7B\u578B\u7EC4\u6210\u7684\u7C7B\u578B\u4E5F\u4F1A\u81EA\u52A8\u88AB\u6807\u8BB0\u4E3A <code>Send</code>\u3002\u51E0\u4E4E\u6240\u6709\u57FA\u672C\u7C7B\u578B\u90FD\u662F <code>Send</code> \u7684\uFF0C\u9664\u4E86\u7B2C\u5341\u4E5D\u7AE0\u5C06\u4F1A\u8BA8\u8BBA\u7684\u88F8\u6307\u9488\uFF08raw pointer\uFF09\u3002</p><h3 id="sync-\u5141\u8BB8\u591A\u7EBF\u7A0B\u8BBF\u95EE" tabindex="-1"><code>Sync</code> \u5141\u8BB8\u591A\u7EBF\u7A0B\u8BBF\u95EE <a class="header-anchor" href="#sync-\u5141\u8BB8\u591A\u7EBF\u7A0B\u8BBF\u95EE" aria-hidden="true">#</a></h3><p><code>Sync</code> \u6807\u8BB0 trait \u8868\u660E\u4E00\u4E2A\u5B9E\u73B0\u4E86 <code>Sync</code> \u7684\u7C7B\u578B\u53EF\u4EE5\u5B89\u5168\u7684\u5728\u591A\u4E2A\u7EBF\u7A0B\u4E2D\u62E5\u6709\u5176\u503C\u7684\u5F15\u7528\u3002\u6362\u4E00\u79CD\u65B9\u5F0F\u6765\u8BF4\uFF0C\u5BF9\u4E8E\u4EFB\u610F\u7C7B\u578B <code>T</code>\uFF0C\u5982\u679C <code>&amp;T</code>\uFF08<code>T</code> \u7684\u4E0D\u53EF\u53D8\u5F15\u7528\uFF09\u662F <code>Send</code> \u7684\u8BDD <code>T</code> \u5C31\u662F <code>Sync</code> \u7684\uFF0C\u8FD9\u610F\u5473\u7740\u5176\u5F15\u7528\u5C31\u53EF\u4EE5\u5B89\u5168\u7684\u53D1\u9001\u5230\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u3002\u7C7B\u4F3C\u4E8E <code>Send</code> \u7684\u60C5\u51B5\uFF0C\u57FA\u672C\u7C7B\u578B\u662F <code>Sync</code> \u7684\uFF0C\u5B8C\u5168\u7531 <code>Sync</code> \u7684\u7C7B\u578B\u7EC4\u6210\u7684\u7C7B\u578B\u4E5F\u662F <code>Sync</code> \u7684\u3002</p><p>\u667A\u80FD\u6307\u9488 <code>Rc&lt;T&gt;</code> \u4E5F\u4E0D\u662F <code>Sync</code> \u7684\uFF0C\u51FA\u4E8E\u5176\u4E0D\u662F <code>Send</code> \u76F8\u540C\u7684\u539F\u56E0\u3002<code>RefCell&lt;T&gt;</code>\uFF08\u7B2C\u5341\u4E94\u7AE0\u8BA8\u8BBA\u8FC7\uFF09\u548C <code>Cell&lt;T&gt;</code> \u7CFB\u5217\u7C7B\u578B\u4E0D\u662F <code>Sync</code> \u7684\u3002<code>RefCell&lt;T&gt;</code> \u5728\u8FD0\u884C\u65F6\u6240\u8FDB\u884C\u7684\u501F\u7528\u68C0\u67E5\u4E5F\u4E0D\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\u3002<code>Mutex&lt;T&gt;</code> \u662F <code>Sync</code> \u7684\uFF0C\u6B63\u5982 <a href="./ch16-03-shared-state.html#\u5728\u7EBF\u7A0B\u95F4\u5171\u4EAB-mutext">\u201C\u5728\u7EBF\u7A0B\u95F4\u5171\u4EAB <code>Mutex&lt;T&gt;</code>\u201D</a> \u90E8\u5206\u6240\u8BB2\u7684\u5B83\u53EF\u4EE5\u88AB\u7528\u6765\u5728\u591A\u7EBF\u7A0B\u4E2D\u5171\u4EAB\u8BBF\u95EE\u3002</p><h3 id="\u624B\u52A8\u5B9E\u73B0-send-\u548C-sync-\u662F\u4E0D\u5B89\u5168\u7684" tabindex="-1">\u624B\u52A8\u5B9E\u73B0 <code>Send</code> \u548C <code>Sync</code> \u662F\u4E0D\u5B89\u5168\u7684 <a class="header-anchor" href="#\u624B\u52A8\u5B9E\u73B0-send-\u548C-sync-\u662F\u4E0D\u5B89\u5168\u7684" aria-hidden="true">#</a></h3><p>\u901A\u5E38\u5E76\u4E0D\u9700\u8981\u624B\u52A8\u5B9E\u73B0 <code>Send</code> \u548C <code>Sync</code> trait\uFF0C\u56E0\u4E3A\u7531 <code>Send</code> \u548C <code>Sync</code> \u7684\u7C7B\u578B\u7EC4\u6210\u7684\u7C7B\u578B\uFF0C\u81EA\u52A8\u5C31\u662F <code>Send</code> \u548C <code>Sync</code> \u7684\u3002\u56E0\u4E3A\u4ED6\u4EEC\u662F\u6807\u8BB0 trait\uFF0C\u751A\u81F3\u90FD\u4E0D\u9700\u8981\u5B9E\u73B0\u4EFB\u4F55\u65B9\u6CD5\u3002\u4ED6\u4EEC\u53EA\u662F\u7528\u6765\u52A0\u5F3A\u5E76\u53D1\u76F8\u5173\u7684\u4E0D\u53EF\u53D8\u6027\u7684\u3002</p><p>\u624B\u52A8\u5B9E\u73B0\u8FD9\u4E9B\u6807\u8BB0 trait \u6D89\u53CA\u5230\u7F16\u5199\u4E0D\u5B89\u5168\u7684 Rust \u4EE3\u7801\uFF0C\u7B2C\u5341\u4E5D\u7AE0\u5C06\u4F1A\u8BB2\u8FF0\u5177\u4F53\u7684\u65B9\u6CD5\uFF1B\u5F53\u524D\u91CD\u8981\u7684\u662F\uFF0C\u5728\u521B\u5EFA\u65B0\u7684\u7531\u4E0D\u662F <code>Send</code> \u548C <code>Sync</code> \u7684\u90E8\u5206\u6784\u6210\u7684\u5E76\u53D1\u7C7B\u578B\u65F6\u9700\u8981\u591A\u52A0\u5C0F\u5FC3\uFF0C\u4EE5\u786E\u4FDD\u7EF4\u6301\u5176\u5B89\u5168\u4FDD\u8BC1\u3002<a href="https://doc.rust-lang.org/nomicon/index.html" target="_blank" rel="noreferrer">\u201CThe Rustonomicon\u201D</a> \u4E2D\u6709\u66F4\u591A\u5173\u4E8E\u8FD9\u4E9B\u4FDD\u8BC1\u4EE5\u53CA\u5982\u4F55\u7EF4\u6301\u4ED6\u4EEC\u7684\u4FE1\u606F\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u4E0D\u4F1A\u662F\u672C\u4E66\u6700\u540E\u4E00\u4E2A\u51FA\u73B0\u5E76\u53D1\u7684\u7AE0\u8282\uFF1A\u7B2C\u4E8C\u5341\u7AE0\u7684\u9879\u76EE\u4F1A\u5728\u66F4\u73B0\u5B9E\u7684\u573A\u666F\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u6982\u5FF5\uFF0C\u800C\u4E0D\u50CF\u672C\u7AE0\u4E2D\u8BA8\u8BBA\u7684\u8FD9\u4E9B\u5C0F\u4F8B\u5B50\u3002</p><p>\u6B63\u5982\u4E4B\u524D\u63D0\u5230\u7684\uFF0C\u56E0\u4E3A Rust \u672C\u8EAB\u5F88\u5C11\u6709\u5904\u7406\u5E76\u53D1\u7684\u90E8\u5206\u5185\u5BB9\uFF0C\u6709\u5F88\u591A\u7684\u5E76\u53D1\u65B9\u6848\u90FD\u7531 crate \u5B9E\u73B0\u3002\u4ED6\u4EEC\u6BD4\u6807\u51C6\u5E93\u8981\u53D1\u5C55\u7684\u66F4\u5FEB\uFF1B\u8BF7\u5728\u7F51\u4E0A\u641C\u7D22\u5F53\u524D\u6700\u65B0\u7684\u7528\u4E8E\u591A\u7EBF\u7A0B\u573A\u666F\u7684 crate\u3002</p><p>Rust \u63D0\u4F9B\u4E86\u7528\u4E8E\u6D88\u606F\u4F20\u9012\u7684\u4FE1\u9053\uFF0C\u548C\u50CF <code>Mutex&lt;T&gt;</code> \u548C <code>Arc&lt;T&gt;</code> \u8FD9\u6837\u53EF\u4EE5\u5B89\u5168\u7684\u7528\u4E8E\u5E76\u53D1\u4E0A\u4E0B\u6587\u7684\u667A\u80FD\u6307\u9488\u3002\u7C7B\u578B\u7CFB\u7EDF\u548C\u501F\u7528\u68C0\u67E5\u5668\u4F1A\u786E\u4FDD\u8FD9\u4E9B\u573A\u666F\u4E2D\u7684\u4EE3\u7801\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u6570\u636E\u7ADE\u4E89\u548C\u65E0\u6548\u7684\u5F15\u7528\u3002\u4E00\u65E6\u4EE3\u7801\u53EF\u4EE5\u7F16\u8BD1\u4E86\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u575A\u4FE1\u8FD9\u4E9B\u4EE3\u7801\u53EF\u4EE5\u6B63\u786E\u7684\u8FD0\u884C\u4E8E\u591A\u7EBF\u7A0B\u73AF\u5883\uFF0C\u800C\u4E0D\u4F1A\u51FA\u73B0\u5176\u4ED6\u8BED\u8A00\u4E2D\u7ECF\u5E38\u51FA\u73B0\u7684\u90A3\u4E9B\u96BE\u4EE5\u8FFD\u8E2A\u7684 bug\u3002\u5E76\u53D1\u7F16\u7A0B\u4E0D\u518D\u662F\u4EC0\u4E48\u53EF\u6015\u7684\u6982\u5FF5\uFF1A\u65E0\u6240\u754F\u60E7\u5730\u5E76\u53D1\u5427\uFF01</p><p>\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u8BA8\u8BBA\u4E00\u4E0B\u5F53 Rust \u7A0B\u5E8F\u53D8\u5F97\u66F4\u5927\u65F6\uFF0C\u6709\u54EA\u4E9B\u7B26\u5408\u8BED\u8A00\u4E60\u60EF\u7684\u95EE\u9898\u5EFA\u6A21\u65B9\u6CD5\u548C\u7ED3\u6784\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u4EE5\u53CA Rust \u7684\u98CE\u683C\u662F\u5982\u4F55\u4E0E\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\uFF08Object Oriented Programming\uFF09\u4E2D\u90A3\u4E9B\u4F60\u6240\u719F\u6089\u7684\u6982\u5FF5\u76F8\u8054\u7CFB\u7684\u3002</p>',19),r=[t];function a(s,l,i,h,S,p){return d(),c("div",null,r)}const g=e(n,[["render",a]]);export{u as __pageData,g as default};
