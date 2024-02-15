import React, { Suspense } from 'react'
import IndustryAnalytics from './components/IndustryAnalytics'
import type { Metadata } from 'next'
import Loading from '@/components/Loading'

export const metadata: Metadata = {
  title: 'Industry Analytics',
  description: 'Industry Analytics - Market Dynamics & Data Reports | Nomad Vision',
}


export default function IndustryAnalyticsPage() {
  return (
    <div>
      <Suspense
        fallback={
          <Loading/>
        }
      >
        <IndustryAnalytics />
      </Suspense>
    </div>
  )
}
