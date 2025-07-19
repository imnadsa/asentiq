import React from 'react'
import Container from '@/components/ui/Container'

const values = [
  {
    id: 1,
    title: 'Инновации в медицине',
    description: 'Применяем передовые технологии ИИ для решения сложных медицинских задач',
    bgColor: 'bg-orange-100', // Бежевый как у Anthropic
    iconPlaceholder: 'Иконка инноваций'
  },
  {
    id: 2,
    title: 'Этичность и безопасность',
    description: 'Соблюдаем высочайшие стандарты медицинской этики и конфиденциальности данных',
    bgColor: 'bg-teal-100', // Мятный как у Anthropic
    iconPlaceholder: 'Иконка этики'
  },
  {
    id: 3,
    title: 'Доступность решений',
    description: 'Делаем медицинские технологии доступными для всех, независимо от местоположения',
    bgColor: 'bg-purple-100', // Фиолетовый как у Anthropic
    iconPlaceholder: 'Иконка доступности'
  }
]

const About: React.FC = () => {
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
              В Asentic мы создаём продукты для здорового будущего медицины.
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className={`${value.bgColor} rounded-3xl p-8 lg:p-10 transition-transform duration-300 hover:scale-105`}
            >
              {/* Место для иконки */}
              <div className="w-24 h-24 lg:w-32 lg:h-32 mb-8 bg-white bg-opacity-50 rounded-2xl flex items-center justify-center">
                <span className="text-gray-600 text-xs font-golos-text text-center">
                  {value.iconPlaceholder}
                </span>
              </div>
              
              {/* Заголовок ценности */}
              <h4 className="text-xl lg:text-2xl font-manrope font-bold text-text-primary mb-4 leading-tight">
                {value.title}
              </h4>
              
              {/* Описание ценности */}
              <p className="text-base text-text-secondary font-golos-text leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default About
