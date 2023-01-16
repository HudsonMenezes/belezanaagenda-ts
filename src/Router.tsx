import { Login } from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/cadastro";
import "./App.css";
import {
  BrowserRouter,
  Routes as WrapperRoutes,
  Route,
} from "react-router-dom";
import { UserStorage } from "./UserContext";
import Agenda from "./pages/Agenda/Agenda";
import AgendaData from "./pages/AgendaData/AgendaData";
import AgendaHorario from "./pages/AgendaHorario/AgendaHorario";
import Perfil from "./pages/Perfil/Perfil";
import AgendaSucesso from "./pages/AgendaSucesso/AgendaSucesso";
import AgendaProfissional from "./pages/AgendaProfissional/AgendaProfissional";

export default function Routes() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <WrapperRoutes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/data" element={<AgendaData />} />
            <Route path="/horario" element={<AgendaHorario />} />
            <Route path="/profissional" element={<AgendaProfissional />} />
            <Route path="/sucesso" element={<AgendaSucesso />} />
            <Route path="/perfil" element={<Perfil />} />
          </WrapperRoutes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
