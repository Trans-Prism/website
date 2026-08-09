import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid grid-cols-2 gap-8 py-8 sm:grid-cols-12 md:gap-10 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block — Logo + Copyright */}
          <div className="col-span-2 space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <p>&copy; 2026 Trans Prism. 开源且自由。</p>
              <p className="text-xs text-gray-400">May you find your steady state.</p>
              <p className="pt-1 text-xs leading-5 text-gray-400">
                <Link href="/icp" className="transition hover:text-gray-600">🏳️‍⚧️跨ICP备20260522号</Link>
              </p>
            </div>
          </div>

          {/* 2nd block — 项目 */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-800">项目</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#0">
                  下载 Android 版
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="https://github.com/Trans-Prism/Trans-Prism" target="_blank" rel="noopener noreferrer">
                  GitHub 仓库
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="https://github.com/Trans-Prism/Trans-Prism/releases" target="_blank" rel="noopener noreferrer">
                  更新日志
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block — 友情链接 */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-800">友情链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="https://www.transhelper.org/" target="_blank" rel="noopener noreferrer">
                  TransHelper
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="https://2345.lgbt" target="_blank" rel="noopener noreferrer">
                  2345.lgbt
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="https://kitsumio.github.io/MioMtFWiki/" target="_blank" rel="noopener noreferrer">
                  MioMtFWiki
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="https://transcircle.org/" target="_blank" rel="noopener noreferrer">
                  TransCircle
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="https://testflight.apple.com/join/SPGZysjK" target="_blank" rel="noopener noreferrer">
                  Oyama-Trancker
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="https://hrt.mahiro.uk/" target="_blank" rel="noopener noreferrer">
                  Journey
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block — 关于 */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-800">关于</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/usage-notice">
                  使用须知
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/license">
                  开源协议
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="https://github.com/Trans-Prism/Trans-Prism/issues" target="_blank" rel="noopener noreferrer">
                  报告 Bug
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block — GitHub 图标 */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-800">社交</h3>
            <ul className="flex gap-1">
              <li>
                <Link className="flex items-center justify-center text-blue-500 transition hover:text-blue-600" href="https://github.com/Trans-Prism/Trans-Prism" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text — overflow-safe on mobile */}
      <div className="pointer-events-none relative -mt-8 h-24 w-full overflow-hidden md:h-40" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center mt-0 text-6xl whitespace-nowrap font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Trans_Prism'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Trans_Prism'] after:[text-shadow:0_1px_0_white] md:text-[190px]"></div>
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3" aria-hidden="true">
          <div className="h-32 w-32 rounded-full border-[6px] border-blue-700 blur-[40px] md:h-40 md:w-40 md:border-[10px] md:blur-[60px]"></div>
        </div>
      </div>

    </footer>
  );
}
