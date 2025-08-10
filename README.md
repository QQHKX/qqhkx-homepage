# QQHKX 个人主页

[English](./README.en.md) | 中文

这是一个基于 [Next.js](https://nextjs.org) 构建的现代化个人主页项目，追求"美观且惊艳"的视觉与交互体验。项目采用环境变量配置，支持快速定制，无需修改代码即可打造属于你的个人品牌展示页面。

## ✨ 特性

### 🎨 视觉设计
- **现代化设计风格**：采用渐变背景、拟物风格卡片和柔和阴影
- **动态光效**：多层次背景光斑动画，营造沉浸式视觉体验
- **响应式布局**：完美适配桌面、平板和移动设备
- **自定义字体**：使用 Pacifico 字体打造独特的标题效果

### 🎭 交互体验
- **流畅动画**：基于 Framer Motion 的 Spring 动画系统
- **视差滚动**：Hero 区域支持滚动视差效果
- **打字机效果**：座右铭文字逐字显示动画
- **悬停交互**：社交按钮和卡片的精致悬停效果

### ⚡ 技术特性
- **Next.js 15**：最新版本，支持 App Router 和 Turbopack
- **TypeScript**：完整的类型安全支持
- **Tailwind CSS**：原子化 CSS 框架，快速样式开发
- **环境变量配置**：零代码修改，纯配置驱动
- **SEO 优化**：完整的元数据配置和搜索引擎优化
- **一键部署**：完美支持 Vercel 部署

## 🔧 环境变量配置

本项目的核心优势在于**零代码配置**，所有个人信息都通过环境变量管理，让你专注于内容而非代码。

### 快速配置

1. **复制环境变量模板**
   ```bash
   cp .env.example .env.local
   ```

2. **编辑配置文件**
   ```bash
   # 使用你喜欢的编辑器打开
   code .env.local
   # 或者
   notepad .env.local
   ```

3. **重启开发服务器**
   ```bash
   npm run dev
   ```

### 主要配置项

| 配置项 | 说明 | 示例 |
|--------|------|------|
| `NEXT_PUBLIC_SITE_TITLE` | 网站标题 | `QQHKX 的个人主页` |
| `NEXT_PUBLIC_PROFILE_NAME` | 你的姓名 | `QQHKX` |
| `NEXT_PUBLIC_PROFILE_MOTTO` | 个人座右铭 | `代码改变世界` |
| `NEXT_PUBLIC_PROFILE_AVATAR` | 头像链接 | `https://example.com/avatar.jpg` |
| `NEXT_PUBLIC_SOCIALS` | 社交链接 | JSON 格式数组 |

📖 **完整配置指南**：[ENV_CONFIG.md](./ENV_CONFIG.md)

### 配置技巧

- 🖼️ **头像建议**：使用正方形图片，推荐尺寸 400x400 以上
- 🔗 **社交链接**：支持 GitHub、Bilibili、Blog、QQ 等平台自动图标匹配
- 🎨 **图标自定义**：可在 `src/components/SocialIcon.tsx` 中添加新平台图标
- 📱 **响应式测试**：配置完成后记得在不同设备尺寸下测试效果

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
│   ├── app/                    # Next.js App Router
│   │   ├── favicon.ico         # 网站图标
│   │   ├── globals.css         # 全局样式
│   │   ├── layout.tsx          # 根布局组件
│   │   └── page.tsx            # 首页组件
│   ├── components/             # React 组件
│   │   └── SocialIcon.tsx      # 社交媒体图标组件
│   └── data/                   # 数据配置
│       └── profile.ts          # 个人信息配置（默认值）
├── public/                     # 静态资源
│   ├── icon/                   # 社交媒体图标
│   │   ├── github.svg          # GitHub 图标
│   │   ├── bilibili.svg        # Bilibili 图标
│   │   ├── blog.svg            # 博客图标
│   │   └── QQ.svg              # QQ 图标
│   └── font/                   # 本地字体
│       └── Pacifico-Regular-all.ttf  # 标题字体
├── .env.example                # 环境变量模板
├── .env.local                  # 本地环境变量（需自行创建）
├── ENV_CONFIG.md               # 环境变量配置指南
├── next.config.ts              # Next.js 配置
├── tailwind.config.ts          # Tailwind CSS 配置
└── tsconfig.json               # TypeScript 配置
```

### 核心文件说明

- **`src/app/page.tsx`**：主页面组件，包含 Hero、关于、技能、项目等区域
- **`src/components/SocialIcon.tsx`**：社交媒体图标组件，支持多平台自动匹配
- **`src/data/profile.ts`**：个人信息默认配置，环境变量优先级更高
- **`.env.local`**：本地环境变量，覆盖默认配置

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **字体**: Pacifico (本地字体)
- **开发工具**: Turbopack
- **部署**: Vercel

## 🎨 自定义开发

### 添加新的社交平台

1. **添加图标文件**
   ```bash
   # 将 SVG 图标放入 public/icon/ 目录
   public/icon/your-platform.svg
   ```

2. **更新 SocialIcon 组件**
   ```typescript
   // src/components/SocialIcon.tsx
   const iconMap: Record<string, string> = {
     // ... 现有图标
     "YourPlatform": "/icon/your-platform.svg",
   };
   ```

3. **在环境变量中使用**
   ```bash
   # .env.local
   NEXT_PUBLIC_SOCIALS=[{"name":"YourPlatform","url":"https://your-platform.com/profile"}]
   ```

### 自定义样式

- **修改主题色彩**：编辑 `tailwind.config.ts` 中的颜色配置
- **调整动画效果**：在 `src/app/page.tsx` 中修改 Framer Motion 参数
- **更换字体**：替换 `public/font/` 中的字体文件并更新 `src/app/layout.tsx`

### 添加新页面

```bash
# 创建新页面
mkdir src/app/about
touch src/app/about/page.tsx
```

### 性能优化建议

- 🖼️ **图片优化**：使用 Next.js Image 组件，配置 `remotePatterns`
- 🎭 **动画性能**：避免同时运行过多复杂动画
- 📱 **移动端适配**：使用 Tailwind 的响应式前缀测试各种屏幕尺寸
- ⚡ **构建优化**：运行 `npm run build` 检查包大小和性能指标

## 📦 构建与部署

### 本地构建测试

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 或者使用 serve 静态托管
npx serve@latest out
```

### 部署到 Vercel（推荐）

#### 方式一：一键部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/qqhkx/qqhkx-homepage)

#### 方式二：GitHub 集成
1. Fork 本仓库到你的 GitHub
2. 在 [Vercel](https://vercel.com) 中导入你的仓库
3. 配置环境变量（见下方说明）
4. 点击部署

#### 方式三：CLI 部署
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署项目
vercel

# 部署到生产环境
vercel --prod
```

### 环境变量配置

在 Vercel 控制台配置环境变量：

1. 进入项目 Dashboard
2. 点击 **Settings** > **Environment Variables**
3. 添加以下必需变量：

```bash
# 必需配置
NEXT_PUBLIC_SITE_TITLE=你的网站标题
NEXT_PUBLIC_PROFILE_NAME=你的姓名
NEXT_PUBLIC_PROFILE_AVATAR=https://your-avatar-url.com/avatar.jpg

# 可选配置
NEXT_PUBLIC_PROFILE_MOTTO=你的座右铭
NEXT_PUBLIC_SOCIALS=[{"name":"GitHub","url":"https://github.com/yourusername"}]
```

### 其他部署平台

#### Netlify
```bash
# 构建命令
npm run build

# 发布目录
out
```

#### GitHub Pages
```bash
# 安装 gh-pages
npm install --save-dev gh-pages

# 添加部署脚本到 package.json
"scripts": {
  "deploy": "gh-pages -d out"
}

# 部署
npm run build && npm run deploy
```

### 故障排除

#### 常见问题

1. **构建失败**
   ```bash
   # 清理缓存重新安装
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **环境变量不生效**
   - 确保变量名以 `NEXT_PUBLIC_` 开头
   - 重启开发服务器
   - 检查 `.env.local` 文件格式

3. **图片加载失败**
   - 检查 `next.config.ts` 中的 `remotePatterns` 配置
   - 确保图片 URL 可访问

4. **字体加载问题**
   - 确保字体文件在 `public/font/` 目录中
   - 检查 `layout.tsx` 中的字体配置

#### 性能检查

```bash
# 分析包大小
npm run build
npx @next/bundle-analyzer

# Lighthouse 性能测试
npx lighthouse http://localhost:3000
```

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
