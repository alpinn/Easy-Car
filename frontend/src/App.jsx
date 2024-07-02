import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/forms/LoginForm";
import Homepage from "./pages/Homepage";
import Register from "./components/forms/RegisterForm";
import ForgotPassword from "./components/forms/ForgotPasswordForm";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
