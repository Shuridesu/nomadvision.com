"use client";

import React from "react";
import { ArticleCard } from "@/components/articles";
import { useGetPostsQuery } from "@/redux/features/authApiSlice";
import { Spinner } from "../common";

export default function ArticleList() {
  const { data: articles, isLoading, isFetching } = useGetPostsQuery();
  return (
    <div className="xl:mx-10 px-4 sm:px-6 lg:px-8">
      {isLoading || isFetching ? (
        <div className="flex justify-center">
          <Spinner lg />
        </div>
      ) : articles?.length ? (
        <ArticleCard articles={articles} />
      ) : (
        <div>There are no articles.</div>
      )}
    </div>
  );
}
