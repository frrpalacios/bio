'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PRODUCTS } from '@/lib/constants'

interface ProductsSectionProps {
  locale: string
}

export default function ProductsSection({ locale }: ProductsSectionProps) {
  const t = useTranslations('products')

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="produtos" className="section bg-cream-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-accent-gold font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Escolha Sua Transformação
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-950"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Três Caminhos Narrativos
          </motion.h2>
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {PRODUCTS.map((product) => {
            const productKey = product.id.replace(/-/g, '')
            const productData = t.raw(productKey) as any

            return (
              <motion.div
                key={product.id}
                variants={item}
                className="group"
              >
                <Link href={`/${locale}${product.href}`}>
                  <div className="card h-full flex flex-col hover:scale-105 transition-transform duration-300 cursor-pointer">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-ink-900 text-cream-50 text-xs font-bold uppercase tracking-wider rounded-full">
                        {productData.category}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-950 mb-4 group-hover:text-accent-gold transition-colors">
                      {productData.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-ink-700 text-lg mb-6 flex-grow">
                      {productData.tagline}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-accent-sage font-semibold group-hover:gap-4 gap-2 transition-all">
                      Saiba Mais
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
