# 环境变量配置指南

本项目支持通过环境变量动态配置个人信息，无需修改代码即可更新网站内容。

## 快速开始

1. 复制环境变量模板：
   ```bash
   cp .env.example .env.local
   ```

2. 编辑 `.env.local` 文件，填入你的个人信息

3. 重启开发服务器：
   ```bash
   npm run dev
   ```

## 配置项说明

### 网站基本信息

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `NEXT_PUBLIC_SITE_TITLE` | 网站标题 | `QQHKX | 个人主页` |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | 网站描述 | `QQHKX 的个人主页与项目展示` |
| `NEXT_PUBLIC_SITE_URL` | 网站URL | `https://qqhkx.com` |
| `NEXT_PUBLIC_FAVICON_PATH` | 网站图标路径 | `/favicon.ico` |
| `NEXT_PUBLIC_APPLE_ICON_PATH` | Apple设备图标路径 | `/apple-touch-icon.png` |

### 个人信息

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `NEXT_PUBLIC_PROFILE_NAME` | 显示名称 | `qqhkx.com` |
| `NEXT_PUBLIC_PROFILE_MOTTO` | 座右铭 | `心有阳光，万物可爱` |
| `NEXT_PUBLIC_PROFILE_LOCATION` | 所在地 | `中国·成都` |
| `NEXT_PUBLIC_PROFILE_ROLE` | 身份/职业 | `高中生` |
| `NEXT_PUBLIC_PROFILE_AVATAR` | 头像链接 | `https://example.com/avatar.jpg` |

### 社交链接

`NEXT_PUBLIC_SOCIALS` - JSON格式的社交链接数组

```json
[
  {"name":"Website","url":"https://qqhkx.com/"},
  {"name":"GitHub","url":"https://github.com/qqhkx"}
]
```

### 技能标签

- `NEXT_PUBLIC_LANGUAGES` - 编程语言，逗号分隔
- `NEXT_PUBLIC_FRAMEWORKS_AND_TOOLS` - 框架和工具，逗号分隔

示例：
```
NEXT_PUBLIC_LANGUAGES=Python,JavaScript,TypeScript
NEXT_PUBLIC_FRAMEWORKS_AND_TOOLS=React,Vue.js,Node.js
```

### 项目列表

`NEXT_PUBLIC_PROJECTS` - JSON格式的项目数组

```json
[
  {
    "title":"项目名称",
    "url":"https://github.com/username/repo",
    "category":"分类标签"
  }
]
```

## 注意事项

1. **环境变量前缀**：所有客户端可访问的环境变量必须以 `NEXT_PUBLIC_` 开头

2. **JSON格式**：社交链接和项目列表使用JSON格式，注意转义特殊字符

3. **重启服务**：修改环境变量后需要重启开发服务器才能生效

4. **安全性**：`.env.local` 文件已在 `.gitignore` 中排除，不会被提交到版本控制

5. **部署配置**：在 Vercel 等平台部署时，需要在平台的环境变量设置中配置这些变量

## 默认值

如果环境变量未设置，系统会使用代码中的默认值，确保网站正常运行。