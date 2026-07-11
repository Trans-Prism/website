# Trans Prism 官网

[![Next.js](https://img.shields.io/badge/Next.js-15.x-000000?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)

**Trans Prism（稳态光盒）** 是一款致力于为跨性别群体提供安全、客观、无审查的日常辅助工具的开源 App。  
本仓库为 Trans Prism 的官方网站——一个现代、响应式的品牌落地页与应用分发站点。

> May you find your steady state.

---

## ✨ 功能概览

- **品牌展示** —— 跨性别工具箱 · 安全 · 离线 · 开源
- **三机位交互演示** —— 悬停聚焦的 App 截图轮播，直观展示核心界面
- **社区导航** —— TransHelper、2345.lgbt、TransCircle 等友情链接
- **应用分发** —— `/download` 页面自动拉取 GitHub Releases，提供各版本 APK 下载及 SHA-256 校验
- **用户系统** —— 登录/注册/密码重置页面（`/signin`、`/signup`、`/reset-password`）
- **液态玻璃导航** —— iOS‑style 高透模糊导航栏，沉浸式浏览体验

---

## 🛠️ 技术栈

| 层 | 技术 |
|----|------|
| **框架** | [Next.js 15](https://nextjs.org/) (App Router) |
| **样式** | [Tailwind CSS v4](https://tailwindcss.com/) + 自定义 AOS 动画 |
| **语言** | TypeScript |
| **图标** | SVG inline icons |
| **字体** | Inter (via `next/font`) |
| **部署** | Cloudflare |

---

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
npm start
```

---

## 📁 项目结构

```
├── app/
│   ├── layout.tsx              # 根布局（全局 metadata、favicon）
│   ├── (default)/              # 主路由组
│   │   ├── page.tsx            # 首页（Hero + 功能展示）
│   │   └── download/           # 下载页（GitHub Releases 集成）
│   ├── (auth)/                 # 认证路由组
│   │   ├── signin/
│   │   ├── signup/
│   │   └── reset-password/
│   ├── css/                    # 全局样式
│   └── api/                    # API 路由
├── components/
│   ├── ui/                     # 布局组件（header、footer、logo）
│   ├── hero-home.tsx           # 首页主视觉（三机位交互）
│   ├── features-planet.tsx     # 功能星球展示
│   ├── cta.tsx                 # 号召行动区块
│   └── ...
├── public/images/              # 静态资源（Logo、截图、SVG）
└── next.config.js
```

---

## 🧩 核心组件

| 组件 | 路径 | 说明 |
|------|------|------|
| **Header** | [`components/ui/header.tsx`](components/ui/header.tsx) | 液态玻璃导航栏，含 GitHub 图标与下载按钮 |
| **Footer** | [`components/ui/footer.tsx`](components/ui/footer.tsx) | 页脚导航与品牌信息 |
| **HeroHome** | [`components/hero-home.tsx`](components/hero-home.tsx) | 首页主视觉，三台手机悬停交互 + App 截图动画 |
| **FeaturesPlanet** | [`components/features-planet.tsx`](components/features-planet.tsx) | 功能亮点星球图解 |
| **DownloadPage** | [`app/(default)/download/page.tsx`](app/(default)/download/page.tsx) | 自动获取 GitHub Releases 的下载页面 |

---

## 📦 下载页面集成

下载页通过 GitHub API 自动拉取 [Trans-Prism/Trans-Prism](https://github.com/Trans-Prism/Trans-Prism) 的最新 5 个 Release，支持：

- 最新版高亮展示与 APK 下载
- 历史版本列表
- SHA-256 校验文件下载
- 预发布标签标识
- Markdown 更新日志自动清理与渲染

---

## 🎨 设计原则

- **无障碍** —— 遵循 WCAG 标准的色彩对比度
- **响应式** —— 移动端至宽屏的全尺寸适配
- **性能优先** —— 静态生成 + 按需加载
- **隐私友好** —— 零第三方遥测、零跟踪

---

## 📄 许可

基于 [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html) 许可证开源。

---

## 🌈 关于 Trans Prism

Trans Prism 致力于为跨性别社群打造安全、可信赖的日常工具。  
官网使用 [Next.js](https://nextjs.org/) 构建，托管于 Cloudflare。

**主仓库：** [github.com/Trans-Prism/Trans-Prism](https://github.com/Trans-Prism/Trans-Prism)  
**官网地址：** [transprism.chengxi.online](https://transprism.chengxi.online)

> May you find your steady state.
