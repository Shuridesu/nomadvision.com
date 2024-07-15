import { ArticleList,ArticleListForRecommended, Banner } from "@/components/articles";
import Hero from "@/components/common/Hero";
import { LatestIcon } from "@/icons";
import { MdOutlineRecommend } from "react-icons/md";


export default function Home() {
  return (
    <div>
      <Hero />
      <div className="xl:mx-10">
        <div className="bg-black backdrop-blur-sm bg-opacity-30 border-3 text-center border-white text-white py-4 px-6 shadow-md overflow-hidden mb-20">
          <div className="flex justify-center items-center gap-2 text-2xl font-bold whitespace-nowrap">
            <LatestIcon />
            <h1 className="mt-2">Latest Articles</h1>
          </div>
        </div>
      </div>
      <ArticleList />
      <Banner icon={<MdOutlineRecommend className="w-10 h-10"/>}>Recommended Articles</Banner>
      <ArticleListForRecommended/>
    </div>
  );
}
