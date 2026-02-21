import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.theaspiringengineers.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aspiringengstorage.blob.core.windows.net",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;