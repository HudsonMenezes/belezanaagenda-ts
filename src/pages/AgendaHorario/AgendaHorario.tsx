import { useContext } from "react";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { Link, useNavigate } from "react-router-dom";
import backarow from "../../assets/back.png";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import HourPicker from "../../components/Horas/HourPicker";

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
