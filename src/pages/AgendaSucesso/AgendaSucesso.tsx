import { useContext } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { CiCalendarDate, CiAlarmOn } from "react-icons/ci";
import HorarioMarcado from "../../assets/check.png";
import atendente from "../../assets/profissional.png";
import { ConfirmImgStyle, Sectionsucess } from "./Styles";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { useNavigate } from "react-router-dom";

function AgendaSucesso() {
  const { profissional, data, hora } = useContext(UserAgenda);
  const navigate = useNavigate();

  const formataData = (data: any) => {
    let dia = new Date(data);
    return `${dia.getDate()}-${dia.getMonth() + 1}`;
  };

  function handleSubmit() {
    navigate("/perfil");
  }

  return (
    <Sectionsucess>
      <Header />
      <div className="container-grid">
        <div className="textStep">
          <ConfirmImgStyle src={HorarioMarcado} alt="Horario Marcado" />
          <div>
            <h3>Horário Marcado!</h3>
            <h4>Enviamos um lembrete para o seu celular</h4>
          </div>
        </div>
        {/* <hr /> */}
        <div className="sucess">
          <img src={atendente} alt="Atendente" className="rounded-5" />
          <h3>{profissional.servico.servico} com</h3>
          <h4>{profissional.profissional.nome}</h4>
          <div className="agenda d-flex justify-content-center align-items-center gap-3">
            <div className="agDia d-flex gap-2">
              <CiCalendarDate />
              <h5 className="m-0">
                DIA <br />
                {formataData(data)}
              </h5>
            </div>
            <div className="agHorario d-flex gap-2">
              <CiAlarmOn />
              <h5 className="m-0">
                HORÁRIO <br />
                {hora}
              </h5>
            </div>
          </div>
          <p className="mt-2">Salão da Ane</p>
          <span>Rua Óbidus, nº101, Sala 7, Cidade Velha, Belém</span>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="btnSucess mt-4"
          >
            Minha agenda
          </Button>
        </div>
      </div>
    </Sectionsucess>
  );
}

export default AgendaSucesso;
