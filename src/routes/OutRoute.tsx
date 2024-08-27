import { Navigate, Outlet } from "react-router-dom";
import { useAuthorizationState } from "../store/authorization";

interface OutRoute {

  redirectTo?: string;
  children?: React.ReactNode;
}

export default function OutRoute  ({
  redirectTo = "/",
  children,
}: OutRoute) {
const access_token = useAuthorizationState.getState().access_token;

  if (access_token) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};