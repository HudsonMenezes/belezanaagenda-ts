import { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import backarow from "../../assets/back.png";
import { Stepper } from "react-form-stepper";
import { TextoPasso } from "../AgendaData/Styles";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { listarProfissionalServicoId } from "../../services/MainApi/servicos";
import Profissional from "../../components/Profissional/Profissional";

function AgendaProfissional() {
  const { service, hora, data, setProfissional, profissional } =
    useContext(UserAgenda);
  let id = service;

  useEffect(() => {
    const data = async () => {
      try {
        const response = await listarProfissionalServicoId(id);
        setProfissional(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, [setProfissional, id]);

  function handleSubmit() {
    console.log(service);
    console.log(hora);
    console.log(data.toISOString());
  }
  return (
    <div>
      <div id="boxHome">
        <Header />
        <div className="conteinerBase agendamentoPage">
          <section>
            <div className="backButton">
              <img src={backarow} alt="Voltar" className="m-2" />
              <a href="./horario">Voltar</a>
            </div>
          </section>
          <Stepper
            steps={[{ label: "" }, { label: "" }, { label: "" }]}
            styleConfig={{
              activeBgColor: "#ffc973",
              activeTextColor: "#000",
              inactiveBgColor: "#eaeaea",
              inactiveTextColor: "#000",
              completedBgColor: "#ffc973",
              completedTextColor: "#000",
              size: "3em",
              circleFontSize: 16,
              labelFontSize: 14,
              borderRadius: 50,
              fontWeight: 4,
            }}
            activeStep={2}
          />
          <TextoPasso>
            3º PASSO <br />
            <span>Escolha o profissional</span>
          </TextoPasso>
          <p className="mt-5">Quem vai te atender:</p>
          {profissional && (
            <Profissional
              nome={profissional.profissional?.nome}
              servico={profissional.servico?.servico}
            />
          )}
          <div className="text-center">
            <Button onClick={handleSubmit} type="submit" className="mt-2">
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgendaProfissional;
