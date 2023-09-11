import Header from '@/components/sections/Header'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/sections/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cartzilla Ecommerce Store',
  description: 'Order your favorite product at any time and we will deliver them right to where you are.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Header />


        {children}


        <Footer />


      </body>
    </html>
  )
}
