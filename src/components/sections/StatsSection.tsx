'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { STATS } from '@/lib/constants'

interface StatsSectionProps {
  locale: string
}

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState('0')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      // Simples animação de contagem
      setTimeout(() => setDisplayValue(value), 100)
    }
  }, [isInView, value])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

export default function StatsSection({ locale }: StatsSectionProps) {
  const t = useTranslations('stats')

  const stats = [
    {
      value: STATS.followers,
      label: t('followers'),
      icon: '📱',
    },
    {
      value: STATS.trained,
      label: t('trained'),
      icon: '🌍',
    },
    {
      value: STATS.cLevels,
      label: t('cLevels'),
      icon: '👔',
    },
    {
      value: `${STATS.awards}x`,
      label: t('awards'),
      icon: '🏆',
    },
  ]

  return (
    <section className="section bg-ink-950 text-cream-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="font-display text-4xl md:text-5xl font-bold text-accent-gold mb-2">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-cream-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
