import Link from "next/link";

export const metadata = {
  title: "使用须知 — Trans Prism",
  description: "Trans Prism 使用须知 —— 网络用途说明、血药浓度模拟提醒、免责声明与开源许可",
};

export default function UsageNoticePage() {
  return (
    <section className="relative grow">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* 返回按钮 */}
          <div className="mb-8">
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
              <span>返回首页</span>
            </Link>
          </div>

          {/* 页面标题 */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
              使用须知
            </h1>
            <p className="mt-3 text-base text-gray-500 italic md:mt-4 md:text-lg">
              在开始前，请花一点时间了解这两件小事。
            </p>
          </div>

          {/* 内容卡片 */}
          <div className="space-y-10">
            {/* 📡 关于网络 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                📡 关于网络
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                <strong>稳态光盒本质上是一个本地阅读器与离线工具箱。</strong>
              </p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>它<strong>不会、也不能</strong>提供任何 VPN、翻墙或代理功能——所有网络请求仅用于获取开源文本资料。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>你可以随时在系统设置里撤销它的网络权限，这不会影响本地数据。</span>
                </li>
              </ul>

              <h3 className="mb-3 text-sm font-semibold text-gray-900">网络用途说明：</h3>
              <div className="overflow-x-auto rounded-lg border border-gray-100">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2.5 text-left font-medium text-gray-700">功能</th>
                      <th className="px-4 py-2.5 text-left font-medium text-gray-700">网络用途</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Wiki 知识库", "在线阅读模式下访问 MtF/FtM/RLE/MioMtFWiki 官方站点"],
                      ["离线包更新", "从 Cloudflare R2 边缘节点下载 Wiki/Tracker 离线包"],
                      ["医疗名录同步", "从 GitHub raw 获取更新的友善医疗名录数据"],
                      ["APK 更新", "检测并下载新版 APK（可选）"],
                      ["DNS 安全层", "内置 DoH 抗污染机制，确保在 DNS 受限环境仍可正常获取开源资料"],
                    ].map(([feature, desc]) => (
                      <tr key={feature}>
                        <td className="px-4 py-2.5 font-medium text-gray-800 whitespace-nowrap">{feature}</td>
                        <td className="px-4 py-2.5 text-gray-600">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 border border-blue-100 p-4">
                <p className="text-sm text-blue-800 font-medium">
                  🛡️ 核心隐私保障：你所有极其隐私的生理数据（用药记录、血药浓度、嗓音训练参数等）<strong>绝不离开设备</strong>，仅存储在本地 <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs font-mono">SharedPreferences</code>。
                </p>
              </div>
            </div>

            {/* ⚕️ 关于血药浓度模拟 */}
            <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                ⚕️ 关于血药浓度模拟
              </h2>
              <div className="mb-6 rounded-lg bg-amber-50 border border-amber-200 p-4">
                <p className="text-sm text-amber-800 font-medium">
                  ⚠️ 内置的血药浓度模拟基于公开数学模型估算，<strong>仅供医师参考，不构成任何医疗建议。</strong>
                </p>
              </div>

              <h3 className="mb-3 text-sm font-semibold text-gray-900">重要提醒</h3>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                {[
                  "请在医师指导下进行 HRT，切勿仅凭模拟结果自行用药或调整剂量。",
                  "请以实际血液检测结果为准；如有不适请立即就医。",
                  "18 岁以下请在监护人及医生指导下使用。",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 text-sm font-semibold text-gray-900">模拟原理说明</h3>
              <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                血药浓度模拟器基于开源项目{' '}
                <a
                  href="https://github.com/SmirnovaOyama/Oyama-s-HRT-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                >
                  Oyama-s-HRT-Tracker
                </a>
                {' '}的一室/多室指数衰减算法与多剂量叠加模型：
              </p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                {[
                  "算法在 WebView 内的 JavaScript 中运行（非 Dart 侧）",
                  "模拟结果基于数学模型估算，不能替代真实的血液检测",
                  "个体差异（代谢速率、吸收效率等）可能导致实际浓度与模拟值存在偏差",
                  "模拟器仅作为辅助可视化工具，帮助理解药物代谢规律",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 text-sm font-semibold text-gray-900">正确使用方式</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-green-200 bg-green-50 p-3">
                  <p className="text-xs font-semibold text-green-700 mb-1">✅ 可以</p>
                  <ul className="space-y-1 text-xs text-green-600">
                    <li>用于学习了解药物代谢的基本规律</li>
                    <li>配合医生复诊时展示用药时间线</li>
                    <li>作为用药记录的可视化参考</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                  <p className="text-xs font-semibold text-red-700 mb-1">❌ 不可以</p>
                  <ul className="space-y-1 text-xs text-red-600">
                    <li>仅凭模拟结果调整剂量</li>
                    <li>替代定期的血液检测</li>
                    <li>在未经医生确认的情况下改变用药方案</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ⚖️ 免责声明 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                ⚖️ 免责声明
              </h2>
              <div className="rounded-lg bg-red-50 border border-red-100 p-4">
                <p className="text-sm text-red-800 leading-relaxed">
                  <strong>开发者不对因使用本应用而导致的任何直接或间接后果承担法律责任。</strong>
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                本应用所有功能仅供学术交流与数据可视化参考，<strong>不能替代专业医生的诊断与处方</strong>。调整激素剂量请务必在正规医生指导下进行。
              </p>
            </div>

            {/* 📋 开源许可 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                📋 开源许可
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                本项目采用代码、算法与内容分离的复合授权模式：
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-100">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2.5 text-left font-medium text-gray-700">组件</th>
                      <th className="px-4 py-2.5 text-left font-medium text-gray-700">许可证</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["原创客户端代码", "Apache License 2.0"],
                      ["PK 计算引擎（Oyama）", "MIT License"],
                      ["嗓音训练模块（VFS Tracker）", "CC BY-NC-SA 4.0"],
                      ["内置知识库文本", "CC BY-SA 4.0 / CC BY-ND 4.0"],
                    ].map(([component, license]) => (
                      <tr key={component}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{component}</td>
                        <td className="px-4 py-2.5 text-gray-600">{license}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                详见{' '}
                <a
                  href="https://github.com/Trans-Prism/Trans-Prism/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                >
                  Trans-Prism/LICENSE
                </a>。
              </p>
            </div>

            {/* 结尾寄语 */}
            <div className="text-center pb-8">
              <p className="text-base text-gray-400 italic">
                &ldquo;May you find your steady state.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
