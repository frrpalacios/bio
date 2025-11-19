const createNextIntlPlugin = require('next-intl/plugin');
const createMDX = require('@next/mdx');

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Suporte para MDX
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

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
        destination: '/pt',
        permanent: true
      },
      {
        source: '/storytelling',
        destination: '/pt/metodo',
        permanent: true
      },
      {
        source: '/',
        destination: '/pt',
        permanent: false
      }
    ]
  },

  // Configuração de imagens otimizadas
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fernandopalacios.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.fernandopalacios.com.br',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
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

module.exports = withNextIntl(withMDX(nextConfig))
