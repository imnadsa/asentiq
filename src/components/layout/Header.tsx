'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Продукты', href: '/products' },
  { name: 'О нас', href: '/about' },
  { name: 'Вакансии', href: '/careers' },
  { name: 'Контакты', href: '/contact' },
]

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Отслеживаем скролл для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Закрываем мобильное меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-cream-dark/50" 
          : "bg-transparent"
      )}
    >
      <Container size="xl" padding="lg">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Логотип */}
          <Link 
            href="/" 
            className="flex items-center group"
          >
            <span className={cn(
              "font-coolvetica font-bold transition-all duration-300 text-text-primary",
              isScrolled ? "text-xl" : "text-2xl"
            )}>
              {isScrolled ? "AsQ" : "ASENTIQ"}
            </span>
          </Link>

          {/* Центральная область с навигацией и кнопкой */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Навигация */}
            <div className="flex items-center space-x-1 mr-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg font-golos-text font-medium transition-all duration-200",
                    "text-text-secondary hover:text-text-primary hover:bg-cream-dark/50",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA кнопка */}
            <Button 
              variant="primary" 
              size="md"
              href="/contact"
            >
              Связаться с нами
            </Button>
          </div>

          {/* Мобильное меню - кнопка */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              "text-text-primary hover:bg-cream-dark",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            )}
            aria-label="Открыть меню"
          >
            <svg 
              className={cn("w-6 h-6 transition-transform", isOpen && "rotate-90")} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Мобильное меню - содержимое */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t border-cream-dark/50">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg font-golos-text font-medium transition-colors",
                    "text-text-secondary hover:text-text-primary hover:bg-cream-dark/50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* CTA кнопка для мобильных */}
              <div className="pt-4">
                <Button 
                  variant="primary" 
                  size="md" 
                  className="w-full"
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
