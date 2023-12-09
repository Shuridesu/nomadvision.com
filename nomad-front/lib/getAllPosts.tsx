import React from 'react'

export default async function getAllPosts() {
    const data = await fetch('http://127.0.0.1:8000/posts/latest/',{ next: { revalidate: 10 } } )
    if (!data.ok) return undefined
  return data.json()
}
