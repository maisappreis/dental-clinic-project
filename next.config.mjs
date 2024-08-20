/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/dental-clinic',
    assetPrefix: '/dental-clinic/',
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
  }


// module.exports = nextConfig
export default nextConfig;


// const nextConfig = {};
// export default nextConfig;



