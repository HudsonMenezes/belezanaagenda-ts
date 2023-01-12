import Input from "../../components/Input/Input";
import { FormEvent, useContext } from "react";
import { FormStyle, LogoStyle, ArameImg } from "./styles";
import arame from "../../assets/aramedaagenda.png";
import logo from "../../assets/logo.png";
import Error from "../../components/Helper/Error";
import Button from "../../components/Button/Button";
import useForm from "../../components/Hooks/useForm";
import { UserContext } from "../../UserContext";

function Cadastro() {
  const nome = useForm();
  const telefone = useForm();
  const email = useForm();
  const senha = useForm();
  const aniversario = new Date();
  const sexo = "F";

  const payload = {
    nome: nome.value,
    telefone: telefone.value,
    email: email.value,
    senha: senha.value,
    aniversario,
    sexo,
  };
  const { loginCreate, error, loading, user } = useContext(UserContext);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    loginCreate(payload);
  };

  return (
    <>
      {user?.msg}
      <div id="box">
        <div>
          <ArameImg src={arame} alt="aramedaagenda" />
        </div>
        <div>
          <LogoStyle className="mb-3" src={logo} alt="logo" />
          <p className="fw-semibold mb-3">
            Preencha todas as informações abaixo
          </p>
          <FormStyle onSubmit={handleSubmit}>
            <Input
              label="Nome"
              type="text"
              placeholder="Nome"
              name="nome"
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
              name="senha"
              {...senha}
            />
            <Input
              label="Telefone"
              type="text"
              placeholder="Telefone"
              name="telefone"
              {...telefone}
            />
            {loading ? (
              <Button disabled type="submit" className="mb-5">
                Cadastrando...
              </Button>
            ) : (
              <Button type="submit" className="mb-5">
                Cadastrar
              </Button>
            )}
            <Error error={error} />
          </FormStyle>
        </div>
      </div>
    </>
  );
}
export default Cadastro;
