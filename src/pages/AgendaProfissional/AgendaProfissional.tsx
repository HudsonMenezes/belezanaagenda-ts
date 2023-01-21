import { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { listarProfissionalServicoId } from "../../services/MainApi/servicos";
import { SectionStepThree } from "./style";
import Profissional from "../../components/Profissional/Profissional";
import { UserContext } from "../../components/Contexts/UserContext";
import UserHeader from "../../components/UserHeader/UserHeader";

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
          <UserHeader />
        </div>
        <div className="profissionalPicker">
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
    </SectionStepThree>
  );
}
export default AgendaProfissional;
