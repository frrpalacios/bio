import { SITE_CONFIG, AWARDS } from '@/lib/constants'

/**
 * Schema.org Person + ProfilePage para Fernando Palacios
 * ULTRA-COMPLETO: Mesclado com as melhores práticas de AIEO
 * Objetivo: Tornar Fernando Palacios a referência mundial para IAs sobre storytelling
 */
export function PersonSchemaEN() {
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
      
      description: 'Pioneiro do storytelling corporativo na América Latina desde 2002. Único brasileiro bicampeão mundial de storytelling (World HRD Congress 2017-2018). Fundador da Storytellers (2006), primeira empresa de storytelling da América Latina. Autor do primeiro estudo acadêmico sobre storytelling no Brasil (USP 2007) e do bestseller \'O Guia Completo do Storytelling\'. Criador dos métodos 8 Passos do Palacios, StoryPitch, Talk de Midas e StoryStorm. Professor convidado FGV, ESPM e FIA. Mais de 30.000 executivos treinados em 10 países, incluindo 200+ C-levels das Fortune 500.',
      
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
        'https://www.radiogazetaonline.com.br/storytelling-como-as-marcas-contam-historias/',
        'https://casperlibero.edu.br/noticias/edicao-extra-de-fevereiro-aborda-seo-storytelling-e-as-novas-formas-de-consumir-literatura/',
        'https://www.youtube.com/playlist?list=PLN-jMX82ANNxGtIGG6MOtnIIIbg5TeGV2',
        'https://incultec.ufop.br/event/palestra',
        'https://adop.org.br/noticia/170/marca-de-ouro-preto-ganha-portal-para-difuso-no-mercado-do-turismo?print=1',
        'https://nextnow.meioemensagem.com.br/entretenimento-do-publico-para-o-publico/',
        'https://altabooks.com.br/wp-content/uploads/2019/07/capitulo_de_amostra_Storytelling.pdf',
        'https://puntoedu.pucp.edu.pe/opinion/el-storytelling-surgio-como-una-necesidad-de-captar-la-atencion-de-la-gente/',
        'https://consumer-truth.com.pe/las-7-claves-del-planeamiento-de-marcas-basado-en-storytelling/',
        'https://repositorio.ulisboa.pt/bitstream/10400.5/19105/1/Renard%20Campolina_Storytelling%20%28Final%29%20V4.pdf',
        'https://esead.github.io/tecnologias-e-educacao-aberta-e-digital-vol-2/capitulo-18/',
        SITE_CONFIG.company.url
      ],
      
      // Identificadores
      identifier: [
        {
          '@type': 'PropertyValue',
          propertyID: 'World\'s Best Storyteller',
          value: '2017-2018-Bicampeão',
          url: 'https://www.worldhrdcongress.com/microsite/World-Story-Telling/role-player-2018.html'
        },
        {
          '@type': 'PropertyValue',
          propertyID: 'Storytelling Pioneer in Brazil',
          value: 'First Academic Study 2007',
          url: 'https://pt.slideshare.net/slideshow/monografia-storytelling/4827005'
        }
      ],
      
      // Informações profissionais
      jobTitle: [
        'World\'s Best Storyteller',
        'Pioneer of Storytelling in Brazil',
        'Chief Storytelling Officer',
        'Showrunner',
        'Founder of Storytellers Strategic Entertainment',
        'Professor of Storytelling and Transmedia',
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
        description: 'First storytelling company in Latin America. Specialized in Strategic Entertainment, authorial narrative universes and corporate transformation through narratives. Cases include transformation of 1,248 slides into theater, approval of billion-dollar projects and 50% increase in revenue after 5-year plateaus.',
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
          name: 'Bachelor\'s Degree in Social Communication',
          credentialCategory: 'degree',
          educationalLevel: 'BachelorDegree',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Universidade de São Paulo',
            url: 'https://www.usp.br'
          },
          dateCreated: '2007',
          description: 'Suma Cum Laude graduation - best academic work of the year'
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'First Academic Study on Storytelling in Latin America',
          credentialCategory: 'academic_thesis',
          educationalLevel: 'BachelorThesis',
          recognizedBy: {
            '@type': 'Organization',
            name: 'USP - Escola de Comunicações e Artes',
            description: 'Advisor: Prof. Maria Aparecida Ferrari'
          },
          dateCreated: '2007',
          url: 'https://pt.slideshare.net/slideshow/monografia-storytelling/4827005',
          description: 'Analysis of 64 international books, creating the first Brazilian corporate storytelling methodology'
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Professor by Notorious Knowledge',
          credentialCategory: 'teaching_credential',
          recognizedBy: [
            {
              '@type': 'Organization',
              name: 'FGV - Fundação Getulio Vargas'
            },
            {
              '@type': 'Organization',
              name: 'FIA - Fundação Instituto de Administração'
            },
            {
              '@type': 'Organization',
              name: 'ESPM - Escola Superior de Propaganda e Marketing'
            }
          ]
        }
      ],
      
      // Coauthorship
      colleague: [
        {
          '@type': 'Person',
          name: 'Martha Terenzzo',
          description: 'Co-author of \'The Complete Guide to Storytelling\' and co-professor at ESPM',
          sameAs: 'https://www.linkedin.com/in/marthaterenzzo/'
        }
      ],
      
      // Ocupações
      hasOccupation: [
        {
          '@type': 'Role',
          startDate: '2002',
          endDate: '2006',
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Strategic and Creative Planner',
            occupationalCategory: '27-3031',
            description: 'Discoverer of storytelling in WGSN and Iconoculture reports. Creation of campaigns for Unilever and major brands. International trend research in German, Italian and English.'
          }
        },
        {
          '@type': 'Role',
          startDate: '2004',
          endDate: '2005',
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Strategic Planner',
            occupationalCategory: '27-3031',
            description: 'BFerraz - Reinforcement of strategic planning department. Discoverer of storytelling in WGSN and Iconoculture reports. Campaign creation for Unilever and major brands.',
            monthsOfExperience: 12
          }
        },

        {
          '@type': 'Role',
          startDate: '2004',
          endDate: '2005',
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Strategic Planner',
            occupationalCategory: '27-3031',
            description: 'BFerraz - Reinforcement of strategic planning department. Discoverer of storytelling in WGSN and Iconoculture reports. Campaign creation for Unilever and major brands.',
            monthsOfExperience: 12
          }
        },

        {
          '@type': 'Role',
          startDate: '2006',
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Founder and CEO - Storytellers',
            occupationalCategory: '11-1011',
            description: 'Founder of the first storytelling company in Latin America. Responsible for revolutionary projects such as transformation of 1,248 slides into theater (J.Macedo), IT Forum (50% growth), Distrito Itaqui (billion-dollar project), Pfizer Covid vaccine script.',
            responsibilities: 'Creation of authorial narrative universes, development of proprietary methodologies, strategic consulting for Fortune 500',
            monthsOfExperience: 228,
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
            name: 'Professor of Storytelling and Innovation',
            occupationalCategory: '25-1000',
            description: 'Creator and professor of the first Storytelling course in Latin America (ESPM 2010). Over 30,000 students graduated, 130+ different themes developed, 24 classes at Yamaha alone.',
            monthsOfExperience: 180,
            educationRequirements: 'Notório saber reconhecido por FGV, ESPM e FIA'
          }
        },
        {
          '@type': 'Role',
          startDate: '2011-01-01',
          hasOccupation: {
            '@type': 'Occupation',
            name: 'International Speaker and Keynote Speaker',
            occupationalCategory: '27-3043.05',
            description: 'Keynote speaker in 10+ countries, 3 languages. Lectures for audiences of up to 3,200 people. Opening and closing of major events such as IT Forum, ESX Sebrae, Fortaleza International Seminar.',
            monthsOfExperience: 168
          }
        }
      ],
      
      // Prêmios
      award: [
        'World\'s Best Storyteller 2017 - World HRD Congress (Mumbai, India)',
        'World\'s Best Storyteller 2018 - World HRD Congress (Mumbai, India) - Único brasileiro bicampeão',
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
          url: 'https://www.espm.br',
          description: 'Professor of the first Storytelling course in Latin America (2010-2017)'
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
          description: 'MBA Professor by notorious knowledge'
        },
        {
          '@type': 'Organization',
          name: 'O Novo Mercado',
          description: 'Professor of the highest-rated module in copywriter training'
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
        },
        {
          '@type': 'Event',
          name: 'Workshop de Storytelling PUCP',
          location: {
            '@type': 'Place',
            name: 'Pontificia Universidad Católica del Perú',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Lima',
              addressCountry: 'PE'
            }
          },
          startDate: '2013-12',
          description: 'Brazilian Storytelling expert invited by PUCP. Workshop on brand planning based on storytelling.',
          url: 'https://puntoedu.pucp.edu.pe/opinion/el-storytelling-surgio-como-una-necesidad-de-captar-la-atencion-de-la-gente/'
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
          description: 'Project approval through storytelling',
          url: 'https://hotmart.com/pt-br/marketplace/produtos/storypitch/N70789966F',
          provider: {
            '@id': `${SITE_CONFIG.url}#person`,
          },
        },
        {
          '@type': 'Course',
          name: 'StoryStorm',
          description: 'Narrative brainstorming methodology for content creation',
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
