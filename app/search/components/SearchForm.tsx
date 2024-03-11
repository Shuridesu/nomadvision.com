"use client";

import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";

import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { usePathname, useRouter } from "next/navigation";
import Search from "@/app/Icons/Search";
import toast from "react-hot-toast";
import { useClickAway } from "react-use";
import { getSearchPosts } from "@/lib/getPosts";
import Link from "next/link";
import TagIcon from "@/app/Icons/TagIcon";
import ArticleIcon from "@/app/Icons/ArticleIcon";
import Image from "next/image";

export default function SearchForm() {
  const [show, setShow] = useState(false);
  const [suggestions, setSuggestions] = useState<PostList>({
    posts: [],
    categories: [],
  });
  const form = useForm({
    defaultValues: {
      query: "",
    },
  });
  const { reset, watch } = form;
  const router = useRouter();
  const searchQuery = watch("query");

  useEffect(() => {
    async function fetchPosts() {
      if (searchQuery.length > 0) {
        const posts = await getSearchPosts(searchQuery);
        setSuggestions(posts);
      } else {
        setSuggestions({ posts: [], categories: [] });
      }
    }
    fetchPosts();
  }, [searchQuery]);

  const toggleShow = () => {
    if (show) {
      reset({ query: "" });
    }
    setShow(!show);
  };
  const onSubmit = (data: any) => {
    if (data.query === "") {
      toast.error("Please enter a search term");
      return;
    }
    router.push(`/search?q=${encodeURIComponent(data.query)}`);
    toggleShow();
  };

  const pathName = usePathname();
  useEffect(() => {
    if (show) {
      setShow(false);
    }
    reset({ query: "" });
  }, [pathName]);

  const ref = React.useRef(null);

  useClickAway(ref, (event) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".menu") && show) {
      toggleShow();
    }
  });

  return (
    <div>
      <div
        onClick={toggleShow}
        className="fixed xl:absolute right-48 top-8 translate-x-28 sm:translate-x-14 xl:translate-x-0 cursor-pointer hover:scale-110 duration-300 ease-in-out bg-white px-2 py-2 rounded-lg bg-opacity-40"
      >
        <Search />
      </div>
      <div
        className={`fixed top-0 left-0 z-50 w-full h-full backdrop-blur-sm bg-black bg-opacity-10 ${
          show ? "block" : "hidden"
        }`}
      >
        <div className="relative w-3/4 sm:w-[500px] mx-auto translate-y-32">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="query"
                control={form.control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Search.."
                    className="menu py-8 text-[20px] shadow-md focus-visible:ring-3"
                    ref={ref}
                  />
                )}
              />
            </form>
          </Form>
          {/* 検索結果 */}
          {searchQuery.length > 0 && (
            <div className="menu absolute top-full left-0 w-full bg-white shadow-md rounded-b-md overflow-auto max-h-[440px]">
              <div className="flex items-center ms-3 mt-2 font-bold">
                <TagIcon />
                <span className="ms-1">Tags</span>
              </div>
              {suggestions.categories.length > 0 ? (
                <div>
                  {suggestions.categories.map((category) => (
                    <>
                      <Link
                        href={`/tag/${category.slug}`}
                        key={category.id}
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
                  <ArticleIcon />
                  <span className="ms-1">Articles</span>
                </div>
              </div>
              {suggestions.posts.length > 0 ? (
                <div>
                  {suggestions.posts.map((posts) => (
                    <>
                      <Link
                        href={`/${posts.slug}`}
                        key={posts.id}
                        className="text-gray-600 no-underline hover:bg-gray-200 w-full py-2 hover:text-blue-500 transition-colors duration-100 ease-in-out flex items-center"
                      >
                        <Image
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
