import localFont from 'next/font/local'

// Coolvetica для заголовков
export const coolvetica = localFont({
  src: [
    {
      path: './../../public/fonts/Coolvetica Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/fonts/Coolvetica Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-coolvetica',
  display: 'swap',
})

// Golos Text для основного текста (замена Styrene B)
export const golosText = localFont({
  src: [
    {
      path: './../../public/fonts/Golos Text Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/fonts/Golos Text Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../public/fonts/Golos Text Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-golos-text',
  display: 'swap',
})

// Используем Golos Text и для акцентов (можно позже добавить отдельный serif)
export const tiempoText = golosText
