import { getRequestConfig } from 'next-intl/server'
import { LOCALES } from '@/lib/constants'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!LOCALES.includes(locale as any)) {
    return {
      messages: (await import(`../public/locales/pt.json`)).default
    }
  }

  return {
    messages: (await import(`../public/locales/${locale}.json`)).default
  }
})
