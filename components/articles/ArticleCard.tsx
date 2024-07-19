'use client';


import Link from "next/link";
import React from "react";
import { BsBoxArrowInDownRight } from "react-icons/bs";
import { useState } from "react";

interface Category {
  name: string;
  meta_description: string;
  slug: string;
}

interface Props {
  articles: Post[];
}

function ArticleCard({ articles }: Props) {
  const [num, setNum] = useState(6);
  const handleLoadMore = () => {
    setNum(num + 6);
  };
  return (

    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, num).map((article) => (
          <Link
            href={`/${article.slug}`}
            key={article.id}
            className="relative bg-white bg-opacity-80 shadow-lg rounded-lg overflow-hidden group transition duration-300 hover:shadow-2xl flex flex-col"
          >
            <img
              className="w-full h-72 object-cover"
              src={article.title_image}
              alt="Article"
            />
            <div className="absolute inset-0 h-72 bg-gray-400 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300" />
            <div className="p-5 flex-grow">
              <div className="flex flex-wrap items-center gap-2 pb-4 text-gray-400 text-sm font-semibold whitespace-normal break-words">
                {article.category.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/tag/${category.slug}`}
                    className="rounded-lg px-2 py-1 hover:scale-105 border-2 border-gray-300 hover:border-indigo-400 hover:text-indigo-600 bg-white transition-all duration-100"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {article.title}
              </h3>
              <p className="text-gray-600 mt-2">{article.subtitle}</p>
            </div>
            <div className="flex items-center justify-between text-gray-400 group-hover:text-blue-500 p-3">
              <h1>Read More</h1>
              <BsBoxArrowInDownRight className="text-3xl" />
            </div>
          </Link>
        ))}
      </div>
      {num < articles.length && (
        <div className="flex items-center justify-center">
          <button onClick={handleLoadMore} className = "bg-indigo-600 bg-opacity-80 p-4 font-semibold hover:bg-opacity-100 text-white text-xl rounded-lg mt-10 transition-all duration-100">Load More</button>
        </div>
      )}
    </>
  );
}

export default ArticleCard;