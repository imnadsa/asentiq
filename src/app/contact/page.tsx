import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Contact from '@/components/sections/Contact'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Отступ для фиксированного хедера */}
      <div className="pt-16 lg:pt-20">
        <Contact />
      </div>
      
      <Footer />
    </main>
  )
}
