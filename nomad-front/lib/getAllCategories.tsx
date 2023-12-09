import React from 'react'

export default async function getAllCategories() {
    const res = await fetch('http://127.0.0.1:8000/tag/')
    if(!res.ok)return undefined
  return res.json()
}
