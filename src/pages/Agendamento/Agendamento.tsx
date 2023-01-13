import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import InfoSalao from "../../components/InfoSalao/InfoSalao";
import DatePicker from "../../components/Calendario/Calendario";
import Profissional from "../../components/Profissional/Profissional";
import { ProfissionalServico } from "../../services/MainApi/agendamento";
import { useState } from "react";
import backarow from "../../assets/back.png";
import Button from "../../components/Button/Button";

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
          <Button type="submit" className="mt-2">
            Confirmar
          </Button>
          </div>
          <p className="mt-5">Quem vai te atender:</p>
          {profissionais.map((prof) => (
            <Profissional
              nome={prof.profissional.nome}
              servico={prof.servico.servico}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Agendamento;
