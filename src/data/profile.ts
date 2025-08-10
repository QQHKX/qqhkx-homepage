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
  /** 个人简介描述 */
  description: string;
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
  /** 网站名称 */
  siteName: string;
  /** 网站域名后缀 */
  siteDomain: string;
  /** 头像alt文本 */
  avatarAlt: string;
  /** 图片域名 */
  imageHostname: string;
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

// 创建基础配置对象
const baseProfile = {
  name: process.env.NEXT_PUBLIC_PROFILE_NAME || "",
  motto: process.env.NEXT_PUBLIC_PROFILE_MOTTO || "",
  location: process.env.NEXT_PUBLIC_PROFILE_LOCATION || "",
  role: process.env.NEXT_PUBLIC_PROFILE_ROLE || "",
  avatar: process.env.NEXT_PUBLIC_PROFILE_AVATAR || "",
  icpNumber: process.env.NEXT_PUBLIC_ICP_NUMBER || undefined,
  socials: parseEnvJSON<SocialLink[]>(process.env.NEXT_PUBLIC_SOCIALS, []),
  languages: parseEnvArray(process.env.NEXT_PUBLIC_LANGUAGES, []),
  frameworksAndTools: parseEnvArray(process.env.NEXT_PUBLIC_FRAMEWORKS_AND_TOOLS, []),
  projects: parseEnvJSON<Project[]>(process.env.NEXT_PUBLIC_PROJECTS, []),
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "",
  siteDomain: process.env.NEXT_PUBLIC_SITE_DOMAIN || "",
  imageHostname: process.env.NEXT_PUBLIC_IMAGE_HOSTNAME || "",
};

// 处理头像alt文本的模板变量替换
const rawAvatarAlt = process.env.NEXT_PUBLIC_PROFILE_AVATAR_ALT || "";
const processedAvatarAlt = rawAvatarAlt
  .replace(/\{name\}/g, baseProfile.name);

// 处理描述中的模板变量替换
const rawDescription = process.env.NEXT_PUBLIC_PROFILE_DESCRIPTION || "";
const processedDescription = rawDescription
  .replace(/\{location\}/g, baseProfile.location)
  .replace(/\{role\}/g, baseProfile.role);

export const profile: Profile = {
  ...baseProfile,
  description: processedDescription,
  avatarAlt: processedAvatarAlt,
};