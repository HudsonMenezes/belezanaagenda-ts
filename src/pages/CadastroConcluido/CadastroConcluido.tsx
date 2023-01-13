import React from "react";
import { Link } from "react-router-dom";
import { LogoStyle, FundoLogin, FundoLogin2} from "../Login/Styles";
import logo from "../../assets/logo2.png";
import sucesso from "../../assets/sucesso.png";
import { ButtonStyle } from "../../components/Button/style";
import fundo from "../../assets/fundo.png";
import fundo2 from "../../assets/fundo2.png";

function CadastroConcluido() {
  return (
    <div>
      <div id="box">
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
          <FundoLogin className="d-block d-sm-none" src={fundo} alt="logo" />
        </div>
      </div>
      <FundoLogin2 className="d-none d-sm-block" src={fundo2} alt="logo" />
    </div>
  );
}

export default CadastroConcluido;
