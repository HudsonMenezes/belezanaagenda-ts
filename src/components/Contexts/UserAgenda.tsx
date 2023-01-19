import { createContext, Dispatch, ReactNode, useState } from "react";
type ContextAgenda = {
  data: Date;
  hora: string;
  profissional: any;
  service: string;
  setData: Dispatch<any>;
  setHora: Dispatch<any>;
  setProfissional: Dispatch<any>;
  setService: Dispatch<any>;
};
export const UserAgenda = createContext<ContextAgenda>({} as ContextAgenda);

export const UserAgendaStorage = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(new Date());
  const [hora, setHora] = useState<any>();
  const [service, setService] = useState<any>();
  const [profissional, setProfissional] = useState<any>();

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
