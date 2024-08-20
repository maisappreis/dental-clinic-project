/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/dental-clinic',
    images: {
      unoptimized: true, // Desabilita a otimização de imagens, já que GitHub Pages não suporta otimizações dinâmicas
    },
    trailingSlash: true, // Adiciona uma barra ao final de cada URL
  }
  
// module.exports = nextConfig
export default nextConfig;
