import localFont from 'next/font/local'

export const styreneA = localFont({
  src: [
    {
      path: '../../public/fonts/styrene-a-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/styrene-a-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/styrene-a-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-styrene-a',
  display: 'swap',
})

export const styreneB = localFont({
  src: [
    {
      path: '../../public/fonts/styrene-b-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/styrene-b-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/styrene-b-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-styrene-b',
  display: 'swap',
})

export const tiempoText = localFont({
  src: [
    {
      path: '../../public/fonts/tiempo-text-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/tiempo-text-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/tiempo-text-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tiempo',
  display: 'swap',
})
