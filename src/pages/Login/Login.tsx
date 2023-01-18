import { LogoStyle, MiniImg, FundoLogin, FundoLogin2 } from "./Styles";
import logo from "../../assets/logo2.png";
import fundo from "../../assets/fundo.png";
import fundo2 from "../../assets/fundo2.png";
import googleLogo from "../../assets/googleLogo.png";
import facebookLogo from "../../assets/facebookLogo.png";
import { Link } from "react-router-dom";
import { FormEvent, useContext } from "react";
import useForm from "../../components/Hooks/useForm";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { UserContext } from "../../UserContext";
import Error from "../../components/Helper/Error";

export function Login() {
  const email = useForm("nome");
  const senha = useForm("senha");
  const { userLogin, error, loading } = useContext(UserContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (email.validate() && senha.validate()) {
      userLogin(email.value, senha.value);
    }
  }

  return (
    <div>
      <div id="box">
        <div>
          <LogoStyle src={logo} alt="logo" />
          <div className="mt-2 text-white">
            <p>Acesse sua conta</p>
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              label="Nome"
              type="text"
              placeholder="seunome@email.com"
              name="email"
              {...email}
            />
            <Input
              label="Senha"
              type="password"
              placeholder="******"
              name="senha"
              {...senha}
            />
            {loading ? (
              <Button disabled type="submit" className="mt-4">
                Entrando...
              </Button>
            ) : (
              <Button type="submit" className="mt-4">
                Entrar
              </Button>
            )}
            <Error error={error} />
          </form>
          <div>
            <p className="mt-4 text-white">
              Ainda não tem conta? <br />{" "}
              <Link className="linkCollor" to="/cadastro">
                <b>Cadastre-se</b>
              </Link>
            </p>
          </div>
          <div className="mt-3 text-white">
            <hr />
            <p>Ou entre com:</p>
          </div>
          <div className="d-flex justify-content-evenly mb-4">
            <MiniImg src={googleLogo} alt="googlelogo" />
            <MiniImg src={facebookLogo} alt="facebooklogo" />
          </div>
        </div>
        <FundoLogin className="d-block d-sm-none" src={fundo} alt="logo" />
      </div>
      <FundoLogin2 className="d-none d-sm-block" src={fundo2} alt="logo" />
    </div>
  );
}
