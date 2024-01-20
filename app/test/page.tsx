
import React from "react";
import Card from "../components/Card";
import { getAllPosts } from "@/lib/getPosts";

export default async function page() {
  const posts: Promise<Post[]> = getAllPosts();
  const post = await posts;
  return (
    <Card posts={post} />
  );
}
