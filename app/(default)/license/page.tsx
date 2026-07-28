import Link from "next/link";

export const metadata = {
  title: "开源许可 — Trans Prism",
  description: "Trans Prism 复合开源许可证 —— Apache 2.0, MIT, CC BY-SA 4.0, CC BY-NC-SA 4.0, CC BY-ND 4.0, LGPL-3.0",
};

const licenseData = [
  { id: 1, component: "原创客户端代码\n(Flutter/Dart 源码, lib/)", license: "Apache License 2.0", category: "代码" },
  { id: 2, component: "PK 计算引擎\n(PK Simulator, 衍生自 Oyama)", license: "MIT License", category: "算法" },
  { id: 3, component: "嗓音训练模块\n(Voice Training, 衍生自 VFS Tracker)", license: "CC BY-NC-SA 4.0", category: "代码/算法" },
  { id: "4a", component: "MtF.Wiki 知识库内容\n(Project Trans 系)", license: "CC BY-SA 4.0", category: "内容" },
  { id: "4b", component: "FtM.Wiki 知识库内容\n(Project Trans 系)", license: "CC BY-SA 4.0", category: "内容" },
  { id: "4c", component: "RLE.Wiki 知识库内容\n(Project Trans 系)", license: "CC BY-SA 4.0", category: "内容" },
  { id: "4d", component: "MioMtFWiki 知识库内容\n(社区驱动项目)", license: "CC BY-ND 4.0", category: "内容" },
  { id: 5, component: "激素换算器 & 罩杯计算器\n(衍生自 MtF.wiki 及网络公开资料)", license: "CC BY-SA 4.0", category: "算法/内容" },
  { id: 6, component: "SVG 图解资源库\n(Twemoji / OpenMoji / Noto Emoji 风格)", license: "各自保留\n(CC-BY / Apache 2.0 / SIL OFL 等)", category: "资源" },
  { id: 7, component: "2345.LGBT 导航页源码\n(衍生自 Project Trans)", license: "LGPL-3.0", category: "代码" },
  { id: 8, component: "Trans-Prism-Builder 流水线脚本\n(Python 工具链, CI Workflows)", license: "Apache License 2.0", category: "代码" },
  { id: 9, component: "第三方 Dart/Flutter 依赖包\n(见 pubspec.yaml)", license: "各自许可\n(MIT / BSD / Apache 2.0 等)", category: "依赖" },
];

export default function LicensePage() {
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
              复合开源许可证
            </h1>
            <p className="mt-3 text-base text-gray-500 md:mt-4 md:text-lg">
              Trans Prism (稳态光盒) — 代码、算法与内容分离的复合授权模式
            </p>
          </div>

          <div className="space-y-10">
            {/* 概述 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm text-gray-600 leading-relaxed">
                Trans Prism 项目采用「代码、算法与内容分离」的复合授权模式 (Composite Licensing
                Model)。不同组件适用不同的开源许可证，具体映射见下文「组件-许可证映射表」。
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                使用、分发、修改本项目或其任何部分时，您必须同时遵守本文件列出的所有适用许可证条款。
              </p>
            </div>

            {/* 组件-许可证映射表 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                组件-许可证映射表
              </h2>
              <div className="overflow-x-auto rounded-lg border border-gray-100">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2.5 text-left font-medium text-gray-700 w-12">#</th>
                      <th className="px-4 py-2.5 text-left font-medium text-gray-700">组件</th>
                      <th className="px-4 py-2.5 text-left font-medium text-gray-700">许可证</th>
                      <th className="px-4 py-2.5 text-left font-medium text-gray-700">类别</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {licenseData.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-gray-400 font-mono text-xs align-top">{row.id}</td>
                        <td className="px-4 py-3 text-gray-800 whitespace-pre-line leading-relaxed">{row.component}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 whitespace-pre-line leading-relaxed">
                            {row.license}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                            row.category === "代码" ? "bg-green-50 text-green-700" :
                            row.category === "算法" ? "bg-purple-50 text-purple-700" :
                            row.category === "内容" ? "bg-amber-50 text-amber-700" :
                            row.category === "资源" ? "bg-pink-50 text-pink-700" :
                            row.category === "依赖" ? "bg-gray-50 text-gray-600" :
                            "bg-indigo-50 text-indigo-700"
                          }`}>
                            {row.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Apache License 2.0 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                组件 1 · 原创客户端代码
              </div>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Apache License 2.0
              </h2>
              <div className="max-h-96 overflow-y-auto rounded-lg bg-gray-50 border border-gray-100 p-4 text-xs leading-relaxed text-gray-600 font-mono md:p-6">
                <pre className="whitespace-pre-wrap">
{`                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      ...

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. ...

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. ...

   8. Limitation of Liability. ...`}
                </pre>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Copyright [2025] [Trans Prism Contributors]. Licensed under the Apache License, Version 2.0.
                See <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">http://www.apache.org/licenses/LICENSE-2.0</a>.
              </p>
            </div>

            {/* MIT License */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                组件 2 · PK 计算引擎
              </div>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                MIT License
              </h2>
              <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                PK 计算引擎衍生自{' '}
                <a href="https://github.com/SmirnovaOyama/Oyama-s-HRT-Tracker" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">Oyama's HRT Recorder</a>
                {' '}及{' '}
                <a href="https://github.com/LaoZhong-Mihari/HRT-Recorder-online" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">HRT-Recorder-online</a>。
              </p>
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-4 text-xs font-mono text-gray-600 leading-relaxed md:p-6">
                <pre className="whitespace-pre-wrap">
{`MIT License

Copyright (c) [Oyama's HRT Recorder Contributors]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
                </pre>
              </div>
            </div>

            {/* CC 协议 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Creative Commons 系列许可
              </h2>
              <div className="space-y-6">
                {/* CC BY-NC-SA 4.0 */}
                <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 md:p-5">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                    组件 3 · 嗓音训练模块
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-gray-900">CC BY-NC-SA 4.0</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    嗓音训练模块衍生自{' '}
                    <a href="https://github.com/Ethanlita/vfs-tracker" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">VFS Tracker</a>，
                    仅允许<strong>非商业性使用</strong>。
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span><strong>署名</strong>：必须标注原始作者与 VFS Tracker 项目链接</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span><strong>非商业性</strong>：不得用于商业目的</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span><strong>相同方式共享</strong>：修改后须以相同许可分发</span>
                    </li>
                  </ul>
                </div>

                {/* CC BY-SA 4.0 */}
                <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4 md:p-5">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                    组件 4a/4b/4c/5 · Project Trans 系知识库 & 衍生算法
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-gray-900">CC BY-SA 4.0</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    MtF.Wiki、FtM.Wiki、RLE.Wiki 知识库内容，以及衍生算法，遵循 CC BY-SA 4.0。
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span><strong>署名</strong>：必须标注原始来源为 Project Trans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span><strong>相同方式共享</strong>：修改后须以 CC BY-SA 4.0 分发</span>
                    </li>
                  </ul>
                </div>

                {/* CC BY-ND 4.0 */}
                <div className="rounded-lg border border-red-200 bg-red-50/50 p-4 md:p-5">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700">
                    组件 4d · MioMtFWiki 知识库内容
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-gray-900">CC BY-ND 4.0</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-green-200 bg-green-50 p-3">
                      <p className="text-xs font-semibold text-green-700 mb-1">✅ 允许</p>
                      <ul className="space-y-1 text-xs text-green-600">
                        <li>转载、镜像、离线打包和重新分发</li>
                        <li>格式转换、索引、全文搜索等</li>
                        <li>在应用中集成和展示</li>
                        <li>商业传播</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                      <p className="text-xs font-semibold text-red-700 mb-1">❌ 禁止</p>
                      <ul className="space-y-1 text-xs text-red-600">
                        <li>修改、删减、重写后发布</li>
                        <li>翻译后再次发布</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 特别声明 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                特别声明与注意事项
              </h2>

              <div className="space-y-4">
                <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <h3 className="mb-2 text-sm font-semibold text-gray-900">商业使用提醒</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    原创客户端代码（Apache 2.0）允许商业使用。嗓音训练模块（CC BY-NC-SA 4.0）<strong>禁止</strong>商业使用。
                    您有责任自行评估并遵守所有适用的上游许可条款。
                  </p>
                </div>

                <div className="rounded-lg border border-red-100 bg-red-50 p-4">
                  <h3 className="mb-2 text-sm font-semibold text-red-800">医疗免责声明</h3>
                  <p className="text-sm text-red-700 leading-relaxed">
                    本 App 所有功能仅供学术交流与数据可视化参考，<strong>不能替代专业医生的诊断与处方</strong>。
                    调整激素剂量请务必在正规医生指导下进行。
                  </p>
                </div>

                <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <h3 className="mb-2 text-sm font-semibold text-gray-900">贡献者须知</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    任何向 Trans Prism 项目提交的贡献，若涉及原创客户端代码部分，将被视为同意以 Apache License 2.0 条款提交。
                  </p>
                </div>

                <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <h3 className="mb-2 text-sm font-semibold text-gray-900">商标声明</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    &ldquo;Trans Prism&rdquo; 名称与项目标识（Logo）不属于开源许可的授权范围。
                  </p>
                </div>

                <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <h3 className="mb-2 text-sm font-semibold text-gray-900">上游项目致谢</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    本项目建立在以下开源项目的基础上：Project Trans (MtF.Wiki, FtM.Wiki, RLE.Wiki),
                    KitsuMio (MioMtFWiki), SmirnovaOyama (Oyama's HRT Recorder),
                    LaoZhong-Mihari (HRT-Recorder-online), Ethanlita (VFS Tracker),
                    Twitter/Twemoji, OpenMoji, Google/Noto Emoji。
                  </p>
                </div>
              </div>
            </div>

            {/* 许可全文链接 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                许可全文链接
              </h2>
              <ul className="space-y-2 text-sm">
                {[
                  ["Apache License 2.0", "https://www.apache.org/licenses/LICENSE-2.0"],
                  ["MIT License", "https://opensource.org/licenses/MIT"],
                  ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/legalcode.zh-hans"],
                  ["CC BY-ND 4.0", "https://creativecommons.org/licenses/by-nd/4.0/legalcode.zh-hans"],
                  ["CC BY-NC-SA 4.0", "https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-hans"],
                  ["LGPL-3.0", "https://www.gnu.org/licenses/lgpl-3.0.html"],
                ].map(([name, url]) => (
                  <li key={name}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 结尾 */}
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
