
import { useEffect, useState } from "react";
import api from "../../Services/api";
import Modal from "../../COMPONENTS/Modal";

function ManageProducts() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: ""
  });

  // Fetch Products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Open Add Modal
  const handleAdd = () => {
    setEditId(null);
    setFormData({
      title: "",
      price: "",
      category: "",
      description: "",
      image: ""
    });
    setIsOpen(true);
  };

  // Open Edit Modal
  const handleEdit = (product) => {
    setEditId(product.id);
    setFormData({
      title: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image
    });
    setIsOpen(true);
  };

  // Save Product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        const response = await api.put(
          `/products/${editId}`,
          formData
        );

        setProducts((prev) =>
          prev.map((product) =>
            product.id === editId
              ? { ...product, ...response.data }
              : product
          )
        );
      } else {
        const response = await api.post(
          "/products",
          formData
        );

        setProducts((prev) => [
          response.data,
          ...prev
        ]);
      }

      setIsOpen(false);
    } catch (error) {
      console.log("Error saving product", error);
    }
  };

  // Delete Product
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/products/${id}`);

      setProducts((prev) =>
        prev.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.log("Error deleting product", error);
    }
  };

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Manage Products
        </h1>

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          + Add Product
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-4"
            />

            <h2 className="font-bold line-clamp-1">
              {product.title}
            </h2>

            <p className="text-blue-600 font-bold mt-2">
              ${product.price}
            </p>

            <div className="flex gap-3 mt-4">

              <button
                onClick={() => handleEdit(product)}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* Add / Edit Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={editId ? "Edit Product" : "Add Product"}
      >
        <form onSubmit={handleSubmit} className="space-y-3">

          {[
            { name: "title", placeholder: "Product Title" },
            { name: "price", placeholder: "Price" },
            { name: "category", placeholder: "Category" },
            { name: "image", placeholder: "Image URL" },
            { name: "description", placeholder: "Description" }
          ].map((field) => (
            <input
              key={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              className="w-full border p-3 rounded-lg"
            />
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            {editId ? "Update Product" : "Add Product"}
          </button>

        </form>
      </Modal>

    </div>
  );
}

export default ManageProducts;
