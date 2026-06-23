import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // лёгкий self-contained сервер для Docker-контейнера
  output: "standalone",
};

export default nextConfig;
