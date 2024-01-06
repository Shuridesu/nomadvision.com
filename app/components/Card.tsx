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
          <Link href={`/${post.slug}`} className="group " key={post.id}>
            <div className="border-none mt-8">
              <figure>
                <Image
                  src={post.title_image}
                  alt={post.title_image_description}
                  width = {500}
                  height = {300}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-600"
                />
              </figure>
              <div>
                {post.category.map((category) => (
                  <Link href={`/tag/${category.slug}`} key = {category.id}>
                    <button
                      className=" bg-gray-200 px-2 text-sm rounded-xl font-normal border-blue-500 ms-2 mt-2 translate-y-5 hover:bg-gray-300 transition-all duration-200"
                    >
                      {category.name}
                    </button>
                  </Link>
                ))}
              </div>
              <div className="text-black">
                <h2 className="font-semibold text-2xl ms-4 mt-4 translate-y-2 group-hover:text-blue-500 transition-all duration-600">
                  {post.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </Fade>
    </>
  );
}
