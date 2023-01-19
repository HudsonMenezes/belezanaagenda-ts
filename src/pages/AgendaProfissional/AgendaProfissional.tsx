import { useContext, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Profissional from "../../components/Profissional/Profissional";
import { ProfissionalServico } from "../../services/MainApi/agendamento";
import backarow from "../../assets/back.png";
import { Stepper } from "react-form-stepper";
import { TextoPasso } from "../AgendaData/Styles";
import { UserAgenda } from "../../components/Contexts/UserAgenda";

interface ProfissionalProps {
  profissional: {
    nome: string;
  };
  servico: {
    servico: string;
  };
}

function AgendaProfissional() {
  const [profissionais, setProfissionais] = useState<ProfissionalProps[]>([]);
  const { service, hora, data } = useContext(UserAgenda);

  function handleSubmit() {
    console.log(service);
    console.log(hora);
    console.log(data.toISOString());
  }

  useEffect(() => {
    const data = async () => {
      try {
        const response = await ProfissionalServico();
        setProfissionais(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, [setProfissionais]);

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
          {profissionais.map((prof) => (
            <Profissional
              nome={prof.profissional?.nome}
              servico={prof.servico?.servico}
            />
          ))}
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
