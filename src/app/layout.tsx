import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * 手写字体（用于标题等特殊元素）
 * 来源：public/font/Pacifico-Regular-all.ttf，本地字体，避免外部请求。
 * 暴露变量：--font-pacifico
 */
const pacifico = localFont({
  src: "../../public/font/Pacifico-Regular-all.ttf",
  variable: "--font-pacifico",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  icons: { 
    icon: process.env.NEXT_PUBLIC_FAVICON_PATH || "/favicon.ico",
    apple: process.env.NEXT_PUBLIC_APPLE_ICON_PATH || "/favicon.ico",
  },
};

/**
 * 根布局组件
 * 用途：设置页面的全局样式、字体变量和元数据。
 * 参数：children - 页面内容
 * 返回：HTML 根结构
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${pacifico.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
