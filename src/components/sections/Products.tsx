import React from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { PRODUCTS } from '@/lib/constants'
import { formatNumber } from '@/lib/utils'

const Products: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container size="xl" padding="lg">
        
        {/* Заголовок секции */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-styrene-b font-medium mb-6">
            <div className="w-2 h-2 bg-accent-500 rounded-full mr-2" />
            Наши решения
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-styrene-a font-bold text-text-primary mb-6 leading-tight">
            Продукты, которые меняют{' '}
            <span className="text-accent-600">медицину</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-text-secondary font-styrene-b max-w-3xl mx-auto leading-relaxed">
            Мы создаем технологические решения, которые делают медицинское образование и практику более эффективными и доступными.
          </p>
        </div>

        {/* Сетка продуктов */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {PRODUCTS.map((product, index) => (
            <Card 
              key={product.id}
              variant="elevated"
              padding="xl"
              hover={true}
              className="group relative overflow-hidden"
            >
              {/* Статус бейдж */}
              <div className="absolute top-6 right-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-styrene-b font-medium ${
                  product.status === 'active' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                    product.status === 'active' ? 'bg-green-500' : 'bg-amber-500'
                  }`} />
                  {product.status === 'active' ? 'Активен' : 'В разработке'}
                </div>
              </div>

              <Card.Header>
                {/* Иконка продукта */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 ? (
                    // Hippocrat AI - мозг/AI иконка
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ) : (
                    // Hippocrat Digital - цифровые технологии
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                </div>

                <Card.Title className="text-2xl mb-3">
                  {product.name}
                </Card.Title>
                
                <Card.Description className="text-lg">
                  {product.description}
                </Card.Description>
              </Card.Header>

              <Card.Content>
                {/* Метрики */}
                {product.status === 'active' && product.users && (
                  <div className="mb-6">
                    <div className="flex items-center space-x-6">
                      <div className="flex flex-col">
                        <span className="text-2xl font-styrene-a font-bold text-text-primary">
                          {formatNumber(product.users)}
                        </span>
                        <span className="text-sm text-text-secondary font-styrene-b">
                          Активных пользователей
                        </span>
                      </div>
                      
                      {product.launchDate && (
                        <div className="flex flex-col">
                          <span className="text-2xl font-styrene-a font-bold text-text-primary">
                            2024
                          </span>
                          <span className="text-sm text-text-secondary font-styrene-b">
                            Год запуска
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Особенности */}
                <div className="space-y-3 mb-6">
                  {index === 0 ? (
                    // Особенности Hippocrat AI
                    <>
                      <div className="flex items-center text-text-secondary font-styrene-b">
                        <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        ИИ-помощник для студентов медиков
                      </div>
                      <div className="flex items-center text-text-secondary font-styrene-b">
                        <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Персонализированное обучение
                      </div>
                      <div className="flex items-center text-text-secondary font-styrene-b">
                        <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        24/7 поддержка и консультации
                      </div>
                    </>
                  ) : (
                    // Особенности Hippocrat Digital
                    <>
                      <div className="flex items-center text-text-secondary font-styrene-b">
                        <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Цифровизация медицинских процессов
                      </div>
                      <div className="flex items-center text-text-secondary font-styrene-b">
                        <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Интеграция с медицинскими системами
                      </div>
                      <div className="flex items-center text-text-secondary font-styrene-b">
                        <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Аналитика и отчетность
                      </div>
                    </>
                  )}
                </div>
              </Card.Content>

              <Card.Footer className="border-none pt-0">
                <Button 
                  variant={product.status === 'active' ? 'primary' : 'outline'} 
                  size="md"
                  className="w-full group-hover:scale-105 transition-transform"
                  href={`/products#${product.id}`}
                >
                  {product.status === 'active' ? 'Попробовать' : 'Узнать больше'}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Card.Footer>

              {/* Декоративный градиент */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Card>
          ))}
        </div>

        {/* CTA секция */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-accent-50 to-accent-100/50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-styrene-a font-bold text-text-primary mb-4">
              Готовы попробовать наши решения?
            </h3>
            <p className="text-lg text-text-secondary font-styrene-b mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам медицинских специалистов, которые уже используют наши продукты для улучшения своей работы.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                href="/contact"
              >
                Связаться с нами
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/products"
              >
                Все продукты
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Products
