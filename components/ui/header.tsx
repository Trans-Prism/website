import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full">
      {/* iOS‑style 液态玻璃层 — 高透、强模糊、低饱和拉伸 */}
      <div
        className="absolute inset-0 border-b border-white/20 bg-white/15 shadow-[0_0.5px_1px_rgba(0,0,0,0.03)] backdrop-blur-[60px] backdrop-saturate-[1.4]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Site branding — Logo + Text */}
          <div className="flex shrink-0 items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo1.svg"
                alt="Trans Prism"
                width={28}
                height={28}
                className="shrink-0"
              />
              <span className="text-xl font-bold tracking-tight text-gray-900 transition-opacity hover:opacity-70">
                Trans Prism
              </span>
            </Link>
          </div>

          {/* Right side: GitHub icon + Download button */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Trans-Prism/Trans-Prism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-opacity hover:text-gray-900"
              aria-label="GitHub"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <Link
              href="/download"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md active:scale-95"
            >
              {/* Download icon */}
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              下载 Android 版
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
