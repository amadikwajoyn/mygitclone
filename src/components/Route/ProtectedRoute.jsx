import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = () => {
  const auth = useAuth();
  return auth ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoute;
