import React from 'react'

export default async function getCategoryPosts(categorySlug:any) {
    const res = await fetch(`http://127.0.0.1:8000/tag/${categorySlug}/`,
    {next:{revalidate:10}}
    )
    if(!res.ok)return undefined
  return res.json()
}
