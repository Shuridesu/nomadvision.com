import { ArticleListByPrimaryCategory, Banner } from "@/components/articles";
import React from "react";
import { LuBrainCircuit } from "react-icons/lu";

export default function page() {
  return (
    <div>
      <Banner icon={<LuBrainCircuit className="w-10 h-10"/>}>AI Trends</Banner>
      <div>
        <ArticleListByPrimaryCategory categoryName = "ai-trends"/>
      </div>
      <div className="h-10">
      </div>
    </div>
  );
}
