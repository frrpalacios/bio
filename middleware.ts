import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // Lista de locales suportados
  locales: ['pt', 'en', 'es'],

  // Locale padrão
  defaultLocale: 'pt',

  // Desabilita detecção automática para controle manual (melhor SEO)
  localeDetection: false,
})

export const config = {
  // Matcher ignorando _next e arquivos estáticos
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
