'use client'

import Card from '@/app/components/Card'
import { Button } from '@/components/ui/button'
import { getSearchPosts } from '@/lib/getPosts'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function SearchResult() {
  const [posts,setPosts] = useState<Post[]>([])
  const searchParams = useSearchParams()
  const query = searchParams.get('q')||'';
  useEffect(()=>{
    async function fetchPosts(){
      const posts = await getSearchPosts(query)
      const post = posts.posts
      setPosts(post);
    }
    fetchPosts();
  },[query]);

  if(!query) return null
  const count = posts.length
  

  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="flex justify-center items-center pb-2 border-b-2 border-gray-300">
        <span className="flex animate-pulse ">
          <h1 className="font-bold text-4xl mt-6 mb-14">
            <span className="text-slate-500">Search Result for </span>
            <span className="text-blue-400">{query}</span>
            <Button className="h-10 w-10 rounded-full px-0 text-lg font-bold -translate-y-4 ms-2 text-black bg-white border-2">
              {count}
            </Button>
          </h1>
        </span>
      </div>
      {posts.length === 0 && (
        <div>
          <div className="flex items-center justify-center border-2 border-red-300 bg-red-100 mt-8 h-20 text-sm font-medium rounded-md md:text-lg sm:w-4/5 mx-auto">
            <span>Your search for </span>
            <span className="mx-2 font-bold">{query}</span>
            <span>did not return any results</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <Card posts={posts} />
      </div>
    </div>
  );
}

