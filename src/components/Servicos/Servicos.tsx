import { useContext, useEffect, useState } from "react";
import { ProfissionalServicoProps, ServicosProps } from "../../models/models";
import {
  listarProfissionalServico,
  listarServico,
} from "../../services/MainApi/servicos";
import { Link } from "react-router-dom";
import corte from "../../assets/corte.png";
import escova from "../../assets/escova.png";
import manicure from "../../assets/manicure.png";
import maquiagem from "../../assets/maquiagem.png";
import { UserAgenda } from "../Contexts/UserAgenda";

const images = {
  "63bcb64c3a1a0dfe9f0ec32f": corte,
  "63bf200f07a5094d1a9a059f": escova,
  "63bf21e507a5094d1a9a05b1": manicure,
  "63c720cc2a62c102a5c389bf": maquiagem,
} as Record<string, string>;

const Servicos = () => {
  const [Servi, setServi] = useState<ProfissionalServicoProps[]>([]);
  const { setService } = useContext(UserAgenda);

  useEffect(() => {
    const listaServicos = async () => {
      try {
        const response = await listarProfissionalServico();
        setServi(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    listaServicos();
  }, [setServi]);

  return (
    <>
      {Servi.map((servico) => (
        <div
          key={servico._id}
          onClick={() => setService(servico._id)}
          className="col itemHome"
        >
          <Link to={"/data"} className="text-decoration-none text-black">
            <img src={images[servico.servico._id] || ""} alt="" />
            <hr />
            <p>{servico.servico.servico}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Servicos;
