import { inter } from './fonts'
import './globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
