import LogoSalao from "../../assets/logosalao.png";
import { InfoStyles } from "./Styles";

function InfoSalao() {
  return (
    <InfoStyles className="infosalao  mb-3">
      <img className="logosalao" src={LogoSalao} alt="Logo do Salão" />
      <div className="d-flex-column ms-4  align-self-center">
        <span className="fw-bold">Salão Da Ane</span>
        <p>Rua Óbidus, n°101, Sala 7, Cidade Velha, Belém</p>
      </div>
    </InfoStyles>
  );
}

export default InfoSalao;
