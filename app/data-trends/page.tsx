import { ArticleListByPrimaryCategory, Banner } from "@/components/articles";
import React from "react";
import { BsClipboard2DataFill } from "react-icons/bs";

export default function page() {
  return (
    <div className="h-screen">
      <Banner icon={<BsClipboard2DataFill className="w-10 h-10"/>}>Data Trends</Banner>
      <div>
        <ArticleListByPrimaryCategory categoryName="data-trends"/>
      </div>
    </div>
  );
}
