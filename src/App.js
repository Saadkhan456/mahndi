import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Results from "./pages/Results";
import Navbar from "./components/Navbar";

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        {!isAdminLoggedIn && <Navbar />}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/results" element={<Results />} />

          {/* Admin Login */}
          <Route
            path="/admin-login"
            element={<AdminLogin onLogin={setIsAdminLoggedIn} />}
          />

          {/* Admin Dashboard - Protected Route */}
          <Route
            path="/admin-dashboard"
            element={
              isAdminLoggedIn ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/admin-login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
