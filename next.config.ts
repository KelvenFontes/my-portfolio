/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/my-portfolio",
  assertsPrefix: "/my-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
