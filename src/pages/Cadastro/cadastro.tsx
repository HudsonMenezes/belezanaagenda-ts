import Input from "../../components/Input/Input";
import { FormEvent, useContext, useState } from "react";
import { FormStyle, LogoStyle, FundoLogin, FundoLogin2 } from "./styles";
import logo from "../../assets/logo2.png";
import Error from "../../components/Helper/Error";
import Button from "../../components/Button/Button";
import useForm from "../../components/Hooks/useForm";
import fundo from "../../assets/fundo.png";
import fundo2 from "../../assets/fundo2.png";
import { cadastroCliente } from "../../services/MainApi/clientes";
import { UserContext } from "../../components/Contexts/UserContext";

function Cadastro() {
  const nome = useForm("nome");
  const telefone = useForm("number");
  const email = useForm("email");
  const senha = useForm("senha");

  const { userLogin } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (
      nome.validate() &&
      telefone.validate() &&
      email.validate() &&
      senha.validate()
    )
      try {
        setError(null);
        setLoading(true);
        const response = await cadastroCliente({
          nome: nome.value,
          email: email.value,
          senha: senha.value,
          telefone: telefone.value,
        });
        if (response.status === 201) userLogin(email.value, senha.value);
      } catch (err: any) {
        const message = err.response.data;
        setError(message);
      } finally {
        setLoading(false);
      }
  };

  return (
    <>
      <div>
        <div id="box">
          <div>
            <LogoStyle className="mb-3" src={logo} alt="logo" />
            <p className="mb-3 text-white">
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
                <Button type="submit" className="mt-4">
                  Cadastrar
                </Button>
              )}
              <Error error={error} />
            </FormStyle>
            <FundoLogin className="d-block d-sm-none" src={fundo} alt="logo" />
          </div>
        </div>
        <FundoLogin2 className="d-none d-sm-block" src={fundo2} alt="logo" />
      </div>
    </>
  );
}
export default Cadastro;
