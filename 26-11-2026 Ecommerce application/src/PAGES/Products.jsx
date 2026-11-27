
import useFetch from "../Hooks/useFetch";
import ProductCard from "../COMPONENTS/ProductCard";
import { useCart } from "../Context/CartContext";

function Products() {

  const { data, loading, error } = useFetch("/products");
  const { dispatch } = useCart();

  if (loading) {
    return <h2 className="text-center mt-10">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500">Error: {error}</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(product) =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product
              })
            }
          />
        ))}

      </div>

    </div>
  );
}

export default Products;
