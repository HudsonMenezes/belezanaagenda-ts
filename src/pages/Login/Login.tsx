import { LogoStyle, Hr, MiniImg } from "./Styles";
import logo from "../../assets/logo.png";
import appleLogo from "../../assets/appleLogo.png";
import googleLogo from "../../assets/googleLogo.png";
import facebookLogo from "../../assets/facebookLogo.png";
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
    <div>
      <LogoStyle src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          placeholder="Nome"
          name="username"
          {...username}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Senha"
          name="password"
          {...password}
        />
        <Button>Entrar</Button>
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
