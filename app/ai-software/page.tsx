import React, { Suspense } from 'react'
import AiSoftware from './components/AiSoftware'

import type { Metadata } from 'next'
import Loading from '@/components/Loading';

export const metadata: Metadata = {
  title: 'AI Software Hub',
  description: 'AI Software Hub - Tools for Business Enhancement | Nomad Vision',
}

export default function AiSoftwarePage() {
  return (
    <div>
      <Suspense
        fallback={
          <Loading/>
        }
      >
        <AiSoftware />
      </Suspense>
    </div>
  );
}
