import { useParams, useNavigate } from "react-router-dom";
import products from "../Data/Products";

function ProductDetails() {

  // Get product ID from URL
  const { id } = useParams();

  // Find the product using its ID
  const product = products.find(
    (item) => item.id === Number(id)
  );

  const navigate = useNavigate();

  // Handle invalid product ID
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">    
          Product Not Found
        </h1>

        <button
          onClick={() => navigate("/home")}
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-5xl mx-auto">

        {/* Back Button */}

        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-blue-600 font-semibold"
        >
          ← Back to Products
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

          {/* Product Image */}

          <div className="bg-blue-50 rounded-xl flex items-center justify-center min-h-72">
            <span className="text-9xl">
              {product.emoji}
            </span>
          </div>

          {/* Product Information */}

          <div>

            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
              {product.category}
            </span>

            <h1 className="text-3xl font-bold text-gray-800 mt-6">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-4 leading-7">
              {product.description}
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-6">
              ₹{product.price.toLocaleString("en-IN")}
            </h2>

            <p className="mt-4 text-green-600 font-semibold">
              Available Stock: {product.stock}
            </p>

            <button
              onClick={() => alert("Product added to cart!")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg mt-8 hover:bg-blue-700"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;