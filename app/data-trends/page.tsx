import React, { Suspense } from 'react'
import DataTrends from './components/DataTrends'

import type { Metadata } from 'next'
import Loading from '@/components/Loading'

export const metadata: Metadata = {
  title: 'Data Trends',
  description: 'Data Trends-Big Data Insights for Business | Nomad Vision',
}

export default function DataTrendsPage() {
  return (
    <div>
      <Suspense
        fallback={
          <Loading/>
        }
      >
        <DataTrends />
      </Suspense>
    </div>
  )
}
