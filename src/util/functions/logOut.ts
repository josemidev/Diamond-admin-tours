import { useAuthorizationState } from "@/store/authorization";
import { useNavigate } from "react-router-dom";

function LogOut(): VoidFunction {
  const navigate = useNavigate();
  const {removeAccesToken} = useAuthorizationState.getState();

  function handleLogOut(): void {
    removeAccesToken();
    navigate("/singin");
  }

  return handleLogOut;
}

export default LogOut;