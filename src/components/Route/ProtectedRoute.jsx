import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("user")) || null;

  if (isLoggedIn && user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = () => {
  const auth = useAuth();
  return !auth ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoute;
