import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import HorarioMarcado from "../../assets/check.png";
import atendente from "../../assets/profissional.png";
import calendario from "../../assets/Calendar.png";

import { ConfirmImgStyle } from "./Styles";
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
    navigate("/agenda");
  }
  return (
    <div>
      <Header />
      <div className="conteinerBase agendamentoMarcado">
        <section>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
              <ConfirmImgStyle src={HorarioMarcado} alt="Horario Marcado" />
            </div>
            <div>
              <h3>Horário Marcado!</h3>
              <h4>Enviamos um lembrete para o seu celular</h4>
              <hr />
              <img src={atendente} alt="Atendente" />
              {/* {profissional? (<h3></h3>)} */}
              <h3>{profissional.servico.servico} com</h3>
              <h4>{profissional.profissional.nome}</h4>
              <div className="agenda d-flex justify-content-center align-items-center gap-3">
                <div className="agDia d-flex">
                  <img src={calendario} alt="Calendario" />
                  <h5 className="m-0">
                    DIA <br />
                    {formataData(data)}
                  </h5>
                </div>
                <div className="agHorario d-flex">
                  <img src={calendario} alt="Calendario" />
                  <h5 className="m-0">
                    HORÁRIO <br />
                    {hora}
                  </h5>
                </div>
              </div>
              <p className="mt-2">Salão da Ane</p>
              <span>Rua Óbidus, nº101, Sala 7, Cidade Velha, Belém</span>
              <Button onClick={handleSubmit} type="submit" className="mt-4">
                Marcar mais um horário
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AgendaSucesso;
