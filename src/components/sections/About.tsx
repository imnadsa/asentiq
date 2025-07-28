'use client'

import React from 'react'
import Container from '@/components/ui/Container'

const values = [
  {
    id: 1,
    title: 'Инновации в медицине',
    bgColor: '#e3dacc', // Кастомный бежевый
    iconPlaceholder: 'Иконка инноваций'
  },
  {
    id: 2,
    title: 'Этичность и безопасность',
    bgColor: '#bcd1ca', // Кастомный мятный
    iconPlaceholder: 'Иконка этики'
  },
  {
    id: 3,
    title: 'Доступность решений',
    bgColor: '#cbcadb', // Кастомный фиолетовый
    iconPlaceholder: 'Иконка доступности'
  }
]

const About: React.FC = () => {
  const handleVacanciesClick = () => {
    window.location.href = '/careers'
  }

  const handleManagerClick = () => {
    window.location.href = '/contact'
  }

  return (
    <section className="py-20 lg:py-32 bg-cream">
      <Container size="xl" padding="lg">
        
        {/* Разделительная линия сверху */}
        <div className="w-full h-px bg-gray-300 mb-16 lg:mb-20"></div>
        
        {/* Верхняя часть - текст как у Anthropic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
          
          {/* Левая колонка - акцентный заголовок */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold text-text-primary leading-tight">
              В Asentiq мы создаём цифровые продукты для здорового будущего медицины.
            </h2>
          </div>
          
          {/* Правая колонка - объясняющий текст */}
          <div className="space-y-6">
            <p className="text-lg text-text-secondary font-golos-text leading-relaxed">
              Современная медицина сталкивается с множеством вызовов: от нехватки специалистов 
              до сложности обучения студентов. Мы знаем, что создание мощных медицинских технологий 
              требует как смелых шагов вперёд, так и вдумчивого подхода к их внедрению.
            </p>
            <p className="text-lg text-text-secondary font-golos-text leading-relaxed">
              Поэтому мы фокусируемся на разработке инструментов, которые действительно помогают. 
              Через наши исследования, продукты и образовательные инициативы мы стремимся показать, 
              как выглядит ответственное развитие МедТех на практике.
            </p>
          </div>
        </div>

        {/* Заголовок для ценностей */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-manrope font-bold text-text-primary mb-4">
            Наши ценности
          </h3>
        </div>

        {/* Сетка ценностей - 1 на мобильных, 3 на десктопе */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-24">
          {values.map((value) => (
            <div
              key={value.id}
              className="rounded-3xl p-8 lg:p-10 transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: value.bgColor }}
            >
              {/* Место для иконки */}
              <div className="w-24 h-24 lg:w-32 lg:h-32 mb-8 bg-white bg-opacity-50 rounded-2xl flex items-center justify-center">
                <span className="text-gray-600 text-xs font-golos-text text-center">
                  {value.iconPlaceholder}
                </span>
              </div>
              
              {/* Только заголовок ценности, без описания */}
              <h4 className="text-xl lg:text-2xl font-manrope font-bold text-text-primary leading-tight">
                {value.title}
              </h4>
            </div>
          ))}
        </div>

        {/* CTA секция как у Anthropic */}
        <div className="text-center space-y-8">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold text-text-primary leading-tight max-w-4xl mx-auto">
            Хотите помочь нам создавать этичный мир технологичной медицины?
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleVacanciesClick}
              className="bg-text-primary text-white px-8 py-4 rounded-xl font-golos-text font-medium text-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Уточнить Вакансии
            </button>
            
            <button 
              onClick={handleManagerClick}
              className="border-2 border-cream-dark text-text-primary px-8 py-4 rounded-xl font-golos-text font-medium text-lg hover:border-text-primary hover:shadow-sm transition-all duration-200"
            >
              Связаться с Менеджером
            </button>
          </div>
        </div>

      </Container>
    </section>
  )
}

export default About
