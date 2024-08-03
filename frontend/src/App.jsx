import react from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/forms/LoginForm";
import Homepage from "./pages/Homepage";
import Register from "./components/forms/RegisterForm";
import ForgotPassword from "./components/forms/ForgotPasswordForm";
import ResetPasswordForm from "./components/forms/ResetPasswordForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Testimonial from "./pages/Testimonial";
import ChangePassword from "./pages/ChangePassword";

import ManajemenDashboard from "./pages/ManajemenDashboard";
import AdminLogin from "./components/forms/AdminLoginForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/lupapassword"
            element={<ForgotPassword />}
          />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordForm />}
          />
          <Route
            path="/about-us"
            element={<About />}
          />
          <Route
            path="/contact-us"
            element={<Contact />}
          />
          <Route
            path="/book-car"
            element={<Booking />}
          />
          <Route
            path="/testimonial"
            element={<Testimonial />}
          />
          <Route
            path="/change-password/:id"
            element={<ChangePassword />}
          />
          <Route
            path="/admin-login"
            element={<AdminLogin />}
          />
          <Route
            path="/admin-manajemen-dashboard"
            element={<ManajemenDashboard />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
