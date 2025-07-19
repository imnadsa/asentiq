import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Products from '@/components/sections/Products'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { PRODUCTS } from '@/lib/constants'

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Отступ для фиксированного хедера */}
      <div className="pt-16 lg:pt-20">
        {/* Hero секция для страницы продуктов */}
        <section className="py-20 bg-cream">
          <Container size="xl" padding="lg">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-styrene-b font-medium mb-6">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-2" />
                Наши продукты
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-styrene-a font-bold text-text-primary mb-6 leading-tight">
                Инновационные решения для{' '}
                <span className="text-accent-600">медицины</span>
              </h1>
              
              <p className="text-xl text-text-secondary font-styrene-b max-w-3xl mx-auto leading-relaxed">
                Познакомьтесь с нашими продуктами, которые помогают медицинским специалистам 
                работать эффективнее и обучаться быстрее
              </p>
            </div>
          </Container>
        </section>
        
        {/* Основная секция продуктов */}
        <Products />
        
        {/* Детальное описание каждого продукта */}
        <section className="py-20 bg-cream">
          <Container size="xl" padding="lg">
            <div className="space-y-20">
              
              {/* Hippocrat AI подробно */}
              <div id="hippocrat-ai" className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-styrene-b font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      Активный продукт
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-styrene-a font-bold text-text-primary">
                      Hippocrat AI
                    </h2>
                    
                    <p className="text-lg text-text-secondary font-styrene-b leading-relaxed">
                      Персональный ИИ-помощник для студентов медицинских вузов. Помогает в изучении 
                      сложных медицинских концепций, подготовке к экзаменам и решении клинических кейсов.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-styrene-a font-semibold text-text-primary">
                        Ключевые возможности:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-secondary font-styrene-b">
                            Интерактивное обучение с персонализированными рекомендациями
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-secondary font-styrene-b">
                            База знаний из проверенных медицинских источников
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-secondary font-styrene-b">
                            Симуляция клинических случаев для практики
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-secondary font-styrene-b">
                            Поддержка на 15+ языках
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <Button variant="primary" size="lg" href="/contact">
                      Попробовать Hippocrat AI
                    </Button>
                  </div>
                  
                  <Card variant="elevated" padding="xl" className="bg-gradient-to-br from-white to-accent-50/30">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-styrene-a font-bold text-text-primary">1500+</div>
                          <div className="text-sm text-text-secondary font-styrene-b">Пользователей</div>
                        </div>
                        <div>
                          <div className="text-2xl font-styrene-a font-bold text-text-primary">24/7</div>
                          <div className="text-sm text-text-secondary font-styrene-b">Доступность</div>
                        </div>
                        <div>
                          <div className="text-2xl font-styrene-a font-bold text-text-primary">95%</div>
                          <div className="text-sm text-text-secondary font-styrene-b">Точность</div>
                        </div>
                        <div>
                          <div className="text-2xl font-styrene-a font-bold text-text-primary">15+</div>
                          <div className="text-sm text-text-secondary font-styrene-b">Языков</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              
              {/* Hippocrat Digital подробно */}
              <div id="hippocrat-digital" className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <Card variant="elevated" padding="xl" className="order-2 lg:order-1 bg-gradient-to-br from-white to-amber-50/30">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl flex items-center justify-center mx-auto">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-lg font-styrene-a font-semibold text-text-primary mb-2">
                          Статус разработки
                        </div>
                        <div className="text-sm text-text-secondary font-styrene-b">
                          Запланированный релиз в Q3 2025
                        </div>
                      </div>
                      
                      <div className="bg-amber-100 rounded-xl p-4">
                        <p className="text-sm text-amber-800 font-styrene-b">
                          🚀 Открыта предварительная регистрация для раннего доступа
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  <div className="space-y-6 order-1 lg:order-2">
                    <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-styrene-b font-medium">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2" />
                      В разработке
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-styrene-a font-bold text-text-primary">
                      Hippocrat Digital
                    </h2>
                    
                    <p className="text-lg text-text-secondary font-styrene-b leading-relaxed">
                      Комплексная платформа для цифровизации медицинских процессов. 
                      Интегрирует системы управления пациентами, аналитику и ИИ-диагностику.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-styrene-a font-semibold text-text-primary">
                        Планируемые возможности:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-secondary font-styrene-b">
                            Электронные медицинские карты нового поколения
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-secondary font-styrene-b">
                            ИИ-помощь в диагностике и принятии решений
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-secondary font-styrene-b">
                            Интеграция с существующими медицинскими системами
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-secondary font-styrene-b">
                            Продвинутая аналитика и отчетность
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <Button variant="outline" size="lg" href="/contact">
                      Узнать о раннем доступе
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
      
      <Footer />
    </main>
  )
}
