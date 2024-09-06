
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoFound from "../pages/404";
import SignIn from "../pages/auth/SignIn";
import Home from "../pages/home";
import OutRoute from "./OutRoute";
import ProtectedRoute from "./ProtectedRoutes";

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoFound />} />
        <Route element={<ProtectedRoute />}>
          <Route index path="/" element={<Home />} />
        </Route>
        <Route element={<OutRoute />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default index