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
        
        {/* Основная секция продуктов */}
        <Products />
      
      <Footer />
    </main>
  )
}
