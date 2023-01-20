import fotoprofissional from "../../assets/profissional.png";
import { ProfissionalProps } from "../../models/models";
import { ProfissionalStyle } from "./Styles";
import { CiCalendarDate } from "react-icons/ci";

function Profissional({ nome, servico }: ProfissionalProps) {
  return (
    <ProfissionalStyle>
      <div className="ps-2">
        <img alt="Imagem do Profissional" src={fotoprofissional} />
      </div>
      <div>
        <span>{nome}</span>
        <p>{servico}</p>
      </div>
      <div className="icone">
        <CiCalendarDate />
      </div>
    </ProfissionalStyle>
  );
}

export default Profissional;
