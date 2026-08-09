export default function LargeTestimonial() {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="pt-8 md:pt-12 pb-12 md:pb-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#3B82F6"
                />
              </svg>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-blue-400">
                {/* 终端 / 代码图标 */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-200">
              “在这个数据越发不受控的时代，你的稳态旅程和身体数据只属于你自己。
              离线运行、完全开源、零遥测，这是我们对隐私的绝对底线。”
            </p>
            <div className="text-sm font-medium text-gray-400">
              <span className="text-gray-300">开发者</span>{" "}
              <span className="text-gray-500">/</span>{" "}
              <span className="text-blue-400">Trans Prism 维护者（bushi，⬆️AI写的，太中二了）</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
