import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import HorarioMarcado from "../../assets/check.png";
import atendente from "../../assets/profissional.png";
import calendario from "../../assets/Calendar.png";

import { ConfirmImgStyle } from "./Styles";

function AgendaSucesso() {
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
              <h3>Corte de cabelo com</h3>
              <h4>Leila Macedo</h4>
              <img src={calendario} alt="Calendario" />
              <h5>DIA 10-01</h5>
              <p>Salão da Ane</p>
              <span>Rua Óbidus, nº101, Sala 7, Cidade Velha, Belém</span>
              <Button type="submit" className="mt-4">
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
