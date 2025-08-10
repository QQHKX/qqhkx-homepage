# QQHKX 个人主页

[English](./README.en.md) | 中文

这是一个基于 [Next.js](https://nextjs.org) 构建的现代化个人主页项目，追求"美观且惊艳"的视觉与交互体验。

## ✨ 特性

- 🎨 现代化设计风格，支持渐变和拟物风格
- 🎭 流畅的 Framer Motion 动画效果
- 📱 完全响应式设计，移动端友好
- ⚡ 基于 Next.js 15 和 Turbopack，极速开发体验
- 🎯 环境变量配置，无需修改代码即可更新内容
- 🚀 一键部署到 Vercel

## 🔧 环境变量配置

本项目支持通过环境变量动态配置个人信息：

1. 复制环境变量模板：
   ```bash
   cp .env.example .env.local
   ```

2. 编辑 `.env.local` 文件，填入你的个人信息

3. 重启开发服务器

详细配置说明请参考 [ENV_CONFIG.md](./ENV_CONFIG.md)。

## 🚀 快速开始

1. **克隆项目**
   ```bash
   git clone https://github.com/qqhkx/qqhkx-homepage.git
   cd qqhkx-homepage
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置环境变量**
   ```bash
   cp .env.example .env.local
   # 编辑 .env.local 文件，填入你的个人信息
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

5. **访问应用**
   
   打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 📁 项目结构

```
qqhkx-homepage/
├── src/
│   ├── app/                 # Next.js App Router 页面
│   ├── components/          # React 组件
│   └── lib/                 # 工具函数和配置
├── public/                  # 静态资源
│   └── font/               # 本地字体文件
├── .env.example            # 环境变量模板
├── .env.local              # 本地环境变量（需自行创建）
├── ENV_CONFIG.md           # 环境变量配置指南
└── README.en.md            # 英文文档
```

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **字体**: Pacifico (本地字体)
- **开发工具**: Turbopack
- **部署**: Vercel

## 📦 构建与部署

### 本地构建
```bash
npm run build
npm start
```

### 部署到 Vercel

1. **一键部署**
   
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/qqhkx/qqhkx-homepage)

2. **手动部署**
   ```bash
   # 安装 Vercel CLI
   npm i -g vercel
   
   # 部署
   vercel
   ```

3. **环境变量配置**
   
   在 Vercel 控制台的 Settings > Environment Variables 中配置所需的环境变量。

## 📚 相关资源

- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 功能和 API
- [Tailwind CSS 文档](https://tailwindcss.com/docs) - CSS 框架文档
- [Framer Motion 文档](https://www.framer.com/motion/) - 动画库文档
- [Vercel 部署文档](https://vercel.com/docs) - 部署平台文档

## 📈 Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=qqhkx/qqhkx-homepage&type=Date)](https://star-history.com/#qqhkx/qqhkx-homepage&Date)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

[MIT License](LICENSE)

---

⭐ 如果这个项目对你有帮助，请给个 Star！
