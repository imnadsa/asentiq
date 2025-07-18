// src/components/sections/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cream min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Левая часть - текст и кнопки */}
          <div className="space-y-8">
            {/* Главный заголовок */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-styrene-a font-medium text-text-primary leading-tight">
              Asentic - команда, превращающая{' '}
              <span className="underline decoration-accent-500 decoration-2 underline-offset-4">
                медицинские вызовы
              </span>{' '}
              в технологические решения.
            </h1>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary кнопка */}
              <button className="group relative bg-text-primary text-white px-8 py-4 rounded-xl font-styrene-b font-medium text-lg transition-all duration-200 hover:bg-text-secondary hover:transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-cream">
                <span className="relative z-10">Наши продукты</span>
              </button>

              {/* Secondary кнопка */}
              <button className="group relative bg-white border-2 border-cream-dark text-text-primary px-8 py-4 rounded-xl font-styrene-b font-medium text-lg transition-all duration-200 hover:border-text-primary hover:bg-text-primary hover:text-white hover:transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-cream">
                <span className="relative z-10">Связаться с нами</span>
              </button>
            </div>
          </div>

          {/* Правая часть - иконка (скрыта на мобильных) */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Основной элемент - стилизованная медицинская молекула */}
              <svg 
                width="400" 
                height="400" 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform rotate-12 hover:rotate-6 transition-transform duration-700"
              >
                {/* Узлы молекулы */}
                <circle cx="200" cy="100" r="20" fill="#6366f1" opacity="0.8" />
                <circle cx="120" cy="160" r="16" fill="#a5b4fc" opacity="0.9" />
                <circle cx="280" cy="160" r="18" fill="#6366f1" opacity="0.7" />
                <circle cx="80" cy="240" r="14" fill="#a5b4fc" opacity="0.8" />
                <circle cx="200" cy="200" r="24" fill="#4f46e5" opacity="1" />
                <circle cx="320" cy="240" r="16" fill="#a5b4fc" opacity="0.9" />
                <circle cx="140" cy="300" r="18" fill="#6366f1" opacity="0.8" />
                <circle cx="260" cy="300" r="20" fill="#6366f1" opacity="0.7" />
                <circle cx="200" cy="360" r="16" fill="#a5b4fc" opacity="0.9" />

                {/* Связи между узлами */}
                <line x1="200" y1="100" x2="120" y2="160" stroke="#6366f1" strokeWidth="3" opacity="0.6" />
                <line x1="200" y1="100" x2="280" y2="160" stroke="#6366f1" strokeWidth="3" opacity="0.6" />
                <line x1="120" y1="160" x2="200" y2="200" stroke="#6366f1" strokeWidth="3" opacity="0.6" />
                <line x1="280" y1="160" x2="200" y2="200" stroke="#6366f1" strokeWidth="3" opacity="0.6" />
                <line x1="120" y1="160" x2="80" y2="240" stroke="#6366f1" strokeWidth="3" opacity="0.6" />
                <line x1="280" y1="160" x2="320" y2="240" stroke="#6366f1" strokeWidth="3" opacity="0.6" />
                <line x1="200" y1="200" x2="140" y2="300" stroke="#6366f1" strokeWidth="3" opacity="0.6" />
                <line x1="200" y1="200" x2="260" y2="300" stroke="#6366f1" strokeWidth="3" opacity="0.6" />
                <line x1="140" y1="300" x2="200" y2="360" stroke="#6366f1" strokeWidth="3" opacity="0.6" />
                <line x1="260" y1="300" x2="200" y2="360" stroke="#6366f1" strokeWidth="3" opacity="0.6" />
                
                {/* Дополнительные связи для сложности */}
                <line x1="80" y1="240" x2="140" y2="300" stroke="#a5b4fc" strokeWidth="2" opacity="0.4" />
                <line x1="320" y1="240" x2="260" y2="300" stroke="#a5b4fc" strokeWidth="2" opacity="0.4" />
              </svg>

              {/* Фоновые декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-100 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-50 rounded-full opacity-40"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
