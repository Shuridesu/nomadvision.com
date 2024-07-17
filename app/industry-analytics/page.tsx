import { ArticleListByPrimaryCategory, Banner } from "@/components/articles";
import React from "react";
import { PresentationChartBarIcon } from "@heroicons/react/24/outline";

export default function page() {
  return (
    <div>
      <Banner icon={<PresentationChartBarIcon className="w-10 h-10" />}>
        Industry Analytics
      </Banner>
      <div>
        <ArticleListByPrimaryCategory categoryName="industry-analytics" />
      </div>
      <div className="h-10"></div>
    </div>
  );
}
