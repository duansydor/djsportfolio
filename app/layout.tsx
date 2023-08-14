import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Duan Josias Sydor',
  description: 'Portfolio webdesigner - guarapuava 2023',
}

export default function RootLayout({
  children,
}: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header

        />
        {children}
      </body>
    </html>
  )
}
