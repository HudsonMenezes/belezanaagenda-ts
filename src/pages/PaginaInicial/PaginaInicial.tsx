import React from "react";
// import "./PaginaInicial.css";

import Header from "../../components/Header/Header";

import BannerSalao from "../../assets/bannersalao.png";
import BannerServicos from "../../assets/bannerservicos.png";

function PaginaInicial() {
  return (
    <div className="container">
      <Header />

      <section className="banner">
        <img src={BannerSalao} alt="Banner Salão" className="bannersalao" />
      </section>
      <section>
        <p className="boasvindas text-start">
          <span>Olá *FULANA*!</span>
          <br /> Que bom receber você aqui. Qual serviço você quer agendar?
        </p>
      </section>
      <section className="servicos">
        <div className="row row-cols-2">
          <div className="col">
            <img alt="Banner Servicos" src={BannerServicos} />
            <p>Corte Masculino</p>
          </div>
          <div className="col">
            <img alt="Banner Servicos" src={BannerServicos} />
            <p>Corte Feminino</p>
          </div>
          <div className="col">
            <img alt="Banner Servicos" src={BannerServicos} />
            <p>Sobrancelha</p>
          </div>
          <div className="col">
            <img alt="Banner Servicos" src={BannerServicos} />
            <p>Manicure</p>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
}

export default PaginaInicial;
