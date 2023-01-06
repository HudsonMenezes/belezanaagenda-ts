import React from "react";
import Header from "../../components/Header/Header";
import InfoSalao from "../../components/InfoSalao/InfoSalao";

import HorarioMarcado from "../../assets/horariomarcado.png";
import imgprofissional from "../../assets/imgprofissional.png";

import {
  BoxStyle,
  CaminhoStyle,
  ConfirmImgStyle,
  ImgStyle,
  TextoStyle,
} from "./Styles";

function Agendamento() {
  return (
    <div>
      <Header />
      <div id="boxHome">
      <section>
        <CaminhoStyle>
          Página Inicial &gt; Corte Feminino &gt; Confirmação
        </CaminhoStyle>
        {/* Procurar lib que faz isso */}
        <div className="d-flex flex-column align-items-center">
        <InfoSalao />
        <ConfirmImgStyle src={HorarioMarcado} alt="Horario Marcado" />
        <BoxStyle>
          <div className="primeiraparte">
            <ImgStyle src={imgprofissional} alt="Imagem do Profissional" />
            <TextoStyle className="texto">
              <p>Maria</p>
              <span>Corte Feminino</span>
            </TextoStyle>
          </div>
          <hr />

          <TextoStyle className="segundaparte">
            <div>
              <span>Dia</span>
              <p>19/12</p>
            </div>
            <div>
              <span>Horário</span>
              <p>14:00h</p>
            </div>
          </TextoStyle>
        </BoxStyle>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Agendamento;
