'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import { ContactForm } from '@/types'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        type: 'general'
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-32 bg-cream">
        <Container size="md" padding="lg">
          <Card variant="elevated" padding="xl" className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-coolvetica font-bold text-text-primary mb-4">
              Спасибо за обращение!
            </h2>
            
            <p className="text-text-secondary font-golos-text">
              Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
            </p>
          </Card>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-20 lg:py-32 bg-cream">
      <Container size="xl" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Левая часть - информация */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-coolvetica font-bold text-text-primary mb-6 leading-tight">
                Готовы обсудить ваш проект?
              </h1>
              
              <p className="text-lg text-text-secondary font-golos-text leading-relaxed">
                Мы всегда открыты для новых идей и сотрудничества.
              </p>
            </div>

            {/* Контактная информация */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-coolvetica font-semibold text-text-primary mb-1">Email</h3>
                  <p className="text-text-secondary font-golos-text">hello@asentic.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-coolvetica font-semibold text-text-primary mb-1">Время ответа</h3>
                  <p className="text-text-secondary font-golos-text">В течение 24 часов</p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть - форма */}
          <Card variant="elevated" padding="xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Тип обращения */}
              <div>
                <label htmlFor="type" className="block text-sm font-coolvetica font-semibold text-text-primary mb-2">
                  Тип обращения
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-cream-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-golos-text transition-colors"
                  required
                >
                  <option value="general">Общие вопросы</option>
                  <option value="partnership">Партнерство</option>
                  <option value="investor">Инвестиции</option>
                  <option value="career">Карьера</option>
                </select>
              </div>

              {/* Имя */}
              <div>
                <label htmlFor="name" className="block text-sm font-coolvetica font-semibold text-text-primary mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-cream-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-golos-text transition-colors"
                  placeholder="Введите ваше имя"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-coolvetica font-semibold text-text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-cream-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-golos-text transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Компания */}
              <div>
                <label htmlFor="company" className="block text-sm font-coolvetica font-semibold text-text-primary mb-2">
                  Компания (необязательно)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-cream-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-golos-text transition-colors"
                  placeholder="Название вашей компании"
                />
              </div>

              {/* Сообщение */}
              <div>
                <label htmlFor="message" className="block text-sm font-coolvetica font-semibold text-text-primary mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-cream-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-golos-text transition-colors resize-none"
                  placeholder="Расскажите подробнее о вашем проекте или вопросе..."
                  required
                />
              </div>

              {/* Кнопка отправки */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправляем...' : 'Отправить сообщение'}
              </Button>

              {/* Примечание о конфиденциальности */}
              <p className="text-xs text-muted font-golos-text">
                Отправляя форму, вы соглашаетесь с нашей{' '}
                <a href="/privacy" className="text-accent-600 hover:text-accent-700 underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Contact
