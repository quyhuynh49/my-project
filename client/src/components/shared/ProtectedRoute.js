import React from "react";
import { useAppContext } from "../../context/appContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useAppContext();
  console.log(user);
  /* if (!user) {
    return <Navigate to="/login" />;
  } */
  return children;
}

export default ProtectedRoute;
