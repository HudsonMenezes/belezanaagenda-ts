import React from "react";
import { Link } from "react-router-dom";
import arame from "../../assets/aramedaagenda.png";
import { LogoStyle, ArameImg} from "../Login/Styles";
import logo from "../../assets/logo.png";
import sucesso from "../../assets/sucesso.png";
import { ButtonStyle } from "../../components/Button/style";

function CadastroConcluido() {
  return (
    <div id="box">
      <div>
        <ArameImg src={arame} alt="aramedaagenda" />
      </div>
      <div className="d-flex-column">
        <LogoStyle src={logo} alt="logo" />
        <br />
        <img
          className="mt-4 mb-4 d-inline-block"
          src={sucesso}
          alt="Cadastro Realizado com Sucesso"
        />
        <br />
        <ButtonStyle className="mb-4">
          <Link to="/paginainicial" className="btn text-black px-5 fs-6 fw-bold">
            Acessar meu Perfil
          </Link>
        </ButtonStyle>
      </div>
    </div>
  );
}

export default CadastroConcluido;
