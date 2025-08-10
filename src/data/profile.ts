/*
 * 文件用途：集中存放 QQHKX 的个人资料与项目数据，供页面渲染调用。
 * 说明：数据来源于环境变量配置，支持动态配置管理。
 */

export type SocialLink = {
  /** 平台名称，例如 GitHub/Bilibili/Blog */
  name: string;
  /** 访问地址 */
  url: string;
};

export type Project = {
  /** 项目名称/仓库名 */
  title: string;
  /** 项目链接（GitHub 或外链） */
  url: string;
  /** 项目简要描述 */
  description: string;
  /** 项目标签数组，用于标识技术栈或特性 */
  tags: string[];
};

export type Profile = {
  /** 用户名或展示名 */
  name: string;
  /** 座右铭/签名 */
  motto: string;
  /** 当前所在地 */
  location: string;
  /** 当前身份 */
  role: string;
  /** 头像链接（远程地址） */
  avatar: string;
  /** 社交链接集合 */
  socials: SocialLink[];
  /** 编程语言 */
  languages: string[];
  /** 框架与工具 */
  frameworksAndTools: string[];
  /** 个人项目 */
  projects: Project[];
  /** 备案号 */
  icpNumber?: string;
};

/**
 * 从环境变量安全解析JSON字符串
 * @param envVar - 环境变量值
 * @param fallback - 解析失败时的默认值
 * @returns 解析后的对象或默认值
 */
function parseEnvJSON<T>(envVar: string | undefined, fallback: T): T {
  if (!envVar) return fallback;
  try {
    return JSON.parse(envVar) as T;
  } catch {
    console.warn(`Failed to parse environment variable: ${envVar}`);
    return fallback;
  }
}

/**
 * 从环境变量解析逗号分隔的字符串数组
 * @param envVar - 环境变量值
 * @param fallback - 解析失败时的默认值
 * @returns 字符串数组
 */
function parseEnvArray(envVar: string | undefined, fallback: string[]): string[] {
  if (!envVar) return fallback;
  return envVar.split(',').map(item => item.trim()).filter(Boolean);
}

export const profile: Profile = {
  name: process.env.NEXT_PUBLIC_PROFILE_NAME || "qqhkx.com",
  motto: process.env.NEXT_PUBLIC_PROFILE_MOTTO || "心有阳光，万物可爱",
  location: process.env.NEXT_PUBLIC_PROFILE_LOCATION || "中国·成都",
  role: process.env.NEXT_PUBLIC_PROFILE_ROLE || "高中生",
  avatar: process.env.NEXT_PUBLIC_PROFILE_AVATAR || "https://image.qqhkx.com/Profile%20picture.jpg",
  icpNumber: process.env.NEXT_PUBLIC_ICP_NUMBER || undefined,
  socials: parseEnvJSON<SocialLink[]>(process.env.NEXT_PUBLIC_SOCIALS, [
    { name: "Blog", url: "https://blog.qqhkx.com/" },
    { name: "Bilibili", url: "https://space.bilibili.com/646242813" },
    { name: "GitHub", url: "https://github.com/qqhkx" },
    { name: "QQ", url: "https://qm.qq.com/cgi-bin/qm/qr?k=smcjh3B6c0qwT9-elqnsDiNmHW0KW6lQ" },
  ]),
  languages: parseEnvArray(process.env.NEXT_PUBLIC_LANGUAGES, ["Python", "C++", "JavaScript", "HTML5", "CSS3"]),
  frameworksAndTools: parseEnvArray(process.env.NEXT_PUBLIC_FRAMEWORKS_AND_TOOLS, [
    "Vue.js",
    "React",
    "Node.js",
    "Python",
    "Docker",
    "Git",
    "GitHub",
    "Photoshop",
    "Apifox",
    "Postman",
    "VS Code",
  ]),
  projects: parseEnvJSON<Project[]>(process.env.NEXT_PUBLIC_PROJECTS, [
    { 
      title: "Baidu-Web-Disk-Hidden-Files-One-Key-Clean", 
      url: "https://github.com/QQHKX/Baidu-Web-Disk-Hidden-Files-One-Key-Clean", 
      description: "百度网盘隐藏文件一键清理工具",
      tags: ["Python", "工具", "自动化"]
    },
    { 
      title: "md-article-little-assistant", 
      url: "https://github.com/QQHKX/md-article-little-assistant", 
      description: "Markdown文章小助手",
      tags: ["Markdown", "工具", "文档"]
    },
    { 
      title: "mailSender", 
      url: "https://github.com/QQHKX/mailSender", 
      description: "基于resend-api的邮件发送工具",
      tags: ["Node.js", "API", "邮件"]
    },
    { 
      title: "classClock", 
      url: "https://github.com/QQHKX/classClock", 
      description: "沉浸式时钟应用",
      tags: ["JavaScript", "时钟", "UI"]
    },
    { 
      title: "Immersive-clock", 
      url: "https://github.com/QQHKX/Immersive-clock", 
      description: "沉浸式时钟-React重构版本",
      tags: ["React", "时钟", "重构"]
    },
    { 
      title: "school-study-supervision", 
      url: "https://github.com/QQHKX/school-study-supervision", 
      description: "学校学习监督系统",
      tags: ["Web", "教育", "管理"]
    },
    { 
      title: "Zombie-fight", 
      url: "https://github.com/QQHKX/Zombie-fight", 
      description: "僵尸大战游戏",
      tags: ["游戏", "娱乐", "动作"]
    },
    { 
      title: "Fight-against-COVID-19", 
      url: "https://github.com/QQHKX/Fight-against-COVID-19", 
      description: "抗击新冠病毒主题游戏",
      tags: ["游戏", "主题", "教育"]
    },
    { 
      title: "QQHKX-Prompt", 
      url: "https://github.com/QQHKX/QQHKX-Prompt", 
      description: "个人AI提示词集合",
      tags: ["AI", "提示词", "工具"]
    },
    { 
      title: "llm-api-manager", 
      url: "https://github.com/QQHKX/llm-api-manager", 
      description: "大语言模型API管理工具",
      tags: ["AI", "API", "管理"]
    },
    { 
      title: "oneapi_test", 
      url: "https://github.com/QQHKX/oneapi_test", 
      description: "OneAPI测试项目",
      tags: ["API", "测试", "工具"]
    },
  ]),
};