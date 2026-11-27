
import { Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Discover the latest gadgets"
    },
    {
      id: 2,
      name: "Men's Clothing",
      description: "Upgrade your style"
    },
    {
      id: 3,
      name: "Women's Clothing",
      description: "Explore new collections"
    },
    {
      id: 4,
      name: "Jewellery",
      description: "Find something special"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Welcome to ShopSphere
          </h1>

          <p className="text-lg mb-8">
            Discover amazing products at great prices.
          </p>

          <Link
            to="/products"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </section>

      {/* Promotional Section */}
      <section className="bg-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Special Offers Are Waiting!
          </h2>

          <p className="text-gray-600 mb-6">
            Explore our products and find your favourites.
          </p>

          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Explore Products
          </Link>
        </div>
      </section>

    </div>
  );
}

// Reusable child component
function CategoryCard({ category }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-3">
        {category.name}
      </h3>

      <p className="text-gray-600 mb-4">
        {category.description}
      </p>

      <Link
        to="/products"
        className="text-blue-600 font-semibold"
      >
        Explore →
      </Link>
    </div>
  );
}

export default Home;
