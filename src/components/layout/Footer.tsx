import React from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { SITE_CONFIG } from '@/lib/constants'

const navigation = {
  product: [
    { name: 'Hippocrat AI', href: '/products#hippocrat-ai' },
    { name: 'Digital-Агенство', href: '/products#hippocrat-digital' },
  ],
  company: [
    { name: 'О нас', href: '/about' },
  ],
  solutions: [
    { name: 'Для студентов', href: '/solutions/students' },
    { name: 'Для клиник', href: '/solutions/clinics' },
  ],
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white" style={{backgroundColor: '#141413'}}>
      <Container size="xl" padding="lg">
        {/* Основной контент футера */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            
            {/* Логотип и описание */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-coolvetica font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-coolvetica font-semibold text-white">
                  Asentiq
                </span>
              </Link>
            </div>

            {/* Продукты */}
            <div>
              <h3 className="text-sm font-coolvetica font-semibold text-white uppercase tracking-wider mb-4">
                Продукты
              </h3>
              <ul className="space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white font-golos-text text-sm transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Решения */}
            <div>
              <h3 className="text-sm font-coolvetica font-semibold text-white uppercase tracking-wider mb-4">
                Решения
              </h3>
              <ul className="space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white font-golos-text text-sm transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Компания */}
            <div>
              <h3 className="text-sm font-coolvetica font-semibold text-white uppercase tracking-wider mb-4">
                Компания
              </h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white font-golos-text text-sm transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


        {/* Нижняя часть */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Копирайт */}
            <div className="text-sm text-gray-400 font-golos-text">
              © {currentYear} {SITE_CONFIG.name}. Все права защищены.
            </div>

            {/* Социальные сети */}
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
