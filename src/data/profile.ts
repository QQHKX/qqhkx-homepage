/*
 * 文件用途：集中存放 QQHKX 的个人资料与项目数据，供页面渲染调用。
 * 说明：内容来源于仓库根目录的《QQHKX个人信息整理.md》，为了前端使用便捷，这里做了结构化整理。
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
  /** 项目类型或分类，用于在 UI 上打标签 */
  category: string;
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
};

export const profile: Profile = {
  name: "qqhkx.com",
  motto: "心有阳光，万物可爱",
  location: "中国·成都",
  role: "高中生",
  avatar: "https://image.qqhkx.com/Profile%20picture.jpg",
  socials: [
    { name: "Website", url: "https://qqhkx.com/" },
    { name: "Blog", url: "https://blog.qqhkx.com/" },
    { name: "Bilibili", url: "https://space.bilibili.com/646242813" },
    { name: "GitHub", url: "https://github.com/qqhkx" },
    { name: "QQ", url: "https://qm.qq.com/cgi-bin/qm/qr?k=smcjh3B6c0qwT9-elqnsDiNmHW0KW6lQ" },
  ],
  languages: ["Python", "C++", "JavaScript", "HTML5", "CSS3"],
  frameworksAndTools: [
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
  ],
  projects: [
    { title: "Baidu-Web-Disk-Hidden-Files-One-Key-Clean", url: "https://github.com/QQHKX/Baidu-Web-Disk-Hidden-Files-One-Key-Clean", category: "实用工具" },
    { title: "md-article-little-assistant", url: "https://github.com/QQHKX/md-article-little-assistant", category: "实用工具" },
    { title: "mailSender", url: "https://github.com/QQHKX/mailSender", category: "实用工具" },

    { title: "classClock", url: "https://github.com/QQHKX/classClock", category: "时钟应用" },
    { title: "Immersive-clock", url: "https://github.com/QQHKX/Immersive-clock", category: "时钟应用" },
    { title: "school-study-supervision", url: "https://github.com/QQHKX/school-study-supervision", category: "Web 应用" },

    { title: "Zombie-fight", url: "https://github.com/QQHKX/Zombie-fight", category: "游戏" },
    { title: "Fight-against-COVID-19", url: "https://github.com/QQHKX/Fight-against-COVID-19", category: "游戏" },

    { title: "QQHKX-Prompt", url: "https://github.com/QQHKX/QQHKX-Prompt", category: "AI/工具" },
    { title: "llm-api-manager", url: "https://github.com/QQHKX/llm-api-manager", category: "AI/工具" },
    { title: "oneapi_test", url: "https://github.com/QQHKX/oneapi_test", category: "AI/工具" },
  ],
};