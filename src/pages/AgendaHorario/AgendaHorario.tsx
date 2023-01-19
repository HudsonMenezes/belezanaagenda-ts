import { useContext } from "react";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { Link, useNavigate } from "react-router-dom";
import backarow from "../../assets/back.png";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import HourPicker from "../../components/Horas/HourPicker";
import { Stepper } from "react-form-stepper";
import { TextoPasso } from "../AgendaData/Styles";

function AgendaHorario() {
  const navigate = useNavigate();
  const { hora } = useContext(UserAgenda);

  function handleSubmit() {
    if (hora) return navigate("/profissional");
  }

  return (
    <div>
      <div id="boxHome">
        <Header />
        <div className="conteinerBase agendamentoPage">
          <section>
            <div className="backButton">
              <img src={backarow} alt="Voltar" className="m-2" />
              <Link to="/data">Voltar</Link>
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
            activeStep={1}
          />
          <TextoPasso>
            2º PASSO <br />
            <span>Escolha o horário</span>
          </TextoPasso>

          <HourPicker />
          <div className="text-center">
            <Button onClick={handleSubmit} type="submit" className="mt-3">
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgendaHorario;
