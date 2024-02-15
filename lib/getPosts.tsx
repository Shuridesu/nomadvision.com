import React from 'react'

const fetchAPI = async (url: string, options: RequestInit) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  if (!apiUrl) {
    throw new Error("No API_URL")
  }

  const response = await fetch(`${apiUrl}${url}`, options)

  if (!response.ok) {
    throw new Error("API Error")
  }

  return response.json()
}

export async function getAiSoftwarePosts() {
    const data = await fetchAPI('/posts/ai-software/',{next:{revalidate:10}})
    return data
}

export async function getAiTrendsPosts() {
    const data = await fetchAPI('/posts/ai-trends/',{next:{revalidate:10}})
    return data
}

export async function getRecPosts() {
    const data = await fetchAPI('/posts/recommended/',{next:{revalidate:10}})
    return data
}

export async function getDataTrendsPosts() {
    const data = await fetchAPI('/posts/data-trends/',{next:{revalidate:10}})
    return data
}

export async function getPost(postSlug:string) {
    const data = await fetchAPI(`/posts/${postSlug}`,{next:{revalidate:10}})
    return data
}

export async function getAllPosts() {
    const data = await fetchAPI('/posts/latest/',{next:{revalidate:10}})
    return data
}

export async function getIndustryAnalyticsPosts() {
    const data = await fetchAPI('/posts/industry-analytics/',{next:{revalidate:10}})
    return data
}

export async function getAllCategories() {
    const data = await fetchAPI('/tag/',{next:{revalidate:10}})
    return data
}

export async function getCategoryPosts(categorySlug:string) {
    const data = await fetchAPI(`/tag/${categorySlug}`,{next:{revalidate:10}})
    return data
}

export async function getSearchPosts(query:string) {
    const data = await fetchAPI(`/search/?q=${query}`,{next:{revalidate:10}})
    return data
}
