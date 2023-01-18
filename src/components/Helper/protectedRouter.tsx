import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  const { id } = useContext(UserContext);

  return id ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouter;
