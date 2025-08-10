"use client";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { useMemo, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

/**
 * Home 页面组件
 * 用途：渲染 QQHKX 个人主页，包括 Hero、关于、技术栈、项目与联系方式。
 * 返回：完整的主页 JSX 结构。
 */
export default function Home() {
  // 页面加载状态管理
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // 模拟页面资源加载完成
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const groups = useMemo(() => {
    const map = new Map<string, typeof profile.projects>();
    for (const p of profile.projects) {
      const arr = map.get(p.category) ?? [];
      arr.push(p);
      map.set(p.category, arr);
    }
    return Array.from(map.entries());
  }, []);

  // 视差滚动：背景轻微上移，营造空间感
  const { scrollY } = useScroll();
  const bgTranslate = useTransform(scrollY, [0, 600], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // 使用 useMemo 构造信息块，避免在 JSX 中直接书写复杂字面量
  const blocks = useMemo(
    () => [
      {
        title: "关于我",
        content: (
          <p className="text-white/80 leading-7">
            我是来自{profile.location}的{profile.role}，热爱前端与计算机科学，熟悉 React/Vue 等前端框架，也在持续学习 AI 与工程化相关内容。
          </p>
        ),
      },
      {
        title: "技术栈",
        content: (
          <div className="flex flex-wrap gap-2">
            {profile.languages.map((l) => (
              <span key={l} className="px-3 py-1 rounded-full bg-white/10 text-sm">
                {l}
              </span>
            ))}
            {profile.frameworksAndTools.map((f) => (
              <span key={f} className="px-3 py-1 rounded-full bg-white/10 text-sm">
                {f}
              </span>
            ))}
          </div>
        ),
      },
    ],
    []
  );

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-dvh w-full"
        >
          {/* Hero 区域 */}
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative min-h-dvh mx-auto max-w-6xl px-6 flex items-center py-16 md:py-24"
          >
            {/* 背景装饰（视差） */}
            <motion.div 
              style={{ y: bgTranslate, opacity: heroOpacity, scale: heroScale }} 
              className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen -z-10 opacity-80"
            >
          <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,#7c3aed33,transparent),radial-gradient(500px_200px_at_80%_10%,#06b6d433,transparent)]" />
          {/* 添加更多装饰光斑（循环动效 - 增强幅度） */}

          <motion.div
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{
              x: [0, 35, -25, 0],
              y: [0, -30, 25, 0],
              scale: [1, 1.08, 0.96, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 0.8, repeatDelay: 1.2 }}
            className="absolute top-[15%] right-[20%] w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-gradient-to-br from-purple-400/12 to-blue-500/12 rounded-full blur-xl mix-blend-screen"
          />
          <motion.div
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 25, -20, 0],
              scale: [1, 0.94, 1.06, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "circInOut", delay: 1.5, repeatDelay: 0.8 }}
            className="absolute bottom-[25%] left-[12%] w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-64 xl:h-64 bg-gradient-to-tr from-cyan-400/10 to-violet-500/10 rounded-full blur-xl mix-blend-screen"
          />
          {/* 轻微闪烁的小光点（加位移动效） */}
          <motion.div
            initial={{ opacity: 0.25, scale: 0.9 }}
            animate={{
              opacity: [0.1, 0.4, 0.15, 0.1],
              scale: [0.9, 1.12, 0.95, 0.9],
              x: [0, 22, -18, 0],
              y: [0, -18, 14, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "circInOut", delay: 0.3, repeatDelay: 0.6 }}
            className="absolute top-[38%] left-[55%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-tr from-white/4 to-white/0 rounded-full blur-md mix-blend-screen"
          />

          {/* 额外响应式光斑：在更大屏幕上逐步增加，颜色做微小差异 */}
          {/* sm+：小型偏紫光斑 */}
          <motion.div
            className="hidden sm:block absolute top-[8%] left-[5%] w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-gradient-to-tr from-fuchsia-400/8 to-purple-400/6 rounded-full blur-lg mix-blend-screen"
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{ x: [0, 22, -18, 0], y: [0, -18, 15, 0], scale: [1, 1.12, 0.94, 1] }}
            transition={{ duration: 13, repeat: Infinity, ease: "backInOut", delay: 0.4, repeatDelay: 1.0 }}
          />
          {/* md+：青色系光斑 */}
          <motion.div
            className="hidden md:block absolute bottom-[12%] right-[15%] w-32 h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-gradient-to-tr from-sky-400/7 to-cyan-300/6 rounded-full blur-lg mix-blend-screen"
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{ x: [0, -28, 22, 0], y: [0, 24, -18, 0], scale: [1, 0.92, 1.18, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "anticipate", delay: 1.8, repeatDelay: 0.5 }}
          />

          {/* xl+：绿色系柔和光斑 */}
          <motion.div
            className="hidden xl:block absolute top-[3%] right-[45%] w-36 h-36 2xl:w-44 2xl:h-44 bg-gradient-to-tr from-emerald-300/6 to-teal-300/6 rounded-full blur-xl mix-blend-screen"
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{ x: [0, -32, 26, 0], y: [0, 28, -22, 0], scale: [1, 0.9, 1.16, 1] }}
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 1.0, repeatDelay: 0.9 }}
          />
        </motion.div>

            {/* 主要内容区域 - 水平布局 */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-8">
          {/* 头像区域 */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: 0.2,
              duration: 0.8
            }}
            className="relative flex-shrink-0 size-32 md:size-40 rounded-full overflow-hidden ring-4 ring-white/20 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
          >
            <Image
              src={profile.avatar}
              alt="QQHKX avatar"
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* 文字内容区域 */}
          <div className="flex-1 text-left">
            {/* 标题区域 */}
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 0.4, 
                duration: 0.9, 
                type: "spring", 
                stiffness: 80, 
                damping: 12
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              style={{ letterSpacing: '0.1em' }}
            >
              <span>qqhkx</span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-light" style={{ letterSpacing: '-0.02em' }}>.com</span>
            </motion.h1>

            {/* 座右铭区域 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 0.6, 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="mb-6"
            >
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                 <TypingText text={profile.motto} speed={120} />
               </p>
            </motion.div>
            
            {/* 角色描述标签 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 0.8, 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex flex-wrap items-center gap-3 mb-8 text-xs md:text-sm text-white/70"
            >
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                {profile.role}
              </span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                {profile.location}
              </span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                前端开发
              </span>
            </motion.div>

             {/* 社交链接 */}
             <motion.div
               initial="hidden"
               animate="show"
               variants={{
                 hidden: { opacity: 0, y: 20 },
                 show: { 
                   opacity: 1, 
                   y: 0, 
                   transition: { 
                     staggerChildren: 0.08, 
                     delayChildren: 1.0,
                     ease: [0.25, 0.46, 0.45, 0.94]
                   } 
                 },
               }}
               className="flex flex-wrap items-center gap-3"
             >
              {profile.socials.map((s) => (
                <motion.div 
                  key={s.name} 
                  variants={{ 
                    hidden: { opacity: 0, y: 15, scale: 0.9 }, 
                    show: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }
                    } 
                  }}
                >
                  <Link
                    href={s.url}
                    className="relative card-skeu texture-spot text-sm md:text-base lg:text-lg px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-[20px] hover:opacity-95 transition"
                    target="_blank"
                  >
                    {s.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
         
         {/* 添加向下滚动指示 */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ 
             delay: 1.5, 
             duration: 1.0, 
             ease: [0.25, 0.46, 0.45, 0.94]
           }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
         >
           <div className="text-xs text-white/50 mb-2">向下滚动探索更多</div>
           <motion.div
             animate={{ y: [0, 8, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="w-5 h-8 border border-white/30 rounded-full flex justify-center"
           >
             <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
           </motion.div>
         </motion.div>
          </motion.section>

      {/* 关于与技术栈 */}
      <section className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6 pb-12">
        {blocks.map((block) => (
          <motion.div
            key={block.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative card-skeu texture-spot p-6"
          >
            <h2 className="text-xl font-semibold mb-3">{block.title}</h2>
            {block.content}
          </motion.div>
        ))}
      </section>

      {/* 项目网格 */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">精选项目</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 140, damping: 20, delay: idx * 0.03 }}
              className="relative card-skeu texture-spot p-5"
            >
              <div className="mb-3 text-sm text-white/70">{category}</div>
              <ul className="space-y-2">
                {items.map((p, i) => (
                  <motion.li key={p.title} initial={{ x: -8, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                    <Link href={p.url} className="group inline-flex items-center gap-2 hover:underline" target="_blank">
                      <span className="font-medium group-hover:text-accent">{p.title}</span>
                      <svg className="size-4 text-white/60 group-hover:text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7" />
                        <path d="M8 7h9v9" />
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 联系方式/页脚 */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            {profile.socials.map((s) => (
              <Link key={s.name} href={s.url} className="hover:text-white" target="_blank">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

/**
 * TypingText 组件
 * 用途：实现打字机效果的文本动画，带有光标闪烁
 * 输入：text（要显示的文本）、speed（打字速度，毫秒）
 * 返回：带有打字机效果和光标闪烁的文本 JSX
 */
function TypingText({ text, speed = 60 }: { text: string; speed?: number }) {
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    if (index >= text.length) return;
    const timer = setInterval(() => {
      setIndex((i) => (i < text.length ? i + 1 : i));
    }, speed);
    return () => clearInterval(timer);
  }, [index, text, speed]);

  // 光标闪烁效果
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span aria-label={text} aria-live="polite" className="relative">
      {text.slice(0, index)}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block w-0.5 h-5 bg-white/70 ml-0.5 align-middle"
      />
    </span>
  );
}
