import type { Metadata } from 'next'
import { inter } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Corporación Afar',
  description: 'Landing page de corporación en ayuda a las familias en entorno de violencia intrafamiliar',
  robots: 'noindex, nofollow',
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
