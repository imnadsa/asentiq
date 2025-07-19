import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import About from '@/components/sections/About'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero секция */}
      <Hero />
      
      {/* Продукты */}
      <section id="products">
        <Products />
      </section>
      
      {/* О нас */}
      <About />
      
      <Footer />
    </main>
  )
}
