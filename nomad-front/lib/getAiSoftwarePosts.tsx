import React from 'react'

export default async function getAiSoftwarePosts() {
    const data = await fetch('http://127.0.0.1:8000/posts/ai-software/', 
      { next: { revalidate: 10 } })
    if (!data.ok) return undefined
  return data.json()

}