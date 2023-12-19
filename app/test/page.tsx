import getAllPosts from "@/lib/getAllPosts";
import React from "react";
import Card from "../components/Card";

export default async function page() {
  const posts: Promise<Post[]> = getAllPosts();
  const post = await posts;
  return (
    <Card posts={post} />
  );
}
