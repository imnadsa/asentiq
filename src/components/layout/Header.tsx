import type { Metadata } from 'next'
import { styreneA, styreneB, tiempoText } from '@/lib/fonts'
import './global.css'

export const metadata: Metadata = {
  title: 'Asentic - MedTech Innovation',
  description: 'Развиваем медицинские технологии и AI для улучшения здравоохранения',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${styreneA.variable} ${styreneB.variable} ${tiempoText.variable}`}>
      <body className="font-styrene-a antialiased">
        {children}
      </body>
    </html>
  )
}
