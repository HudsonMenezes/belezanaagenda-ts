import useForm from "../../components/Hooks/useForm";
import Input from "../../components/Input/Input";
import { FormEvent } from "react";
import { FormStyle, LogoStyle, ArameImg } from "./styles";
import arame from "../../assets/aramedaagenda.png";
import { ButtonStyle } from "../../components/Button/style";
import logo from "../../assets/logo.png";
import Error from "../../components/Helper/Error";
import Button from "../../components/Button/Button";

function Cadastro() {
  const nome = useForm("nome");
  const email = useForm("email");
  const senha = useForm("senha");
  const telefone = useForm("number");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div id="box">
    <div>
      <ArameImg src={arame} alt="aramedaagenda" />
    </div>
    <div>
      <LogoStyle className="mb-3" src={logo} alt="logo" />
      <p className="fw-semibold mb-3">Preencha todas as informações abaixo</p>
      <FormStyle onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          placeholder="Nome"
          name="username"
          {...nome}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          {...email}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Senha"
          name="password"
          {...senha}
        />
        <Input
          label="Telefone"
          type="text"
          placeholder="Telefone"
          name="phone"
          {...telefone}
        />

        <Button className="mb-5">Cadastrar</Button>
        {/* <Error error={} /> */}
      </FormStyle>
    </div>
    </div>
  );
}
export default Cadastro;
