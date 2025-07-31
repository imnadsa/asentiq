export const SITE_CONFIG = {
  name: 'Asentiq',
  title: 'Asentiq - MedTech Innovation',
  description: 'Развиваем медицинские технологии и AI для улучшения здравоохранения',
  url: 'https://asentic.com',
  email: 'hello@asentic.com',
  social: {
    twitter: '@asentic',
    linkedin: 'company/asentic',
  }
} as const

export const PRODUCTS = [
  {
    id: 'hippocrat-ai',
    name: 'Hippocrat AI',
    description: 'ИИ-помощник для студентов медиков',
    status: 'active' as const,
    users: 1500,
    launchDate: '2025-04'
  },
  {
    id: 'hippocrat-digital',
    name: 'Hippocrat Digital',
    description: 'Цифровые решения для медицины',
    status: 'development' as const,
  }
] as const
