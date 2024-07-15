import { ArticleListByPrimaryCategory, Banner } from "@/components/articles";
import React from "react";
import{ PresentationChartBarIcon } from '@heroicons/react/24/outline'

export default function page() {
  return (
    <div className="h-screen">
      <Banner icon={<PresentationChartBarIcon className="w-10 h-10"/>}>Industry Analytics</Banner>
      <div>
        <ArticleListByPrimaryCategory categoryName="industry-analytics" />
      </div>
    </div>
  );
}
