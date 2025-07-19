import localFont from 'next/font/local'

// Manrope для заголовков - АБСОЛЮТНЫЕ ПУТИ
export const manrope = localFont({
  src: [
    {
      path: '/fonts/Manrope Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Manrope Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/Manrope Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-manrope',
  display: 'swap',
})

// Golos Text для основного текста - АБСОЛЮТНЫЕ ПУТИ
export const golosText = localFont({
  src: [
    {
      path: '/fonts/Golos Text Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Golos Text Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/Golos Text Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-golos-text',
  display: 'swap',
})

// Используем Golos Text и для акцентов
export const tiempoText = golosText
