import { getLocalStorage } from "frontend/helpers";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function Protected({ path, ...props }) {
  const location = useLocation();
  const token = getLocalStorage("token");
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} {...props} />
  );
}
