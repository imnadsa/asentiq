'use client'

import React, { useState } from 'react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface JobPosition {
  id: string
  title: string
  department: string
  type: string
  description: string
  fullDescription: string
}

const jobPositions: JobPosition[] = [
  {
    id: 'ambassador',
    title: 'Амбассадор / Лицо бренда Hippocrat AI',
    department: 'Маркетинг',
    type: 'Full-time',
    description: 'Стань голосом и лицом нашего бренда, создавай виральный контент и развивай комьюнити студентов-медиков.',
    fullDescription: `**Роль кандидата «Лица бренда Hippocrat AI»**

**Привет! Меня зовут Саша, я основатель Hippocrat AI, умного AI-помощника для студентов-медиков, обученного на медицинской литературе.**

Мы не просто делаем очередной продукт. Мы создаем целую экосистему, которая изменит подход к медицинскому образованию в России. Наша философия проста: лучшие инструменты для студентов могут создать только сами студенты.

**Что делает эту роль уникальной?**

Ты станешь не просто сотрудником, а **соучредителем нашего бренда**. В мире, где каждая компания борется за внимание, мы ищем человека, который станет настоящим **лицом революции в медицинском образовании**.

**В чем будет заключаться твоя роль?**

• **Создание виральных вертикальных видео** (Reels, Клипы, Shorts) от имени Hippocrat AI
• **Активное участие в жизни комьюнити** студентов-медиков
• **Генерация креативных идей** для развития всего проекта
• **Представление бренда** на медицинских мероприятиях и конференциях

**Что мы предлагаем?**

• **Творческая свобода:** Полная свобода в создании контента и развитии личного бренда
• **Прозрачная мотивация:** Фиксированные бонусы за виральные видео + базовая зарплата
• **Карьерный трамплин:** Возможность возглавить целые направления в компании
• **Техническая поддержка:** Доступ к современному оборудованию и софту
• **Команда мечты:** Окружение амбициозных студентов, горящих своим делом

**Кому подойдет эта роль?**

• Студентам-медикам с опытом ведения соцсетей
• Креативным личностям, мечтающим о собственном блоге
• Тем, кто хочет изменить медицинское образование в России
• Людям, готовым стать лицом инноваций в медтехе

**Возможности для роста:**

• Стать **главным маркетологом** растущей медтех компании
• Развить **личный бренд** в сфере медицины и технологий  
• Получить **долю в компании** при достижении KPI
• Войти в **топ-менеджмент** будущего единорога`
  },
  {
    id: 'python-developer',
    title: 'Python разработчик',
    department: 'Разработка',
    type: 'Full-time',
    description: 'Создавай AI-решения для медицины вместе с командой, которая понимает как медицину, так и технологии.',
    fullDescription: `**Ты студент-медик и пишешь код? Мы ищем тебя, чтобы вместе изменить будущее медицины.**

**Привет! Мы — команда Hippocrat AI.**

Мы не просто создаем очередной образовательный проект. Мы строим интеллектуальную экосистему для врачей и студентов, и наш AI-ассистент — это только первый шаг.

**Почему эта возможность уникальна?**

Мы ищем **"самородка"** — человека, который понимает медицину и горит программированием. Ты станешь **ключевым техническим звеном** нашей команды и будешь принимать архитектурные решения продукта, которым пользуются тысячи студентов.

**Что делает эту роль особенной?**

• **Ты будешь у истоков:** Никакого легаси-кода, только современные решения
• **Реальное влияние:** Твои решения сразу попадают к тысячам пользователей  
• **Уникальный опыт:** Работа с LLM, AI и медицинскими данными
• **Полная свобода:** Мы не стоим над душой, ты сам определяешь как решать задачи

**Направления работы:**

• **Backend разработка:** Оптимизация Python бэкенда
• **AI интеграции:** Работа с новыми API и моделями
• **Архитектура:** Проектирование новых сервисов
• **Продуктовые решения:** Участие в определении вектора развития

**Технический стек:**

• **Основной:** Python, FastAPI, PostgreSQL
• **AI/ML:** OpenAI API, Anthropic Claude, LangChain
• **Инфраструктура:** Docker, AWS/Yandex Cloud
• **Мониторинг:** Sentry, Grafana

**Что мы ищем:**

**Обязательно:**
• Понимание веб-разработки (HTML, CSS, JS)
• Базовые концепции Python
• Умение решать проблемы и работать с документацией
• Знание Git и командной строки
• Желание изучать новые технологии

**Будет плюсом:**
• Опыт разработки на Python (боты, простые сайты)
• Понимание облачных инфраструктур
• Опыт с серверами VPS/VDS
• Знание медицинских процессов

**Что мы предлагаем:**

• **Уникальный опыт:** Работа в самой горячей сфере — AI + медицина
• **Быстрый рост:** От джуна до tech lead за год при активной работе
• **Современные инструменты:** Доступ к платным AI-ассистентам и облачным мощностям
• **Менторство:** Обучение от опытных разработчиков
• **Долю в успехе:** Опционы компании при достижении целей

**Карьерные возможности:**

• **Tech Lead** направления AI
• **CTO** растущей медтех компании  
• **Продуктовый инженер** с уникальным опытом
• **Основатель** собственного медтех стартапа`
  }
]

const CareersPage: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null)

  const toggleJobExpansion = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId)
  }

  const handleApply = () => {
    window.open('https://t.me/hippocrat_ai_support', '_blank')
  }

  return (
    <div className="min-h-screen bg-cream pt-20 pb-16">
      <Container size="xl" padding="lg">
        
        {/* Hero секция */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-coolvetica font-bold text-text-primary mb-8 leading-tight">
            Присоединяйтесь к команде будущего медицины
          </h1>
          
          <div className="prose prose-lg max-w-none font-golos-text text-text-secondary leading-relaxed space-y-6">
            <p>
              **Всем привет!** Команда Hippocrat AI растет, и мы ищем в ядро проекта людей, которые хотят создавать будущее MedTech. 
              Нам уже доверяют тысячи студентов, и мы только начинаем.
            </p>
            
            <p>
              Мы верим в то, что **создавать качественные продукты для студентов, могут только сами студенты!** 
              Именно поэтому мы ищем не просто сотрудников, а **партнеров-единомышленников**.
            </p>
            
            <p>
              Asentiq — это молодая medtech компания, которая превращает медицинские вызовы в технологичные решения. 
              Мы Apple в мире медицины в самом ее начале. **Стань частью этой истории.**
            </p>
          </div>
        </div>

        {/* Список вакансий */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-coolvetica font-bold text-text-primary mb-8 text-center">
            Открытые вакансии
          </h2>
          
          <div className="space-y-6">
            {jobPositions.map((job) => (
              <Card key={job.id} variant="elevated" padding="xl" className="transition-all duration-300">
                <div className="space-y-4">
                  
                  {/* Заголовок вакансии */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-coolvetica font-bold text-text-primary mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full font-golos-text font-medium">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-golos-text font-medium">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    
                    <Button
                      variant={expandedJob === job.id ? "secondary" : "outline"}
                      size="md"
                      onClick={() => toggleJobExpansion(job.id)}
                      className="flex items-center gap-2 min-w-[160px]"
                    >
                      {expandedJob === job.id ? 'Свернуть' : 'Узнать подробнее'}
                      <svg 
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          expandedJob === job.id ? "rotate-180" : ""
                        )}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                  </div>

                  {/* Краткое описание */}
                  <p className="text-text-secondary font-golos-text leading-relaxed">
                    {job.description}
                  </p>

                  {/* Раскрывающееся подробное описание */}
                  {expandedJob === job.id && (
                    <div className="mt-8 pt-8 border-t border-cream-dark animate-slide-down">
                      <div className="prose prose-lg max-w-none">
                        <div 
                          className="font-golos-text text-text-secondary leading-relaxed space-y-4"
                          dangerouslySetInnerHTML={{ 
                            __html: job.fullDescription
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-text-primary">$1</strong>')
                              .replace(/•\s(.*?)$/gm, '<div class="flex items-start gap-3 mb-2"><span class="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span><span>$1</span></div>')
                              .replace(/\n\n/g, '</p><p class="mb-4">')
                              .replace(/^/, '<p class="mb-4">')
                              .replace(/$/, '</p>')
                          }} 
                        />
                      </div>

                      {/* Кнопка подачи заявки */}
                      <div className="mt-8 pt-6 border-t border-cream-dark">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                          <p className="text-sm text-text-secondary font-golos-text">
                            Готовы стать частью команды? Напишите нам в Telegram!
                          </p>
                          <Button
                            variant="primary"
                            size="lg"
                            onClick={handleApply}
                            className="flex items-center gap-2 min-w-[200px]"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.61 7.56c-.12.56-.44.7-.9.44l-2.52-1.86-1.21 1.17c-.14.14-.25.25-.5.25l.18-2.51 4.62-4.18c.2-.18-.04-.28-.32-.1L8.745 13.6l-2.47-.78c-.54-.17-.55-.54.11-.8l9.65-3.72c.45-.17.84.1.7.8z"/>
                            </svg>
                            Написать в Telegram
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <Card variant="elevated" padding="xl">
            <h3 className="text-xl font-coolvetica font-bold text-text-primary mb-4">
              Не нашли подходящую вакансию?
            </h3>
            <p className="text-text-secondary font-golos-text leading-relaxed mb-6">
              Мы всегда открыты для талантливых людей! Если вы чувствуете, что можете принести пользу нашей команде, 
              напишите нам о своих навыках и интересах.
            </p>
            <Button
              variant="outline"
              size="md"
              onClick={handleApply}
              className="inline-flex items-center gap-2"
            >
              Связаться с нами
            </Button>
          </Card>
        </div>

      </Container>
    </div>
  )
}

export default CareersPage
