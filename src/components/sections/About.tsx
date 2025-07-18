import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-cream/80 backdrop-blur-sm border-b border-cream-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Логотип */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-styrene-a font-bold text-text-primary">
              ASENTIC
            </span>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="text-text-secondary hover:text-text-primary font-styrene-b font-medium transition-colors duration-200"
            >
              Продукты
            </a>
            <a 
              href="#" 
              className="text-text-secondary hover:text-text-primary font-styrene-b font-medium transition-colors duration-200"
            >
              О нас
            </a>
            <a 
              href="#" 
              className="text-text-secondary hover:text-text-primary font-styrene-b font-medium transition-colors duration-200"
            >
              Исследования
            </a>
            <a 
              href="#" 
              className="text-text-secondary hover:text-text-primary font-styrene-b font-medium transition-colors duration-200"
            >
              Контакты
            </a>
          </nav>

          {/* CTA кнопка для десктопа */}
          <div className="hidden md:block">
            <button className="bg-text-primary text-white px-6 py-2.5 rounded-lg font-styrene-b font-medium text-sm transition-all duration-200 hover:bg-text-secondary hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-cream">
              Попробовать Hippocrat AI
            </button>
          </div>

          {/* Мобильное меню кнопка */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white transition-colors duration-200"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
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

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-cream-dark">
            <div className="py-4 space-y-4">
              <a 
                href="#" 
                className="block text-text-secondary hover:text-text-primary font-styrene-b font-medium transition-colors duration-200"
              >
                Продукты
              </a>
              <a 
                href="#" 
                className="block text-text-secondary hover:text-text-primary font-styrene-b font-medium transition-colors duration-200"
              >
                О нас
              </a>
              <a 
                href="#" 
                className="block text-text-secondary hover:text-text-primary font-styrene-b font-medium transition-colors duration-200"
              >
                Исследования
              </a>
              <a 
                href="#" 
                className="block text-text-secondary hover:text-text-primary font-styrene-b font-medium transition-colors duration-200"
              >
                Контакты
              </a>
              <button className="w-full bg-text-primary text-white px-6 py-3 rounded-lg font-styrene-b font-medium text-sm transition-all duration-200 hover:bg-text-secondary">
                Попробовать Hippocrat AI
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
