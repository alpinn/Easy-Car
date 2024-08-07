import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginAdmin } from "./auth-slice.js";

const ProtectedRoute = ({ children }) => {
  const { admin } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!admin) {
    // If admin is not logged in, redirect to login page
    return <Navigate to="/admin-login" replace />;
  }

  // If admin is logged in, render the children
  return children;
};

export default ProtectedRoute;