
import React, { Suspense } from "react";
import SearchResult from "./components/Search";
import Loading from "@/components/Loading";
// import SearchResult from "./components/Search";


export default async function SearchPage() {
  return (
    <div>
      <Suspense fallback={
        <Loading/>
      }>
        <SearchResult/>
      </Suspense>
    </div>
  );
}
