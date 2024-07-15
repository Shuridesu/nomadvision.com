import ArticleDetail from '@/components/articles/ArticleDetail'
import React from 'react'

interface Params {
  params:{
    postSlug: string
  }
}

export default function page({params:{postSlug}}:Params) {
  return (
    <div className="min-h-screen pb-10">
      <ArticleDetail postSlug={postSlug}/>
    </div>
  )
}
