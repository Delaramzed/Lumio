import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = true;

export function ProtectedRoute() {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
