import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'سنگ,کاغذ,قیچی',
  description: 'بازی سنگ کاغذ قیچی با next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-vazir'>{children}</body>
    </html>
  )
}
