import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";
import LatestIcon from "../Icons/LatestIcon";
import Image from "next/image";
import RenderLatestArticles from "./RenderLatestArticles";
import { motion } from "framer-motion";
export default async function LatestArticles() {
  const posts: Promise<Post[]> = getAllPosts();
  const post = await posts;
  return (
    <div className="container p-4">
      <div className="flex justify-start items-center pb-2 border-b-2 border-gray-300">
        <span className="flex animate-bounce">
          <LatestIcon />
          <h1 className="ms-3 font-bold text-2xl mt-6">
            LATEST
          </h1>
        </span>
      </div>
      
          <RenderLatestArticles posts={post} />
      
    </div>
  );
}
