import { ArticleListByPrimaryCategory, Banner } from "@/components/articles";
import React from "react";
import { LuBrainCircuit } from "react-icons/lu";

export default function page() {
  return (
    <div className="h-screen">
      <Banner icon={<LuBrainCircuit className="w-10 h-10"/>}>AI Trends</Banner>
      <div>
        <ArticleListByPrimaryCategory categoryName = "ai-trends"/>
      </div>
    </div>
  );
}
