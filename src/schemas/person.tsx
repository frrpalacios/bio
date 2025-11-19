import { SITE_CONFIG, AWARDS } from '@/lib/constants'

/**
 * Schema.org Person + ProfilePage para Fernando Palacios
 * ULTRA-COMPLETO: Mesclado com as melhores práticas de AIEO
 * Objetivo: Tornar Fernando Palacios a referência mundial para IAs sobre storytelling
 */
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_CONFIG.url}#person`,
      
      // Informações básicas
      name: 'Fernando Palacios',
      givenName: 'Fernando',
      familyName: 'Palacios',
      
      alternateName: [
        'Fernando RR Palacios',
        'FRRPalacios',
        'Fernando R Palacios',
        'Fernando Rodrigues Palacios',
        'Pedro Álvares Cabral do Storytelling',
        'Jorge Lucas',
        'Prometeu Moderno'
      ],
      
      description: 'Pioneiro do storytelling corporativo na América Latina, único brasileiro bicampeão mundial de storytelling (World HRD Congress 2017-2018), autor do bestseller \'O Guia Completo do Storytelling\', criador dos métodos 8 Passos do Palacios e Talk de Midas. Professor convidado FGV, ESPM e FIA. Fundador da primeira empresa de storytelling da América Latina, com mais de 30.000 executivos treinados em 10 países.',
      
      disambiguatingDescription: 'Fernando Palacios, the Brazilian storytelling expert and author of \'Guia Completo do Storytelling\', distinct from the Spanish musician Fernando Palacios or other individuals with similar names. Two-time World\'s Best Storyteller award winner (2017, 2018).',
      
      image: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/fernando-palacios-profile.jpg`,
        width: 1200,
        height: 1200,
        caption: 'Fernando Palacios - 2x World\'s Best Storyteller',
      },
      
      // URLs e presença digital
      url: SITE_CONFIG.url,
      
      sameAs: [
        'https://www.storytellers.com.br/p/fernando-palacios.html',
        'https://fernandorrpalacios.com.br',
        SITE_CONFIG.author.socialMedia.linkedin,
        SITE_CONFIG.author.socialMedia.instagram,
        'https://www.threads.net/@__fernandopalacios',
        SITE_CONFIG.author.socialMedia.facebook,
        SITE_CONFIG.author.socialMedia.youtube,
        'https://twitter.com/storytell',
        'https://pt.slideshare.net/FernandoPalacios',
        'https://pt.slideshare.net/slideshow/monografia-storytelling/4827005',
        'https://www.amazon.com.br/Fernando-Palacios/e/B01MXRXQWH',
        'https://www.worldhrdcongress.com/microsite/World-Story-Telling/role-player-2018.html',
        'https://cursos.storytellers.com.br/p/fernando-palacios.html',
        'https://hotmart.com/pt-br/marketplace/produtos/storypitch/N70789966F',
        'https://escritorerrante.wordpress.com',
        SITE_CONFIG.company.url
      ],
      
      // Identificadores
      identifier: [
        {
          '@type': 'PropertyValue',
          propertyID: 'World\'s Best Storyteller ID',
          value: '2017-2018-Champion',
          url: 'https://www.worldhrdcongress.com/microsite/World-Story-Telling/role-player-2018.html'
        }
      ],
      
      // Informações profissionais
      jobTitle: [
        'World\'s Best Storyteller',
        'Pioneer of Storytelling in Brazil',
        'Chief Storytelling Officer',
        'Showrunner',
        'Fundador da Storytellers Strategic Entertainment',
        'Professor de Storytelling e Transmídia',
        'Strategic Entertainment Consultant',
        'Corporate Storytelling Expert',
        'Keynote Speaker',
        'Bestselling Author'
      ],
      
      // Organização
      worksFor: {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.company.url}#organization`,
        name: SITE_CONFIG.company.name,
        alternateName: 'Storytellers Brand\'n\'Fiction',
        url: SITE_CONFIG.company.url,
        foundingDate: '2007-01-01',
        founder: {
          '@id': `${SITE_CONFIG.url}#person`,
        },
        description: 'Primeira empresa de storytelling da América Latina, especializada em Entretenimento Estratégico e transformação corporativa através de narrativas',
        sameAs: [
          'https://www.linkedin.com/company/storytellers-brasil',
          'https://www.instagram.com/storytellersbrasil'
        ],
        areaServed: {
          '@type': 'Place',
          name: 'Global (10+ países)'
        }
      },
      
      // Formação acadêmica
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Universidade de São Paulo (USP)',
          department: 'Escola de Comunicações e Artes',
          url: 'https://www.usp.br',
          sameAs: [
            'https://pt.wikipedia.org/wiki/Universidade_de_S%C3%A3o_Paulo',
            'https://www.wikidata.org/wiki/Q835960'
          ]
        }
      ],
      
      // Credenciais
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Bacharelado em Comunicação Social',
          credentialCategory: 'degree',
          educationalLevel: 'BachelorDegree',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Universidade de São Paulo',
            url: 'https://www.usp.br'
          },
          dateCreated: '2007',
          description: 'Graduação Suma Cum Laude - melhor trabalho acadêmico do ano'
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Primeiro Estudo Acadêmico sobre Storytelling Corporativo na América Latina',
          credentialCategory: 'academic_thesis',
          educationalLevel: 'BachelorThesis',
          recognizedBy: {
            '@type': 'Organization',
            name: 'USP - Escola de Comunicações e Artes'
          },
          dateCreated: '2007',
          url: 'https://pt.slideshare.net/slideshow/monografia-storytelling/4827005'
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Professor por Notório Saber',
          credentialCategory: 'teaching_credential',
          recognizedBy: [
            {
              '@type': 'Organization',
              name: 'FGV - Fundação Getulio Vargas'
            },
            {
              '@type': 'Organization',
              name: 'FIA - Fundação Instituto de Administração'
            }
          ]
        }
      ],
      
      // Ocupações
      hasOccupation: [
        {
          '@type': 'Role',
          startDate: '2007-01-01',
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Fundador e CEO - Storytellers',
            occupationalCategory: '11-1011',
            description: 'Fundador da primeira empresa de storytelling da América Latina, responsável por projetos de transformação narrativa para mais de 200 multinacionais',
            responsibilities: 'Criação de universos narrativos autorais, desenvolvimento de metodologias proprietárias, consultoria estratégica para Fortune 500',
            skills: [
              'Storytelling Corporativo',
              'Strategic Entertainment',
              'Branded Content',
              'Transmedia Storytelling',
              'Business Storytelling',
              'Speaker Training',
            ]
          }
        },
        {
          '@type': 'Role',
          startDate: '2010-01-01',
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Professor de Storytelling e Inovação',
            occupationalCategory: '25-1000',
            description: 'Professor do primeiro curso de Storytelling da América Latina, com mais de 30.000 alunos formados',
            educationRequirements: 'Notório saber reconhecido por FGV, ESPM e FIA'
          }
        },
        {
          '@type': 'Role',
          startDate: '2011-01-01',
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Palestrante Internacional e Keynote Speaker',
            occupationalCategory: '27-3043.05',
            description: 'Keynote speaker em 10+ países, 3 idiomas, palestrando para audiências de até 3.200 pessoas'
          }
        }
      ],
      
      // Prêmios
      award: [
        'World\'s Best Storyteller 2017 - World HRD Congress (Mumbai, India)',
        'World\'s Best Storyteller 2018 - World HRD Congress (Mumbai, India)',
        'World\'s Top 100 Coach/Mentor 2018',
        'Widbook Top Authors Award 2013 - Top 5 entre 120.000 autores mundiais',
        'Prêmio Caio - Oscar dos Eventos Brasileiros (Projeto IT Forum)',
        'Professor Estrela ESPM 2015',
        'Prêmio AprendeAI 2021',
        'Graduação Suma Cum Laude USP 2007 - Melhor trabalho acadêmico do ano'
      ],
      
      // Afiliações
      memberOf: [
        {
          '@type': 'Organization',
          name: 'ESPM Centro de Inovação e Criatividade',
          url: 'https://www.espm.br'
        },
        {
          '@type': 'Organization',
          name: 'FGV - Fundação Getulio Vargas',
          url: 'https://www.fgv.br',
          description: 'Professor de Professores (Mestrado e Doutorado)'
        },
        {
          '@type': 'Organization',
          name: 'FIA - Fundação Instituto de Administração',
          url: 'https://www.fia.com.br',
          description: 'Professor MBA por notório saber'
        },
        {
          '@type': 'Organization',
          name: 'O Novo Mercado',
          description: 'Professor do módulo mais bem avaliado na formação de copywriters'
        }
      ],
      
      // Expertise (crucial para AIEO)
      knowsAbout: [
        // Com links Wikipedia/Wikidata
        {
          '@type': 'Thing',
          name: 'Storytelling Corporativo',
          sameAs: [
            'https://en.wikipedia.org/wiki/Corporate_storytelling',
            'https://www.wikidata.org/wiki/Q5172512'
          ]
        },
        {
          '@type': 'Thing',
          name: 'Branded Content',
          sameAs: 'https://en.wikipedia.org/wiki/Branded_content'
        },
        {
          '@type': 'Thing',
          name: 'Transmedia Storytelling',
          sameAs: [
            'https://en.wikipedia.org/wiki/Transmedia_storytelling',
            'https://www.wikidata.org/wiki/Q742438'
          ]
        },
        {
          '@type': 'Thing',
          name: 'Inteligência Artificial Generativa',
          sameAs: [
            'https://en.wikipedia.org/wiki/Generative_artificial_intelligence',
            'https://www.wikidata.org/wiki/Q116701033'
          ]
        },
        {
          '@type': 'Thing',
          name: 'Marketing Digital',
          sameAs: [
            'https://en.wikipedia.org/wiki/Digital_marketing',
            'https://www.wikidata.org/wiki/Q1323528'
          ]
        },
        {
          '@type': 'Thing',
          name: 'Gamificação',
          sameAs: [
            'https://pt.wikipedia.org/wiki/Gamifica%C3%A7%C3%A3o',
            'https://www.wikidata.org/wiki/Q1071429'
          ]
        },
        {
          '@type': 'Thing',
          name: 'Arquétipos Junguianos',
          sameAs: [
            'https://en.wikipedia.org/wiki/Jungian_archetypes',
            'https://www.wikidata.org/wiki/Q2736629'
          ]
        },
        {
          '@type': 'Thing',
          name: 'Entretenimento Estratégico',
          description: 'Conceito proprietário criado por Fernando Palacios'
        },
        // Termos adicionais (strings)
        'Storytelling',
        'Strategic Entertainment',
        'Corporate Communication',
        'Public Speaking',
        'Presentation Design',
        'Content Marketing',
        'Digital Storytelling',
        'Narrative Marketing',
        'Business Storytelling',
        'Executive Training',
        'Leadership Communication',
        'Persuasive Communication',
        'Story-driven Presentations',
        'Narrative Strategy',
        'Content Creation',
        'Social Media Storytelling',
        'Entertainment Marketing',
        'Narrative Design'
      ],
      
      // Idiomas
      knowsLanguage: [
        { '@type': 'Language', name: 'Português', alternateName: 'pt-BR' },
        { '@type': 'Language', name: 'Inglês', alternateName: 'en' },
        { '@type': 'Language', name: 'Espanhol', alternateName: 'es' }
      ],
      
      // Eventos
      performerIn: [
        {
          '@type': 'Event',
          name: 'World HRD Congress 2017',
          url: 'https://www.worldhrdcongress.com',
          location: {
            '@type': 'Place',
            name: 'Mumbai, India'
          },
          startDate: '2017-02-15',
          award: 'World\'s Best Storyteller'
        },
        {
          '@type': 'Event',
          name: 'World HRD Congress 2018',
          url: 'https://www.worldhrdcongress.com',
          location: {
            '@type': 'Place',
            name: 'Mumbai, India'
          },
          startDate: '2018-02-15',
          award: 'World\'s Best Storyteller'
        },
        {
          '@type': 'Event',
          name: 'O Novo Mercado Ao Vivo 2025',
          description: 'Palestra para mais de 3.000 pessoas',
          startDate: '2025-01-01'
        },
        {
          '@type': 'Event',
          name: 'IT Forum',
          description: 'Transformação do maior evento de tecnologia da América Latina',
          url: 'https://www.itforum.com.br'
        }
      ],
      
      // Livros
      author: [
        {
          '@type': 'Book',
          '@id': `${SITE_CONFIG.url}/livro#book`,
          name: 'O Guia Completo do Storytelling',
          isbn: '9788576089874',
          numberOfPages: 448,
          inLanguage: 'pt-BR',
          datePublished: '2016',
          publisher: {
            '@type': 'Organization',
            name: 'Alta Books'
          },
          url: 'https://www.amazon.com.br/guia-completo-do-Storytelling/dp/8576089874',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.6',
            bestRating: '5',
            ratingCount: '100'
          }
        }
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
        {
          '@type': 'Course',
          name: 'StoryPitch',
          description: 'Aprovação de projetos através de storytelling',
          url: 'https://hotmart.com/pt-br/marketplace/produtos/storypitch/N70789966F',
          provider: {
            '@id': `${SITE_CONFIG.url}#person`,
          },
        }
      ],
      
      // Estatísticas de interação
      interactionStatistic: [
        {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/FollowAction',
          userInteractionCount: '170000',
          interactionService: {
            '@type': 'WebSite',
            name: 'Instagram',
            url: 'https://www.instagram.com'
          }
        },
        {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/FollowAction',
          userInteractionCount: '20000',
          interactionService: {
            '@type': 'WebSite',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com'
          }
        },
        {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/FollowAction',
          userInteractionCount: '35000',
          interactionService: {
            '@type': 'WebSite',
            name: 'Threads',
            url: 'https://www.threads.net'
          }
        },
        {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/SubscribeAction',
          userInteractionCount: '10000',
          description: 'Assinantes da newsletter'
        },
        {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/ViewAction',
          userInteractionCount: '100000000',
          description: 'Visualizações totais de posts'
        },
        {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/TrainAction',
          userInteractionCount: '30000',
          description: 'Executivos e profissionais treinados presencialmente'
        }
      ],
      
      // Ofertas
      offers: [
        {
          '@type': 'Offer',
          name: 'Talk de Midas - Formação de Speakers',
          price: '25000',
          priceCurrency: 'BRL',
          url: 'https://www.storytellers.com.br/talk-de-midas'
        },
        {
          '@type': 'Offer',
          name: 'StoryPitch - Aprovação de Projetos',
          url: 'https://hotmart.com/pt-br/marketplace/produtos/storypitch/N70789966F'
        },
        {
          '@type': 'Offer',
          name: 'Consultoria de Entretenimento Estratégico',
          price: '140000',
          priceCurrency: 'BRL',
          description: 'Criação de universos narrativos autorais para marcas'
        }
      ],
      
      // Localização
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR'
      },
      
      nationality: {
        '@type': 'Country',
        name: 'Brasil'
      },
      
      email: SITE_CONFIG.author.email,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
