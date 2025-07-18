import localFont from 'next/font/local'

export const styreneA = localFont({
  src: [
    {
      path: '../../public/fonts/Styrene A Regular Trial.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Styrene A Medium Trial.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Styrene A Bold Trial.woff2',
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
      path: '../../public/fonts/Styrene B Regular Trial.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Styrene B Medium Trial.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Styrene B Bold Trial.woff2',
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
      path: '../../public/fonts/Test Tiempos Text Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Test Tiempos Text Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Test Tiempos Text Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tiempo',
  display: 'swap',
})
