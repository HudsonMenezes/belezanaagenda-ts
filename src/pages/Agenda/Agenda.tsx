import { useContext } from "react";
import Header from "../../components/Header/Header";
import capaSalao from "../../assets/capasalao.png";
import logoSalao from "../../assets/logosalao.png";
import equipe1 from "../../assets/equipe1.png";
import equipe2 from "../../assets/equipe2.png";
import equipe3 from "../../assets/equipe3.png";
import equipe4 from "../../assets/equipe4.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/Contexts/UserContext";
import Servicos from "../../components/Servicos/Servicos";

function Agenda() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Header />
      <div id="boxHome">
        <div className="conteinerBase ps-md-5">
          <section className="d-flex flex-column align-items-center">
            <div>
              <img src={capaSalao} alt="Banner Salão" className="bannersalao" />
            </div>
            <div className="logoHome">
              <img src={logoSalao} alt="Logo Salão" className="logosalao" />
            </div>
          </section>
          <div className="container-fluid p-0">
            <section className="ps-2">
              <p>
                <h1>Salão Novo Visual</h1>
                <h4>Rua Obidus, nº101, Sala 7, Cidade Velha, Belém</h4>
              </p>
            </section>
            <br />
            <section className="ps-2">
              <p>
                <h3>Oi, {user?.data.nome}</h3>O que vamos agendar hoje?
              </p>
            </section>
            <section className="servicos container-fluid">
              <div className="row d-flex justify-content-center align-items-sm-center">
                <Servicos />
              </div>
            </section>
            <section className="ps-2">
              <p>
                <h2>CONHEÇA</h2>
                <span className="spanEquipe">a nossa equipe</span>
              </p>
            </section>
            <section className="servicos">
              <div className="row row-cols-sm-2 row-cols-md-2 g-1">
                <div className="col d-flex justify-content-center justify-content-md-start ">
                  <div className=" equipeItem d-flex justify-content-center align-items-center mt-2">
                    <div>
                      <img alt="Joana Silva" src={equipe1} />
                    </div>
                    <div className="ps-1 ps-1">
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
                <div className="col d-flex justify-content-center justify-content-md-end">
                  <div className="equipeItem d-flex align-items-center mt-2">
                    <div>
                      <img alt="Joana Silva" src={equipe2} />
                    </div>
                    <div className="m-auto ps-1">
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
                <div className="col d-flex justify-content-center justify-content-md-start">
                  <div className="equipeItem d-flex align-items-center mt-2">
                    <div>
                      <img alt="Joana Silva" src={equipe3} />
                    </div>
                    <div className="m-auto ps-1">
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
                <div className="col d-flex justify-content-center justify-content-md-end">
                  <div className="equipeItem d-flex align-items-center mt-2">
                    <div>
                      <img alt="Joana Silva" src={equipe4} />
                    </div>
                    <div className="m-auto ps-1">
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
