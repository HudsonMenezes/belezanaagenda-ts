import { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import backarow from "../../assets/back.png";
import { Stepper } from "react-form-stepper";
import { TextoPasso } from "../AgendaData/Styles";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { listarProfissionalServicoId } from "../../services/MainApi/servicos";
import { SectionStepThree } from "./style";
import Profissional from "../../components/Profissional/Profissional";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/Contexts/UserContext";

function AgendaProfissional() {
  const {
    service,
    hora,
    data,
    setProfissional,
    profissional,
    criarNovaAgenda,
  } = useContext(UserAgenda);
  const { id, token } = useContext(UserContext);
  let idProf = service;

  const formataData = (data: any) => {
    let dia = new Date(data);
    return `${dia.getFullYear()}/${dia.getMonth() + 1}/${dia.getDate()}`;
  };

  useEffect(() => {
    const data = async () => {
      try {
        const response = await listarProfissionalServicoId(idProf);
        setProfissional(response.data);
      } catch (error) {
        alert(error);
      }
    };
    data();
  }, [setProfissional, idProf]);

  function handleSubmit() {
    const payload = new FormData();

    payload.append("profissionalServico", idProf);
    payload.append("cliente", id);
    payload.append("data", `${formataData(data)} ${hora}`);

    criarNovaAgenda(payload, token);
  }
  return (
    <SectionStepThree>
      <Header />
      <div className="container-grid">
        <div className="textStep">
          <TextoPasso>
            3º PASSO <br />
            <span>Escolha o profissional</span>
          </TextoPasso>
        </div>
        <div className="arrow">
          <div className="step">
            <Stepper
              steps={[{ label: "" }, { label: "" }, { label: "" }]}
              styleConfig={{
                activeBgColor: "#ffc973",
                activeTextColor: "#000",
                inactiveBgColor: "#eaeaea",
                inactiveTextColor: "#000",
                completedBgColor: "#ffc973",
                completedTextColor: "#000",
                size: "3em",
                circleFontSize: 16,
                labelFontSize: 14,
                borderRadius: 50,
                fontWeight: 4,
              }}
              activeStep={2}
            />
          </div>
          <div className="profissionalPicker">
            <div className="backButton">
              <img src={backarow} alt="Voltar" className="m-2" />
              <Link to="/horario">Voltar</Link>
            </div>
            <div className="reative">
              {profissional && (
                <Profissional
                  nome={profissional.profissional?.nome}
                  servico={profissional.servico?.servico}
                />
              )}
              <Button onClick={handleSubmit} type="submit" className="mt-5">
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionStepThree>
  );
}
export default AgendaProfissional;
