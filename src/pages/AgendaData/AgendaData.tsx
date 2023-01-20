import { useContext } from "react";
import Header from "../../components/Header/Header";
import DatePicker from "../../components/Calendario/Calendario";
import Button from "../../components/Button/Button";
import backarow from "../../assets/back.png";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { Link, useNavigate } from "react-router-dom";

import { Stepper } from "react-form-stepper";
import { TextoPasso, SectionStepOne } from "./Styles";

function AgendaData() {
  const { data } = useContext(UserAgenda);
  const navigate = useNavigate();

  function handleSubmit() {
    if (data) return navigate("/horario");
  }

  return (
    <SectionStepOne>
      <Header />
      <div className="container-grid">
        <div className="textStep">
          <TextoPasso>
            1º PASSO <br />
            <span>Escolha o dia</span>
          </TextoPasso>
        </div>
        <div className="arrow">
          <div className="step">
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
              activeStep={0}
            />
          </div>
          <div className="datePicker">
            <div className="backButton">
              <img src={backarow} alt="Voltar" className="m-2" />
              <Link to="/agenda">Voltar</Link>
            </div>
            <DatePicker />
            <Button onClick={handleSubmit} type="submit" className="mt-2">
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </SectionStepOne>
  );
}
export default AgendaData;
