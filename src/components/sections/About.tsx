import React from 'react'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'

const values = [
  {
    title: 'Инновации',
    description: 'Мы постоянно ищем новые способы применения технологий в медицине',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Качество',
    description: 'Каждое наше решение проходит строгую проверку на безопасность и эффективность',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Доступность',
    description: 'Делаем медицинские технологии доступными для всех, независимо от местоположения',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Этичность',
    description: 'Соблюдаем высочайшие стандарты конфиденциальности и медицинской этики',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
]

const stats = [
  { number: '1500+', label: 'Пользователей' },
  { number: '2', label: 'Продукта' },
  { number: '24/7', label: 'Поддержка' },
  { number: '2024', label: 'Основание' }
]

const About: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <Container size="xl" padding="lg">
        
        {/* Основная информация */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Левая часть - текст */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-styrene-b font-medium">
              <div className="w-2 h-2 bg-accent-500 rounded-full mr-2" />
              О компании
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-styrene-a font-bold text-text-primary leading-tight">
              Мы строим будущее{' '}
              <span className="text-accent-600">медицины</span>
            </h2>
            
            <div className="space-y-6 text-lg text-text-secondary font-styrene-b leading-relaxed">
              <p>
                Asentic — это команда passionate разработчиков, дизайнеров и медицинских экспертов, 
                которые объединились с одной целью: сделать медицину более технологичной и доступной.
              </p>
              <p>
                Мы верим, что искусственный интеллект и современные технологии могут радикально 
                улучшить медицинское образование, диагностику и лечение. Наша миссия — создавать 
                решения, которые помогают медицинским специалистам работать эффективнее, 
                а пациентам — получать лучшую помощь.
              </p>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-styrene-a font-bold text-text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-secondary font-styrene-b mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая часть - визуал */}
          <div className="relative">
            {/* Главная карточка */}
            <Card variant="elevated" padding="xl" className="relative z-10">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-styrene-a font-semibold text-text-primary">
                  Наша миссия
                </h3>
                
                <p className="text-text-secondary font-styrene-b italic">
                  "Превращать медицинские вызовы в технологические решения, 
                  делая здравоохранение более эффективным и доступным для всех"
                </p>
              </div>
            </Card>

            {/* Декоративные элементы */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-100 rounded-3xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent-200 rounded-2xl opacity-80 animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Ценности */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-styrene-a font-bold text-text-primary mb-4">
              Наши ценности
            </h3>
            <p className="text-lg text-text-secondary font-styrene-b max-w-3xl mx-auto">
              Принципы, которые определяют нашу работу и подход к созданию медицинских технологий
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                variant="default" 
                padding="lg"
                className="text-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                
                <h4 className="text-lg font-styrene-a font-semibold text-text-primary mb-3">
                  {value.title}
                </h4>
                
                <p className="text-text-secondary font-styrene-b text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA секция */}
        <div className="mt-20 text-center">
          <Card variant="elevated" padding="xl" className="bg-gradient-to-r from-white to-accent-50/30">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-styrene-a font-bold text-text-primary mb-4">
                Хотите присоединиться к нашей миссии?
              </h3>
              
              <p className="text-lg text-text-secondary font-styrene-b mb-8">
                Мы всегда открыты для сотрудничества с талантливыми специалистами, 
                медицинскими учреждениями и инвесторами, которые разделяют наше видение.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white rounded-xl font-styrene-b font-medium hover:bg-accent-600 transition-colors"
                >
                  Связаться с нами
                </a>
                <a 
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-cream-dark text-text-primary rounded-xl font-styrene-b font-medium hover:border-accent-500 transition-colors"
                >
                  Узнать больше
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default About
