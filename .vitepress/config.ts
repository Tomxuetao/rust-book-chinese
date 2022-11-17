import {defineConfig} from 'vitepress'
import {createSidebarByConfig} from './config/sidebar'

export default defineConfig({
  title: 'Rust 程序设计语言',
  description: '12',
  srcDir: 'src',
  lang: 'en-US',
  base: '/rust-book-chinese/',
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: './logo.svg'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      {icon: 'github', link: 'https://github.com/Tomxuetao/rust-book-chinese.git'}
    ],
    localeLinks: {
      text: '简体中文',
      items: [
        {text: 'English', link: 'https://doc.rust-lang.org/book/'},
        {text: '简体中文', link: 'https://kaisery.github.io/trpl-zh-cn/'}
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
    sidebar: createSidebarByConfig().concat({
      text: '21.附录',
      items: [
        {
          text: '21.1. A - 关键字',
          link: '/appendix-01-keywords'
        },
        {
          text: '21.2. B - 运算符与符号',
          link: '/appendix-02-operators'
        },
        {
          text: '21.3. C - 可派生的 trait',
          link: '/appendix-03-derivable-traits'
        },
        {
          text: '21.4. D - 实用开发工具',
          link: '/appendix-04-useful-development-tools'
        },
        {
          text: '21.5. E - 版本',
          link: '/appendix-05-editions'
        },
        {
          text: '21.6. F - 本书译本',
          link: '/appendix-06-translation'
        },
        {
          text: '21.7. 附录 G：Rust 是如何开发的与 “Nightly Rust”',
          link: '/appendix-07-nightly-rust'
        }
      ]
    })
  }
})
