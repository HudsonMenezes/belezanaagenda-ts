import { createContext, Dispatch, ReactNode, useState } from "react";
type ContextAgenda = {
  data: any;
  hora: any;
  profissional: any;
  setData: Dispatch<any>;
  setHora: Dispatch<any>;
  setProfissional: Dispatch<any>;
};
export const UserAgenda = createContext<ContextAgenda>({} as ContextAgenda);

export const UserAgendaStorage = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(new Date());
  const [hora, setHora] = useState<any>();
  const [profissional, setProfissional] = useState<any>();

  return (
    <UserAgenda.Provider
      value={{
        data,
        hora,
        profissional,
        setData,
        setHora,
        setProfissional,
      }}
    >
      {children}
    </UserAgenda.Provider>
  );
};
