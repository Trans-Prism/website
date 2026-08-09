import Link from "next/link";

export const metadata = {
  title: "备案信息 — Trans Prism",
  description: "跨ICP备20260522号",
};

export default function IcpPage() {
  return (
    <section className="relative grow">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="py-24 text-center md:py-32">
          <p className="text-base text-gray-500 md:text-lg">
            这只是一个平平无奇的🏳️‍⚧️跨icp备
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-all duration-200 hover:text-gray-900 group"
            >
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>点我返回首页</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
