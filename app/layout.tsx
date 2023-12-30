import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nomad Vision',
  description: 'nomadvision.net: Gateway to AI and Data-Driven Business Innovation. Explore the latest in AI trends, data analytics, and industry insights with networking community. Empower your business with cutting-edge technologies and expert analysis. Visit us.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
      </meta>
      <body className={inter.className}>
        <Navbar/>
          <div id="root" className = "dark">{children}</div>
        <Footer/>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  )
}
