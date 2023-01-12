import { useContext } from "react";
import { UserContext } from "../../UserContext";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import imgprofissional from "../../assets/imgprofissional.png";

import {
  BoxStyle,
  CaminhoStyle,
  ClienteStyle,
  ImgStyle,
  TextoStyle,
} from "./Styles";

function Agendamento() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Header />
      <div id="boxHome">
        <section>
          <ClienteStyle>Olá, {user?.cliente.nome}</ClienteStyle>
          <CaminhoStyle>Proximos Atendimentos</CaminhoStyle>
          {/* Procurar lib que faz isso */}
          <div className="d-flex flex-column align-items-center">
            <BoxStyle>
              <div className="primeiraparte">
                <ImgStyle src={imgprofissional} alt="Imagem do Profissional" />
                <TextoStyle>
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
              <Button style={{ width: "161px", borderRadius: "15px" }}>
                Remarcar
              </Button>
              <a href="/">Cancelar</a>
            </BoxStyle>
          </div>

          <CaminhoStyle>Para lembrar</CaminhoStyle>
          <div className="d-flex flex-column align-items-center">
            <BoxStyle style={{ height: "146px" }}>
              <div className="primeiraparte">
                <ImgStyle src={imgprofissional} alt="Imagem do Profissional" />
                <TextoStyle>
                  <p>Retoque raz</p>
                  <span>Último Agendamento 19/11</span>
                </TextoStyle>
              </div>

              <Button style={{ width: "161px", borderRadius: "15px" }}>
                Agendar
              </Button>
            </BoxStyle>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Agendamento;
