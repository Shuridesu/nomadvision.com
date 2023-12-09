import React, { Suspense } from 'react'
import DataTrends from './components/DataTrends'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Trends',
  description: 'Data Trends-Big Data Insights for Business | Nomad Vision',
}

export default function DataTrendsPage() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="loading loading-bars loading-lg"></div>
          </div>
        }
      >
        <DataTrends />
      </Suspense>
    </div>
  )
}
