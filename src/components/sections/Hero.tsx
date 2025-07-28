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
    <section className="relative min-h-screen bg-cream flex items-center pt-24 pb-12 md:pt-16 md:pb-16 overflow-hidden">
      <Container size="xl" padding="lg">
        {/* Контент ограничен по ширине на больших экранах для места под SVG */}
        <div className="w-full lg:max-w-2xl xl:max-w-3xl">
          
          {/* Контент секции */}
          <div className="flex flex-col gap-y-8 lg:gap-y-10 lg:pt-16">
            
            {/* 1. Заголовок */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-coolvetica font-bold text-text-primary leading-[1.1] tracking-tight min-h-[180px] sm:min-h-[220px] lg:min-h-[160px]">
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
                    <p className="text-xs font-coolvetica font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      HIPPOCRAT AI
                    </p>
                    <h2 className="text-xl font-coolvetica font-bold text-text-primary mb-3">
                      Опробуйте Hippocrat AI
                    </h2>
                    <p className="text-xl text-text-secondary font-golos-text leading-relaxed">
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
                    <p className="text-xs font-coolvetica font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      DIGITAL-АГЕНСТВО
                    </p>
                    <h2 className="text-xl font-coolvetica font-bold text-text-primary mb-3">
                      Медицинское Digital-Агенство
                    </h2>
                    <p className="text-xl text-text-secondary font-golos-text leading-relaxed">
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
            <p className="text-base text-text-secondary font-golos-text max-w-md leading-relaxed text-left pt-4">
              Asentiq — лаборатория МедТех инноваций. Мы постоянно работаем над созданием новых решений в медицине.
            </p>

          </div>
        </div>

        {/* SVG иконка мозга - только на больших экранах */}
        <div className="hidden lg:block absolute top-1/2 right-8 xl:right-16 transform -translate-y-1/2 pointer-events-none">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="540" 
            height="638" 
            fill="none"
            className="w-80 xl:w-96 h-auto opacity-90"
            viewBox="0 0 540 638"
          >
            <path 
              stroke="#7D95F8" 
              strokeLinecap="round" 
              strokeWidth="31" 
              d="M332.371 622v-42.27c0-11.053 8.316-20.179 18.931-20.768l79.756-3.888c16.062-.894 29.469-13.058 32.5-29.486l3.662-74.122c6.687-36.22 62.448-14.411 56.309-54.867-8.435-35.899-33.392-71.463-39.598-104.779-13.759-73.858-4.994-163.741-77.193-227.07-44.123-38.701-97.706-48.949-154.152-47.642C158.429 19.284 70.371 60.86 31.041 155.154c0 0-33.081 76.483 0 159.346"
            />
            <path 
              fill="#7D95F8" 
              fillRule="evenodd" 
              d="M95.9 229.867c-7.99 10.88-11.73 26.692-8.67 41.48 2.72 12.922 14.96 42.33 68.51 49.3v17.68c0 7.652 6.29 14.11 14.11 14.11h28.73c5.1 0 11.05-4.08 12.92-8.84l16.49-38.93c11.9.68 25.67-3.57 35.53-13.6 14.28 7.65 31.961 9.01 47.601 2.72 4.08-1.7 7.99-3.74 11.22-6.46 1.7-1.19 3.4-2.55 4.59-4.08.34-.17.51-.17.34-.34 2.89-2.72 5.27-5.78 7.14-9.18 1.19-1.87 2.21-3.91 3.06-5.95.51.172 1.02.34 1.53.34 5.95 1.7 12.41 2.55 18.87 2.55 13.09 0 26.52-3.228 37.57-9.858 2.38-1.36 4.59-3.062 6.63-4.592 12.92-10.2 21.93-24.31 25.5-40.63 4.42-20.57 0-42.16-12.41-60.859-.34-.51-.85-.85-1.36-1.19.17-21.76-10.71-44.37-28.9-58.14-11.9-9.01-25.84-13.26-40.46-13.43-21.76-12.92-65.451-37.91-121.381-20.4a58.474 58.474 0 0 0-28.05-4.42c-21.76 1.87-41.14 15.3-49.64 34.17-.68 1.7-.85 3.4-1.53 5.1-18.19 7.14-32.47 21.93-40.8 44.03-14.96 15.64-22.61 32.979-22.27 50.149.17 13.77 5.27 26.86 15.13 39.27Z" 
              clipRule="evenodd" 
              opacity=".4"
            />
            <path 
              fill="#7D95F8" 
              fillRule="evenodd" 
              d="M265.814 179.896c-3.298 0-6.732-.408-10.268-1.292-6.834-1.734-10.965-8.654-9.248-15.488 1.717-6.851 8.755-10.948 15.487-9.248 7.429 1.972 12.699-1.955 15.929-5.712-5.27-7.633-8.143-17.34-8.143-28.492 0-7.038 5.712-12.75 12.75-12.75s12.75 5.712 12.75 12.75c0 10.285 3.502 16.66 10.727 19.414 7.837 3.009 16.405.51 18.241-1.394 3.723-5.865 11.458-7.752 17.425-4.08 6.018 3.672 7.922 11.509 4.233 17.527-5.678 9.299-18.377 14.858-31.926 14.858-4.369 0-8.84-.595-13.175-1.802-.782-.221-1.479-.561-2.227-.816-7.497 9.385-18.87 16.525-32.555 16.525ZM129.664 174.587c1.496-6.868 8.262-11.135 15.181-9.758l21.998 4.76c6.868 1.496 11.237 8.279 9.758 15.181-1.292 5.95-6.596 10.03-12.461 10.03-.884 0-1.802-.085-2.72-.272l-21.998-4.76c-6.868-1.496-11.237-8.296-9.758-15.181ZM191.663 204.51c-8.398-27.013 1.904-48.57 14.671-59.637 5.304-4.573 13.362-4.028 18.003 1.293 4.59 5.321 4.012 13.379-1.309 18.003-3.451 2.958-12.988 13.328-7.174 32.317 21.879-2.618 43.843 5.372 53.533 20.536 3.808 5.933 2.057 13.804-3.876 17.595a12.755 12.755 0 0 1-17.612-3.859c-4.42-6.97-19.856-11.866-34.918-7.803-10.591 2.839-23.392 10.71-24.327 32.062-.289 6.851-5.933 12.206-12.716 12.206-.204 0-.391 0-.561-.017-7.038-.289-12.495-6.239-12.189-13.277.952-22.083 11.39-39.593 28.475-49.419ZM322.344 287.332c1.7-1.19 3.4-2.55 4.59-4.08 0-.17.17-.17.17-.34h.17c2.89-2.72 5.27-5.78 7.14-9.18 1.19-1.87 2.21-3.91 3.06-5.95.51.17 1.02.34 1.53.34-13.43-10.2-19.72-26.69-18.7-37.06.68-7.14-4.42-13.26-11.39-13.94-6.97-1.02-13.26 4.42-13.94 11.39-2.21 20.57 9.18 44.37 27.37 58.82Z" 
              clipRule="evenodd"
            />
          </svg>
        </div>
          
      </Container>
    </section>
  )
}

export default Hero
