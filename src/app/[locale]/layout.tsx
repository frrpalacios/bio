import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { LOCALES } from '@/lib/constants'
import { PersonSchema } from '@/schemas/person'
import { OrganizationSchema } from '@/schemas/organization'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  // Validar locale
  if (!LOCALES.includes(locale as any)) {
    notFound()
  }

  // Carregar mensagens de tradução
  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PersonSchema />
      <OrganizationSchema />

      <Header locale={locale} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer locale={locale} />
    </NextIntlClientProvider>
  )
}
