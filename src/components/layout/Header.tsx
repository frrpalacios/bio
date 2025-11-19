'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { NAVIGATION } from '@/lib/constants'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
  locale: string
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('nav')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = NAVIGATION[locale as keyof typeof NAVIGATION] || NAVIGATION.pt

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-cream-100/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo - Assinatura Digital */}
          <Link
            href={`/${locale}`}
            className="relative hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Fernando Palacios"
              width={200}
              height={60}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="text-ink-700 hover:text-ink-950 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-ink-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-cream-300">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="block py-3 text-ink-700 hover:text-ink-950 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-cream-300">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
