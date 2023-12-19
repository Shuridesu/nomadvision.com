import React from 'react'

export default async function getAllPosts() {
    const data = await fetch('https://nomadvision-e83b637ecb0f.herokuapp.com/posts/latest/',{ next: { revalidate: 10 } } )
    if (!data.ok) return undefined
  return data.json()
}
