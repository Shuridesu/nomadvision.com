
import Card from "@/app/components/Card";
import getAiSoftwarePosts from "@/lib/getAiSoftwarePosts";
import React from "react";

export default async function AiSoftware() {
  const posts: Promise<Post[]> = getAiSoftwarePosts();
  const post = await posts;
  const count = post.length;
  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="flex justify-center items-center pb-2 border-b-2">
        <span className="flex animate-pulse ">
          <h1 className="font-bold text-2xl mt-6 mb-14">
            AI SOFTWARE HUB<button className = "btn btn-circle btn-xs mb-6">{count}</button>
          </h1>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <Card posts={post} />
      </div>
    </div>
  );
}