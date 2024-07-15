'use client'

import { SearchIcon } from '@/icons'
import { useGetPostsBySearchQuery } from '@/redux/features/authApiSlice'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaTag } from "react-icons/fa6";
import { RiArticleFill } from "react-icons/ri";

export default function SearchForm() {
  const [isSearch, setSearch] = useState(false);

  const [query, setQuery] = useState("");
  const [suggestions,setSuggestion] = useState<PostList>({
        posts:[],
        categories:[]
  });

  const { data, isLoading, isFetching } = useGetPostsBySearchQuery(query);

  useEffect(() => {
    if (data) {
      setSuggestion(data);
    }else{
        setSuggestion({
            posts:[],
            categories:[]
        });
    }
  }, [data]);

  useEffect(() => {
    const clickOutside = (e: any) => {
      const target = e.target;
      if (!target.closest(".search")) {
        setSearch(false);
        setQuery("");
      }
    };
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  });
  return (
    <div>
      <button
        className="hover:scale-110 transition-transform duration-200 ease-in-out"
        onClick={() => {
          setSearch(!isSearch);
        }}
      >
        <SearchIcon />
      </button>
      <div
        className={`${
          isSearch ? "block" : "hidden"
        } justify-center fixed top-0 left-0 z-50 w-full h-full  bg-black bg-opacity-50`}
      >
        <div className="w-3/4 sm:w-[500px] mx-auto">
          <form action="" className="search mt-36">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-[18px] py-7 p-2 rounded-md h-14 w-full"
            />
          </form>
          {query.length > 0 && (
            <div className="menu w-full bg-white shadow-md rounded-b-md overflow-auto text-sm">
              <div className="flex items-center ms-3 mt-2 font-bold">
                <FaTag className = "w-5 h-5"/>
                <span className="ms-1 mb-1">Tags</span>
              </div>
              {suggestions.categories.length > 0 ? (
                <div>
                  {suggestions.categories.map((category) => (
                    <>
                      <Link
                        href={`/tag/${category.slug}`}
                        key={category.name}
                        className="text-gray-600 no-underline hover:bg-gray-200 w-full block py-2 hover:text-blue-500 transition-colors duration-100 ease-in-out"
                      >
                        <span className="ms-4 font-semibold">
                          # {category.name}
                        </span>
                      </Link>
                    </>
                  ))}
                </div>
              ) : (
                <div className="p-3 font-semibold text-gray-400 ms-2">
                  No Categories found
                </div>
              )}
              <div className="font-bold border-t-2 py-2 mt-1 mx-2">
                <div className="ms-1 flex items-center">
                  <RiArticleFill className = "w-5 h-5"/>
                  <span className="ms-1">Articles</span>
                </div>
              </div>
              {suggestions.posts.length > 0 ? (
                <div>
                  {suggestions.posts.map((posts) => (
                    <>
                      <Link
                        href={`/${posts.title}`}
                        key={posts.id}
                        className="text-gray-600 no-underline hover:bg-gray-200 w-full py-2 hover:text-blue-500 transition-colors duration-100 ease-in-out flex items-center"
                      >
                        <img
                          src={posts.title_image}
                          alt={posts.title}
                          width={40}
                          height={40}
                          className="rounded-sm ms-2"
                        />
                        <span className="ms-4 font-semibold">
                          {posts.title}
                        </span>
                      </Link>
                    </>
                  ))}
                </div>
              ) : (
                <div className="p-3 font-semibold text-gray-400 ms-2">
                  No Posts found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
