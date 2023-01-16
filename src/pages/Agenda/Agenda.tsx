import React, { useContext } from "react";
// import "./PaginaInicial.css";

import Header from "../../components/Header/Header";

import corteMasculino from "../../assets/cortemasculino.png";
import corteFeminino from "../../assets/cortefeminino.png";
import escova from "../../assets/escova.png";
import manicure from "../../assets/manicure.png";
import capaSalao from "../../assets/capasalao.png";
import logoSalao from "../../assets/logosalao.png";
import equipe1 from "../../assets/equipe1.png";
import equipe2 from "../../assets/equipe2.png";
import equipe3 from "../../assets/equipe3.png";
import equipe4 from "../../assets/equipe4.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Servicos from "../../components/Servicos/Servicos";

function Agenda() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Header />
      <div id="boxHome">
        <div className="conteinerBase">
          <section className="d-flex flex-column align-items-center">
            <div>
              <img src={capaSalao} alt="Banner Salão" className="bannersalao" />
            </div>
            <div className="logoHome">
              <img src={logoSalao} alt="Logo Salão" className="logosalao" />
            </div>
          </section>
          <div className="m-3">
            <section>
              <p>
                <h1>Salão Novo Visual</h1>
                <h4>Rua Obidus, nº101, Sala 7, Cidade Velha, Belém</h4>
              </p>
            </section>
            <br />
            <section>
              <p>
                <h3>Oi, {user?.cliente.nome}</h3>O que vamos agendar hoje?
              </p>
            </section>
            <section className="servicos">
              <div className="row">
                <Servicos />
              </div>
            </section>
            <section>
              <p>
                <h2>CONHEÇA</h2>
                <span className="spanEquipe">a nossa equipe</span>
              </p>
            </section>
            <section className="servicos">
              <div className="row">
                <div className="col">
                  <div className="equipeItem d-flex align-items-center">
                    <div>
                      <img alt="Joana Silva" src={equipe1} />
                    </div>
                    <div className="m-auto">
                      <h3>Joana Silva</h3>
                      <div>
                        Cabelereira <br />
                      </div>
                      <h3 className="mt-2">Especialidades</h3>
                      <div>
                        Cachos
                        <br />
                        Corte Feminino
                        <br />
                        Tintura
                      </div>
                      <div className="buttonEquipe mt-3">
                        <Link
                          to="#"
                          className="text-decoration-none text-black"
                        >
                          {" "}
                          <p>Marcar Horario</p>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="equipeItem d-flex align-items-center">
                    <div>
                      <img alt="Joana Silva" src={equipe2} />
                    </div>
                    <div className="m-auto">
                      <h3>Joana Silva</h3>
                      <div>
                        Cabelereira <br />
                      </div>
                      <h3 className="mt-2">Especialidades</h3>
                      <div>
                        Cachos
                        <br />
                        Corte Feminino
                        <br />
                        Tintura
                      </div>
                      <div className="buttonEquipe mt-3">
                        <Link
                          to="#"
                          className="text-decoration-none text-black"
                        >
                          {" "}
                          <p>Marcar Horario</p>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="equipeItem d-flex align-items-center">
                    <div>
                      <img alt="Joana Silva" src={equipe3} />
                    </div>
                    <div className="m-auto">
                      <h3>Joana Silva</h3>
                      <div>
                        Cabelereira <br />
                      </div>
                      <h3 className="mt-2">Especialidades</h3>
                      <div>
                        Cachos
                        <br />
                        Corte Feminino
                        <br />
                        Tintura
                      </div>
                      <div className="buttonEquipe mt-3">
                        <Link
                          to="#"
                          className="text-decoration-none text-black"
                        >
                          {" "}
                          <p>Marcar Horario</p>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="equipeItem d-flex align-items-center">
                    <div>
                      <img alt="Joana Silva" src={equipe4} />
                    </div>
                    <div className="m-auto">
                      <h3>Joana Silva</h3>
                      <div>
                        Cabelereira <br />
                      </div>
                      <h3 className="mt-2">Especialidades</h3>
                      <div>
                        Cachos
                        <br />
                        Corte Feminino
                        <br />
                        Tintura
                      </div>
                      <div className="buttonEquipe mt-3">
                        <Link
                          to="#"
                          className="text-decoration-none text-black"
                        >
                          {" "}
                          <p>Marcar Horario</p>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Agenda;
