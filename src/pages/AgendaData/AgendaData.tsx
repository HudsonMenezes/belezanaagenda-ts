import { useContext } from "react";
import Header from "../../components/Header/Header";
import DatePicker from "../../components/Calendario/Calendario";
import Button from "../../components/Button/Button";
import backarow from "../../assets/back.png";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { useNavigate } from "react-router-dom";

function AgendaData() {
  const { data, setData } = useContext(UserAgenda);
  const navigate = useNavigate();

  function handleSubmit() {
    if (data) {
      setData(data.toISOString());
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
              <a href=".">Voltar</a>
            </div>
          </section>
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
