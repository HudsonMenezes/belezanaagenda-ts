import { createContext, Dispatch, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateClientePayload, LoginClientePayload } from "./models/models";
import {
  cadastroCliente,
  loginCliente,
  pegarCliente,
} from "./services/MainApi/clientes";

type ContextProviderData = {
  agendamento: any;
  setAgendamento: Dispatch<any>;
  user: {
    sucess: string;
    cliente: {
      _id: string;
      nome: string;
      email: string;
      senha: string;
      telefone: string;
    };
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
      if (response.status !== 200)
        throw new Error(`Error:${response.statusText}`);
      const id = response.data.cliente._id;
      await getUser(id);
      navigate("/perfil");
    } catch (err: any) {
      setError(err.message);
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
      // console.log(response.data);
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      const token = response.data.token;
      localStorage.setItem("token", token);
    } catch (err: any) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }
  async function getUser(id: string) {
    const response = pegarCliente(id);
    const data = (await response).data;
    setUser(data);
    setLogin(true);
    console.log(data);
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
