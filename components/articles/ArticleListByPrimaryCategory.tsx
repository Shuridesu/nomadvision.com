'use client';

import React from "react";
import { ArticleCard } from "@/components/articles";
import { useGetPrimaryCategoryPostsQuery } from "@/redux/features/authApiSlice";
import { Spinner } from "../common";

interface Props {
  categoryName: string;
}

export default function ArticleListByPrimaryCategory({categoryName}:Props) {
  const { data: articles,isLoading,isFetching } = useGetPrimaryCategoryPostsQuery(categoryName);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {isLoading || isFetching ? (
        <div>
          <div className = "flex justify-center">
            <Spinner lg/>
          </div>
        </div>
      ) : articles?.length ? (
        <ArticleCard articles={articles} />
      ) : (
        
        <div>
          There are no articles.
        </div>
      )}
    </div>
  );
}