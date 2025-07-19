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
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [currentWordIndex, words.length])

  return (
    <section className="relative min-h-screen bg-cream flex items-center justify-center overflow-hidden pt-24 md:pt-16">
      <Container size="xl" padding="lg" className="relative">
        <div className="space-y-12">
          
          {/* Верхняя часть - заголовок и место для иконки */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Левая часть - заголовок (8 колонок) */}
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-manrope font-bold text-text-primary leading-[1.1] tracking-tight">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={cn(
                      "inline-block transition-all duration-500 ease-out mr-3",
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

            {/* Правая часть - место для иконки (4 колонки) */}
            <div className="lg:col-span-4 hidden lg:flex justify-center items-center">
              <div className="w-64 h-64 flex items-center justify-center">
                {/* Место для будущей иконки */}
                <div className="w-full h-full bg-transparent" />
              </div>
            </div>
          </div>

          {/* Карточки продуктов - ограничиваем ширину на десктопе */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl">
              
              {/* Карточка Hippocrat AI */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 aspect-square lg:aspect-auto lg:min-h-[280px]">
                <div className="space-y-4 h-full flex flex-col">
                  <div className="flex-1">
                    <div className="text-xs font-manrope font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      HIPPOCRAT AI
                    </div>
                    <h2 className="text-xl font-manrope font-bold text-text-primary mb-3">
                      Опробуйте Hippocrat AI
                    </h2>
                    <p className="text-sm text-text-secondary font-golos-text leading-relaxed">
                      Hippocrat AI - персональный помощник для студента-медика, доступен сейчас
                    </p>
                  </div>
                  
                  <button className="w-full bg-text-primary text-white px-6 py-3 rounded-xl font-golos-text font-medium text-sm hover:bg-gray-800 transition-colors duration-200 mt-auto">
                    Спросить Hippocrat AI
                  </button>
                </div>
              </div>

              {/* Карточка Digital-Агенство */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 aspect-square lg:aspect-auto lg:min-h-[280px]">
                <div className="space-y-4 h-full flex flex-col">
                  <div className="flex-1">
                    <div className="text-xs font-manrope font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      DIGITAL-АГЕНСТВО
                    </div>
                    <h2 className="text-xl font-manrope font-bold text-text-primary mb-3">
                      Медицинское Digital-Агенство
                    </h2>
                    <p className="text-sm text-text-secondary font-golos-text leading-relaxed">
                      Hippocrat Digital - цифровые решения для медицинских клиник
                    </p>
                  </div>
                  
                  <button className="w-full border-2 border-cream-dark text-text-primary px-6 py-3 rounded-xl font-golos-text font-medium text-sm hover:border-text-primary hover:shadow-sm transition-all duration-200 mt-auto">
                    Узнать про Агенство
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Компактная кнопка лаборатории */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center space-y-3">
              <p className="text-text-secondary font-golos-text text-sm max-w-xl leading-relaxed">
                Asentic — лаборатория МедТех инноваций. Мы постоянно работаем над созданием новых решений в медицине.
              </p>
              
              <button className="bg-accent-50 text-accent-700 px-5 py-2 rounded-lg font-golos-text font-medium text-sm hover:bg-accent-100 transition-colors duration-200 flex items-center space-x-2">
                <span>Наша лаборатория</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
