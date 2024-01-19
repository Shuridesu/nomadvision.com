import Card from "@/app/components/Card";
import getDataTrendsPosts from "@/lib/getDataTrendsPosts";
import Link from "next/link";
import React from "react";

export default async function DataTrends() {
  const posts: Promise<Post[]> = getDataTrendsPosts();
  const post = await posts;
  const count = post.length;
  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="flex justify-center items-center pb-2 border-b-2 border-gray-300">
        <span className="flex animate-pulse">
          <h1 className="font-bold text-2xl mt-6 mb-14">
            DATA TRENDS <button className = "btn btn-circle btn-xs mb-6">{count}</button>
          </h1>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <Card posts={post} />
      </div>
    </div>
  );
}