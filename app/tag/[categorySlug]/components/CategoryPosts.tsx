import Card from '@/app/components/Card';
import { Button } from '@/components/ui/button';
import { getCategoryPosts } from '@/lib/getPosts';
import React from 'react'

interface Props {
    categorySlug: string;
    }

    

export default async function CategoryPosts( {categorySlug}: Props) {
    const postsData: Promise<Post[]> = getCategoryPosts(categorySlug);
  const posts = await postsData;
  const count = posts.length;
  const formattedCategorySlug = categorySlug.replace(/-/g, " ").toUpperCase();
  return (
    <div>
      <div className="container mx-auto p-4 mt-24">
        <div className="flex justify-center items-center pb-2 border-b-2 border-gray-300">
          <span className="flex animate-pulse">
            <h1 className="font-bold text-2xl mt-6 mb-14">
              {formattedCategorySlug}{" "}
              <Button className="h-10 w-10 rounded-full px-0 text-lg font-bold -translate-y-4 ms-2 text-black bg-white border-2 pointer-events-none">
                {count}
              </Button>
            </h1>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          <Card posts={posts} />
        </div>
      </div>
    </div>
  );
}
