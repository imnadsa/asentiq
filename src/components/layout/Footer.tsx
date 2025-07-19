import React from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { SITE_CONFIG } from '@/lib/constants'

const navigation = {
  main: [
    { name: 'Главная', href: '/' },
    { name: 'Продукты', href: '/products' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contact' },
  ],
  products: [
    { name: 'Hippocrat AI', href: '/products#hippocrat-ai' },
    { name: 'Hippocrat Digital', href: '/products#hippocrat-digital' },
  ],
  legal: [
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'Условия использования', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
  ],
  social: [
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
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/asentic',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
      ),
    },
  ],
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-cream-dark">
      <Container size="xl" padding="lg">
        {/* Основной контент футера */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Логотип и описание */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-styrene-a font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-styrene-a font-semibold text-text-primary">
                  Asentic
                </span>
              </Link>
              
              <p className="text-text-secondary font-styrene-b mb-6 max-w-md leading-relaxed">
                Превращаем медицинские вызовы в технологические решения. 
                Разрабатываем ИИ-продукты для улучшения здравоохранения.
              </p>
              
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-500 transition-colors duration-200"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Навигация */}
            <div>
              <h3 className="text-sm font-styrene-a font-semibold text-text-primary uppercase tracking-wide mb-4">
                Навигация
              </h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-text-secondary hover:text-text-primary font-styrene-b transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Продукты */}
            <div>
              <h3 className="text-sm font-styrene-a font-semibold text-text-primary uppercase tracking-wide mb-4">
                Продукты
              </h3>
              <ul className="space-y-3">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-text-secondary hover:text-text-primary font-styrene-b transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Контактная информация */}
              <div className="mt-6">
                <h4 className="text-sm font-styrene-a font-semibold text-text-primary uppercase tracking-wide mb-3">
                  Контакты
                </h4>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-text-secondary hover:text-accent-500 font-styrene-b transition-colors duration-200"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="py-6 border-t border-cream-dark">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Копирайт */}
            <div className="text-sm text-text-secondary font-styrene-b">
              © {currentYear} {SITE_CONFIG.name}. Все права защищены.
            </div>

            {/* Правовые ссылки */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-text-primary font-styrene-b transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
