import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SectionStepOne } from "./Styles";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import Header from "../../components/Header/Header";
import DatePicker from "../../components/Calendario/Calendario";
import Button from "../../components/Button/Button";
import UserHeader from "../../components/UserHeader/UserHeader";

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
          <UserHeader />
        </div>
        <div className="datePicker">
          <DatePicker />
          <div>
            <Button onClick={handleSubmit} type="submit" className="m-3">
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </SectionStepOne>
  );
}
export default AgendaData;
