import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { LOCALES } from '@/lib/constants'
import { SchemaScript } from '@/components/seo/SchemaScript'
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
    <>
      {/* 
        Schemas JSON-LD renderizados no início do body
        Next.js irá movê-los para o <head> automaticamente
        durante a renderização estática (SSG)
      */}
      <SchemaScript locale={locale} />
      
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header locale={locale} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer locale={locale} />
      </NextIntlClientProvider>
    </>
  )
}
