import React from 'react'

export default async function getCategoryPosts(categorySlug:any) {
    const res = await fetch(`https://nomadvision-e83b637ecb0f.herokuapp.com/tag/${categorySlug}/`,
    {next:{revalidate:10}}
    )
    if(!res.ok)return undefined
  return res.json()
}
