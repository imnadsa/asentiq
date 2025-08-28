'use client'

import React from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'

const footerSections = [
  {
    title: 'Продукты',
    links: [
      { name: 'Hippocrat AI', href: '/products#hippocrat-ai' },
      { name: 'Digital-Агенство', href: '/products#hippocrat-digital' },
      { name: 'Все продукты', href: '/products' },
    ]
  },
  {
    title: 'Компания',
    links: [
      { name: 'О нас', href: '/about' },
      { name: 'Вакансии', href: '/careers' },
      { name: 'Новости', href: '#' },
    ]
  },
  {
    title: 'Поддержка',
    links: [
      { name: 'Контакты', href: '/contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Документация', href: '#' },
    ]
  },
  {
    title: 'Ресурсы',
    links: [
      { name: 'Блог', href: '#' },
      { name: 'Исследования', href: '#' },
      { name: 'API', href: '#' },
    ]
  },
  {
    title: 'Безопасность',
    links: [
      { name: 'Конфиденциальность', href: '#' },
      { name: 'Условия использования', href: '#' },
      { name: 'Безопасность', href: '#' },
    ]
  },
  {
    title: 'Сообщество',
    links: [
      { name: 'GitHub', href: '#' },
      { name: 'Telegram', href: 'https://t.me/hippocrat_ai_support' },
      { name: 'Email', href: 'mailto:hello@asentiq.com' },
    ]
  }
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container size="xl" padding="lg">
        
        {/* Основной контент футера */}
        <div className="py-16 lg:py-20">
          
          {/* Логотип и описание */}
          <div className="mb-12 lg:mb-16">
            <div className="flex items-center mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="50" 
                fill="none" 
                viewBox="0 0 891 1109"
                className="mr-4"
              >
                <path 
                  stroke="#fff" 
                  strokeLinecap="round" 
                  strokeWidth="42" 
                  d="M540.206 1087.31v-72.69c0-19.007 14.312-34.701 32.581-35.714l137.26-6.686c27.643-1.539 50.718-22.457 55.934-50.708l6.303-127.469c11.508-62.289 107.473-24.784 96.908-94.356-14.517-61.736-57.467-122.897-68.148-180.192-23.681-127.016-8.595-281.589-132.851-390.497-75.936-66.556-168.155-84.178-265.3-81.931-162.046 3.742-313.594 75.241-381.284 237.4"
                />
                <path 
                  fill="#fff" 
                  fillRule="evenodd" 
                  d="M103.975 440.001C88.681 460.827 81.522 491.093 87.38 519.4c5.206 24.734 28.635 81.026 131.138 94.367v33.843c0 14.646 12.04 27.008 27.009 27.008h54.993c9.763 0 21.152-7.809 24.731-16.921l31.565-74.518c22.778 1.302 49.136-6.833 68.009-26.032 27.334 14.643 61.177 17.246 91.115 5.206 7.809-3.254 15.294-7.159 21.476-12.365 3.254-2.278 6.508-4.881 8.786-7.81.651-.325.977-.325.651-.651 5.532-5.206 10.088-11.063 13.667-17.571 2.278-3.58 4.23-7.485 5.857-11.39.977.329 1.953.651 2.929.651 11.389 3.254 23.755 4.881 36.12 4.881 25.056 0 50.763-6.179 71.915-18.87 4.555-2.603 8.786-5.861 12.691-8.789 24.73-19.525 41.977-46.533 48.81-77.772 8.461-39.374 0-80.701-23.754-116.494-.651-.976-1.627-1.627-2.603-2.278.325-41.652-20.501-84.931-55.319-111.288-22.779-17.247-49.462-25.382-77.447-25.708-41.652-24.73-125.282-72.565-232.34-39.048-16.921-7.159-35.144-10.088-53.692-8.461-41.652 3.58-78.748 29.287-95.019 65.407-1.301 3.254-1.627 6.508-2.928 9.762-34.819 13.667-62.153 41.977-78.098 84.28-28.635 29.937-43.278 63.127-42.628 95.993.326 26.358 10.088 51.414 28.961 75.169Z" 
                  clipRule="evenodd" 
                  opacity=".4"
                />
                <path 
                  fill="#fff" 
                  fillRule="evenodd" 
                  d="M429.214 344.347c-6.313 0-12.886-.781-19.654-2.473-13.082-3.319-20.989-16.564-17.702-29.645 3.286-13.114 16.758-20.957 29.644-17.703 14.22 3.775 24.308-3.742 30.491-10.933-10.088-14.611-15.587-33.192-15.587-54.538 0-13.472 10.933-24.406 24.405-24.406 13.472 0 24.406 10.934 24.406 24.406 0 19.687 6.703 31.89 20.533 37.161 15.001 5.76 31.402.976 34.916-2.668 7.126-11.227 21.932-14.839 33.354-7.81 11.519 7.029 15.164 22.03 8.103 33.549-10.869 17.8-35.177 28.441-61.112 28.441a94.418 94.418 0 0 1-25.218-3.449c-1.497-.423-2.831-1.074-4.263-1.562-14.351 17.963-36.121 31.63-62.316 31.63ZM168.603 334.185c2.863-13.145 15.815-21.313 29.059-18.677l42.107 9.111c13.146 2.863 21.509 15.847 18.678 29.058-2.473 11.389-12.625 19.199-23.852 19.199a26.15 26.15 0 0 1-5.206-.521l-42.108-9.111c-13.146-2.863-21.509-15.88-18.678-29.059ZM287.278 391.463c-16.075-51.707 3.645-92.969 28.083-114.153 10.153-8.754 25.577-7.712 34.46 2.473 8.786 10.185 7.68 25.609-2.505 34.46-6.606 5.662-24.861 25.513-13.732 61.861 41.879-5.011 83.922 10.283 102.47 39.309 7.289 11.357 3.937 26.423-7.419 33.679-11.455 7.29-26.456 3.905-33.712-7.386-8.461-13.342-38.008-22.714-66.839-14.936-20.272 5.434-44.775 20.5-46.565 61.371-.553 13.114-11.357 23.364-24.341 23.364-.39 0-.748 0-1.073-.032-13.472-.553-23.918-11.943-23.332-25.414 1.822-42.271 21.802-75.787 54.505-94.596ZM537.421 549.997c3.254-2.278 6.508-4.881 8.786-7.809 0-.326.325-.326.325-.651h.326c5.531-5.207 10.087-11.064 13.667-17.572 2.277-3.58 4.23-7.485 5.857-11.389.976.325 1.952.65 2.929.65-25.708-19.524-37.748-51.088-35.795-70.938 1.302-13.667-8.461-25.382-21.802-26.683-13.342-1.953-25.382 8.46-26.684 21.802-4.23 39.374 17.572 84.931 52.391 112.59Z" 
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-2xl font-coolvetica font-bold text-white">
                ASENTIQ
              </span>
            </div>
            <p className="text-gray-400 font-golos-text text-lg max-w-md leading-relaxed">
              Превращаем медицинские вызовы в технологичные решения. 
              Создаем будущее медицинского образования и практики.
            </p>
          </div>

          {/* Сетка ссылок */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-coolvetica font-semibold text-white text-sm uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 font-golos-text text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm font-golos-text text-center lg:text-left">
              © 2025 Asentiq. Все права защищены.
            </div>

            {/* Социальные сети */}
            <div className="flex items-center space-x-6">
              <Link
                href="https://t.me/hippocrat_ai_support"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.61 7.56c-.12.56-.44.7-.9.44l-2.52-1.86-1.21 1.17c-.14.14-.25.25-.5.25l.18-2.51 4.62-4.18c.2-.18-.04-.28-.32-.1L8.745 13.6l-2.47-.78c-.54-.17-.55-.54.11-.8l9.65-3.72c.45-.17.84.1.7.8z"/>
                </svg>
              </Link>
              
              <Link
                href="mailto:hello@asentiq.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </Container>
    </footer>
  )
}

export default Footer
