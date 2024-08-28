import { Navigate, Outlet } from "react-router-dom";
import { useAuthorizationState } from "../store/authorization";

interface ProtectedRouteProps {

  redirectTo?: string;
  children?: React.ReactNode;
}

export default function ProtectedRoute  ({
  redirectTo = "/singin",
  children,
}: ProtectedRouteProps) {
const access_token = useAuthorizationState.getState().access_token;
console.log("🚀 ~ access_token:", access_token)

  if (!access_token) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};