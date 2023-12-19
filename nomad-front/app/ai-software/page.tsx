import React, { Suspense } from 'react'
import AiSoftware from './components/AiSoftware'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Software Hub',
  description: 'AI Software Hub - Tools for Business Enhancement | Nomad Vision',
}

export default function AiSoftwarePage() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="loading loading-bars loading-lg"></div>
          </div>
        }
      >
        <AiSoftware />
      </Suspense>
    </div>
  );
}
