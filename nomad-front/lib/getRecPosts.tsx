import React from 'react'

export default async function getRecPosts() {
    const data = await fetch('http://127.0.0.1:8000/posts/recommended/')
    if (!data.ok) return undefined
  return data.json()
}

