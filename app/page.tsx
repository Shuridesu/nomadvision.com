import React from "react";
import Hero from "./components/Hero";
import LatestArticles from "./components/LatestArticles";
import RecArticles from "./components/RecArticles";

import type { Metadata } from 'next'
import { getAuthSession } from "@/lib/nextauth";

export const metadata: Metadata = {
  title: 'Nomad Vision',
  description: 'nomadvision.net: Gateway to AI and Data-Driven Business Innovation. Explore the latest in AI trends, data analytics, and industry insights with networking community. Empower your business with cutting-edge technologies and expert analysis. Visit us.',
}




export default async function HomePage() {
  const user = await getAuthSession()
  return (
    <>
    <Hero user = {user}/>
    <LatestArticles/>
    <RecArticles/>
    </>
    
  )
}


