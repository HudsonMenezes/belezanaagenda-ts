import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import sucesso from "../../assets/sucesso.png";
import { ButtonStyle } from "../../components/Button/style";

function CadastroConcluido() {
  return (
    <div className="d-flex-column">
      <img className="mt-5 mb-5 d-inline-block" src={logo} alt="logo" />
      <br />
      <img
        className="mt-5 mb-5 d-inline-block"
        src={sucesso}
        alt="Cadastro Realizado com Sucesso"
      />
      <br />
      <ButtonStyle>
        <Link to="/paginainicial" className="btn text-black px-5 fs-6 fw-bold">
          Acessar meu Perfil
        </Link>
      </ButtonStyle>
    </div>
  );
}

export default CadastroConcluido;
