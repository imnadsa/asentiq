import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cream min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая часть - текст и кнопки */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-styrene-a font-medium text-text-primary leading-tight">
              Asentic - команда, превращающая{' '}
              <span className="underline decoration-accent-500 decoration-2 underline-offset-4">
                медицинские вызовы
              </span>{' '}
              в технологические решения.
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-text-primary text-white px-8 py-4 rounded-xl font-styrene-b font-medium text-lg transition-all duration-200 hover:bg-text-secondary">
                Наши продукты
              </button>
              <button className="bg-white border-2 border-cream-dark text-text-primary px-8 py-4 rounded-xl font-styrene-b font-medium text-lg transition-all duration-200 hover:border-text-primary hover:bg-text-primary hover:text-white">
                Связаться с нами
              </button>
            </div>
          </div>

          {/* Правая часть - иконка (скрыта на мобильных) */}
          <div className="hidden lg:block">
            <div className="w-full h-96 bg-accent-100 rounded-2xl flex items-center justify-center">
              <span className="text-accent-500 font-styrene-a text-4xl">Logo</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
