import { LogoStyle, MiniImg, ArameImg} from "./Styles";
import logo from "../../assets/logo.png";
import appleLogo from "../../assets/appleLogo.png";
import googleLogo from "../../assets/googleLogo.png";
import facebookLogo from "../../assets/facebookLogo.png";
import arame from "../../assets/aramedaagenda.png";
import { Navigate, Link } from "react-router-dom";
import { FormEvent } from "react";
import useForm from "../../components/Hooks/useForm";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
// import Cadastro from '../Cadastro/cadastro';

export function Login() {
  const username = useForm("nome");
  const password = useForm("senha");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    <Navigate to="/cadastro" />;
  }

  return (
    <div id="box">
      <div>
        <ArameImg src={arame} alt="aramedaagenda" />
      </div>
      <div>
        <LogoStyle src={logo} alt="logo" />
        <div className="mt-2">
          <p>Entre em sua conta</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            type="text"
            placeholder="seunome@email.com"
            name="username"
            {...username}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="******"
            name="password"
            {...password}
          />
          <Button className="mt-4">Entrar</Button>
        </form>
        <div>
          <p className="mt-3">Ainda não tem conta? <br /> <b>Cadastre-se</b> </p>
        </div>
        <div className="mt-3">
          <hr/>
          <p>Ou entre com:</p>
        </div>
        <div className="d-flex justify-content-around mb-4">
          <MiniImg src={appleLogo} alt="applelogo" />
          <MiniImg src={googleLogo} alt="googlelogo" />
          <MiniImg src={facebookLogo} alt="facebooklogo" />
        </div>
      </div>
    </div>
  );
}