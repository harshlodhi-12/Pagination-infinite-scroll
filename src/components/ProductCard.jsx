
import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="flex h-52 items-center justify-center bg-gray-50 p-4">
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-4">

        <p className="mb-1 text-sm text-gray-500">
          {product.brand}
        </p>

        <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Rating */}
        <p className="mb-3 text-sm text-yellow-600">
          ★ {product.rating}
          <span className="ml-1 text-gray-400">
            / 5
          </span>
        </p>

        {/* Price */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${discountedPrice}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${product.price}
          </span>

          <span className="text-xs font-semibold text-green-600">
            {product.discountPercentage}% OFF
          </span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => onAddToCart?.(product)}
          disabled={product.stock <= 0}
          className="mt-auto w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
