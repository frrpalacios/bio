/**
 * Constantes globais do site
 */

export const SITE_CONFIG = {
  name: 'Fernando Palacios',
  title: 'Fernando Palacios - Showrunner | Entretenimento Estratégico & Storytelling Corporativo',
  description: 'Fernando Palacios, 2x World\'s Best Storyteller. Showrunning, entretenimento estratégico e storytelling corporativo para marcas, produtos e líderes. 200+ C-levels treinados em 10 países.',
  url: 'https://www.fernandopalacios.com.br',
  ogImage: '/assets/og-image.jpg',

  author: {
    name: 'Fernando Palacios',
    email: 'contarei@storytellers.com.br',
    socialMedia: {
      instagram: 'https://www.instagram.com/__fernandopalacios/',
      linkedin: 'https://www.linkedin.com/in/fernandopalacios/',
      facebook: 'https://www.facebook.com/fernandorodriguespalacios/',
      youtube: 'https://www.youtube.com/@Storyskills',
      twitter: 'https://x.com/storytell',
    }
  },

  company: {
    name: 'Storytellers Strategic Entertainment',
    url: 'https://www.storytellers.com.br',
    email: 'contatarei@storytellers.com.br',
    foundingYear: 2006,
  }
} as const

export const LOCALES = ['pt', 'en', 'es'] as const
export const DEFAULT_LOCALE = 'pt' as const

export const NAVIGATION = {
  pt: [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Método', href: '/metodo' },
    { label: 'Casos', href: '/casos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contato' },
  ],
  en: [
    { label: 'About', href: '/sobre' },
    { label: 'Method', href: '/metodo' },
    { label: 'Cases', href: '/casos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contato' },
  ],
  es: [
    { label: 'Acerca', href: '/sobre' },
    { label: 'Método', href: '/metodo' },
    { label: 'Casos', href: '/casos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contato' },
  ],
} as const

export const PRODUCTS = [
  {
    id: 'talk-de-midas',
    name: 'Talk de Midas',
    tagline: 'Transforme palestrantes em oradores magnéticos',
    category: 'B2B',
    href: '/talk-de-midas',
  },
  {
    id: 'story-storm',
    name: 'Story Storm',
    tagline: 'Narrativas que faturam milhões',
    category: 'AGÊNCIA',
    href: '/story-storm',
  },
  {
    id: 'curso',
    name: 'Storytelling Para Não Criativos',
    tagline: '10k → 100k seguidores em 60 dias',
    category: 'CURSO',
    href: '/curso',
  },
] as const

export const STATS = {
  followers: '176K+',
  trained: '30K+',
  cLevels: '200+',
  countries: 10,
  awards: 2,
  clients: ['Nike', 'Coca-Cola', 'Yamaha', 'Pfizer', 'IBM', 'Google', 'Itaú', 'Absolut'],
} as const

export const AWARDS = [
  {
    year: 2017,
    title: 'World\'s Best Storyteller',
    location: 'Mumbai, India',
    organization: 'World CSR Congress',
  },
  {
    year: 2018,
    title: 'World\'s Best Storyteller',
    location: 'India',
    organization: 'World CSR Congress',
  },
  {
    year: 2013,
    title: 'Widbook Top Authors Award',
    location: 'Global',
    organization: 'Widbook',
  },
] as const

export const BOOK = {
  title: 'O Guia Completo do Storytelling',
  authors: ['Fernando Palacios', 'Martha Terenzzo'],
  publisher: 'Alta Books',
  year: 2016,
  pages: 450,
  isbn: '9788576089874',
  amazonUrl: 'https://www.amazon.com.br/guia-completo-do-Storytelling/dp/8576089874',
} as const
