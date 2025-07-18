import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cream min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-styrene-a font-medium text-text-primary leading-tight mb-8">
            Asentic - команда, превращающая{' '}
            <span className="underline decoration-accent-500 decoration-2 underline-offset-4">
              медицинские вызовы
            </span>{' '}
            в технологические решения.
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-text-primary text-white px-8 py-4 rounded-xl font-styrene-b font-medium text-lg">
              Наши продукты
            </button>
            <button className="bg-white border-2 border-cream-dark text-text-primary px-8 py-4 rounded-xl font-styrene-b font-medium text-lg">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
