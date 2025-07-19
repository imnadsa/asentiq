'use client'

import React, { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Запускаем анимацию появления
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleProductsClick = () => {
    const productsSection = document.getElementById('products')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/products'
    }
  }

  const handleContactClick = () => {
    window.location.href = '/contact'
  }

  return (
    <section className="relative min-h-screen bg-cream flex items-center justify-center overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Градиентные круги для визуального интереса */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-50/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Container size="xl" padding="lg" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh] py-20">
          
          {/* Левая часть - контент */}
          <div className="lg:col-span-7 space-y-8">
            <div 
              className={cn(
                "space-y-6 transition-all duration-1000 ease-out",
                isLoaded 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
            >
              {/* Бейдж */}
              <div className="inline-flex items-center px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-styrene-b font-medium">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse" />
                МедТех инновации
              </div>

              {/* Главный заголовок */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-styrene-a font-medium text-text-primary leading-[1.1] tracking-tight">
                Asentic - команда, превращающая{' '}
                <span className="relative">
                  <span className="relative z-10 text-accent-600">медицинские вызовы</span>
                  <div className="absolute inset-0 bg-accent-100 -skew-x-12 transform scale-110 rounded-lg" />
                </span>{' '}
                в технологические решения
              </h1>

              {/* Подзаголовок */}
              <p className="text-lg sm:text-xl text-text-secondary font-styrene-b max-w-2xl leading-relaxed">
                Разрабатываем ИИ-решения и цифровые продукты, которые делают медицину более доступной, эффективной и человечной.
              </p>
            </div>

            {/* Кнопки */}
            <div 
              className={cn(
                "flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out",
                isLoaded 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: '200ms' }}
            >
              <Button 
                variant="primary" 
                size="lg"
                onClick={handleProductsClick}
                className="group"
              >
                Наши продукты
                <svg 
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleContactClick}
                className="group"
              >
                Связаться с нами
                <svg 
                  className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Button>
            </div>

            {/* Статистика */}
            <div 
              className={cn(
                "flex flex-wrap gap-8 pt-8 transition-all duration-1000 ease-out",
                isLoaded 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-styrene-a font-bold text-text-primary">1500+</span>
                <span className="text-sm text-text-secondary font-styrene-b">Активных пользователей</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-styrene-a font-bold text-text-primary">2</span>
                <span className="text-sm text-text-secondary font-styrene-b">Продукта в разработке</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-styrene-a font-bold text-text-primary">24/7</span>
                <span className="text-sm text-text-secondary font-styrene-b">Поддержка ИИ</span>
              </div>
            </div>
          </div>

          {/* Правая часть - визуал (скрыт на мобильных) */}
          <div 
            className={cn(
              "hidden lg:flex lg:col-span-5 justify-center items-center transition-all duration-1200 ease-out",
              isLoaded 
                ? "opacity-100 translate-x-0 scale-100" 
                : "opacity-0 translate-x-8 scale-95"
            )}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative">
              {/* Главная медицинская иконка */}
              <div className="relative z-10 w-80 h-80 bg-white rounded-3xl shadow-2xl flex items-center justify-center group hover:shadow-3xl transition-shadow duration-300">
                <svg 
                  className="w-40 h-40 text-accent-500 group-hover:scale-110 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M4.636 16.636L16.95 4.05a2.828 2.828 0 114 4L8.636 20.636a2.828 2.828 0 01-4-4zM6 18l3-3M15 9l3-3"
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M12 2v6m0 8v6m-6-6h6m8 0h6"
                  />
                </svg>
              </div>

              {/* Декоративные элементы */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-100 rounded-2xl opacity-60 animate-bounce" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent-200 rounded-xl opacity-80 animate-bounce" style={{ animationDelay: '1.5s' }} />
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-accent-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>

        {/* Стрелка вниз */}
        <div 
          className={cn(
            "absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out",
            isLoaded 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-text-secondary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
