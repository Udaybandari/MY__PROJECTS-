
import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import { useAuth } from "./Context/AuthContext";

// Components
import Navbar from "./COMPONENTS/Navbar";
import Sidebar from "./COMPONENTS/Sidebar";
import ProtectedRoute from "./COMPONENTS/ProtectedRoute";



import Home from "./PAGES/Home";
import Products from "./PAGES/Products";
import ProductDetails from "./PAGES/ProductDetails";
import Cart from "./PAGES/Cart";
import Checkout from "./PAGES/Checkout";
import Orders from "./PAGES/Orders";
import Login from "./PAGES/Login";
import Register from "./PAGES/Register";
import Dashboard from "./PAGES/Admin/Dashboard";
import ManageOrders from "./PAGES/Admin/ManageOrders";
import ManageUsers from "./PAGES/Admin/ManageUsers";
import ManageProducts from "./PAGES/Admin/ManageProducts";


// Customer Layout
function MainLayout() {
  return (
    <> 
      <Navbar />
      <Outlet />
    </>
  );
}

// Admin Layout
function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={true} onClose={() => {}} />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

// 404 Page
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-blue-600">
        404
      </h1>
      <p className="text-xl mt-4">
        Page Not Found
      </p>
    </div>
  );
}

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Customer Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute user={user} allowedRoles={["user", "admin"]}>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute user={user} allowedRoles={["user", "admin"]}>
              <Orders />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute user={user} allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ManageProducts />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="orders" element={<ManageOrders />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;
