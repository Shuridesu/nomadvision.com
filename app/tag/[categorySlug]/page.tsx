import Card from "@/app/components/Card";
import Loading from "@/components/Loading";
import { getAllCategories, getCategoryPosts } from "@/lib/getPosts";
import React, { Suspense } from "react";
import CategoryPosts from "./components/CategoryPosts";

type Params = {
  params: {
    categorySlug: string;
  };
};

export default async function CategoryPage({
  params: { categorySlug },
}: Params) {
  
  return (
    <>
      <Suspense
        fallback={
          <Loading/>
        }
      >
        <CategoryPosts categorySlug={categorySlug} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const categoriesData: Promise<Category[]> = getAllCategories();
  const categories = await categoriesData;
  return categories.map((category) => ({ categorySlug: category.slug }));
}

export async function generateMetadata({ params:{categorySlug} }: Params) {
  const categoryData = await getAllCategories()
  const category = categoryData.find((c:any) => c.slug === categorySlug);
  
  return {
    title:category.name,
    description: category.meta_description
  }
}