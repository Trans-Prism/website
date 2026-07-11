"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ================================================================
   GitHub Release 类型定义
   ================================================================ */
interface GithubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface GithubRelease {
  id: number;
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  html_url: string;
  assets: GithubAsset[];
  prerelease: boolean;
}

/* ================================================================
   格式化文件大小
   ================================================================ */
function formatSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

/* ================================================================
   格式化日期
   ================================================================ */
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ================================================================
   提取无特殊格式的纯文本更新日志，仅保留普通文字和基本断行
   ================================================================ */
function cleanMarkdown(body: string): string {
  return body
    .replace(/<!--[\s\S]*?-->/g, "") // remove HTML comments
    .replace(/\r\n/g, "\n")          // normalize line endings
    .replace(/<[^>]*>/g, "")         // remove HTML tags
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1") // replace Markdown links with content
    .replace(/([#`~*_]{1,3})(.*?)\1/g, "$2") // remove bold/italic/strikethrough formatting
    .replace(/^#+\s+/gm, "")         // remove headers
    .replace(/^\s*[-*+]\s+/gm, "- ") // normalize list markers to "- "
    .replace(/\n{3,}/g, "\n\n")      // remove excessive newlines
    .trim();
}

/* ================================================================
   主组件
   ================================================================ */
export default function DownloadPage() {
  const [releases, setReleases] = useState<GithubRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/Trans-Prism/Trans-Prism/releases?per_page=5"
    )
      .then((res) => {
        if (!res.ok) throw new Error("无法获取版本信息");
        return res.json();
      })
      .then((data: GithubRelease[]) => {
        // 过滤掉 draft，按发布时间排序（最新的在前）
        const filtered = data
          .filter((r) => r.tag_name)
          .sort(
            (a, b) =>
              new Date(b.published_at).getTime() -
              new Date(a.published_at).getTime()
          );
        setReleases(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const latest = releases[0];
  const history = releases.slice(1);

  /* ---- 加载中 ---- */
  if (loading) {
    return (
      <section className="relative grow">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 pt-32 sm:px-6">
          <div className="text-center">
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
            <p className="text-gray-500">正在加载版本信息…</p>
          </div>
        </div>
      </section>
    );
  }

  /* ---- 加载失败 ---- */
  if (error) {
    return (
      <section className="relative grow">
        <div className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <p className="mb-2 text-lg font-semibold text-red-600">
              加载失败
            </p>
            <p className="mb-4 text-sm text-red-500">{error}</p>
            <Link
              href="https://github.com/Trans-Prism/Trans-Prism/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 underline underline-offset-2 hover:text-blue-700"
            >
              前往 GitHub Releases 页面
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative grow">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* ================================================================
              页面标题
               ================================================================ */}
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              下载 <span className="text-blue-500">Trans Prism</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              开源、离线、零遥测。选择适合你的版本。
            </p>
          </div>

          {/* ================================================================
              最新版下载
               ================================================================ */}
          {latest && (
            <div className="mb-16" data-aos="zoom-y-out">
              <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 text-center shadow-sm before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-white">
                <div className="px-4 py-12 md:px-12 md:py-16">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    最新版本
                  </div>
                  <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
                    {latest.name || latest.tag_name}
                  </h2>
                  <p className="mb-6 text-sm text-gray-500">
                    发布于 {formatDate(latest.published_at)}
                    {latest.prerelease && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-600">
                        预发布
                      </span>
                    )}
                  </p>

                  {/* 下载按钮组 */}
                  <div className="mx-auto mb-8 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
                    {latest.assets.length > 0 ? (
                      latest.assets
                        .filter((a) => a.name.endsWith(".apk"))
                        .slice(0, 2)
                        .map((asset) => {
                          const sha256Asset = latest.assets.find(
                            (a) => a.name === `${asset.name}.sha256` || a.name === "sha256.txt" || a.name === "sha256sum.txt"
                          );
                          return (
                            <div key={asset.name} className="flex-1 flex gap-2">
                              <a
                                href={`https://updates.55114514.xyz/app/releases/${latest.tag_name}/${asset.name}`}
                                className="btn group flex-1 bg-blue-500 text-white hover:bg-blue-600 shadow-sm transition-colors duration-200"
                              >
                                <span className="relative inline-flex flex-col items-center px-2">
                                  <span>下载 {asset.name}</span>
                                  <span className="text-xs text-blue-200 mt-0.5">
                                    {formatSize(asset.size)}
                                  </span>
                                </span>
                              </a>
                              {sha256Asset && (
                                <a
                                  href={`https://updates.55114514.xyz/app/releases/${latest.tag_name}/${sha256Asset.name}`}
                                  className="btn px-3 bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200 transition-colors"
                                  title="下载 SHA-256 校验文件"
                                >
                                  SHA256
                                </a>
                              )}
                            </div>
                          );
                        })
                    ) : (
                      <a
                        href={latest.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-blue-500 text-white hover:bg-blue-600 shadow-sm transition-colors duration-200"
                      >
                        前往 GitHub 下载
                      </a>
                    )}
                  </div>

                  {/* 更新日志摘要 */}
                  {latest.body && (
                    <div className="mx-auto max-w-2xl text-left">
                      <h3 className="mb-3 text-sm font-semibold text-gray-900">
                        更新日志
                      </h3>
                      <div className="max-h-60 overflow-y-auto rounded-lg bg-gray-50 border border-gray-100 p-6 text-sm leading-relaxed text-gray-600 shadow-inner">
                        <ul className="space-y-3">
                          {cleanMarkdown(latest.body)
                            .split("\n")
                            .filter((l) => l.trim().length > 0)
                            .map((line, idx) => (
                              <li key={idx} className="flex items-start">
                                {line.startsWith("- ") ? (
                                  <>
                                    <span className="mr-3 text-blue-500 mt-1 select-none text-xs">●</span>
                                    <span className="block flex-1">{line.substring(2)}</span>
                                  </>
                                ) : (
                                  <span className="block flex-1 font-medium text-gray-800 mt-2">{line}</span>
                                )}
                              </li>
                            ))}
                        </ul>
                        {(!latest.body || latest.body.trim() === "") && (
                          <p>暂无详细更新说明</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              历史版本列表
               ================================================================ */}
          {history.length > 0 && (
            <div className="mb-16" data-aos="zoom-y-out">
              <h2 className="mb-8 text-2xl font-bold text-gray-900">
                历史版本
              </h2>
              <div className="space-y-4">
                {history.map((release) => (
                  <div
                    key={release.id}
                    className="rounded-xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 shadow-sm hover:shadow-md"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {release.name || release.tag_name}
                          </h3>
                          {release.prerelease && (
                            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-600">
                              预发布
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">
                          发布于 {formatDate(release.published_at)}
                        </p>

                        {/* 更新日志 */}
                        {release.body && (
                          <div className="mt-4 pl-1">
                            <ul className="space-y-2 text-gray-600 text-sm">
                              {cleanMarkdown(release.body)
                                .split("\n")
                                .filter(l => l.trim().startsWith("- "))
                                .slice(0, 4)
                                .map((l, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="mr-3 text-gray-400 mt-1 select-none text-[10px]">●</span>
                                    <span className="line-clamp-2 text-gray-500">{l.substring(2)}</span>
                                  </li>
                                ))}
                            </ul>
                             {cleanMarkdown(release.body).split("\n").filter(l => l.trim().startsWith("- ")).length === 0 && (
                                <p className="text-gray-500 text-sm line-clamp-2 mt-2 leading-relaxed">
                                  {cleanMarkdown(release.body).trim() || "暂无详细更新说明"}
                                </p>
                             )}
                          </div>
                        )}
                      </div>

                      {/*  下载按钮 */}
                      <div className="flex shrink-0 flex-col gap-2 min-w-[200px]">
                        {release.assets
                          .filter((a) => a.name.endsWith(".apk"))
                          .slice(0, 2)
                          .map((asset) => {
                            const sha256Asset = release.assets.find(
                              (a) => a.name === `${asset.name}.sha256` || a.name === "sha256.txt" || a.name === "sha256sum.txt"
                            );
                            return (
                              <div key={asset.name} className="flex gap-2">
                                <a
                                  href={`https://updates.55114514.xyz/app/releases/${release.tag_name}/${asset.name}`}
                                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-50 border border-blue-100 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100"
                                >
                                  下载 ({formatSize(asset.size)})
                                </a>
                                {sha256Asset && (
                                  <a
                                    href={`https://updates.55114514.xyz/app/releases/${release.tag_name}/${sha256Asset.name}`}
                                    className="inline-flex items-center justify-center rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-xs font-medium text-gray-500 transition hover:bg-gray-100"
                                    title="下载 SHA-256 校验文件"
                                  >
                                    SHA256
                                  </a>
                                )}
                              </div>
                            );
                          })}
                        {release.assets.filter((a) =>
                          a.name.endsWith(".apk")
                        ).length === 0 && (
                          <a
                            href={release.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gray-50 border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
                          >
                            查看发布页
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================
              获取更早版本
               ================================================================ */}
          <div className="text-center mt-12" data-aos="zoom-y-out">
            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8">
              <p className="mb-3 text-lg font-medium text-gray-900">
                需要更早的版本？
              </p>
              <p className="mb-6 text-sm text-gray-500">
                所有历史版本均可在 GitHub Releases 页面找到。
              </p>
              <Link
                href="https://github.com/Trans-Prism/Trans-Prism/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white border border-gray-200 text-gray-900 shadow-sm hover:bg-gray-50"
              >
                前往 GitHub Releases →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
