import React, { Suspense } from "react";
import PostDetail from "./components/PostDetail";
import { getAllPosts, getPost } from "@/lib/getPosts";
import CommentForm from "./components/CommentForm";
import { UserType, getAuthSession } from "@/lib/nextauth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Login from "@/components/auth/Login";
import Comment from "./components/Comment";
import Image from "next/image";
import Loading from "@/components/Loading";



type Params = {
  params: {
    postSlug: string;
  };
};


export async function generateStaticParams() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;
  return posts.map((post) => ({ postSlug: post.slug }));
}

export async function generateMetadata({ params: { postSlug } }: Params) {
  const postData: Promise<PostDetail> = getPost(postSlug);
  const post = await postData;
  return {
    title: post.post.title,
    description: post.post.meta_description,
  };
}

export default async function PostPage({ params: { postSlug } }: Params) {
  const postData: Promise<PostDetail> = getPost(postSlug);
  const user = await getAuthSession();

  return (
    <>
      <Suspense
        fallback={
          <Loading/>
        }
      >
        <PostDetail promise={postData} user={user} postSlug={postSlug} />
        

        
      </Suspense>
    </>
  );
}
