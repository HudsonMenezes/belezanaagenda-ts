import { Login } from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/cadastro";
import "./App.css";
import {
  BrowserRouter,
  Routes as WrapperRoutes,
  Route,
} from "react-router-dom";
import CadastroConcluido from "./pages/CadastroConcluido/CadastroConcluido";
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import Agendamento from "./pages/Agendamento/Agendamento";

export default function Routes() {
  return (
    <div className="App container">
      <BrowserRouter>
        <WrapperRoutes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastroconcluido" element={<CadastroConcluido />} />
          <Route path="/paginainicial" element={<PaginaInicial />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </WrapperRoutes>
      </BrowserRouter>
    </div>
  );
}
