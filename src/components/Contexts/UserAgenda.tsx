import { createContext, Dispatch, ReactNode, useState } from "react";
import { ProfissionalServicoProps } from "../../models/models";
type ContextAgenda = {
  data: Date;
  hora: string;
  profissional: ProfissionalServicoProps | any;
  service: string;
  setData: Dispatch<any>;
  setHora: Dispatch<any>;
  setProfissional: Dispatch<ProfissionalServicoProps>;
  setService: Dispatch<any>;
};
export const UserAgenda = createContext<ContextAgenda>({} as ContextAgenda);

export const UserAgendaStorage = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(new Date());
  const [hora, setHora] = useState<any>();
  const [service, setService] = useState<any>();
  const [profissional, setProfissional] = useState<ProfissionalServicoProps>();

  return (
    <UserAgenda.Provider
      value={{
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
