import React, { Suspense } from 'react'
import AiTrendsArticles from './components/AiTrendsArticles'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Ai Trends',
  description: 'AI Trends - Latest Innovations in Business AI | Nomad Vision',
}


export default function AiTrendsPage() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="loading loading-bars loading-lg"></div>
          </div>
        }
      >
        <AiTrendsArticles/>
      </Suspense>
    </div>
  )
}
