import fotoprofissional from "../../assets/profissional.png";
import { ProfissionalProps } from "../../models/models";
import { ProfissionalStyle } from "./Styles";

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
      <div className="icone">icone</div>
    </ProfissionalStyle>
  );
}

export default Profissional;
