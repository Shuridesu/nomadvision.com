import React, { Suspense } from 'react'
import AiTrendsArticles from './components/AiTrendsArticles'
import type { Metadata } from 'next'
import Loading from '@/components/Loading'



export const metadata: Metadata = {
  title: 'Ai Trends',
  description: 'AI Trends - Latest Innovations in Business AI | Nomad Vision',
}


export default function AiTrendsPage() {
  return (
    <div>
      <Suspense
        fallback={
            <Loading/>
        }
      >
        <AiTrendsArticles/>
      </Suspense>
    </div>
  )
}
