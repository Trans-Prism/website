/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 允许局域网设备访问 dev server
  allowedDevOrigins: ["192.168.5.53", "*.local"],
};

module.exports = nextConfig;
