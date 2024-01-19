import React from "react";
import Link from "next/link";
import getRecPosts from "@/lib/getRecPosts";
import RecommendedIcon from "../Icons/RecommendedIcon";
import Carousel from "./Carousel";
import Image from "next/image";

export default async function RecArticles() {
  const posts: Promise<Post[]> = getRecPosts();
  const post = await posts;

  return (
    <>
      <div className="p-4 mx-10 mt-24">
        <div className="flex justify-start items-center pb-2 border-b-2 ms-4 border-gray-300">
          <span className="flex animate-bounce">
            <span className="translate-y-3">
              <RecommendedIcon />
            </span>

            <h1 className="ms-3 font-bold text-2xl mt-6">RECOMMENDED</h1>
          </span>
        </div>

        <Carousel>
          {post.map((post) => (
            <div className="flex" key={post.id}>
              <div className="border-none mt-8 ms-4 pb-6">
                <div className="group">
                  <Link href={post.slug}>
                    <Image
                      src={post.title_image}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="rounded-xl group-hover:scale-105 transition-all duration-150"
                    />
                  </Link>

                  <div>
                    {post.category.map((category) => (
                      <Link href={`/tag/${category.slug}`} key={category.id}>
                        <button
                          key={category.id}
                          className="bg-gray-200 px-2 text-sm rounded-xl font-normal border-blue-500 ms-2 mt-2 translate-y-5 hover:bg-gray-300 transition-all duration-200 text-black"
                        >
                          {category.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                  <Link href={post.slug} className="text-black no-underline">
                    <h2 className="font-semibold text-2xl ms-4 mt-4 translate-y-2 group-hover:text-blue-500 transition-all duration-150 group-hover:scale-105">
                      {post.title}
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
