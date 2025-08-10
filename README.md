# QQHKX 个人主页

这是一个基于 [Next.js](https://nextjs.org) 构建的现代化个人主页项目，追求"美观且惊艳"的视觉与交互体验。

## 特性

- 🎨 现代化设计风格，支持渐变和拟物风格
- 🎭 流畅的 Framer Motion 动画效果
- 📱 完全响应式设计，移动端友好
- ⚡ 基于 Next.js 15 和 Turbopack，极速开发体验
- 🎯 环境变量配置，无需修改代码即可更新内容
- 🚀 一键部署到 Vercel

## 环境变量配置

本项目支持通过环境变量动态配置个人信息：

1. 复制环境变量模板：
   ```bash
   cp .env.example .env.local
   ```

2. 编辑 `.env.local` 文件，填入你的个人信息

3. 重启开发服务器

详细配置说明请参考 [ENV_CONFIG.md](./ENV_CONFIG.md)。

## Getting Started

## 快速开始

首先安装依赖：

```bash
npm install
```

然后启动开发服务器：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 项目结构

```
qqhkx-homepage/
├── src/
│   ├── app/                 # Next.js App Router 页面
│   ├── components/          # React 组件
│   └── lib/                 # 工具函数和配置
├── public/                  # 静态资源
├── .env.example            # 环境变量模板
├── .env.local              # 本地环境变量（需自行创建）
└── ENV_CONFIG.md           # 环境变量配置指南
```

## 技术栈

- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **字体**: Pacifico (本地字体)
- **部署**: Vercel

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
