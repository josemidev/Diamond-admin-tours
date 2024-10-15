import { useAuthorizationState } from "@/store/authorization";
import { useCurrentUser } from "@/store/user";
import { useNavigate } from "react-router-dom";

function LogOut(): VoidFunction {
  const navigate = useNavigate();
  const { removeAccesToken } = useAuthorizationState.getState();
  const { removeCurrentUser } = useCurrentUser.getState();

  function handleLogOut(): void {
    removeAccesToken();
    removeCurrentUser();
    navigate("/signin");
  }

  return handleLogOut;
}

export default LogOut;
