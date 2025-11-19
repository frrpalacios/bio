'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTASectionProps {
  locale: string
}

export default function CTASection({ locale }: CTASectionProps) {
  const t = useTranslations('cta')

  return (
    <section className="section bg-gradient-to-br from-accent-gold via-accent-bronze to-accent-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <motion.div
            className="text-7xl mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🎭
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-950 mb-6">
            Qual é o Seu Arquétipo Narrativo?
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-ink-800 mb-10 max-w-2xl mx-auto">
            Descubra em 3 minutos como suas histórias podem conquistar milhões
          </p>

          {/* CTA Button */}
          <Link
            href={`/${locale}/quiz`}
            className="btn bg-ink-950 text-cream-50 hover:bg-ink-800 text-lg px-12 py-5 inline-block shadow-large hover:shadow-glow transition-all duration-300"
          >
            {t('discoverArchetype')} →
          </Link>

          {/* Sub-text */}
          <p className="mt-6 text-ink-700 text-sm">
            Gratuito • 3 minutos • Resultado imediato
          </p>
        </motion.div>
      </div>
    </section>
  )
}
