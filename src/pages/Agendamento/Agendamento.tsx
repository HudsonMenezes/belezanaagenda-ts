import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import InfoSalao from "../../components/InfoSalao/InfoSalao";
import DatePicker from "../../components/Calendario/Calendario";
import { CaminhoStyle } from "./Styles";
import Profissional from "../../components/Profissional/Profissional";
import { ProfissionalServico } from "../../services/MainApi/agendamento";
import { useState } from "react";

interface ProfissionalProps {
  profissional: {
    nome: string;
  };
  servico: {
    servico: string;
  };
}

function Agendamento() {
  const [profissionais, setProfissionais] = useState<ProfissionalProps[]>([]);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await ProfissionalServico();
        setProfissionais(response.data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, [setProfissionais]);

  return (
    <div>
      <Header />
      <div id="boxHome">
        <section>
          <CaminhoStyle>Página Inicial &gt; Corte Feminino</CaminhoStyle>

          <InfoSalao />
        </section>
        <DatePicker />
        <p className="mt-5">Quem vai te atender:</p>
        {profissionais.map((prof) => (
          <Profissional
            nome={prof.profissional.nome}
            servico={prof.servico.servico}
          />
        ))}
      </div>
    </div>
  );
}
export default Agendamento;
