import { Login } from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/cadastro";
import "./App.css";
import {
  BrowserRouter,
  Routes as WrapperRoutes,
  Route,
} from "react-router-dom";

export default function Routes() {
  return (
    <div className="App container">
      <BrowserRouter>
        <WrapperRoutes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </WrapperRoutes>
      </BrowserRouter>
    </div>
  );
}
