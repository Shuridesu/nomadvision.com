import React from 'react'

export default async function getRecPosts() {
    const data = await fetch('https://nomadvision-e83b637ecb0f.herokuapp.com/posts/recommended/')
    if (!data.ok) return undefined
  return data.json()
}

