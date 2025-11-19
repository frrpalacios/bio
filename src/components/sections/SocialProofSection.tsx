'use client'

import { motion } from 'framer-motion'
import { STATS } from '@/lib/constants'
import Image from 'next/image'

interface SocialProofSectionProps {
  locale: string
}

export default function SocialProofSection({ locale }: SocialProofSectionProps) {
  const cases = [
    {
      client: 'Yamaha',
      result: '24 turmas consecutivas',
      description: 'O método virou cultura corporativa no Japão',
      icon: '🎯',
    },
    {
      client: 'Pfizer',
      result: 'Coordenou roteiro vacina COVID',
      description: 'Lançamento histórico no Brasil',
      icon: '💉',
    },
    {
      client: 'IT Mídia',
      result: '+50% em todas métricas',
      description: 'Evento tech virou experiência cultural',
      icon: '📈',
    },
  ]

  return (
    <section className="section bg-cream-100">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-accent-bronze font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Prova Social
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold text-ink-950 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cases Que Viram Lendas
          </motion.h2>
        </div>

        {/* Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.client}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{case_.icon}</div>
              <h3 className="font-display text-2xl font-bold text-ink-950 mb-2">
                {case_.client}
              </h3>
              <p className="text-accent-gold font-semibold mb-4">
                {case_.result}
              </p>
              <p className="text-ink-700">
                {case_.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-ink-600 mb-8 text-lg">
            Confiam em nosso trabalho:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {STATS.clients.map((client) => (
              <div
                key={client}
                className="text-ink-800 font-bold text-xl md:text-2xl hover:opacity-100 transition-opacity"
              >
                {client}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
