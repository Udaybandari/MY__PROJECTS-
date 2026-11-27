
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../Services/api";
import useCart from "../Hooks/useCart";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get(`/products/${id}`);

        setProduct(response.data);
      } catch (err) {
        setError("Unable to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2 className="text-center mt-10">Loading product...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-600 mt-10">{error}</h2>;
  }

  if (!product) {
    return <h2 className="text-center mt-10">Product not found.</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <Link to="/products" className="text-blue-600">
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-8 bg-white p-6 rounded-xl shadow">

        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-96 object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-blue-600 mb-4">
            ${product.price}
          </p>

          <p className="mb-6">
            Rating: {product.rating?.rate ?? "Not available"} / 5
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
