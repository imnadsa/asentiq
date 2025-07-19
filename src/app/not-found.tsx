import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <Container size="md" padding="lg">
        <div className="text-center space-y-8">
          
          {/* 404 иллюстрация */}
          <div className="relative">
            <div className="text-[12rem] sm:text-[16rem] font-styrene-a font-bold text-accent-100 leading-none select-none">
              404
            </div>
            
            {/* Медицинский крест поверх */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-24 h-24 text-accent-500 opacity-80" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                />
              </svg>
            </div>
          </div>

          {/* Заголовок и описание */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-styrene-a font-bold text-text-primary">
              Страница не найдена
            </h1>
            <p className="text-lg text-text-secondary font-styrene-b max-w-md mx-auto leading-relaxed">
              Похоже, эта страница ушла на лечение. Давайте найдем что-то более здоровое!
            </p>
          </div>

          {/* Действия */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              href="/"
            >
              Вернуться домой
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              href="/products"
            >
              Посмотреть продукты
            </Button>
          </div>

          {/* Популярные ссылки */}
          <div className="pt-8 border-t border-cream-dark">
            <p className="text-sm text-text-secondary font-styrene-b mb-4">
              Возможно, вы искали:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/products" 
                className="text-accent-600 hover:text-accent-700 font-styrene-b transition-colors"
              >
                Наши продукты
              </Link>
              <span className="text-cream-dark">•</span>
              <Link 
                href="/about" 
                className="text-accent-600 hover:text-accent-700 font-styrene-b transition-colors"
              >
                О компании
              </Link>
              <span className="text-cream-dark">•</span>
              <Link 
                href="/contact" 
                className="text-accent-600 hover:text-accent-700 font-styrene-b transition-colors"
              >
                Контакты
              </Link>
            </div>
          </div>

          {/* Анимированные элементы */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-300 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent-200 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NotFound
