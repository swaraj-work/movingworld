/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static HTML export so we can serve the `out/` folder
  output: 'export',
  // Ensures routes like /about-us resolve to out/about-us/index.html on static hosts
  trailingSlash: true,
  // If next/image is used anywhere, disable optimization for static export
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: [],
  },
};

module.exports = nextConfig;
