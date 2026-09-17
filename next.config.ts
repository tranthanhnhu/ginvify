import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  transpilePackages: ["three"],
  agentRules: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
