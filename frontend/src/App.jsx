import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Content from "./pages/Content";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Content />}
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
