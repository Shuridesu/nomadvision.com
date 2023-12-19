import getPost from '@/lib/getPost'
import React, { Suspense } from 'react'
import PostDetail from './components/PostDetail'
import getAllPosts from '@/lib/getAllPosts'


type Params = {
  params : {
    postSlug : string
  }
}

export async function generateStaticParams() {
  const postsData:Promise<Post[]> = getAllPosts()
  const posts = await postsData
return posts.map(post =>(
  {postSlug: post.slug}
))
}

export async function generateMetadata({ params:{postSlug} }: Params) {
  const postData:Promise<PostDetail> = getPost(postSlug)
  const post = await postData;
  return {
    title:post.post.title,
    description:post.post.meta_description
  }
}

export default async function PostPage({params:{postSlug}}:Params) {
  const postData:Promise<PostDetail> = getPost(postSlug)

  return (
    <>
    <Suspense fallback = {
      <div className="flex justify-center items-center h-screen">
      <div className="loading loading-bars loading-lg"></div>
    </div>
    }>
    <PostDetail promise = {postData}/>
    </Suspense>
    </>
    
  )
}







