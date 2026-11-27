import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../Data/Products";

function Home() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Explore Products
        </h1>

        <p className="text-gray-500 mb-8">
          Find the best products for your needs.
        </p>

        {/* Search */}

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border p-3 rounded-lg mb-6 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Category Filter */}

        <div className="flex flex-wrap gap-3 mb-8">

          {["All", "Laptop", "Mobile", "Accessories", "Tablet"].map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full ${
                category === item
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-600"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Product List */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >

              <div className="text-6xl text-center py-8 bg-blue-50 rounded-lg mb-5">
                {product.emoji}
              </div>

              <h2 className="text-xl font-bold text-gray-800">
                {product.name}
              </h2>

              <p className="text-gray-500 mt-2">
                {product.category}
              </p>

              <p className="text-2xl font-bold text-blue-600 mt-3">
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              <Link
                to={`/products/${product.id}`}
                className="block text-center bg-blue-600 text-white py-3 rounded-lg mt-5 hover:bg-blue-700"
              >
                View Details
              </Link>

            </div>

          ))}

        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found.
          </p>
        )}

      </div>

    </div>
  );
}

export default Home;