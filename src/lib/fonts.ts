import localFont from 'next/font/local'

// Manrope для заголовков (замена Styrene A)
export const manrope = localFont({
  src: [
    {
      path: './../../public/fonts/Manrope Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/fonts/Manrope Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../public/fonts/Manrope Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-manrope',
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
