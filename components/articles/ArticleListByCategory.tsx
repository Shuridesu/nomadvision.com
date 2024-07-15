'use client'

import { useGetCategoryPostsQuery } from '@/redux/features/authApiSlice';
import { useParams } from 'next/navigation';
import React from 'react'
import ArticleCard from './ArticleCard';
import { Spinner } from '../common';

export default function ArticleListByCategory({category}:any) {
    const { data: articles,isLoading,isFetching } = useGetCategoryPostsQuery(category);
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
  )
}
