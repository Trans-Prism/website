"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

/* ================================================================
   子组件：单台手机外壳
   ================================================================ */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[600px] w-[280px] shrink-0 overflow-hidden rounded-[3rem] border-[8px] border-gray-900 bg-gray-50 shadow-2xl">
      {/* 灵动岛 — 精致药丸挖孔 */}
      <div className="absolute left-1/2 top-3 z-50 h-6 w-24 -translate-x-1/2 rounded-full bg-gray-900" />
      {/* 内部安全区容器：pt-[14px] 略微避开灵动岛 */}
      <div className="absolute inset-0 overflow-hidden pt-[14px]">
        {children}
      </div>
    </div>
  );
}

/* ================================================================
   截图页面组件（纯图片，填满手机内屏）
   ================================================================ */

function Screenshot({ src }: { src: string }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt="screenshot"
        fill
        className="object-cover"
        sizes="280px"
      />
    </div>
  );
}

/* ================================================================
   通用动画手机内容组件
   每台手机拥有独立的动画状态，仅当 isActive=true 时运行
   ================================================================ */

type RipplePos = { left: number; top: number };
type RippleId = "fwd" | "back";

function AnimatedPhoneContent({
  isActive,
  pageA,
  pageB,
  rippleFwd,
  rippleBack,
}: {
  isActive: boolean;
  pageA: React.ReactNode;
  pageB: React.ReactNode;
  rippleFwd: RipplePos;
  rippleBack: RipplePos;
}) {
  const [slideOffset, setSlideOffset] = useState(0);
  const [rippleType, setRippleType] = useState<RippleId | null>(null);
  const [rippleIteration, setRippleIteration] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const runCycle = useCallback(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    setSlideOffset(0);
    setRippleType(null);

    const t1 = setTimeout(() => {
      setRippleType("fwd");
      setRippleIteration((n) => n + 1);

      const t2 = setTimeout(() => {
        setRippleType(null);
        setSlideOffset(-100);

        const t3 = setTimeout(() => {
          setRippleType("back");
          setRippleIteration((n) => n + 1);

          const t4 = setTimeout(() => {
            setRippleType(null);
            setSlideOffset(0);

            const t5 = setTimeout(runCycle, 1000);
            timers.push(t5);
            timersRef.current = timers;
          }, 500);
          timers.push(t4);
        }, 1500);
        timers.push(t3);
      }, 500);
      timers.push(t2);
    }, 1500);
    timers.push(t1);
    timersRef.current = timers;
  }, []);

  /* 根据 isActive 启停动画 */
  useEffect(() => {
    if (isActive) {
      runCycle();
    } else {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    }
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [isActive, runCycle]);

  return (
    <div className="relative h-full overflow-hidden">
      {/* 滑动容器 */}
      <div
        className="flex h-full transition-transform duration-[600ms] ease-in-out"
        style={{ transform: `translateX(${slideOffset}%)` }}
      >
        <div className="relative h-full w-full flex-shrink-0">{pageA}</div>
        <div className="relative h-full w-full flex-shrink-0">{pageB}</div>
      </div>

      {/* 前进波纹 */}
      {rippleType === "fwd" && (
        <span
          key={`ripple-fwd-${rippleIteration}`}
          className="absolute z-30 animate-ripple rounded-full bg-blue-500/40"
          style={{
            left: rippleFwd.left,
            top: rippleFwd.top,
            width: 36,
            height: 36,
          }}
        />
      )}
      {/* 返回波纹 */}
      {rippleType === "back" && (
        <span
          key={`ripple-back-${rippleIteration}`}
          className="absolute z-30 animate-ripple rounded-full bg-indigo-500/40"
          style={{
            left: rippleBack.left,
            top: rippleBack.top,
            width: 32,
            height: 32,
          }}
        />
      )}
    </div>
  );
}

/* ================================================================
   主组件
   ================================================================ */
export default function HeroHome() {
  const [activeIndex, setActiveIndex] = useState(1);

  /* 三台手机的配置数据 */
  const phoneSlots = [
    {
      index: 0,
      content: (
        <AnimatedPhoneContent
          isActive={activeIndex === 0}
          pageA={<Screenshot src="/images/phone-left-a.png" />}
          pageB={<Screenshot src="/images/phone-left-b.png" />}
          rippleFwd={{ left: 60, top: 62 }}
          rippleBack={{ left: 6, top: 22 }}
        />
      ),
    },
    {
      index: 1,
      content: (
        <AnimatedPhoneContent
          isActive={activeIndex === 1}
          pageA={<Screenshot src="/images/phone-center-a.png" />}
          pageB={<Screenshot src="/images/phone-center-b.png" />}
          rippleFwd={{ left: 172, top: 168 }}
          rippleBack={{ left: 6, top: 22 }}
        />
      ),
    },
    {
      index: 2,
      content: (
        <AnimatedPhoneContent
          isActive={activeIndex === 2}
          pageA={<Screenshot src="/images/phone-right-a.png" />}
          pageB={<Screenshot src="/images/phone-right-b.png" />}
          rippleFwd={{ left: 170, top: 232 }}
          rippleBack={{ left: 6, top: 22 }}
        />
      ),
    },
  ] as const;

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-32 pt-32 md:pb-40 md:pt-40">
          {/* 标题 */}
          <div className="pb-16 text-center md:pb-20">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
              Trans Prism
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-700">
                跨性别知识图谱 · 安全 · 离线 · 开源
              </p>
            </div>
          </div>

          {/* 三机位 — 悬停聚焦交互 */}
          <div
            className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-8"
            onMouseLeave={() => setActiveIndex(1)}
          >
            {phoneSlots.map(({ index, content }) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={[
                    "shrink-0 transition-all duration-500 ease-out",
                    isActive
                      ? "z-20 md:scale-105 md:opacity-100"
                      : "z-10 md:scale-90 md:opacity-40 md:translate-y-4 md:grayscale md:blur-[1px]",
                  ].join(" ")}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <PhoneFrame>{content}</PhoneFrame>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
