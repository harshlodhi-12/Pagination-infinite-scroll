import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  let limit = 10;
  const [products, setProducts] = useState(null);
  console.log(products)
  
   
  const [page,setPage]=useState(null)
  console.log(page)

  const getAllProducts = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`,
      );
      setProducts(res.data);
    } catch (error) {
      console.loog("error in api", error);
    }
  };

  let totalPages =Math.ceil(products?.total / limit )
  console.log(totalPages)
  
  useEffect(() => {
    getAllProducts();
  }, [page]);
  return (
    <div className="flex flex-col gap-6 items-center p-4">
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products?.products.map((val) => {
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

export default App;
