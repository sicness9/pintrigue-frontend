import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import React from "react";

const RequireAuth = () => {
  const token = useSelector((state) => state.token.value);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthed-view" state={{ from: location }} replace />
  );
};

export default RequireAuth;
