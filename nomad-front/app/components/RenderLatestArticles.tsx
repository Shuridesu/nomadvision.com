"use client";


import Link from "next/link";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
type Props = {
  posts: Post[];
};

export default function RenderLatestArticles({ posts }: Props) {
  const [postNum, setPostNum] = useState(6); // Default number of posts dislplayed

  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 6); // 3 is the number of posts you want to load per click
  }

  return (
    <div>
     <Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {posts.slice(0, postNum).map((post) => (
          <Link href={post.slug} className="group " key={post.id}>
            <div className="border-none mt-8 -me-100">
              <figure>
                <img
                  src={post.title_image}
                  alt={post.title_image_description}
                  width = {500}
                  height = {300}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-150"
                />
              </figure>
              <div>
                {post.category.map((category) => (
                  <Link href = {`/tag/${category.slug}`} key={category.id}>
                    <button
                    
                    className=" bg-gray-200 px-2 text-sm rounded-xl font-normal border-blue-500 ms-2 mt-2 translate-y-5 hover:bg-gray-300 transition-all duration-200"
                  >
                    {category.name}
                  </button>
                  </Link>
                ))}
              </div>
              <div className="text-black">
                <h2 className="font-semibold text-2xl ms-4 mt-4 translate-y-2 group-hover:text-blue-500 group-hover:underline transition-all duration-150">
                  {post.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {postNum < posts.length && (
        <div className="flex justify-center items-center mt-20 animate-pulse">
          <button
            onClick={handleClick}
            className="btn btn-lg rounded-xl bg-sky-900 text-white"
          >
            READ MORE
          </button>
        </div>
      )}
     </Fade>
    </div>
  );
}
