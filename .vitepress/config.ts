import { defineConfig } from 'vitepress'
import { createSidebarByConfig } from './config/sidebar'

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
      { icon: 'github', link: 'https://github.com/Tomxuetao/rust-book-chinese.git' }
    ],
    localeLinks: {
      text: '简体中文',
      items: [
        { text: 'English', link: 'https://doc.rust-lang.org/book/' },
        { text: '简体中文', link: 'https://kaisery.github.io/trpl-zh-cn/' }
      ]
    },
    editLink: {
      pattern: 'https://github.com/Tomxuetao/rust-book-chinese/edit/main/src/:path',
      text: '在 github 上编辑此页'
    },
    lastUpdatedText: '更新时间',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outlineTitle: '当前页目录',
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
    sidebar: [{
      text: '',
      items: [
        { text: '前言', link: '/foreword' },
        { text: '简介', link: '/ch00-00-introduction' }
      ]
    }, ...createSidebarByConfig()]
  }
})
