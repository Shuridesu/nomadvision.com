import React from 'react'

export default async function getAiTrendsPosts() {
    const data = await fetch('https://nomadvision-e83b637ecb0f.herokuapp.com/posts/ai-trends/', 
      { next: { revalidate: 10 } })
    if (!data.ok) return undefined
  return data.json()

}