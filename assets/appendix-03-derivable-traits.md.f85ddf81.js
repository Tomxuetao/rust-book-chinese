import{_ as e,c as d,o,d as c}from"./app.db04103e.js";const _=JSON.parse('{"title":"\u9644\u5F55 C\uFF1A\u53EF\u6D3E\u751F\u7684 trait","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u4E8E\u7A0B\u5E8F\u5458\u8F93\u51FA\u7684 Debug","slug":"\u7528\u4E8E\u7A0B\u5E8F\u5458\u8F93\u51FA\u7684-debug","link":"#\u7528\u4E8E\u7A0B\u5E8F\u5458\u8F93\u51FA\u7684-debug","children":[]},{"level":2,"title":"\u7B49\u503C\u6BD4\u8F83\u7684 PartialEq \u548C Eq","slug":"\u7B49\u503C\u6BD4\u8F83\u7684-partialeq-\u548C-eq","link":"#\u7B49\u503C\u6BD4\u8F83\u7684-partialeq-\u548C-eq","children":[]},{"level":2,"title":"\u6B21\u5E8F\u6BD4\u8F83\u7684 PartialOrd \u548C Ord","slug":"\u6B21\u5E8F\u6BD4\u8F83\u7684-partialord-\u548C-ord","link":"#\u6B21\u5E8F\u6BD4\u8F83\u7684-partialord-\u548C-ord","children":[]},{"level":2,"title":"\u590D\u5236\u503C\u7684 Clone \u548C Copy","slug":"\u590D\u5236\u503C\u7684-clone-\u548C-copy","link":"#\u590D\u5236\u503C\u7684-clone-\u548C-copy","children":[]},{"level":2,"title":"\u56FA\u5B9A\u5927\u5C0F\u7684\u503C\u5230\u503C\u6620\u5C04\u7684 Hash","slug":"\u56FA\u5B9A\u5927\u5C0F\u7684\u503C\u5230\u503C\u6620\u5C04\u7684-hash","link":"#\u56FA\u5B9A\u5927\u5C0F\u7684\u503C\u5230\u503C\u6620\u5C04\u7684-hash","children":[]},{"level":2,"title":"\u9ED8\u8BA4\u503C\u7684 Default","slug":"\u9ED8\u8BA4\u503C\u7684-default","link":"#\u9ED8\u8BA4\u503C\u7684-default","children":[]}],"relativePath":"appendix-03-derivable-traits.md","lastUpdated":1668678368000}'),a={name:"appendix-03-derivable-traits.md"},t=c('<h1 id="\u9644\u5F55-c-\u53EF\u6D3E\u751F\u7684-trait" tabindex="-1">\u9644\u5F55 C\uFF1A\u53EF\u6D3E\u751F\u7684 trait <a class="header-anchor" href="#\u9644\u5F55-c-\u53EF\u6D3E\u751F\u7684-trait" aria-hidden="true">#</a></h1><blockquote><p><a href="https://github.com/rust-lang/book/blob/main/src/appendix-03-derivable-traits.md" target="_blank" rel="noreferrer">appendix-03-derivable-traits.md</a><br> commit c07dddac692848ade6c2112c8e15a7087fbbec45</p></blockquote><p>\u5728\u672C\u4E66\u7684\u5404\u4E2A\u90E8\u5206\u4E2D\uFF0C\u6211\u4EEC\u8BA8\u8BBA\u4E86\u53EF\u5E94\u7528\u4E8E\u7ED3\u6784\u4F53\u548C\u679A\u4E3E\u5B9A\u4E49\u7684 <code>derive</code> \u5C5E\u6027\u3002<code>derive</code> \u5C5E\u6027\u4F1A\u5728\u4F7F\u7528 <code>derive</code> \u8BED\u6CD5\u6807\u8BB0\u7684\u7C7B\u578B\u4E0A\u751F\u6210\u5BF9\u5E94 trait \u7684\u9ED8\u8BA4\u5B9E\u73B0\u7684\u4EE3\u7801\u3002</p><p>\u5728\u672C\u9644\u5F55\u4E2D\u63D0\u4F9B\u4E86\u6807\u51C6\u5E93\u4E2D\u6240\u6709\u53EF\u4EE5\u4F7F\u7528 <code>derive</code> \u7684 trait \u7684\u53C2\u8003\u3002\u8FD9\u4E9B\u90E8\u5206\u6D89\u53CA\u5230\uFF1A</p><ul><li>\u8BE5 trait \u5C06\u4F1A\u6D3E\u751F\u4EC0\u4E48\u6837\u7684\u64CD\u4F5C\u7B26\u548C\u65B9\u6CD5</li><li>\u7531 <code>derive</code> \u63D0\u4F9B\u4EC0\u4E48\u6837\u7684 trait \u5B9E\u73B0</li><li>\u7531\u4EC0\u4E48\u6765\u5B9E\u73B0\u7C7B\u578B\u7684 trait</li><li>\u662F\u5426\u5141\u8BB8\u5B9E\u73B0\u8BE5 trait \u7684\u6761\u4EF6</li><li>\u9700\u8981 trait \u64CD\u4F5C\u7684\u4F8B\u5B50</li></ul><p>\u5982\u679C\u4F60\u5E0C\u671B\u4E0D\u540C\u4E8E <code>derive</code> \u5C5E\u6027\u6240\u63D0\u4F9B\u7684\u884C\u4E3A\uFF0C\u8BF7\u67E5\u9605 <a href="https://doc.rust-lang.org/std/index.html" target="_blank" rel="noreferrer">\u6807\u51C6\u5E93\u6587\u6863</a> \u4E2D\u6BCF\u4E2A trait \u7684\u7EC6\u8282\u4EE5\u4E86\u89E3\u5982\u4F55\u624B\u52A8\u5B9E\u73B0\u5B83\u4EEC\u3002</p><p>\u8FD9\u91CC\u5217\u51FA\u7684 trait \u662F\u4EC5\u6709\u7684\u5728\u6807\u51C6\u5E93\u4E2D\u5B9A\u4E49\u4E14\u80FD\u901A\u8FC7 <code>derive</code> \u5728\u7C7B\u578B\u4E0A\u5B9E\u73B0\u3002\u6807\u51C6\u5E93\u4E2D\u5B9A\u4E49\u7684\u5176\u5B83 trait \u4E0D\u80FD\u901A\u8FC7 <code>derive</code> \u5728\u7C7B\u578B\u4E0A\u5B9E\u73B0\u3002\u8FD9\u4E9B trait \u4E0D\u5B58\u5728\u6709\u610F\u4E49\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u6240\u4EE5\u7531\u4F60\u8D1F\u8D23\u4EE5\u5408\u7406\u7684\u65B9\u5F0F\u5B9E\u73B0\u5B83\u4EEC\u3002</p><p>\u4E00\u4E2A\u65E0\u6CD5\u88AB\u6D3E\u751F\u7684 trait \u7684\u4F8B\u5B50\u662F\u4E3A\u7EC8\u7AEF\u7528\u6237\u5904\u7406\u683C\u5F0F\u5316\u7684 <code>Display</code> \u3002\u4F60\u5E94\u8BE5\u65F6\u5E38\u8003\u8651\u4F7F\u7528\u5408\u9002\u7684\u65B9\u6CD5\u6765\u4E3A\u7EC8\u7AEF\u7528\u6237\u663E\u793A\u4E00\u4E2A\u7C7B\u578B\u3002\u7EC8\u7AEF\u7528\u6237\u5E94\u8BE5\u770B\u5230\u7C7B\u578B\u7684\u4EC0\u4E48\u90E8\u5206\uFF1F\u4ED6\u4EEC\u4F1A\u627E\u51FA\u76F8\u5173\u90E8\u5206\u5417\uFF1F\u5BF9\u4ED6\u4EEC\u6765\u8BF4\u6700\u76F8\u5173\u7684\u6570\u636E\u683C\u5F0F\u662F\u4EC0\u4E48\u6837\u7684\uFF1FRust \u7F16\u8BD1\u5668\u6CA1\u6709\u8FD9\u6837\u7684\u6D1E\u5BDF\u529B\uFF0C\u56E0\u6B64\u65E0\u6CD5\u4E3A\u4F60\u63D0\u4F9B\u5408\u9002\u7684\u9ED8\u8BA4\u884C\u4E3A\u3002</p><p>\u672C\u9644\u5F55\u6240\u63D0\u4F9B\u7684\u53EF\u6D3E\u751F trait \u5217\u8868\u5E76\u4E0D\u5168\u9762\uFF1A\u5E93\u53EF\u4EE5\u4E3A\u5176\u81EA\u5DF1\u7684 trait \u5B9E\u73B0 <code>derive</code>\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>derive</code> \u7684 trait \u5217\u8868\u4E8B\u5B9E\u4E0A\u662F\u65E0\u9650\u7684\u3002\u5B9E\u73B0 <code>derive</code> \u6D89\u53CA\u5230\u8FC7\u7A0B\u5B8F\u7684\u5E94\u7528\uFF0C\u8FD9\u5728\u7B2C\u5341\u4E5D\u7AE0\u7684 <a href="./ch19-05-macros.html#\u5B8F">\u201C\u5B8F\u201D</a> \u6709\u4ECB\u7ECD\u3002</p><h2 id="\u7528\u4E8E\u7A0B\u5E8F\u5458\u8F93\u51FA\u7684-debug" tabindex="-1">\u7528\u4E8E\u7A0B\u5E8F\u5458\u8F93\u51FA\u7684 <code>Debug</code> <a class="header-anchor" href="#\u7528\u4E8E\u7A0B\u5E8F\u5458\u8F93\u51FA\u7684-debug" aria-hidden="true">#</a></h2><p><code>Debug</code> trait \u7528\u4E8E\u5F00\u542F\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u4E2D\u7684\u8C03\u8BD5\u683C\u5F0F\uFF0C\u5176\u901A\u8FC7\u5728 <code>{}</code> \u5360\u4F4D\u7B26\u4E2D\u589E\u52A0 <code>:?</code> \u8868\u660E\u3002</p><p><code>Debug</code> trait \u5141\u8BB8\u4EE5\u8C03\u8BD5\u76EE\u7684\u6765\u6253\u5370\u4E00\u4E2A\u7C7B\u578B\u7684\u5B9E\u4F8B\uFF0C\u6240\u4EE5\u4F7F\u7528\u8BE5\u7C7B\u578B\u7684\u7A0B\u5E8F\u5458\u53EF\u4EE5\u5728\u7A0B\u5E8F\u6267\u884C\u7684\u7279\u5B9A\u65F6\u95F4\u70B9\u89C2\u5BDF\u5176\u5B9E\u4F8B\u3002</p><p>\u4F8B\u5982\uFF0C\u5728\u4F7F\u7528 <code>assert_eq!</code> \u5B8F\u65F6\uFF0C<code>Debug</code> trait \u662F\u5FC5\u987B\u7684\u3002\u5982\u679C\u7B49\u5F0F\u65AD\u8A00\u5931\u8D25\uFF0C\u8FD9\u4E2A\u5B8F\u5C31\u628A\u7ED9\u5B9A\u5B9E\u4F8B\u7684\u503C\u4F5C\u4E3A\u53C2\u6570\u6253\u5370\u51FA\u6765\uFF0C\u5982\u6B64\u7A0B\u5E8F\u5458\u53EF\u4EE5\u770B\u5230\u4E24\u4E2A\u5B9E\u4F8B\u4E3A\u4EC0\u4E48\u4E0D\u76F8\u7B49\u3002</p><h2 id="\u7B49\u503C\u6BD4\u8F83\u7684-partialeq-\u548C-eq" tabindex="-1">\u7B49\u503C\u6BD4\u8F83\u7684 <code>PartialEq</code> \u548C <code>Eq</code> <a class="header-anchor" href="#\u7B49\u503C\u6BD4\u8F83\u7684-partialeq-\u548C-eq" aria-hidden="true">#</a></h2><p><code>PartialEq</code> trait \u53EF\u4EE5\u6BD4\u8F83\u4E00\u4E2A\u7C7B\u578B\u7684\u5B9E\u4F8B\u4EE5\u68C0\u67E5\u662F\u5426\u76F8\u7B49\uFF0C\u5E76\u5F00\u542F\u4E86 <code>==</code> \u548C <code>!=</code> \u8FD0\u7B97\u7B26\u7684\u529F\u80FD\u3002</p><p>\u6D3E\u751F\u7684 <code>PartialEq</code> \u5B9E\u73B0\u4E86 <code>eq</code> \u65B9\u6CD5\u3002\u5F53 <code>PartialEq</code> \u5728\u7ED3\u6784\u4F53\u4E0A\u6D3E\u751F\u65F6\uFF0C\u53EA\u6709<em>\u6240\u6709</em> \u7684\u5B57\u6BB5\u90FD\u76F8\u7B49\u65F6\u4E24\u4E2A\u5B9E\u4F8B\u624D\u76F8\u7B49\uFF0C\u540C\u65F6\u53EA\u8981\u6709\u4EFB\u4F55\u5B57\u6BB5\u4E0D\u76F8\u7B49\u5219\u4E24\u4E2A\u5B9E\u4F8B\u5C31\u4E0D\u76F8\u7B49\u3002\u5F53\u5728\u679A\u4E3E\u4E0A\u6D3E\u751F\u65F6\uFF0C\u6BCF\u4E00\u4E2A\u6210\u5458\u90FD\u548C\u5176\u81EA\u8EAB\u76F8\u7B49\uFF0C\u4E14\u548C\u5176\u4ED6\u6210\u5458\u90FD\u4E0D\u76F8\u7B49\u3002</p><p>\u4F8B\u5982\uFF0C\u5F53\u4F7F\u7528 <code>assert_eq!</code> \u5B8F\u65F6\uFF0C\u9700\u8981\u6BD4\u8F83\u6BD4\u8F83\u4E00\u4E2A\u7C7B\u578B\u7684\u4E24\u4E2A\u5B9E\u4F8B\u662F\u5426\u76F8\u7B49\uFF0C\u5219 <code>PartialEq</code> trait \u662F\u5FC5\u987B\u7684\u3002</p><p><code>Eq</code> trait \u6CA1\u6709\u65B9\u6CD5\u3002\u5176\u4F5C\u7528\u662F\u8868\u660E\u6BCF\u4E00\u4E2A\u88AB\u6807\u8BB0\u7C7B\u578B\u7684\u503C\u7B49\u4E8E\u5176\u81EA\u8EAB\u3002<code>Eq</code> trait \u53EA\u80FD\u5E94\u7528\u4E8E\u90A3\u4E9B\u5B9E\u73B0\u4E86 <code>PartialEq</code> \u7684\u7C7B\u578B\uFF0C\u4F46\u5E76\u975E\u6240\u6709\u5B9E\u73B0\u4E86 <code>PartialEq</code> \u7684\u7C7B\u578B\u90FD\u53EF\u4EE5\u5B9E\u73B0 <code>Eq</code>\u3002\u6D6E\u70B9\u7C7B\u578B\u5C31\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF1A\u6D6E\u70B9\u6570\u7684\u5B9E\u73B0\u8868\u660E\u4E24\u4E2A\u975E\u6570\u5B57\uFF08<code>NaN</code>\uFF0Cnot-a-number\uFF09\u503C\u662F\u4E92\u4E0D\u76F8\u7B49\u7684\u3002</p><p>\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u4E00\u4E2A <code>HashMap&lt;K, V&gt;</code> \u4E2D\u7684 key \u6765\u8BF4\uFF0C <code>Eq</code> \u662F\u5FC5\u987B\u7684\uFF0C\u8FD9\u6837 <code>HashMap&lt;K, V&gt;</code> \u5C31\u53EF\u4EE5\u77E5\u9053\u4E24\u4E2A key \u662F\u5426\u4E00\u6837\u4E86\u3002</p><h2 id="\u6B21\u5E8F\u6BD4\u8F83\u7684-partialord-\u548C-ord" tabindex="-1">\u6B21\u5E8F\u6BD4\u8F83\u7684 <code>PartialOrd</code> \u548C <code>Ord</code> <a class="header-anchor" href="#\u6B21\u5E8F\u6BD4\u8F83\u7684-partialord-\u548C-ord" aria-hidden="true">#</a></h2><p><code>PartialOrd</code> trait \u53EF\u4EE5\u57FA\u4E8E\u6392\u5E8F\u7684\u76EE\u7684\u800C\u6BD4\u8F83\u4E00\u4E2A\u7C7B\u578B\u7684\u5B9E\u4F8B\u3002\u5B9E\u73B0\u4E86 <code>PartialOrd</code> \u7684\u7C7B\u578B\u53EF\u4EE5\u4F7F\u7528 <code>&lt;</code>\u3001 <code>&gt;</code>\u3001<code>&lt;=</code> \u548C <code>&gt;=</code> \u64CD\u4F5C\u7B26\u3002\u4F46\u53EA\u80FD\u5728\u540C\u65F6\u5B9E\u73B0\u4E86 <code>PartialEq</code> \u7684\u7C7B\u578B\u4E0A\u4F7F\u7528 <code>PartialOrd</code>\u3002</p><p>\u6D3E\u751F <code>PartialOrd</code> \u5B9E\u73B0\u4E86 <code>partial_cmp</code> \u65B9\u6CD5\uFF0C\u5176\u8FD4\u56DE\u4E00\u4E2A <code>Option&lt;Ordering&gt;</code> \uFF0C\u4F46\u5F53\u7ED9\u5B9A\u503C\u65E0\u6CD5\u4EA7\u751F\u987A\u5E8F\u65F6\u5C06\u8FD4\u56DE <code>None</code>\u3002\u5C3D\u7BA1\u5927\u591A\u6570\u7C7B\u578B\u7684\u503C\u90FD\u53EF\u4EE5\u6BD4\u8F83\uFF0C\u4F46\u4E00\u4E2A\u65E0\u6CD5\u4EA7\u751F\u987A\u5E8F\u7684\u4F8B\u5B50\u662F\uFF1A\u6D6E\u70B9\u7C7B\u578B\u7684\u975E\u6570\u5B57\u503C\u3002\u5F53\u5728\u6D6E\u70B9\u6570\u4E0A\u8C03\u7528 <code>partial_cmp</code> \u65F6\uFF0C<code>NaN</code> \u7684\u6D6E\u70B9\u6570\u5C06\u8FD4\u56DE <code>None</code>\u3002</p><p>\u5F53\u5728\u7ED3\u6784\u4F53\u4E0A\u6D3E\u751F\u65F6\uFF0C<code>PartialOrd</code> \u4EE5\u5728\u7ED3\u6784\u4F53\u5B9A\u4E49\u4E2D\u5B57\u6BB5\u51FA\u73B0\u7684\u987A\u5E8F\u6BD4\u8F83\u6BCF\u4E2A\u5B57\u6BB5\u7684\u503C\u6765\u6BD4\u8F83\u4E24\u4E2A\u5B9E\u4F8B\u3002\u5F53\u5728\u679A\u4E3E\u4E0A\u6D3E\u751F\u65F6\uFF0C\u8BA4\u4E3A\u5728\u679A\u4E3E\u5B9A\u4E49\u4E2D\u58F0\u660E\u8F83\u65E9\u7684\u679A\u4E3E\u53D8\u4F53\u5C0F\u4E8E\u5176\u540E\u7684\u53D8\u4F53\u3002</p><p>\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u6765\u81EA\u4E8E <code>rand</code> crate \u4E2D\u7684 <code>gen_range</code> \u65B9\u6CD5\u6765\u8BF4\uFF0C\u5F53\u5728\u4E00\u4E2A\u8303\u56F4\u8868\u8FBE\u5F0F\u6307\u5B9A\u7684\u8303\u56F4\u5185\u751F\u6210\u4E00\u4E2A\u968F\u673A\u503C\u65F6\uFF0C<code>PartialOrd</code> trait \u662F\u5FC5\u987B\u7684\u3002</p><p><code>Ord</code> trait \u4E5F\u8BA9\u4F60\u660E\u767D\u5728\u4E00\u4E2A\u5E26\u6CE8\u89E3\u7C7B\u578B\u4E0A\u7684\u4EFB\u610F\u4E24\u4E2A\u503C\u5B58\u5728\u6709\u6548\u987A\u5E8F\u3002<code>Ord</code> trait \u5B9E\u73B0\u4E86 <code>cmp</code> \u65B9\u6CD5\uFF0C\u5B83\u8FD4\u56DE\u4E00\u4E2A <code>Ordering</code> \u800C\u4E0D\u662F <code>Option&lt;Ordering&gt;</code>\uFF0C\u56E0\u4E3A\u603B\u5B58\u5728\u4E00\u4E2A\u5408\u6CD5\u7684\u987A\u5E8F\u3002\u53EA\u53EF\u4EE5\u5728\u5B9E\u73B0\u4E86 <code>PartialOrd</code> \u548C <code>Eq</code>\uFF08<code>Eq</code> \u4F9D\u8D56 <code>PartialEq</code>\uFF09\u7684\u7C7B\u578B\u4E0A\u4F7F\u7528 <code>Ord</code> trait \u3002\u5F53\u5728\u7ED3\u6784\u4F53\u6216\u679A\u4E3E\u4E0A\u6D3E\u751F\u65F6\uFF0C <code>cmp</code> \u548C\u4EE5 <code>PartialOrd</code> \u6D3E\u751F\u5B9E\u73B0\u7684 <code>partial_cmp</code> \u8868\u73B0\u4E00\u81F4\u3002</p><p>\u4F8B\u5982\uFF0C\u5F53\u5728 <code>BTreeSet&lt;T&gt;</code>\uFF08\u4E00\u79CD\u57FA\u4E8E\u6709\u5E8F\u503C\u5B58\u50A8\u6570\u636E\u7684\u6570\u636E\u7ED3\u6784\uFF09\u4E0A\u5B58\u503C\u65F6\uFF0C<code>Ord</code> \u662F\u5FC5\u987B\u7684\u3002</p><h2 id="\u590D\u5236\u503C\u7684-clone-\u548C-copy" tabindex="-1">\u590D\u5236\u503C\u7684 <code>Clone</code> \u548C <code>Copy</code> <a class="header-anchor" href="#\u590D\u5236\u503C\u7684-clone-\u548C-copy" aria-hidden="true">#</a></h2><p><code>Clone</code> trait \u53EF\u4EE5\u660E\u786E\u5730\u521B\u5EFA\u4E00\u4E2A\u503C\u7684\u6DF1\u62F7\u8D1D\uFF08deep copy\uFF09\uFF0C\u590D\u5236\u8FC7\u7A0B\u53EF\u80FD\u5305\u542B\u4EFB\u610F\u4EE3\u7801\u7684\u6267\u884C\u4EE5\u53CA\u5806\u4E0A\u6570\u636E\u7684\u590D\u5236\u3002\u67E5\u9605\u7B2C\u56DB\u7AE0 <a href="./ch04-01-what-is-ownership.html#\u53D8\u91CF\u4E0E\u6570\u636E\u4EA4\u4E92\u7684\u65B9\u5F0F\u4E8C\u514B\u9686">\u201C\u53D8\u91CF\u4E0E\u6570\u636E\u4EA4\u4E92\u7684\u65B9\u5F0F\uFF08\u4E8C\uFF09\uFF1A\u514B\u9686\u201D</a> \u4EE5\u83B7\u53D6\u6709\u5173 <code>Clone</code> \u7684\u66F4\u591A\u4FE1\u606F\u3002</p><p>\u6D3E\u751F <code>Clone</code> \u5B9E\u73B0\u4E86 <code>clone</code> \u65B9\u6CD5\uFF0C\u5176\u4E3A\u6574\u4E2A\u7684\u7C7B\u578B\u5B9E\u73B0\u65F6\uFF0C\u5728\u7C7B\u578B\u7684\u6BCF\u4E00\u90E8\u5206\u4E0A\u8C03\u7528\u4E86 <code>clone</code> \u65B9\u6CD5\u3002\u8FD9\u610F\u5473\u7740\u7C7B\u578B\u4E2D\u6240\u6709\u5B57\u6BB5\u6216\u503C\u4E5F\u5FC5\u987B\u5B9E\u73B0\u4E86 <code>Clone</code>\uFF0C\u8FD9\u6837\u624D\u80FD\u591F\u6D3E\u751F <code>Clone</code> \u3002</p><p>\u4F8B\u5982\uFF0C\u5F53\u5728\u4E00\u4E2A\u5207\u7247\uFF08slice\uFF09\u4E0A\u8C03\u7528 <code>to_vec</code> \u65B9\u6CD5\u65F6\uFF0C<code>Clone</code> \u662F\u5FC5\u987B\u7684\u3002\u5207\u7247\u5E76\u4E0D\u62E5\u6709\u5176\u6240\u5305\u542B\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u4F46\u662F\u4ECE <code>to_vec</code> \u4E2D\u8FD4\u56DE\u7684 vector \u9700\u8981\u62E5\u6709\u5176\u5B9E\u4F8B\uFF0C\u56E0\u6B64\uFF0C<code>to_vec</code> \u5728\u6BCF\u4E2A\u5143\u7D20\u4E0A\u8C03\u7528 <code>clone</code>\u3002\u56E0\u6B64\uFF0C\u5B58\u50A8\u5728\u5207\u7247\u4E2D\u7684\u7C7B\u578B\u5FC5\u987B\u5B9E\u73B0 <code>Clone</code>\u3002</p><p><code>Copy</code> trait \u5141\u8BB8\u4F60\u901A\u8FC7\u53EA\u62F7\u8D1D\u5B58\u50A8\u5728\u6808\u4E0A\u7684\u4F4D\u6765\u590D\u5236\u503C\u800C\u4E0D\u9700\u8981\u989D\u5916\u7684\u4EE3\u7801\u3002\u67E5\u9605\u7B2C\u56DB\u7AE0 <a href="./ch04-01-what-is-ownership.html#\u53EA\u5728\u6808\u4E0A\u7684\u6570\u636E\u62F7\u8D1D">\u201C\u53EA\u5728\u6808\u4E0A\u7684\u6570\u636E\uFF1A\u62F7\u8D1D\u201D</a> \u7684\u90E8\u5206\u6765\u83B7\u53D6\u6709\u5173 <code>Copy</code> \u7684\u66F4\u591A\u4FE1\u606F\u3002</p><p><code>Copy</code> trait \u5E76\u672A\u5B9A\u4E49\u4EFB\u4F55\u65B9\u6CD5\u6765\u963B\u6B62\u7F16\u7A0B\u4EBA\u5458\u91CD\u5199\u8FD9\u4E9B\u65B9\u6CD5\u6216\u8FDD\u53CD\u4E0D\u9700\u8981\u6267\u884C\u989D\u5916\u4EE3\u7801\u7684\u5047\u8BBE\u3002\u5C3D\u7BA1\u5982\u6B64\uFF0C\u6240\u6709\u7684\u7F16\u7A0B\u4EBA\u5458\u53EF\u4EE5\u5047\u8BBE\u590D\u5236\uFF08copy\uFF09\u4E00\u4E2A\u503C\u975E\u5E38\u5FEB\u3002</p><p>\u53EF\u4EE5\u5728\u7C7B\u578B\u5185\u90E8\u5168\u90E8\u5B9E\u73B0 <code>Copy</code> trait \u7684\u4EFB\u610F\u7C7B\u578B\u4E0A\u6D3E\u751F <code>Copy</code>\u3002\u4E00\u4E2A\u5B9E\u73B0\u4E86 <code>Copy</code> \u7684\u7C7B\u578B\u5FC5\u987B\u4E5F\u5B9E\u73B0\u4E86 <code>Clone</code>\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u5B9E\u73B0\u4E86 <code>Copy</code> \u7684\u7C7B\u578B\u4E5F\u7B80\u5355\u5730\u5B9E\u73B0\u4E86 <code>Clone</code>\uFF0C\u5176\u6267\u884C\u548C <code>Copy</code> \u76F8\u540C\u7684\u4EFB\u52A1\u3002</p><p><code>Copy</code> trait \u5F88\u5C11\u4F7F\u7528\uFF1B\u5B9E\u73B0 <code>Copy</code> \u7684\u7C7B\u578B\u662F\u53EF\u4EE5\u4F18\u5316\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u65E0\u9700\u8C03\u7528 <code>clone</code>\uFF0C\u8FD9\u8BA9\u4EE3\u7801\u66F4\u7B80\u6D01\u3002</p><p>\u4EFB\u4F55\u4F7F\u7528 <code>Copy</code> \u7684\u4EE3\u7801\u90FD\u53EF\u4EE5\u901A\u8FC7 <code>Clone</code> \u5B9E\u73B0\uFF0C\u4F46\u4EE3\u7801\u53EF\u80FD\u4F1A\u7A0D\u6162\uFF0C\u6216\u8005\u4E0D\u5F97\u4E0D\u5728\u4EE3\u7801\u4E2D\u7684\u8BB8\u591A\u4F4D\u7F6E\u4E0A\u4F7F\u7528 <code>clone</code>\u3002</p><h2 id="\u56FA\u5B9A\u5927\u5C0F\u7684\u503C\u5230\u503C\u6620\u5C04\u7684-hash" tabindex="-1">\u56FA\u5B9A\u5927\u5C0F\u7684\u503C\u5230\u503C\u6620\u5C04\u7684 <code>Hash</code> <a class="header-anchor" href="#\u56FA\u5B9A\u5927\u5C0F\u7684\u503C\u5230\u503C\u6620\u5C04\u7684-hash" aria-hidden="true">#</a></h2><p><code>Hash</code> trait \u53EF\u4EE5\u5B9E\u4F8B\u5316\u4E00\u4E2A\u4EFB\u610F\u5927\u5C0F\u7684\u7C7B\u578B\uFF0C\u5E76\u4E14\u80FD\u591F\u7528\u54C8\u5E0C\uFF08hash\uFF09\u51FD\u6570\u5C06\u8BE5\u5B9E\u4F8B\u6620\u5C04\u5230\u4E00\u4E2A\u56FA\u5B9A\u5927\u5C0F\u7684\u503C\u4E0A\u3002\u6D3E\u751F <code>Hash</code> \u5B9E\u73B0\u4E86 <code>hash</code> \u65B9\u6CD5\u3002<code>hash</code> \u65B9\u6CD5\u7684\u6D3E\u751F\u5B9E\u73B0\u7ED3\u5408\u4E86\u5728\u7C7B\u578B\u7684\u6BCF\u90E8\u5206\u8C03\u7528 <code>hash</code> \u7684\u7ED3\u679C\uFF0C\u8FD9\u610F\u5473\u7740\u6240\u6709\u7684\u5B57\u6BB5\u6216\u503C\u4E5F\u5FC5\u987B\u5B9E\u73B0\u4E86 <code>Hash</code>\uFF0C\u8FD9\u6837\u624D\u80FD\u591F\u6D3E\u751F <code>Hash</code>\u3002</p><p>\u4F8B\u5982\uFF0C\u5728 <code>HashMap&lt;K, V&gt;</code> \u4E0A\u5B58\u50A8\u6570\u636E\uFF0C\u5B58\u653E key \u7684\u65F6\u5019\uFF0C<code>Hash</code> \u662F\u5FC5\u987B\u7684\u3002</p><h2 id="\u9ED8\u8BA4\u503C\u7684-default" tabindex="-1">\u9ED8\u8BA4\u503C\u7684 <code>Default</code> <a class="header-anchor" href="#\u9ED8\u8BA4\u503C\u7684-default" aria-hidden="true">#</a></h2><p><code>Default</code> trait \u4F7F\u4F60\u521B\u5EFA\u4E00\u4E2A\u7C7B\u578B\u7684\u9ED8\u8BA4\u503C\u3002 \u6D3E\u751F <code>Default</code> \u5B9E\u73B0\u4E86 <code>default</code> \u51FD\u6570\u3002<code>default</code> \u51FD\u6570\u7684\u6D3E\u751F\u5B9E\u73B0\u8C03\u7528\u4E86\u7C7B\u578B\u6BCF\u90E8\u5206\u7684 <code>default</code> \u51FD\u6570\uFF0C\u8FD9\u610F\u5473\u7740\u7C7B\u578B\u4E2D\u6240\u6709\u7684\u5B57\u6BB5\u6216\u503C\u4E5F\u5FC5\u987B\u5B9E\u73B0\u4E86 <code>Default</code>\uFF0C\u8FD9\u6837\u624D\u80FD\u591F\u6D3E\u751F <code>Default</code> \u3002</p><p><code>Default::default</code> \u51FD\u6570\u901A\u5E38\u7ED3\u5408\u7ED3\u6784\u4F53\u66F4\u65B0\u8BED\u6CD5\u4E00\u8D77\u4F7F\u7528\uFF0C\u8FD9\u5728\u7B2C\u4E94\u7AE0\u7684 <a href="./ch05-01-defining-structs.html#\u4F7F\u7528\u7ED3\u6784\u4F53\u66F4\u65B0\u8BED\u6CD5\u4ECE\u5176\u4ED6\u5B9E\u4F8B\u521B\u5EFA\u5B9E\u4F8B">\u201C\u4F7F\u7528\u7ED3\u6784\u4F53\u66F4\u65B0\u8BED\u6CD5\u4ECE\u5176\u4ED6\u5B9E\u4F8B\u4E2D\u521B\u5EFA\u5B9E\u4F8B\u201D</a> \u90E8\u5206\u6709\u8BA8\u8BBA\u3002\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7ED3\u6784\u4F53\u7684\u4E00\u5C0F\u90E8\u5206\u5B57\u6BB5\u800C\u5269\u4F59\u5B57\u6BB5\u5219\u4F7F\u7528 <code>..Default::default()</code> \u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u503C\u3002</p><p>\u4F8B\u5982\uFF0C\u5F53\u4F60\u5728 <code>Option&lt;T&gt;</code> \u5B9E\u4F8B\u4E0A\u4F7F\u7528 <code>unwrap_or_default</code> \u65B9\u6CD5\u65F6\uFF0C<code>Default</code> trait \u662F\u5FC5\u987B\u7684\u3002\u5982\u679C <code>Option&lt;T&gt;</code> \u662F <code>None</code>\u7684\u8BDD, <code>unwrap_or_default</code> \u65B9\u6CD5\u5C06\u8FD4\u56DE\u5B58\u50A8\u5728 <code>Option&lt;T&gt;</code> \u4E2D <code>T</code> \u7C7B\u578B\u7684 <code>Default::default</code> \u7684\u7ED3\u679C\u3002</p>',42),r=[t];function i(l,p,n,h,s,u){return o(),d("div",null,r)}const g=e(a,[["render",i]]);export{_ as __pageData,g as default};
