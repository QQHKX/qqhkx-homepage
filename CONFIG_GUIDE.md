# 🚀 QQHKX 个人主页配置指南

欢迎使用 QQHKX 个人主页！本指南将帮助你快速配置和定制你的个人主页。

## 📋 快速开始

### 1. 环境配置

```bash
# 1. 复制配置文件
cp .env.example .env.local

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 打开浏览器访问
# http://localhost:3000
```

### 2. 基础配置

编辑 `.env.local` 文件，按照以下优先级配置：

#### 🏷️ 必填项（网站基本信息）
- `NEXT_PUBLIC_SITE_TITLE` - 网站标题
- `NEXT_PUBLIC_PROFILE_NAME` - 你的姓名
- `NEXT_PUBLIC_PROFILE_MOTTO` - 个人座右铭

#### 👤 个人信息
- `NEXT_PUBLIC_PROFILE_LOCATION` - 所在地区
- `NEXT_PUBLIC_PROFILE_ROLE` - 职业角色
- `NEXT_PUBLIC_PROFILE_AVATAR` - 头像链接

#### 🔗 社交链接
- `NEXT_PUBLIC_SOCIALS` - JSON格式的社交平台链接

## 🛠️ 详细配置说明

### 社交链接配置

支持的平台图标：
- `GitHub` - GitHub 个人主页
- `Blog` - 个人博客
- `Bilibili` - B站空间
- `QQ` - QQ联系方式
- `Email` - 邮箱地址
- `Website` - 个人网站

配置示例：
```json
[
  {"name":"GitHub","url":"https://github.com/yourusername"},
  {"name":"Blog","url":"https://yourblog.com"},
  {"name":"Email","url":"mailto:your@email.com"}
]
```

### 项目展示配置

每个项目包含四个字段：
- `title` - 项目名称
- `url` - 项目链接（GitHub或演示地址）
- `description` - 项目描述（1-2句话）
- `tags` - 技术标签数组

配置示例：
```json
[
  {
    "title": "个人博客系统",
    "url": "https://github.com/username/blog",
    "description": "基于Next.js开发的响应式个人博客",
    "tags": ["Next.js", "React", "Tailwind"]
  }
]
```

## 🎨 自定义样式

### 修改主题色彩

编辑 `src/app/globals.css` 文件中的 CSS 变量：

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### 添加自定义字体

1. 将字体文件放入 `public/font/` 目录
2. 在 `src/app/layout.tsx` 中配置字体加载

## 🚀 部署指南

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 在 Vercel 环境变量中配置 `.env.local` 的内容
4. 部署完成！

### 环境变量配置

部署时需要在平台配置以下环境变量：
- 所有 `NEXT_PUBLIC_*` 开头的变量
- 根据实际域名更新 `NEXT_PUBLIC_SITE_URL`

## 🔧 常见问题

### Q: 头像不显示？
A: 检查 `next.config.ts` 中的 `images.remotePatterns` 配置，确保头像域名在白名单中。

### Q: JSON 配置报错？
A: 使用 [JSONLint](https://jsonlint.com/) 验证 JSON 格式是否正确。

### Q: 修改配置后不生效？
A: 重启开发服务器（Ctrl+C 然后 `npm run dev`）。

### Q: 如何添加新的社交平台图标？
A: 编辑 `src/components/SocialIcon.tsx` 文件，添加新的图标映射。

## 📞 获取帮助

- 查看 [项目文档](./README.md)
- 提交 [Issue](https://github.com/QQHKX/qqhkx-homepage/issues)
- 参考 [示例配置](./.env.example)

---

🎉 祝你使用愉快！如果这个项目对你有帮助，欢迎给个 Star ⭐