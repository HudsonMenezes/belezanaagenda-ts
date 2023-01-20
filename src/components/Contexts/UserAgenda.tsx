import { createContext, Dispatch, ReactNode, useState } from "react";
import { ProfissionalServicoProps } from "../../models/models";
import { agendaCriar } from "../../services/MainApi/agendamento";
type ContextAgenda = {
  data: Date;
  hora: string;
  profissional: ProfissionalServicoProps | any;
  service: string;
  setData: Dispatch<any>;
  setHora: Dispatch<any>;
  setProfissional: Dispatch<ProfissionalServicoProps>;
  setService: Dispatch<any>;
  criarNovaAgenda: (payload: FormData, token: string) => Promise<void>;
};
export const UserAgenda = createContext<ContextAgenda>({} as ContextAgenda);

export const UserAgendaStorage = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(new Date());
  const [hora, setHora] = useState<any>();
  const [service, setService] = useState<any>();
  const [profissional, setProfissional] = useState<ProfissionalServicoProps>();

  async function criarNovaAgenda(payload: FormData, token: string) {
    try {
      const response = await agendaCriar({ payload, token });
      console.log(response.data);
    } catch (err) {
      alert(err);
    } finally {
      //..
    }
  }

  return (
    <UserAgenda.Provider
      value={{
        criarNovaAgenda,
        data,
        hora,
        service,
        profissional,
        setData,
        setHora,
        setProfissional,
        setService,
      }}
    >
      {children}
    </UserAgenda.Provider>
  );
};
