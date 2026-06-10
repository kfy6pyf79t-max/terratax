/** @type {import('next').NextConfig} */

// Определяем окружение: production (GitHub Pages) или development (локально)
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  trailingSlash: true,
  
  // basePath применяется ТОЛЬКО при публикации на GitHub Pages
  basePath: isProduction ? '/terratax' : '',
  
  // assetPrefix применяется ТОЛЬКО при публикации на GitHub Pages
  assetPrefix: isProduction ? '/terratax/' : '',
};

module.exports = nextConfig;