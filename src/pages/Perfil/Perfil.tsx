import { useContext } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import imgprofissional from "../../assets/imgprofissional.png";

import { BoxStyle, ClienteStyle, ImgStyle, TextoStyle } from "./Styles";
import { UserAgenda } from "../../components/Contexts/UserAgenda";

function Agendamento() {
  const { profissional, data, hora } = useContext(UserAgenda);

  const formataData = (data: any) => {
    let dia = new Date(data);
    return `${dia.getDate()}/${dia.getMonth() + 1}`;
  };

  return (
    <div>
      <div id="boxHome">
        <Header />
        <div className="conteinerBase">
          <section>
            <ClienteStyle>
              {" "}
              <span className="ajusteFonte">Agenda da</span> <h1>Janaína</h1>{" "}
            </ClienteStyle>
            {/* Procurar lib que faz isso */}
            <div>
              <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  href="."
                  className="nav-item active buttonTab1"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Marcados
                </a>
                <a
                  href="."
                  className="nav-item buttonTab2"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="true"
                >
                  Lembretes
                </a>
              </ul>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="d-flex flex-column align-items-center tab1Perfil">
                    <BoxStyle>
                      <div className="primeiraparte">
                        <ImgStyle
                          src={imgprofissional}
                          alt="Imagem do Profissional"
                        />
                        <TextoStyle>
                          <p>{profissional?.servico.servico}</p>
                          <span>{profissional?.profissional.nome}</span>
                        </TextoStyle>
                      </div>
                      <hr />
                      <TextoStyle className="segundaparte">
                        <div>
                          <span>Dia</span>
                          <p>{formataData(data)}</p>
                        </div>
                        <div>
                          <span>Horário</span>
                          <p>{hora}</p>
                        </div>
                      </TextoStyle>
                      <Button type="submit" className="m-3">
                        Remarcar
                      </Button>
                      <a href="/">
                        <div className="perfilButton">Cancelar</div>
                      </a>
                    </BoxStyle>
                    <p>Você não tem mais horários marcados.</p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="d-flex flex-column align-items-center tab2Perfil">
                    <BoxStyle style={{ height: "146px" }}>
                      <div className="primeiraparte">
                        <TextoStyle>
                          <p>Retoque raz</p>
                          <span>Último Agendamento 19/11</span>
                        </TextoStyle>
                      </div>
                      <a href="/">
                        <div className="perfilButton">Agendar</div>
                      </a>
                    </BoxStyle>
                    <p>Você não tem mais lembretes.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Agendamento;
