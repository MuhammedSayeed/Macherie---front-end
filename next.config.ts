import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["static.pullandbear.net"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
