'use client'

import { usePathname, useRouter } from 'next/navigation'
import { LOCALES } from '@/lib/constants'

interface LanguageSwitcherProps {
  currentLocale: string
}

const localeNames = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: string) => {
    // Remove o locale atual do pathname
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '')
    // Navega para o novo locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <div className="flex items-center gap-2">
      {LOCALES.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`
            px-3 py-1.5 rounded-lg text-sm font-medium transition-all
            ${
              currentLocale === locale
                ? 'bg-ink-900 text-cream-50'
                : 'text-ink-600 hover:bg-cream-200'
            }
          `}
        >
          {localeNames[locale]}
        </button>
      ))}
    </div>
  )
}
