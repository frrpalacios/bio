import { SITE_CONFIG } from '@/lib/constants'

/**
 * Schema.org Organization para Storytellers
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.company.url}#organization`,
    name: SITE_CONFIG.company.name,
    legalName: 'Storytellers Strategic Entertainment',
    url: SITE_CONFIG.company.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.company.url}/logo.png`,
    },

    foundingDate: '2006',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },

    founder: {
      '@type': 'Person',
      '@id': `${SITE_CONFIG.url}#person`,
      name: 'Fernando Palacios',
      url: SITE_CONFIG.url,
    },

    description: 'Primeira consultoria brasileira dedicada ao Storytelling e Strategic Entertainment. Especializada em storytelling corporativo, branded content, treinamento executivo e gamificação.',

    slogan: 'Strategic Entertainment para marcas e líderes',

    areaServed: [
      'BR', 'PT', 'GB', 'NL', 'PE', 'SG', 'NG', 'IN', 'US', 'ES',
    ],

    serviceType: [
      'Storytelling Corporativo',
      'Strategic Entertainment',
      'Branded Content',
      'Treinamento Executivo',
      'Consultoria Narrativa',
      'Gamificação Empresarial',
    ],

    email: SITE_CONFIG.company.email,

    sameAs: [
      'https://www.linkedin.com/company/storytellersworld',
      'https://www.instagram.com/__fernandopalacios/',
      'https://www.facebook.com/fernandorodriguespalacios/',
    ],

    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
