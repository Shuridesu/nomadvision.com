import Card from "@/app/components/Card";
import { getAllCategories, getCategoryPosts } from "@/lib/getPosts";
import React, { Suspense } from "react";

type Params = {
  params: {
    categorySlug: string;
  };
};

export default async function CategoryPage({
  params: { categorySlug },
}: Params) {
  const postsData: Promise<Post[]> = getCategoryPosts(categorySlug);
  const posts = await postsData;
  const count = posts.length;
  const formattedCategorySlug = categorySlug.replace(/-/g, " ").toUpperCase();
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="loading loading-bars loading-lg"></div>
          </div>
        }
      >
        <div className="container mx-auto p-4 mt-24">
          <div className="flex justify-center items-center pb-2 border-b-2 border-gray-300">
            <span className="flex animate-pulse">
              <h1 className="font-bold text-2xl mt-6 mb-14">
                {formattedCategorySlug}{" "}
                <button className="btn btn-circle btn-xs mb-6">{count}</button>
              </h1>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
            <Card posts={posts} />
          </div>
        </div>
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const categoriesData: Promise<Category[]> = getAllCategories();
  const categories = await categoriesData;

  return categories.map((category) => ({
    params: { categorySlug: category.slug },
  }));
}

export async function generateMetadata({ params:{categorySlug} }: Params) {
  const categoryData = await getAllCategories()
  const category = categoryData.find((c:any) => c.slug === categorySlug);
  
  return {
    title:category.name,
    description: category.meta_description
  }
}