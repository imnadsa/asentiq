import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import About from '@/components/sections/About'
import Container from '@/components/ui/Container'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Отступ для фиксированного хедера */}
      <div className="pt-16 lg:pt-20">
        {/* Hero секция для страницы */}
        <section className="py-20 bg-cream">
          <Container size="xl" padding="lg">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-styrene-b font-medium mb-6">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-2" />
                О компании
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-styrene-a font-bold text-text-primary mb-6 leading-tight">
                История и миссия{' '}
                <span className="text-accent-600">Asentiq</span>
              </h1>
              
              <p className="text-xl text-text-secondary font-styrene-b max-w-3xl mx-auto leading-relaxed">
                Узнайте больше о нашей команде, ценностях и том, как мы меняем медицину с помощью технологий
              </p>
            </div>
          </Container>
        </section>
        
        <About />
      </div>
      
      <Footer />
    </main>
  )
}
