import React, { Suspense } from 'react'
import IndustryAnalytics from './components/IndustryAnalytics'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industry Analytics',
  description: 'Industry Analytics - Market Dynamics & Data Reports | Nomad Vision',
}


export default function IndustryAnalyticsPage() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="loading loading-bars loading-lg"></div>
          </div>
        }
      >
        <IndustryAnalytics />
      </Suspense>
    </div>
  )
}
