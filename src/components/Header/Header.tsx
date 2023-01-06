import React from "react";
// import Sidebar from "../Sidebar/Sidebar";

import { HeaderStyle } from "./Styles";

import Logo from "../../assets/logo.png";
import FotoPerfil from "../../assets/fotoperfil.png";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  return (
    <div>
      <HeaderStyle className="d-flex justify-content-around align-items-center">
        <Sidebar />
        <img src={Logo} alt="Logo" className="logo" />
        <img src={FotoPerfil} alt="Foto de Perfil" className="fotoperfil" />
      </HeaderStyle>
    </div>
  );
}

export default Header;
