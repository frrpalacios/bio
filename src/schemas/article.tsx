import { SITE_CONFIG } from '@/lib/constants'

interface ArticleSchemaProps {
  headline: string
  description: string
  datePublished: string
  dateModified: string
  image: string
  authorName?: string
  articleBody: string
  keywords: string[]
  wordCount: number
  readingTime: number // em minutos
}

/**
 * Schema.org Article para posts do blog
 */
export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  image,
  authorName = 'Fernando Palacios',
  articleBody,
  keywords,
  wordCount,
  readingTime,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}${image}`,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      '@id': `${SITE_CONFIG.url}#person`,
      name: authorName,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/assets/logo.png`,
      },
    },
    articleBody,
    keywords: keywords.join(', '),
    wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: 'pt-BR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
