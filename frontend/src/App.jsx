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
import UpdateDashboard from "./pages/UpdateDashboard";
import AdminLogin from "./components/forms/AdminLoginForm";
import CarDashboard from "./pages/CarDashboard";
import PesananDashboard from "./pages/PesananDashboard";
import UserDashboard from "./pages/UserDashboard";
import CarAddDashboard from "./pages/CarAddDashboard";
import CarUpdateDashboard from "./pages/CarUpdateDashboard";
import ContactUsDashboard from "./pages/ContactUsDashboard";
import Pesanan from "./pages/Pesanan";

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
            path="/admin"
            element={<AdminLogin />}
          />
          <Route
            path="/admin-manajemen-dashboard"
            element={<ManajemenDashboard />}
          />
          <Route
            path="/admin-update-dashboard"
            element={<UpdateDashboard />}
          />
          <Route
            path="/dashboard/car"
            element={<CarDashboard />}
          />
          <Route
            path="/dashboard/car/add"
            element={<CarAddDashboard />}
          />
          <Route
            path="/dashboard/car/edit/:id"
            element={<CarUpdateDashboard />}
          />
          <Route
            path="/dashboard/pesanan"
            element={<PesananDashboard />}
          />
          <Route
            path="/dashboard/user"
            element={<UserDashboard />}
          />
          <Route
            path="/dashboard/pertanyaan"
            element={<ContactUsDashboard />}
          />
          <Route
            path="/pesan/:id"
            element={<Pesanan />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
