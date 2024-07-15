'use client';

import React from "react";
import { ArticleCard, Carousel } from "@/components/articles";
import { useGetPostsRecommendedQuery } from "@/redux/features/authApiSlice";
import { Spinner } from "../common";


export default function ArticleListByPrimaryCategory() {
  const { data: articles,isLoading,isFetching } = useGetPostsRecommendedQuery();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {isLoading || isFetching ? (
        <div className = "flex justify-center">
          <Spinner lg/>
        </div>
      ) : articles?.length ? (
        <Carousel articles={articles}/>
      ) : (
        
        <div>
          There are no articles.
        </div>
      )}
    </div>
  );
}