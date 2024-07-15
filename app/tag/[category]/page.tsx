import React from 'react'
import { ArticleListByCategory, Banner } from '@/components/articles'

interface Props {
    params:{category: string}
}

export default function page({params: {category}}: Props ) {
  return (
    <div>
        <Banner>{category}</Banner>
        <ArticleListByCategory category = {category}/>
    </div>
  )
}
