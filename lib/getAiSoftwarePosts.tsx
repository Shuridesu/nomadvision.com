import React from 'react'

const fetchAPI = async (url: string, options: RequestInit) => {
  const apiUrl = process.env.API_URL

  if (!apiUrl) {
    throw new Error("API URL not found")
  }

  const response = await fetch(`${apiUrl}${url}`, options)

  if (!response.ok) {
    throw new Error("API Error")
  }

  return response.json()
}

export default async function getAiSoftwarePosts() {
  const data = fetchAPI("/posts/ai-software/", {
    next: { revalidate: 10 },
  });

  return data;
}