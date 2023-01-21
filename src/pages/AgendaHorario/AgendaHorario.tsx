import { useContext } from "react";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import HourPicker from "../../components/Horas/HourPicker";
import { SectionStepTwo } from "./Styles";
import UserHeader from "../../components/UserHeader/UserHeader";

function AgendaHorario() {
  const navigate = useNavigate();
  const { hora } = useContext(UserAgenda);

  function handleSubmit() {
    if (hora) return navigate("/profissional");
  }

  return (
    <SectionStepTwo>
      <Header />
      <div className="container-grid">
        <div className="textStep">
          <UserHeader />
        </div>
        <div className="hourPicker">
          <HourPicker />
          <div>
            <Button onClick={handleSubmit} type="submit" className="mt-5">
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </SectionStepTwo>
  );
}

export default AgendaHorario;
