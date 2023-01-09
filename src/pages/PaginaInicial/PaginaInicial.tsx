import React from "react";
// import "./PaginaInicial.css";

import Header from "../../components/Header/Header";

import BannerSalao from "../../assets/bannersalao.png";
import BannerServicos from "../../assets/bannerservicos.png";
import { Link } from "react-router-dom";

function PaginaInicial() {
  return (
    <div>
      <Header />
      <div id="boxHome">
        <section className="banner">
          <img src={BannerSalao} alt="Banner Salão" className="bannersalao" />
        </section>
        <section>
          <p>
            <span>Olá *FULANA*!</span>
            <br /> Que bom receber você aqui. Qual serviço você quer agendar?
          </p>
        </section>
        <section className="servicos">
          <div className="row row-cols-2">
            <div className="col">
              <Link
                to="/agendamento"
                className="text-decoration-none text-black"
              >
                <img alt="Banner Servicos" src={BannerServicos} />
                <p>Corte Masculino</p>
              </Link>
            </div>
            <div className="col">
              <Link
                to="/agendamento"
                className="text-decoration-none text-black"
              >
                <img alt="Banner Servicos" src={BannerServicos} />
                <p>Corte Feminino</p>
              </Link>
            </div>
            <div className="col">
              <Link
                to="/agendamento"
                className="text-decoration-none text-black"
              >
                <img alt="Banner Servicos" src={BannerServicos} />
                <p>Sobrancelha</p>
              </Link>
            </div>
            <div className="col">
              <Link
                to="/agendamento"
                className="text-decoration-none text-black"
              >
                <img alt="Banner Servicos" src={BannerServicos} />
                <p>Manicure</p>
              </Link>
            </div>
          </div>
        </section>
        <div></div>
      </div>
    </div>
  );
}
export default PaginaInicial;
