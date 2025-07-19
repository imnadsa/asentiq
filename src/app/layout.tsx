import type { Metadata } from 'next'
import { manrope, golosText, tiempoText } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Asentic - Медицинские Технологии',
  description: 'Технологичный медицинский стартап разрабатывающий технологичные и инженерные решения для здравоохранения',
  keywords: ['медтех', 'AI', 'медицина', 'технологии', 'стартап'],
  authors: [{ name: 'Asentic Team' }],
  creator: 'Asentic',
  publisher: 'Asentic',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192x192.png',
  },
  openGraph: {
    title: 'Asentic - МедТех инновации',
    description: 'Технологичный медицинский стартап разрабатывающий технологичные и инженерные решения для здравоохранения',
    url: 'https://asentic.com',
    siteName: 'Asentic',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="ru" 
      className={`${manrope.variable} ${golosText.variable} ${tiempoText.variable}`}
    >
      <body className="font-golos-text antialiased">
        {children}
      </body>
    </html>
  )
}
