import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://orgfarm-cf567c8e83-dev-ed.develop.file.force.com/**")],
  },
};

export default nextConfig;
