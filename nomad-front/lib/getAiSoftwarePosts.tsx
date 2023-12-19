import React from 'react'

export default async function getAiSoftwarePosts() {
    const data = await fetch('https://nomadvision-e83b637ecb0f.herokuapp.com/posts/ai-software/', 
      { next: { revalidate: 10 } })
    if (!data.ok) return undefined
  return data.json()

}