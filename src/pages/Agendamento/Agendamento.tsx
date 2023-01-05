import React from "react";
import Header from "../../components/Header/Header";
import InfoSalao from "../../components/InfoSalao/InfoSalao";
import DatePicker from "../../components/Calendario/Calendario";
import { CaminhoStyle } from "./Styles";
import Profissional from "../../components/Profissional/Profissional";

function Agendamento() {
  return (
    <div>
      <Header />
      <section>
        <CaminhoStyle>Página Inicial &gt; Corte Feminino</CaminhoStyle>
        {/* Procurar lib que faz isso */}
        <InfoSalao />
      </section>
      <DatePicker />
      <p className="mt-5">Quem vai te atender:</p>
      <Profissional nome="Joana" profissao="Hair Dresser" />
      <Profissional nome="Joana" profissao="Sobrancelha" />
      <Profissional nome="Maria" profissao="Nail Speacialist" />
      <Profissional nome="Fabiana" profissao="Hair Dresser" />
    </div>
  );
}

export default Agendamento;
