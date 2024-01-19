'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

type Props = {
  posts: Post[];
};

export default function Card({ posts }: Props) {
  return (
    <>
      <Fade triggerOnce>
        {posts.map((post) => (
          <div className="group " key={post.id}>
            <div className="border-none mt-8">
              <Link href={`/${post.slug}`}>
                <Image
                  src={post.title_image}
                  alt={post.title}
                  width = {500}
                  height = {300}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-600"
                />
              </Link>
              <div>
                {post.category.map((category) => (
                  <Link href={`/tag/${category.slug}`} key = {category.id}>
                    <button
                      className=" bg-gray-200 px-2 text-sm rounded-xl font-normal border-blue-500 ms-2 mt-2 translate-y-5 hover:bg-gray-300 transition-all duration-200 text-black"
                    >
                      {category.name}
                    </button>
                  </Link>
                ))}
              </div>
              <Link href={`/${post.slug}`} className="text-black no-underline">
                <h2 className="font-semibold text-2xl ms-4 mt-4 translate-y-2 group-hover:text-blue-500 transition-all duration-600 group-hover:scale-105">
                  {post.title}
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </Fade>
    </>
  );
}
