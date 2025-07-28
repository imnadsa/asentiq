import React from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { PRODUCTS } from '@/lib/constants'
import { formatNumber } from '@/lib/utils'

const Products: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <Container size="xl" padding="lg">
        
        {/* Заголовок секции */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-coolvetica font-bold text-text-primary mb-6 leading-tight">
            Медицинские решения, которыми мы{' '}
            <span className="text-accent-600">гордимся!</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-text-secondary font-golos-text max-w-3xl mx-auto leading-relaxed">
            Команда энтузиастов, создающая медицинские продукты, которые делают медицинское образование и практику более эффективными и доступными.
          </p>
        </div>

        {/* Сетка продуктов */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Hippocrat AI */}
          <div 
            className="group relative overflow-hidden rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{backgroundColor: '#e2dacb'}}
          >
            {/* Статус бейдж */}
            <div className="absolute top-6 right-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-golos-text font-medium bg-green-100 text-green-700">
                <div className="w-1.5 h-1.5 rounded-full mr-2 bg-green-500" />
                Активен
              </div>
            </div>

            {/* Иконка продукта */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="74" fill="none" viewBox="0 0 1011 1167">
                <path stroke="#7D95F8" strokeLinecap="round" strokeWidth="55" d="M623.462 1138.72v-77.6c0-20.29 15.602-37.05 35.518-38.13l149.64-7.14c30.135-1.64 55.291-23.971 60.978-54.13l6.87-136.081c12.546-66.498 117.166-26.459 105.648-100.731-15.826-65.907-62.65-131.2-74.294-192.366-25.816-135.596-9.369-300.612-144.831-416.877-82.785-71.053-183.32-89.865-289.226-87.467-176.66 3.995-341.875 80.324-415.669 253.439-72.032 168.904-.016 309.177 62.051 461.305 47.592 116.644 18.501 395.778 18.501 395.778"/>
                <path fill="#7D95F8" fillRule="evenodd" d="M142.134 467.193C125.422 489.956 117.6 523.038 124 553.978c5.689 27.034 31.29 88.562 143.296 103.145v36.99c0 16.009 13.156 29.521 29.512 29.521H356.9c10.667 0 23.112-8.536 27.023-18.495l34.491-81.449c24.89 1.422 53.691-7.47 74.314-28.454 29.868 16.005 66.849 18.85 99.561 5.691 8.534-3.557 16.712-7.825 23.468-13.516 3.556-2.49 7.111-5.335 9.6-8.536.712-.356 1.067-.356.712-.712 6.044-5.69 11.022-12.092 14.934-19.206 2.489-3.912 4.622-8.18 6.4-12.449 1.067.36 2.133.712 3.2.712 12.445 3.557 25.957 5.335 39.469 5.335 27.379 0 55.469-6.754 78.581-20.626 4.978-2.845 9.601-6.405 13.867-9.606 27.024-21.341 45.869-50.862 53.336-85.006 9.245-43.037 0-88.207-25.957-127.33-.711-1.067-1.777-1.778-2.844-2.489.355-45.527-22.401-92.831-60.447-121.641-24.89-18.85-54.047-27.742-84.627-28.098-45.513-27.031-136.896-79.315-253.879-42.681-18.49-7.825-38.402-11.026-58.669-9.247-45.513 3.912-86.049 32.01-103.827 71.49-1.423 3.557-1.778 7.114-3.2 10.67-38.047 14.939-67.915 45.882-85.338 92.12-31.29 32.722-47.291 68.999-46.58 104.922.356 28.809 11.023 56.196 31.646 82.16Z" clipRule="evenodd" opacity=".4"/>
                <path stroke="#7D95F8" strokeLinecap="round" strokeWidth="12" d="m425.03 429.02 218.134-38.572M425.03 429.02l101.086 57.859M425.03 429.02 297.342 570.674M425.03 429.02l-159.61-48.548m159.61 48.548-75.15-186.211m75.15 186.211 117.712-197.517" opacity=".59"/>
                <circle cx="542.742" cy="222.192" r="39.903" fill="#7D95F8"/>
                <circle cx="655.799" cy="384.463" r="39.903" fill="#7D95F8"/>
                <circle cx="534.762" cy="490.869" r="39.903" fill="#7D95F8"/>
                <circle cx="292.687" cy="570.674" r="39.903" fill="#7D95F8"/>
                <circle cx="266.085" cy="373.822" r="39.903" fill="#7D95F8"/>
                <circle cx="344.56" cy="231.503" r="39.903" fill="#7D95F8"/>
                <circle cx="424.365" cy="428.01" r="39.903" fill="#7D95F8"/>
              </svg>
            </div>

            <h3 className="text-2xl font-coolvetica font-bold text-text-primary mb-3">
              Hippocrat AI
            </h3>
            
            <p className="text-lg text-text-secondary font-golos-text mb-6">
              ИИ-помощник для студентов медиков
            </p>

            {/* Метрики */}
            <div className="mb-6">
              <div className="flex items-center space-x-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-coolvetica font-bold text-text-primary">
                    1.5k
                  </span>
                  <span className="text-sm text-text-secondary font-golos-text">
                    Активных пользователей
                  </span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-2xl font-coolvetica font-bold text-text-primary">
                    2025
                  </span>
                  <span className="text-sm text-text-secondary font-golos-text">
                    Год запуска
                  </span>
                </div>
              </div>
            </div>

            {/* Особенности */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-text-secondary font-golos-text">
                <div className="w-2 h-2 bg-black rounded-full mr-3" />
                ИИ-ассистент для студентов медиков
              </div>
              <div className="flex items-center text-text-secondary font-golos-text">
                <div className="w-2 h-2 bg-black rounded-full mr-3" />
                Персонализированное обучение
              </div>
              <div className="flex items-center text-text-secondary font-golos-text">
                <div className="w-2 h-2 bg-black rounded-full mr-3" />
                24/7 поддержка и консультации
              </div>
            </div>

            <Button 
              variant="primary" 
              size="md"
              className="w-full group-hover:scale-105 transition-transform"
              href="/products#hippocrat-ai"
            >
              Попробовать
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>

            {/* Декоративный градиент */}
            <div className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{backgroundColor: '#d4cbb8'}} />
          </div>

          {/* Hippocrat Digital */}
          <div 
            className="group relative overflow-hidden rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{backgroundColor: '#cbcadb'}}
          >
            {/* Статус бейдж */}
            <div className="absolute top-6 right-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-golos-text font-medium bg-green-100 text-green-700">
                <div className="w-1.5 h-1.5 rounded-full mr-2 bg-green-500" />
                Активен
              </div>
            </div>

            {/* Иконка продукта */}
            <div className="w-28 h-28 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="112" height="82" fill="none" viewBox="0 0 1737 1208">
                <path stroke="#7D95F8" strokeLinecap="round" strokeWidth="55" d="M623.462 1162.83v-79.25c0-20.72 15.602-37.83 35.518-38.93l149.64-7.29c30.135-1.68 55.291-24.48 60.978-55.283l6.87-138.965c12.546-67.906 117.166-27.019 105.648-102.865-15.826-67.303-62.65-133.98-74.294-196.442-25.816-138.47-9.369-306.983-144.831-425.713-82.785-72.558-183.32-91.769-289.226-89.32-176.66 4.08-341.875 82.027-415.669 258.81-72.032 172.484-.016 315.73 62.051 471.082 47.592 119.115 18.501 404.166 18.501 404.166"/>
                <path fill="#7D95F8" fillRule="evenodd" d="M145.41 466.982c-16.232 22.104-23.83 54.226-17.613 84.268 5.525 26.251 30.391 85.995 139.18 100.155v35.917c0 15.545 12.778 28.665 28.665 28.665h58.366c10.36 0 22.448-8.288 26.247-17.958l33.5-79.088c24.175 1.382 52.149-7.252 72.18-27.629 29.011 15.541 64.929 18.304 96.702 5.526 8.289-3.454 16.232-7.598 22.794-13.124 3.453-2.417 6.907-5.18 9.324-8.288.691-.346 1.037-.346.691-.691 5.871-5.526 10.706-11.742 14.505-18.649 2.418-3.799 4.49-7.944 6.217-12.088 1.036.349 2.072.691 3.108.691 12.088 3.453 25.211 5.18 38.335 5.18 26.593 0 53.876-6.558 76.325-20.027 4.835-2.763 9.324-6.22 13.469-9.329 26.247-20.721 44.551-49.386 51.804-82.541 8.979-41.788 0-85.649-25.212-123.637-.69-1.036-1.726-1.727-2.762-2.418.345-44.206-21.758-90.139-58.712-118.113-24.175-18.304-52.494-26.938-82.195-27.283-44.207-26.248-132.965-77.016-246.588-41.444-17.959-7.598-37.299-10.706-56.985-8.979-44.206 3.799-83.577 31.082-100.845 69.417-1.382 3.454-1.727 6.908-3.108 10.361-36.954 14.505-65.964 44.552-82.887 89.449-30.392 31.773-45.933 66.998-45.242 101.879.345 27.974 10.706 54.567 30.737 79.778Z" clipRule="evenodd" opacity=".4"/>
                <path fill="#7D95F8" fillRule="evenodd" d="M490.594 365.464c-6.7 0-13.676-.829-20.86-2.625-13.883-3.523-22.275-17.58-18.787-31.464 3.488-13.918 17.786-22.241 31.462-18.787 15.092 4.006 25.798-3.972 32.36-11.604-10.706-15.507-16.542-35.227-16.542-57.883 0-14.298 11.604-25.902 25.902-25.902 14.298 0 25.902 11.604 25.902 25.902 0 20.895 7.114 33.846 21.792 39.44 15.921 6.113 33.328 1.036 37.057-2.832 7.564-11.914 23.278-15.748 35.4-8.288 12.226 7.46 16.094 23.381 8.599 35.606-11.535 18.892-37.333 30.185-64.858 30.185-8.876 0-17.959-1.209-26.766-3.661-1.588-.449-3.004-1.14-4.524-1.658-15.23 19.066-38.335 33.571-66.137 33.571ZM214.002 354.678c3.039-13.951 16.784-22.62 30.841-19.822l44.689 9.67c13.953 3.038 22.829 16.818 19.824 30.839-2.625 12.088-13.4 20.377-25.315 20.377-1.796 0-3.661-.173-5.526-.553l-44.689-9.67c-13.953-3.039-22.829-16.854-19.824-30.841ZM339.955 415.469c-17.061-54.878 3.868-98.671 29.804-121.154 10.776-9.29 27.146-8.185 36.574 2.625 9.325 10.81 8.15 27.18-2.659 36.573-7.011 6.01-26.386 27.078-14.575 65.655 44.448-5.319 89.069 10.913 108.755 41.719 7.736 12.053 4.178 28.043-7.875 35.745-12.156 7.736-28.078 4.144-35.779-7.84-8.979-14.16-40.338-24.106-70.937-15.852-21.516 5.768-47.522 21.758-49.421 65.135-.587 13.918-12.053 24.797-25.833 24.797-.415 0-.794 0-1.14-.034-14.298-.588-25.384-12.675-24.762-26.973 1.934-44.862 23.139-80.435 57.848-100.396ZM605.437 583.725c3.453-2.418 6.907-5.181 9.325-8.289 0-.345.345-.345.345-.691h.345c5.871-5.525 10.707-11.742 14.505-18.649 2.418-3.799 4.49-7.943 6.217-12.088 1.036.346 2.072.691 3.108.691-27.283-20.722-40.062-54.222-37.989-75.289 1.381-14.505-8.98-26.938-23.14-28.319-14.159-2.072-26.938 8.979-28.319 23.139-4.49 41.789 18.649 90.139 55.603 119.495Z" clipRule="evenodd"/>
                <path stroke="#7D95F8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" d="M1048 919.13h224.46c34.53 0 69.07 51.891 103.6 51.891 29.85 0 85.49-25.843 111.19 22.987 8.12 15.432-2.72 33.062-18.81 39.752-37.26 15.47-78.77 36.5-92.38 41.04l-103.6-34.59m224.46-34.59 158.03-63.326a58.877 58.877 0 0 1 30.25-3.633c36.15 5.173 46.36 52.607 15.55 72.249l-263.96 168.27a68.984 68.984 0 0 1-56.05 8.16L1048 1092.1m241.73-415.129v86.485c0 47.765 38.65 86.486 86.33 86.486s86.33-38.721 86.33-86.486v-86.485m-172.66 0v-86.486c0-47.764 38.65-86.485 86.33-86.485s86.33 38.721 86.33 86.485v86.486m-172.66 0h172.66"/>
              </svg>
            </div>

            <h3 className="text-2xl font-coolvetica font-bold text-text-primary mb-3">
              Hippocrat Digital
            </h3>
            
            <p className="text-lg text-text-secondary font-golos-text mb-6">
              Цифровые решения для медицины
            </p>

            {/* Особенности */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-text-secondary font-golos-text">
                <div className="w-2 h-2 bg-black rounded-full mr-3" />
                Команда Экспертов
              </div>
              <div className="flex items-center text-text-secondary font-golos-text">
                <div className="w-2 h-2 bg-black rounded-full mr-3" />
                Цифровизация медицинских процессов
              </div>
              <div className="flex items-center text-text-secondary font-golos-text">
                <div className="w-2 h-2 bg-black rounded-full mr-3" />
                Помогаем приводить пациентов из интернета
              </div>
            </div>

            <Button 
              variant="primary" 
              size="md"
              className="w-full group-hover:scale-105 transition-transform"
              href="/products#hippocrat-digital"
            >
              Узнать больше
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>

            {/* Декоративный градиент */}
            <div className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{backgroundColor: '#b8b7c6'}} />
          </div>
        </div>

        {/* CTA секция */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="rounded-3xl p-8 lg:p-12" style={{backgroundColor: '#bcd1ca'}}>
            <h3 className="text-2xl lg:text-3xl font-coolvetica font-bold text-text-primary mb-4">
              Это еще не все!
            </h3>
            <p className="text-lg text-text-secondary font-golos-text mb-8 max-w-2xl mx-auto">
              Команда Asentiq каждый день работает над созданием новый MedTech решений для Российского Здравоохранения
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                href="/contact"
              >
                Связаться с нами
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/products"
              >
                Жду обновлений
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Products
