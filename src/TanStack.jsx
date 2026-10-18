import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const TanStack = () => {
  const [page, setPage] = useState(0);

  let limit = 10;

  let { data, isPending, isError,isPlaceholderData } = useQuery({
    queryKey: ["products",page],
    queryFn: ()=>getAllProducts(limit,page),
    placeholderData:keepPreviousData
  });

  if (isPending) return "loading..";
  if (isError) return "something went wrong";

  console.log(data);

  let totalPages = Math.ceil(data?.total / limit);
  console.log(totalPages);

  return (
    <div className="flex flex-col gap-6 items-center p-4">
        
      <div
      style={{opacity:isPlaceholderData? 0.3 :1}}
       className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data?.products.map((val) => {
          return <ProductCard key={val.id} product={val} />;
        })}
      </div>
           
<div className="flex items-center justify-center gap-4">
  <button
   disabled={page===0}
  onClick={()=>setPage(page-1)}

    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 active:scale-95"
  >
    ← Prev
  </button>

  <p className="flex h-10 min-w-10 items-center justify-center rounded-lg bg-blue-600 px-3 font-semibold text-white shadow-sm">
    page {page+1} of {totalPages}
  </p>

  <button
  disabled={page>=totalPages-1}
  onClick={()=>setPage(page+1)}
    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 active:scale-95"
  >
    Next →
  </button>
</div>
    </div>
  );
};

export default TanStack;
