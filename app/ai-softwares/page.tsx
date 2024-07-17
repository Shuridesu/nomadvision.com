import { ArticleListByPrimaryCategory, Banner } from "@/components/articles";
import React from "react";
import { CpuChipIcon } from '@heroicons/react/24/outline'

export default function page() {
  return (
    <div>
      <Banner icon={<CpuChipIcon className="w-10 h-10"/>}>AI Softwares</Banner>
      <div>
        <ArticleListByPrimaryCategory categoryName = "ai-softwares" />
      </div>
      <div className="h-10">
      </div>
    </div>
  );
}
