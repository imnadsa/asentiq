'use client'

import React, { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ['Превращаем', 'медицинские', 'вызовы', 'в', 'технологичные', 'решения']

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(prev => prev + 1)
      }, 200) // 200ms между словами
      return () => clearTimeout(timer)
    }
  }, [currentWordIndex, words.length])

  return (
    <section className="relative min-h-screen bg-cream flex items-center justify-center overflow-hidden pt-20">
      <Container size="xl" padding="lg" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] py-16">
          
          {/* Левая часть - контент */}
          <div className="space-y-8">
            {/* Главный заголовок с анимацией по словам */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-manrope font-bold text-text-primary leading-[1.1] tracking-tight">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-block transition-all duration-500 ease-out mr-4",
                    index < currentWordIndex 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  )}
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>

          {/* Правая часть - место для иконки */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-80 h-80 flex items-center justify-center">
              {/* Место для будущей иконки */}
              <div className="w-full h-full bg-transparent" />
            </div>
          </div>
        </div>

        {/* Карточки продуктов - как у Anthropic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          
          {/* Карточка Hippocrat AI */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="space-y-6">
              <div>
                <div className="text-sm font-manrope font-medium text-text-secondary uppercase tracking-wide mb-3">
                  HIPPOCRAT AI
                </div>
                <h2 className="text-2xl font-manrope font-bold text-text-primary mb-4">
                  Опробуйте Hippocrat AI
                </h2>
                <p className="text-lg text-text-secondary font-golos-text leading-relaxed">
                  Hippocrat AI - персональный помощник для студента-медика, доступен сейчас
                </p>
              </div>
              
              <button className="w-full bg-text-primary text-white px-8 py-4 rounded-xl font-golos-text font-medium text-lg hover:bg-gray-800 transition-colors duration-200">
                Спросить Hippocrat AI
              </button>
            </div>
          </div>

          {/* Карточка Digital-Агенство */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="space-y-6">
              <div>
                <div className="text-sm font-manrope font-medium text-text-secondary uppercase tracking-wide mb-3">
                  DIGITAL-АГЕНСТВО
                </div>
                <h2 className="text-2xl font-manrope font-bold text-text-primary mb-4">
                  Медицинское Digital-Агенство
                </h2>
                <p className="text-lg text-text-secondary font-golos-text leading-relaxed">
                  Hippocrat Digital - цифровые решения для медицинских клиник
                </p>
              </div>
              
              <button className="w-full border-2 border-cream-dark text-text-primary px-8 py-4 rounded-xl font-golos-text font-medium text-lg hover:border-text-primary hover:shadow-sm transition-all duration-200">
                Узнать про Агенство
              </button>
            </div>
          </div>
        </div>

        {/* Дополнительная кнопка лаборатории */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-4">
            <p className="text-text-secondary font-golos-text text-lg max-w-2xl">
              Asentic — это лаборатория МедТех инноваций. Мы не останавливаемся на одном продукте 
              и постоянно работаем над созданием новых решений в сфере медицинских технологий.
            </p>
            
            <button className="bg-accent-50 text-accent-700 px-6 py-3 rounded-xl font-golos-text font-medium hover:bg-accent-100 transition-colors duration-200 flex items-center space-x-2">
              <span>Наша лаборатория</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
