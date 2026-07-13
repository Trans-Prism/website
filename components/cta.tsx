import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section className="pt-4 md:pt-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-40 w-[300px] rounded-full border-[12px] border-blue-500 blur-3xl md:h-56 md:w-[480px] md:border-[20px]" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform max-md:hidden"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-10 md:px-12 md:py-20">
            <h2 className="mb-4 border-y text-2xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-700/.7),transparent)1] md:mb-12 md:text-4xl">
              夺回你的数据控制权
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full rounded-full border border-blue-300/25 bg-blue-500/85 px-8 py-3 text-white shadow-lg shadow-blue-500/20 backdrop-blur-2xl transition-all duration-300 hover:bg-blue-400/85 hover:shadow-xl hover:shadow-blue-400/30 active:scale-[0.97] sm:mb-0 sm:w-auto"
                href="#0"
              >
                <span className="relative inline-flex items-center gap-2">
                  获取 Android 版
                  <span className="inline-flex items-center justify-center rounded-full bg-white/20 p-1 text-xs transition-transform duration-300 group-hover:translate-x-0.5">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
