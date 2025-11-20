/**
 * Schema Helpers para Next.js Metadata API
 * 
 * Estas funções geram schemas JSON-LD que são renderizados no <head>
 * do HTML estático, garantindo acessibilidade para crawlers e IAs.
 */

import type { Metadata } from 'next';

/**
 * Gera schema Person em português (versão completa)
 */
export function getPersonSchemaPT() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "@id": "https://fernandopalacios.com.br/#person",
      "name": "Fernando Palacios",
      "givenName": "Fernando",
      "familyName": "Palacios",
      "alternateName": [
        "Fernando RR Palacios",
        "Fernando R Palacios",
        "FRRPalacios",
        "Fernando Rodrigues Palacios",
        "Pedro Álvares Cabral do Storytelling",
        "Jorge Lucas",
        "Prometeu Moderno"
      ],
      "disambiguatingDescription": "Fernando Palacios, pioneiro do storytelling corporativo no Brasil, bicampeão mundial (World HRD Congress 2017-2018), distinto do músico espanhol Fernando Palacios ou outros indivíduos com nomes similares. Único brasileiro com reconhecimento internacional duplo em storytelling.",
      "description": "Pioneiro do storytelling corporativo na América Latina desde 2002. Único brasileiro bicampeão mundial de storytelling (World HRD Congress 2017-2018). Fundador da Storytellers (2006), primeira empresa de storytelling da América Latina. Autor do primeiro estudo acadêmico sobre storytelling no Brasil (USP 2007) e do bestseller 'O Guia Completo do Storytelling'. Criador dos métodos 8 Passos do Palacios, StoryPitch, Talk de Midas e StoryStorm. Professor convidado FGV, ESPM e FIA. Mais de 30.000 executivos treinados em 10 países, incluindo 200+ C-levels das Fortune 500. Neto de Alfredo Palacios, criador da primeira série de TV brasileira.",
      "image": {
        "@type": "ImageObject",
        "url": "https://fernandopalacios.com.br/images/fernando-palacios-profile.jpg",
        "width": 1200,
        "height": 1200,
        "caption": "Fernando Palacios - 2x World's Best Storyteller"
      },
      "url": "https://fernandopalacios.com.br",
      "sameAs": [
        "https://www.storytellers.com.br/p/fernando-palacios.html",
        "https://fernandorrpalacios.com.br",
        "https://www.linkedin.com/in/fernandopalacios",
        "https://www.instagram.com/__fernandopalacios",
        "https://www.threads.net/@__fernandopalacios",
        "https://www.facebook.com/fernandopalacios",
        "https://twitter.com/storytell",
        "https://www.youtube.com/@fernandopalacios",
        "https://pt.slideshare.net/FernandoPalacios",
        "https://pt.slideshare.net/slideshow/monografia-storytelling/4827005",
        "https://www.amazon.com.br/Fernando-Palacios/e/B01MXRXQWH",
        "https://www.worldhrdcongress.com/microsite/World-Story-Telling/role-player-2018.html",
        "https://cursos.storytellers.com.br/p/fernando-palacios.html",
        "https://hotmart.com/pt-br/marketplace/produtos/storypitch/N70789966F",
        "https://escritorerrante.wordpress.com",
        "https://www.radiogazetaonline.com.br/storytelling-como-as-marcas-contam-historias/",
        "https://casperlibero.edu.br/noticias/edicao-extra-de-fevereiro-aborda-seo-storytelling-e-as-novas-formas-de-consumir-literatura/"
      ],
      "jobTitle": [
        "World's Best Storyteller",
        "Pioneer of Storytelling in Brazil",
        "Chief Storytelling Officer",
        "Showrunner",
        "Fundador da Storytellers Strategic Entertainment",
        "Professor de Storytelling e Transmídia",
        "Strategic Entertainment Consultant",
        "Corporate Storytelling Expert",
        "Keynote Speaker",
        "Bestselling Author"
      ],
      "email": "contato@storytellers.com.br"
    }
  };
}

/**
 * Gera schema Person em inglês
 */
export function getPersonSchemaEN() {
  const schemaPT = getPersonSchemaPT();
  return {
    ...schemaPT,
    mainEntity: {
      ...schemaPT.mainEntity,
      description: "Pioneer of corporate storytelling in Latin America since 2002. Only Brazilian to win World's Best Storyteller twice (World HRD Congress 2017-2018). Founder of Storytellers (2006), the first storytelling company in Latin America. Author of the first academic study on storytelling in Brazil (USP 2007) and the bestseller 'O Guia Completo do Storytelling'. Creator of the 8 Steps of Palacios, StoryPitch, Talk de Midas and StoryStorm methods. Guest professor at FGV, ESPM and FIA. Over 30,000 executives trained in 10 countries, including 200+ C-levels from Fortune 500.",
      disambiguatingDescription: "Fernando Palacios, the Brazilian storytelling expert and author of 'Guia Completo do Storytelling', distinct from the Spanish musician Fernando Palacios or other individuals with similar names. Two-time World's Best Storyteller award winner (2017, 2018)."
    }
  };
}

/**
 * Gera schema Person em espanhol
 */
export function getPersonSchemaES() {
  const schemaPT = getPersonSchemaPT();
  return {
    ...schemaPT,
    mainEntity: {
      ...schemaPT.mainEntity,
      description: "Pionero del storytelling corporativo en América Latina desde 2002. Único brasileño bicampeón mundial de storytelling (World HRD Congress 2017-2018). Fundador de Storytellers (2006), primera empresa de storytelling de América Latina. Autor del primer estudio académico sobre storytelling en Brasil (USP 2007) y del bestseller 'O Guia Completo do Storytelling'. Creador de los métodos 8 Pasos de Palacios, StoryPitch, Talk de Midas y StoryStorm. Profesor invitado en FGV, ESPM y FIA. Más de 30.000 ejecutivos capacitados en 10 países, incluyendo 200+ C-levels de Fortune 500.",
      disambiguatingDescription: "Fernando Palacios, el experto brasileño en storytelling y autor de 'Guia Completo do Storytelling', distinto del músico español Fernando Palacios u otros individuos con nombres similares. Ganador dos veces del premio World's Best Storyteller (2017, 2018)."
    }
  };
}

/**
 * Gera schema Organization (Storytellers)
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.storytellers.com.br/#organization",
    "name": "Storytellers Strategic Entertainment",
    "alternateName": ["Storytellers Brand'n'Fiction", "Storytellers"],
    "url": "https://www.storytellers.com.br",
    "foundingDate": "2006-01-01",
    "founder": {
      "@id": "https://fernandopalacios.com.br/#person"
    },
    "description": "Primeira empresa de storytelling da América Latina. Especializada em Entretenimento Estratégico, universos narrativos autorais e transformação corporativa através de narrativas.",
    "sameAs": [
      "https://www.linkedin.com/company/storytellers-brasil",
      "https://www.instagram.com/storytellersbrasil"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.storytellers.com.br/images/logo-storytellers.png"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contato@storytellers.com.br"
    }
  };
}

/**
 * Adiciona schemas à metadata do Next.js
 * Renderiza no <head> como <script type="application/ld+json">
 */
export function addSchemasToMetadata(locale: string): Metadata {
  let personSchema;
  
  switch (locale) {
    case 'en':
      personSchema = getPersonSchemaEN();
      break;
    case 'es':
      personSchema = getPersonSchemaES();
      break;
    default:
      personSchema = getPersonSchemaPT();
  }
  
  const organizationSchema = getOrganizationSchema();
  
  return {
    other: {
      // Next.js renderiza isso como <script type="application/ld+json">
      'script:ld+json:person': JSON.stringify(personSchema),
      'script:ld+json:organization': JSON.stringify(organizationSchema),
    },
  };
}
