import React from 'react'

export default async function getAllCategories() {
    const res = await fetch('https://nomadvision-e83b637ecb0f.herokuapp.com/tag/')
    if(!res.ok)return undefined
  return res.json()
}
