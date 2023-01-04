import useForm from "../../components/Hooks/useForm";
import Input from "../../components/Input/Input";
import { FormEvent } from "react";

import { FormStyle } from "./styles";
import { ButtonStyle } from "../../components/Button/style";

import logo from "../../assets/logo.png";

function Cadastro() {
  const nome = useForm();
  const email = useForm();
  const senha = useForm();
  const telefone = useForm();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(nome.value);
    console.log(email.value);
    console.log(senha.value);
    console.log(telefone.value);
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
          type="number"
          placeholder="Telefone"
          name="phone"
          {...telefone}
        />

        <ButtonStyle type="submit" className="btn text-black px-5 fw-bold">
          Cadastrar
        </ButtonStyle>
      </FormStyle>
    </div>
  );
}

export default Cadastro;
