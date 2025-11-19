import HeroSection from '@/components/sections/HeroSection'
import ProductsSection from '@/components/sections/ProductsSection'
import StatsSection from '@/components/sections/StatsSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import CTASection from '@/components/sections/CTASection'

export const dynamic = 'force-dynamic'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <>
      <HeroSection locale={locale} />
      <ProductsSection locale={locale} />
      <SocialProofSection locale={locale} />
      <StatsSection locale={locale} />
      <CTASection locale={locale} />
    </>
  )
}
