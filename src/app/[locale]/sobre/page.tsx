import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { generatePageSchema } from '@/lib/schema-generator'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  
  const schema = generatePageSchema('about', locale as 'pt' | 'en' | 'es')
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'profile',
      locale: locale,
    },
    other: {
      'script:ld+json': JSON.stringify(schema)
    }
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  // Ler o arquivo MDX do sistema de arquivos
  const contentPath = path.join(process.cwd(), 'src', 'content', 'about', `${locale}.mdx`)
  let content: string
  
  try {
    content = fs.readFileSync(contentPath, 'utf8')
  } catch (error) {
    // Fallback para português se o locale não existir
    const fallbackPath = path.join(process.cwd(), 'src', 'content', 'about', 'pt.mdx')
    content = fs.readFileSync(fallbackPath, 'utf8')
  }
  
  return (
    <article className="container-custom section">
      <div className="max-w-4xl mx-auto">
        {/* Conteúdo MDX com estilo prose */}
        <div className="prose prose-lg mx-auto">
          <MDXRemote source={content} />
        </div>
        
        {/* CTA final */}
        <div className="mt-16 text-center">
          <div className="card">
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'pt' && 'Pronto para Transformar Sua Comunicação?'}
              {locale === 'en' && 'Ready to Transform Your Communication?'}
              {locale === 'es' && '¿Listo para Transformar Tu Comunicación?'}
            </h2>
            <p className="text-lg text-ink-600 mb-6">
              {locale === 'pt' && 'Descubra como o storytelling pode revolucionar sua forma de apresentar e vender.'}
              {locale === 'en' && 'Discover how storytelling can revolutionize your way of presenting and selling.'}
              {locale === 'es' && 'Descubre cómo el storytelling puede revolucionar tu forma de presentar y vender.'}
            </p>
            <a href={`/${locale}/contato`} className="btn-gold">
              {locale === 'pt' && 'Entre em Contato'}
              {locale === 'en' && 'Get in Touch'}
              {locale === 'es' && 'Contáctanos'}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
