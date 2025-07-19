'use client'

import React, { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ['Превращаем', 'медицинские', 'вызовы', 'в', 'технологичные', 'решения']

  useEffect(() => {
    // Анимация появления слов остается без изменений
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(prev => prev + 1)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [currentWordIndex, words.length])

  const handleHippocratClick = () => {
    // Переход на страницу Hippocrat AI или открытие чата
    window.location.href = '/products#hippocrat-ai'
  }

  const handleAgencyClick = () => {
    // Переход на страницу агенства
    window.location.href = '/products#hippocrat-digital'
  }

  return (
    <section className="relative min-h-screen bg-cream flex items-center pt-24 pb-12 md:pt-16 md:pb-16">
      <Container size="xl" padding="lg">
        {/* Главный grid, разделяющий контент и иконку на десктопе */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-12 items-start">

          {/* Левая колонка для всего контента */}
          <div className="lg:col-span-7 flex flex-col gap-y-10">
            
            {/* 1. Заголовок */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-manrope font-bold text-text-primary leading-[1.1] tracking-tight min-h-[180px] sm:min-h-[220px]">
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

            {/* 2. Блок с двумя карточками */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Карточка Hippocrat AI */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col justify-between h-full space-y-4 min-h-[240px]">
                  <div>
                    <p className="text-xs font-manrope font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      HIPPOCRAT AI
                    </p>
                    <h2 className="text-xl font-manrope font-bold text-text-primary mb-3">
                      Опробуйте Hippocrat AI
                    </h2>
                    <p className="text-sm text-text-secondary font-golos-text leading-relaxed">
                      Персональный помощник для студента-медика, доступен сейчас
                    </p>
                  </div>
                  <button 
                    onClick={handleHippocratClick}
                    className="w-full bg-text-primary text-white px-6 py-3 rounded-xl font-golos-text font-medium text-sm hover:bg-gray-800 transition-colors duration-200"
                  >
                    Спросить Hippocrat AI
                  </button>
                </div>
              </div>

              {/* Карточка Digital-Агенство */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col justify-between h-full space-y-4 min-h-[240px]">
                  <div>
                    <p className="text-xs font-manrope font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      DIGITAL-АГЕНСТВО
                    </p>
                    <h2 className="text-xl font-manrope font-bold text-text-primary mb-3">
                      Медицинское Digital-Агенство
                    </h2>
                    <p className="text-sm text-text-secondary font-golos-text leading-relaxed">
                      Цифровые решения для медицинских клиник
                    </p>
                  </div>
                  <button 
                    onClick={handleAgencyClick}
                    className="w-full border-2 border-cream-dark text-text-primary px-6 py-3 rounded-xl font-golos-text font-medium text-sm hover:border-text-primary hover:shadow-sm transition-all duration-200"
                  >
                    Узнать про Агенство
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Текст "лаборатория" без кнопки */}
            <p className="text-text-secondary font-golos-text text-sm max-w-md leading-relaxed text-left pt-4">
              Asentic — лаборатория МедТех инноваций. Мы постоянно работаем над созданием новых решений в медицине.
            </p>

          </div>

          {/* Правая колонка - место для иконки (видна только на LG экранах) */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center h-full">
            <div className="w-full max-w-sm h-96 flex items-center justify-center">
              {/* Место для будущей иконки или иллюстрации */}
              {/* <img src="/path/to/your/icon.svg" alt="Medical Innovation" /> */}
              <div className="w-full h-full bg-gray-100 rounded-2xl opacity-30 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-golos-text">Место для иконки</span>
              </div>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  )
}

export default Hero
