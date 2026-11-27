import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Navbar from "./COmponents/Navbar";
import Login from "./COmponents/Login";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login without Navbar */}
        <Route path="/login" element={<Login />} />

        {/* Navbar as Parent */}
        <Route element={<Navbar />}>

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dynamic Route */}
          <Route path="/products/:id" element={<ProductDetails />} />

          {/* Dashboard Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;