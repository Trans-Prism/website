import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";

/* ================================================================
   外部链接常量
   ================================================================ */
const EXTERNAL_LINKS = {
  OYAMA_HRT_TRACKER:
    "https://github.com/xunxunProjects/Oyama-s-HRT-Tracker",
} as const;

/* ================================================================
   悬浮卡片子组件
   ================================================================ */
function FloatingCard({
  icon,
  title,
  subtitle,
  positionClasses,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  positionClasses: string;
  delay: string;
}) {
  return (
    <div
      className={`${positionClasses} z-10 max-md:hidden`}
      style={{ animation: `float 4s ease-in-out infinite ${delay} both` }}
    >
      <div className="flex w-[220px] items-start gap-3 rounded-xl border border-white/10 bg-gray-900/80 p-4 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:border-blue-500/30 sm:w-[240px]">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-gray-100">
            {title}
          </p>
          <p className="truncate text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   移动端卡片（水平滚动条样式）
   ================================================================ */
function MobileFeatureCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 items-start gap-3 rounded-xl border border-white/10 bg-gray-900/80 p-3 shadow-lg backdrop-blur-md">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-gray-100">{title}</p>
        <p className="truncate text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

/* ================================================================
   锁定图标（检索/锁状）
   ================================================================ */
function LockIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1" />
    </svg>
  );
}

/* ================================================================
   折线图图标
   ================================================================ */
function ChartIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

/* ================================================================
   盾牌图标
   ================================================================ */
function ShieldIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

/* ================================================================
   主组件
   ================================================================ */
export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-12 md:pt-20 pb-4 md:pb-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-2xl font-bold text-gray-200 md:text-4xl">
              你的专属知识节点，
              <br />
              完全离线，绝对安全
            </h2>
          </div>

          {/* Planet */}
          <div className="pb-12 md:pb-20 max-md:hidden" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  {/* Overlay — hidden on mobile */}
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none max-md:hidden"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />

                  {/* 三张悬浮卡片 — 桌面端 absolute 定位 */}
                  {/* 卡片 1 — 查询（锁状图标），右上 */}
                  <FloatingCard
                    icon={<LockIcon />}
                    title="查询: 四大相关Wiki"
                    subtitle="Cloudflare全球分布节点"
                    positionClasses="absolute -right-28 top-12"
                    delay="0s"
                  />

                  {/* 卡片 2 — 运算（折线图图标），左上 */}
                  <FloatingCard
                    icon={<ChartIcon />}
                    title="运算: PK 血药浓度模拟"
                    subtitle="本地端侧计算"
                    positionClasses="absolute -left-28 top-16"
                    delay="1s"
                  />

                  {/* 卡片 3 — 拦截（盾牌图标），右下 */}
                  <FloatingCard
                    icon={<ShieldIcon />}
                    title="拦截: 外部遥测请求"
                    subtitle="0 数据泄露 · 隐私隔离"
                    positionClasses="absolute -bottom-2 left-1/2 -translate-x-1/2"
                    delay="2s"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ---- 移动端：三张卡片堆叠排列 ---- */}
          <div className="flex flex-col gap-3 md:hidden pb-8">
            <MobileFeatureCard
              icon={<LockIcon />}
              title="查询: 四大相关Wiki"
              subtitle="Cloudflare全球分布节点"
            />
            <MobileFeatureCard
              icon={<ChartIcon />}
              title="运算: PK 血药浓度模拟"
              subtitle="本地端侧计算"
            />
            <MobileFeatureCard
              icon={<ShieldIcon />}
              title="拦截: 外部遥测请求"
              subtitle="0 数据泄露 · 隐私隔离"
            />
          </div>

          {/* Grid — 底部三列特性 */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-5 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500 shrink-0" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>离线 Wiki 知识库</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                默认轻量在线模式（零缓存），支持一键下载离线包（OTA 静默热更新），退出离线模式时可选清理缓存。
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500 shrink-0" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <span>科学稳态追踪</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                基于
                <a
                  href={EXTERNAL_LINKS.OYAMA_HRT_TRACKER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-blue-500/30 hover:decoration-blue-500 transition-colors"
                >
                  Oyama HRT Tracker
                </a>
                （MIT 协议）药代动力学模型，精准测算血药浓度。
                用严谨的数据分析对抗未知，让稳态旅程有迹可循。
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500 shrink-0" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                  <path d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z" opacity=".3" />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                </svg>
                <span>零遥测绝对隐私</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                你的身体数据只属于你。拒绝集成任何第三方追踪代码，所有计算与存储均在本地沙盒内闭环完成。
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
