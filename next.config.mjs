/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Static export — no Image Optimization server.
  images: { unoptimized: true },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
