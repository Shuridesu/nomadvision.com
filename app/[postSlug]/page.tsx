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
          <div className="flex flex-col justify-center items-center h-[70vh]">
            <div className="flex flex-col justify-center items-center h-[70vh]">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
              <div className="text-gray-500 ms-2 mt-2">Loading...</div>
            </div>
          </div>
        }
      >
        <PostDetail promise={postData} />
        <hr className="w-3/5 mx-auto mt-20" />

        {user ? (
          <div className="">
            <CommentForm user={user} postSlug={postSlug} />
          </div>
        ) : (
          <>
            <div className="w-11/12 sm:w-3/5 mx-auto shadow-md px-10 py-10 mt-24 border">
              <div className="flex items-center justify-center">
                <div className="font-bold text-2xl ms-2">MEMBER DISCUSSION</div>
              </div>
              <Comment />
            </div>
          </>
        )}
      </Suspense>
    </>
  );
}
