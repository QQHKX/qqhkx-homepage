import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.qqhkx.com",
      },
    ],
  },
};

export default nextConfig;
