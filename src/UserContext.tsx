import { createContext, Dispatch, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateClientePayload, LoginClientePayload } from "./models/models";
import { cadastroCliente, loginCliente } from "./services/MainApi/clientes";

type ContextProviderData = {
  agendamento: any;
  setAgendamento: Dispatch<any>;
  user: {
    cliente: {
      id: string;
      nome: string;
      email: string;
      telefone: string;
      senha: string;
    };
    msg: string;
  } | null;
  loginCreate: (payload: CreateClientePayload) => Promise<void>;
  loginUser: (payload: LoginClientePayload) => Promise<void>;
  error: null;
  loading: boolean;
  login: boolean;
};

export const UserContext = createContext<ContextProviderData>(
  {} as ContextProviderData
);
export const UserStorage = ({ children }: { children: ReactNode }) => {
  const [agendamento, setAgendamento] = useState<any>(new Date());
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function loginCreate(payload: CreateClientePayload) {
    try {
      setError(null);
      setLoading(true);
      const response = await cadastroCliente(payload);
      setUser(response.data);
      console.log(response.data);
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      navigate("/perfil");
    } catch (err: any) {
      const message = err.response.data.statusText;
      setError(err.message);
      console.log(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }
  async function loginUser(payload: LoginClientePayload) {
    try {
      setError(null);
      setLoading(true);
      const response = await loginCliente(payload);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      //..
    }
  }

  return (
    <UserContext.Provider
      value={{
        loginCreate,
        loginUser,
        user,
        agendamento,
        setAgendamento,
        error,
        loading,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
