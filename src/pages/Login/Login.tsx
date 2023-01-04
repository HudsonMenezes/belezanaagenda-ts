import React from "react";

import { LogoStyle, Input, Hr, MiniImg } from "./Styles";
import { ButtonStyle } from "../../components/Button/style";

import logo from "../../assets/logo.png";
import appleLogo from "../../assets/appleLogo.png";
import googleLogo from "../../assets/googleLogo.png";
import facebookLogo from "../../assets/facebookLogo.png";
import { Navigate, Link } from "react-router-dom";
import { FormEvent } from "react";
// import Cadastro from '../Cadastro/cadastro';

export function Login() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    <Navigate to="/cadastro" />;
  }

  return (
    <div>
      <LogoStyle src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Login" />
        <Input type="password" placeholder="Senha" />
        <ButtonStyle>
          <Link to="/cadastro" className="btn text-black px-5 fw-bold">
            Entrar
          </Link>
        </ButtonStyle>
      </form>

      <div className="d-flex justify-content-around mt-4">
        <Hr className="linhaLogin" />
        <p>Ou entre com: </p>
        <Hr className="linhaLogin" />
      </div>

      <div>
        <MiniImg src={appleLogo} alt="applelogo" />
        <MiniImg src={googleLogo} alt="googlelogo" />
        <MiniImg src={facebookLogo} alt="facebooklogo" />
      </div>
      <div>
        <p className="mt-4 fontsize">Ainda não tem cadastro? Cadastre-se</p>
      </div>
    </div>
  );
}
