import HeroSection from '@/components/sections/HeroSection'
import ProductsSection from '@/components/sections/ProductsSection'
import StatsSection from '@/components/sections/StatsSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string }
}) {
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
