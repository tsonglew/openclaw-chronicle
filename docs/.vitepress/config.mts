import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const chapters = [
  ['§0 项目是什么', 'ch01'],
  ['§1 人物图鉴', 'ch02'],
  ['§2 2025-11 诞生', 'ch03'],
  ['§3 2025-12 产品化', 'ch04'],
  ['§4 2026-01 改名风暴', 'ch05'],
  ['§5 2026-02 易主', 'ch06'],
  ['§6 2026-03 生态爆发', 'ch07'],
  ['§7 2026-04 安全加固', 'ch08'],
  ['§8 2026-05 巅峰', 'ch09'],
  ['§9 2026-06 到 08 基建期', 'ch10'],
  ['§10 尾声', 'ch11'],
  ['§11 社区回声', 'ch12'],
  ['附录 A 版本与改名时间线', 'ch13'],
  ['文末注 数据方法论', 'ch14'],
]
const sidebar = [
  { text: '章节', link: '/chapters/ch01' },
  ...chapters.map(([text, file]) => ({ text, link: `/chapters/${file}` })),
]
export default withMermaid(defineConfig({
  lang: 'zh-CN',
  title: 'OpenClaw 项目开发编年史',
  description: '从爆火到易主的九个月,由 git-repo-chronicle 生成',
  cleanUrls: true,
  themeConfig: {
    logo: '/images/oc-cover.png',
    nav: [{ text: '目录', link: '/chapters/ch01' }],
    sidebar: [{ text: '编年史', items: sidebar }],
    outline: { level: [2, 4], label: '本章' },
    docFooter: { prev: '上一章', next: '下一章' },
    search: { provider: 'local', options: { translations: { button: { buttonText: '搜索', buttonAriaLabel: '搜索' } } } },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式',
  },
  mermaid: { theme: 'neutral' },
}))
