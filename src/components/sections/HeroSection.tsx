'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  locale: string
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-200 to-cream-300" />

      {/* Floating Elements (decorativos) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-sage/5 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container-custom text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Headline Principal */}
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink-950 mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: t('headline') }}
          />

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-ink-700 mb-4 font-medium">
            {t('subtitle')}
          </p>

          {/* Description */}
          <p className="text-xl md:text-2xl text-ink-600 mb-12 max-w-3xl mx-auto">
            {t('description')}
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href={`/${locale}#produtos`}
              className="btn-gold text-lg px-10 py-5 inline-block"
            >
              Descubra Como →
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 text-ink-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
