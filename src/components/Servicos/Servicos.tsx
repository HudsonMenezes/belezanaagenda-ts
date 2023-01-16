import { useEffect, useState } from "react";
import { ServicosProps } from "../../models/models";
import { listarServico } from "../../services/MainApi/servicos";
import { Link } from "react-router-dom";
import corteMasculino from "../../assets/cortemasculino.png";

const Servicos = () => {
  const [Servi, setServi] = useState<ServicosProps[]>([]);

  useEffect(() => {
    const listaServicos = async () => {
      try {
        const response = await listarServico();
        setServi(response.data);
        // console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    listaServicos();
  }, [setServi]);

  return (
    <>
      {Servi.map((servico) => (
        <div key={servico.id} className="col itemHome">
          <Link to={"/data"} className="text-decoration-none text-black">
            <img src={corteMasculino} alt="" />
            <hr />
            <p>{servico.servico}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Servicos;
