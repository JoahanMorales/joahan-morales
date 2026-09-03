import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export for Cloudflare Pages (preset: Next.js Static HTML Export) */
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
