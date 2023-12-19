import React from 'react'

export default async function getIndustryAnalyticsPosts() {
    const data = await fetch('https://nomadvision-e83b637ecb0f.herokuapp.com/posts/industry-analytics/', 
      { next: { revalidate: 10 } })
    if (!data.ok) return undefined
  return data.json()

}