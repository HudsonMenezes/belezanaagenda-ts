import React from "react";

import { LogoStyle, Input, Hr, MiniImg } from "./Styles";

import logo from "../../assets/logo.png";
import appleLogo from "../../assets/appleLogo.png";
import googleLogo from "../../assets/googleLogo.png";
import facebookLogo from "../../assets/facebookLogo.png";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div>
      <LogoStyle src={logo} alt="logo" />
      <form>
        <Input type="text" placeholder="Login" />
        <Input type="password" placeholder="Senha" />
      </form>
      <Link className="btn text-black px-5 fs-5 fw-bold" to="/cadastro">
        Entrar
      </Link>
      <div className="d-flex justify-content-around mt-4">
        <Hr className="linhaLogin" />
        <p>Ou entre com: </p>
        <Hr className="linhaLogin" />
      </div>
      <Link
        to="/cadastro"
        type="button"
        className="btn text-black px-5 fs-5 fw-bold"
      >
        Entrar
      </Link>
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
