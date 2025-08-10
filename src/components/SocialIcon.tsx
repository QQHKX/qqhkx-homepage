"use client";
import Image from "next/image";

/**
 * 社交媒体图标组件
 * 根据社交媒体名称显示对应的SVG图标
 * @param name - 社交媒体名称
 * @param className - 额外的CSS类名
 * @param size - 图标大小，默认为24
 */
interface SocialIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function SocialIcon({ name, className = "", size = 24 }: SocialIconProps) {
  // 社交媒体名称到图标文件的映射
  const iconMap: Record<string, string> = {
    "GitHub": "/icon/github.svg",
    "github": "/icon/github.svg",
    "Bilibili": "/icon/bilibili.svg",
    "bilibili": "/icon/bilibili.svg",
    "哔哩哔哩": "/icon/bilibili.svg",
    "Blog": "/icon/blog.svg",
    "blog": "/icon/blog.svg",
    "博客": "/icon/blog.svg",
    "QQ": "/icon/QQ.svg",
    "qq": "/icon/QQ.svg",
  };

  // 获取图标路径，如果没有找到对应图标则返回默认图标
  const iconPath = iconMap[name] || iconMap[name.toLowerCase()] || "/icon/blog.svg";

  return (
    <Image
      src={iconPath}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      style={{
        filter: "brightness(0) saturate(100%) invert(1)", // 将图标变为白色
      }}
    />
  );
}