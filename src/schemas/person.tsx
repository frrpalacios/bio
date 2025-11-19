import { SITE_CONFIG, AWARDS } from '@/lib/constants'

/**
 * Schema.org Person + ProfilePage para Fernando Palacios
 * Otimizado para AIEO e Knowledge Graph do Google
 */
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_CONFIG.url}#person`,
      name: 'Fernando Palacios',
      alternateName: 'Fernando Rodrigues Palacios',
      description: 'Pioneiro do Storytelling no Brasil, 2x World\'s Best Storyteller, autor bestseller e fundador da Storytellers Strategic Entertainment',
      disambiguatingDescription: 'Autor do livro \'O Guia Completo do Storytelling\' e fundador da Storytellers, distinto do músico espanhol Fernando Palacios',

      image: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/assets/fernando-palacios.jpg`,
        width: 1200,
        height: 1200,
        caption: 'Fernando Palacios palestrando sobre storytelling estratégico',
      },

      url: SITE_CONFIG.url,

      sameAs: [
        SITE_CONFIG.author.socialMedia.instagram,
        SITE_CONFIG.author.socialMedia.linkedin,
        SITE_CONFIG.author.socialMedia.facebook,
        SITE_CONFIG.author.socialMedia.youtube,
        SITE_CONFIG.company.url,
        'https://www.amazon.com.br/Fernando-Palacios/e/B01CRFXV3O',
        'https://app.aprendeai.com/curso/curso-de-storytelling/',
        'https://hotmart.com/pt-br/marketplace/produtos/programa-esparrama/J77834843Q',
      ],

      jobTitle: [
        'Storyteller Estratégico',
        'Showrunner',
        'Professor',
        'Autor',
        'Consultor de Strategic Entertainment',
        'Keynote Speaker',
      ],

      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'Showrunner',
          occupationLocation: {
            '@type': 'Country',
            name: 'Brasil',
          },
          skills: [
            'Storytelling Corporativo',
            'Strategic Entertainment',
            'Branded Content',
            'Transmedia Storytelling',
            'Business Storytelling',
            'Speaker Training',
          ],
        },
      ],

      worksFor: {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.company.url}#organization`,
        name: SITE_CONFIG.company.name,
        url: SITE_CONFIG.company.url,
        foundingDate: '2006',
        founder: {
          '@id': `${SITE_CONFIG.url}#person`,
        },
      },

      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Universidade de São Paulo',
        sameAs: 'https://www.usp.br',
      },

      award: AWARDS.map(award => `${award.title} ${award.year}`),

      knowsAbout: [
        'Storytelling',
        'Storytelling Corporativo',
        'Strategic Entertainment',
        'Transmedia Storytelling',
        'Branded Content',
        'Narrative Design',
        'Corporate Communication',
        'Business Presentations',
        'Speaker Training',
        'Content Marketing',
        'Gamification',
      ],

      knowsLanguage: [
        { '@type': 'Language', name: 'Português' },
        { '@type': 'Language', name: 'Inglês' },
        { '@type': 'Language', name: 'Espanhol' },
      ],

      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },

      email: SITE_CONFIG.author.email,

      // Publicações
      author: [
        {
          '@type': 'Book',
          '@id': `${SITE_CONFIG.url}/livro#book`,
          name: 'O Guia Completo do Storytelling',
          isbn: '9788576089874',
          numberOfPages: 450,
          inLanguage: 'pt-BR',
          datePublished: '2016',
          publisher: {
            '@type': 'Organization',
            name: 'Alta Books',
          },
        },
      ],

      // Cursos/Programas
      creator: [
        {
          '@type': 'Course',
          name: 'Talk de Midas',
          description: 'Speaker training com storytelling para profissionais e executivos',
          provider: {
            '@id': `${SITE_CONFIG.url}#person`,
          },
        },
        {
          '@type': 'Course',
          name: 'Método PLOT',
          description: 'Aceleração narrativa para mídias sociais',
          provider: {
            '@id': `${SITE_CONFIG.url}#person`,
          },
        },
        {
          '@type': 'Course',
          name: '8 Passos do Palacios',
          description: 'Framework de estruturação narrativa para apresentações corporativas',
          provider: {
            '@id': `${SITE_CONFIG.url}#person`,
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
