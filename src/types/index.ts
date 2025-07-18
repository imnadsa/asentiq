// Глобальные типы проекта

export interface Product {
  id: string
  name: string
  description: string
  status: 'active' | 'development' | 'planned'
  users?: number
  launchDate?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar?: string
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  message: string
  type: 'general' | 'investor' | 'partnership' | 'career'
}
