import { useContext } from "react";
import Header from "../../components/Header/Header";
import DatePicker from "../../components/Calendario/Calendario";
import Button from "../../components/Button/Button";
import backarow from "../../assets/back.png";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { useNavigate } from "react-router-dom";

import { Stepper } from "react-form-stepper";
import { TextoPasso } from "./Styles";

function AgendaData() {
  const { data, setData } = useContext(UserAgenda);
  const navigate = useNavigate();

  function handleSubmit() {
    if (data) {
      setData(data);
      navigate("/horario");
    }
  }

  return (
    <div>
      <div id="boxHome">
        <Header />
        <div className="conteinerBase agendamentoPage">
          <section>
            <div className="backButton">
              <img src={backarow} alt="Voltar" className="m-2" />
              <a href="./agenda">Voltar</a>
            </div>
          </section>
          <Stepper
            steps={[
              { label: "Escolha Data" },
              { label: "Escolha o Horário" },
              { label: "Selecione o Profissional" },
            ]}
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
            activeStep={0}
          />
          <TextoPasso>
            1º PASSO <br />
            <span>Escolha o dia</span>
          </TextoPasso>
          <DatePicker />
          <div className="text-center">
            <Button onClick={handleSubmit} type="submit" className="mt-1">
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgendaData;
