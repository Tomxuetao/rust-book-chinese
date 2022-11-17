import fs from 'node:fs'
import { defineConfig } from 'vitepress'

const sidebarConfigMap = new Map([
  [1,
    {
      title: '入门指南',
      nextTitleList: ['安装', 'Hello,World!', 'Hello,Cargo!']
    }
  ],
  [3,
    {
      title: '常见编程概念',
      nextTitleList: ['变量与可变性', '数据类型', '函数', '注释', '控制流']
    }
  ],
  [4,
    {
      title: '认识所有权',
      nextTitleList: ['什么是所有权？', '引用与借用', 'Slice 类型']
    }
  ],
  [5,
    {
      title: '使用结构体组织相关联的数据',
      nextTitleList: ['结构体的定义和实例化', '结构体示例程序', '方法语法']
    }
  ],
  [6,
    {
      title: '枚举和模式匹配',
      nextTitleList: ['枚举的定义', 'match 控制流结构', 'if let 简洁控制流']
    }
  ],
  [7,
    {
      title: '使用包、Crate 和模块管理不断增长的项目',
      nextTitleList: ['包和 Crate', '定义模块来控制作用域与私有性', '引用模块项目的路径', '使用 use 关键字将路径引入作用域', '将模块拆分成多个文件']
    }
  ],
  [8,
    {
      title: '常见集合',
      nextTitleList: ['使用 Vector 储存列表', '使用字符串储存 UTF-8 编码的文本', '使用 Hash Map 储存键值对']
    }
  ],
  [9,
    {
      title: '错误处理',
      nextTitleList: ['用 panic! 处理不可恢复的错误', '用 Result 处理可恢复的错误', '要不要 panic!']
    }
  ],
  [10,
    {
      title: '泛型、Trait 和生命周期',
      nextTitleList: ['泛型数据类型', 'Trait：定义共同行为', '生命周期确保引用有效']
    }
  ],
  [11,
    {
      title: '编写自动化测试',
      nextTitleList: ['如何编写测试', '控制测试如何运行', '测试的组织结构']
    }
  ],
  [12,
    {
      title: '一个 I/O 项目：构建命令行程序',
      nextTitleList: ['接受命令行参数', '读取文件', '重构以改进模块化与错误处理', '采用测试驱动开发完善库的功能', '处理环境变量', '将错误信息输出到标准错误而不是标准输出']
    }
  ],
  [13,
    {
      title: 'Rust 中的函数式语言功能：迭代器与闭包',
      nextTitleList: ['闭包：可以捕获环境的匿名函数', '使用迭代器处理元素序列', '改进 I/O 项目', '性能对比：循环 VS 迭代器']
    }
  ],
  [14,
    {
      title: '进一步认识 Cargo 和 Crates.io',
      nextTitleList: ['采用发布配置自定义构建', '将 crate 发布到 Crates.io', 'Cargo 工作空间', '使用 cargo install 从 Crates.io 安装二进制文件', 'Cargo 自定义扩展命令']
    }
  ],
  [15,
    {
      title: '智能指针',
      nextTitleList: ['使用Box<T>指向堆上的数据', '通过 Deref trait 将智能指针当作常规引用处理', '使用 Drop Trait 运行清理代码', 'Rc<T> 引用计数智能指针', 'RefCell<T> 和内部可变性模式', '引用循环与内存泄漏']
    }
  ],
  [16,
    {
      title: '无畏并发',
      nextTitleList: ['使用线程同时运行代码', '使用消息传递在线程间传送数据', '共享状态并发', '使用 Sync 和 Send trait 的可扩展并发']
    }
  ],
  [17,
    {
      title: 'Rust 的面向对象特性',
      nextTitleList: ['面向对象语言的特征', '顾及不同类型值的 trait 对象', '面向对象设计模式的实现']
    }
  ],
  [18,
    {
      title: '模式与模式匹配',
      nextTitleList: ['闭包：可以捕获环境的匿名函数', 'Refutability（可反驳性）: 模式是否会匹配失效', '所有的模式语法']
    }
  ],
  [19,
    {
      title: '高级特征',
      nextTitleList: ['不安全的 Rust', '高级 trait', '高级类型', '高级函数与闭包', '宏']
    }
  ],
  [20,
    {
      title: '最后的项目: 构建多线程 web server',
      nextTitleList: ['构建单线程 web server', '将单线程 server 变为多线程 server', '优雅停机与清理']
    }
  ]
])

const createSidebarByConfig = (configMap) => {
  const keys = [...configMap.keys()]
  const fileNameList = fs.readdirSync('./src') || []
  const sidebarList = []
  keys.forEach(key => {
    const { title, nextTitleList } = configMap.get(key)
    const nextList = []
    nextTitleList.forEach((name, index) => {
      const matchName = key > 9 ? `${key}-${index > 9 ? index : '0' + (index + 1)}` : `0${key}-${index > 9 ? (index + 1) : '0' + (index + 1)}`
      const fileName = fileNameList.find(tempName => tempName.includes(matchName))
      nextList.push({
        text: `${key}.${index + 1}.${name}`,
        link: `/${fileName}`
      })
    })
    sidebarList.push({
      text: `${key}.${title}`,
      items: nextList
    })
  })
  return sidebarList
}

const sidebarList = createSidebarByConfig(sidebarConfigMap)

export default defineConfig({
  title: 'Rust 程序设计语言',
  description: '12',
  srcDir: 'src',
  base: '/rust-book/',
  lang: 'en-US',
  logo: '/logo.svg',
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tomxuetao/rust-book-chinese.git' }
    ],
    localeLinks: {
      text: '简体中文',
      items: [
        { text: 'English', link: 'https://doc.rust-lang.org/book/' },
        { text: '简体中文', link: 'https://kaisery.github.io/trpl-zh-cn/' }
      ]
    },
    nav: [
      {
        text: '相关链接',
        items: [
          {
            text: '原文地址',
            link: 'https://kaisery.github.io/trpl-zh-cn/'
          }
        ]
      }
    ],
    sidebar: sidebarList
  }
})
