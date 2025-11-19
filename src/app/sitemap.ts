import { MetadataRoute } from 'next'
import { SITE_CONFIG, LOCALES, PRODUCTS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  // Páginas estáticas por locale
  const staticPages = [
    '',
    '/sobre',
    '/metodo',
    '/casos',
    '/livro',
    '/blog',
    '/imprensa',
    '/contato',
  ]

  // Produtos
  const productPages = PRODUCTS.map(p => p.href)

  // Combinar todas as páginas
  const allPages = [...staticPages, ...productPages]

  // Gerar URLs para todos os locales
  const urls: MetadataRoute.Sitemap = []

  LOCALES.forEach(locale => {
    allPages.forEach(page => {
      urls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: LOCALES.reduce((acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}${page}`
            return acc
          }, {} as Record<string, string>),
        },
      })
    })
  })

  return urls
}
