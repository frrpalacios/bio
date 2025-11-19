/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ['pt', 'en', 'es'],
    defaultLocale: 'pt',
    localeDetection: false, // Controle manual para melhor SEO
  },

  // Headers para segurança e SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ]
      }
    ]
  },

  // Redirects para consolidar autoridade
  async redirects() {
    return [
      {
        source: '/fernando-palacios',
        destination: '/',
        permanent: true
      },
      {
        source: '/storytelling',
        destination: '/metodo',
        permanent: true
      }
    ]
  },

  // Configuração de imagens otimizadas
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['fernandopalacios.com.br', 'www.fernandopalacios.com.br', 'storage.googleapis.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Experimental features para performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Variáveis de ambiente
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://www.fernandopalacios.com.br',
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_HOTJAR_ID: process.env.NEXT_PUBLIC_HOTJAR_ID,
  }
}

module.exports = nextConfig
