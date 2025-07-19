import React from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { SITE_CONFIG } from '@/lib/constants'

const navigation = {
  product: [
    { name: 'Hippocrat AI', href: '/products#hippocrat-ai' },
    { name: 'Digital-Агенство', href: '/products#hippocrat-digital' },
    { name: 'Тарифы', href: '/pricing' },
    { name: 'API документация', href: '/docs' },
    { name: 'Демо', href: '/demo' },
  ],
  company: [
    { name: 'О нас', href: '/about' },
    { name: 'Наша команда', href: '/team' },
    { name: 'Карьера', href: '/careers' },
    { name: 'Новости', href: '/news' },
    { name: 'Блог', href: '/blog' },
  ],
  solutions: [
    { name: 'Для студентов', href: '/solutions/students' },
    { name: 'Для клиник', href: '/solutions/clinics' },
    { name: 'Для вузов', href: '/solutions/universities' },
    { name: 'Партнерство', href: '/partners' },
    { name: 'Интеграции', href: '/integrations' },
  ],
  support: [
    { name: 'Центр поддержки', href: '/support' },
    { name: 'Документация', href: '/docs' },
    { name: 'Статус сервисов', href: '/status' },
    { name: 'Обратная связь', href: '/feedback' },
    { name: 'Сообщество', href: '/community' },
  ],
  legal: [
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'Условия использования', href: '/terms' },
    { name: 'Политика cookies', href: '/cookies' },
    { name: 'Лицензии', href: '/licenses' },
  ],
  social: [
    {
      name: 'YouTube',
      href: 'https://youtube.com/@asentic',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: `https://linkedin.com/${SITE_CONFIG.social.linkedin}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: `https://twitter.com/${SITE_CONFIG.social.twitter}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ],
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <Container size="xl" padding="lg">
        {/* Основной контент футера */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            
            {/* Логотип и описание */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-manrope font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-manrope font-semibold text-white">
                  Asentic
                </span>
              </Link>
            </div>

            {/* Продукты */}
            <div>
              <h3 className="text-sm font-manrope font-semibold text-white uppercase tracking-wider mb-4">
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
              <h3 className="text-sm font-manrope font-semibold text-white uppercase tracking-wider mb-4">
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
              <h3 className="text-sm font-manrope font-semibold text-white uppercase tracking-wider mb-4">
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

            {/* Поддержка */}
            <div>
              <h3 className="text-sm font-manrope font-semibold text-white uppercase tracking-wider mb-4">
                Поддержка
              </h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
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

            {/* Правовая информация */}
            <div>
              <h3 className="text-sm font-manrope font-semibold text-white uppercase tracking-wider mb-4">
                Правовая информация
              </h3>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
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
          </div>
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
