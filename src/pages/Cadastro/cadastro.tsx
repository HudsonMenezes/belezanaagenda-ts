import Input from "../../components/Input/Input";
import { FormEvent, useState } from "react";
import { FormStyle, LogoStyle, ArameImg } from "./styles";
import arame from "../../assets/aramedaagenda.png";
import logo from "../../assets/logo.png";
// import Error from "../../components/Helper/Error";
import Button from "../../components/Button/Button";
import { cadastroCliente } from "../../services/MainApi/clientes";

function Cadastro() {
  const [nome, setNome] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      nome,
      telefone,
      email,
      senha,
    };

    try {
      const response = await cadastroCliente(payload);
      if (response.status !== 201) {
        return alert("Alguma coisa deu errado!");
      }
      alert("Cadastro efetuado com Sucesso!");
    } catch (error) {
      alert("Deu algo errado!");
    }
  };

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
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            name="username"
            // {...nome} Comentei porque estava dando erro.
          />
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            // {...email}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            name="password"
            // {...senha}
          />
          <Input
            label="Telefone"
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            name="phone"
            // {...telefone}
          />

          <Button type="submit" className="mb-5">
            Cadastrar
          </Button>
          {/* <Error error={} /> */}
        </FormStyle>
      </div>
    </div>
  );
}
export default Cadastro;
