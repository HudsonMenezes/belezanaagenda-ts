import useForm from "../../components/Hooks/useForm";
import Input from "../../components/Input/Input";
import { FormEvent } from "react";
import { FormStyle } from "./styles";
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
    <div>
      <img className="mt-5 mb-5" src={logo} alt="logo" />
      <p className="fw-semibold mb-4">Preencha todas as informações abaixo</p>
      <FormStyle className="" onSubmit={handleSubmit}>
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

        <Button>Cadastrar</Button>
        {/* <Error error={} /> */}
      </FormStyle>
    </div>
  );
}

export default Cadastro;
