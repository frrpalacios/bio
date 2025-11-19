import createMiddleware from 'next-intl/middleware'
import { LOCALES, DEFAULT_LOCALE } from './src/lib/constants'

export default createMiddleware({
  // Lista de locales suportados
  locales: LOCALES,

  // Locale padrão
  defaultLocale: DEFAULT_LOCALE,

  // Desabilita detecção automática para controle manual (melhor SEO)
  localeDetection: false,
})

export const config = {
  // Matcher ignorando _next e arquivos estáticos
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
