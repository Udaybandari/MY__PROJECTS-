
function ProductCard({ product, onAddToCart }) {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-contain p-4"
      />

      <div className="p-4">

        {/* Product Title */}
        <h2 className="text-lg font-semibold line-clamp-1">
          {product.title}
        </h2>

        {/* Category */}
        <p className="text-gray-500 text-sm mt-1">
          {product.category}
        </p>

        {/* Price */}
        <p className="text-xl font-bold text-blue-600 mt-3">
          ${product.price}
        </p>

        {/* Rating */}
        <p className="text-yellow-500 mt-2">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </p>

        {/* Add to Cart */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;
