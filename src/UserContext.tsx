import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { LoginClientePayload } from "./models/models";
import { loginCliente } from "./services/MainApi/clientes";

type ContextProviderData = {
  agendamento: any;
  setAgendamento: Dispatch<any>;
  user: {
    sucess: string;
    token: string;
    cliente: {
      _id: string;
      nome: string;
      email: string;
      senha: string;
      telefone: string;
    };
  } | null;
  userLogin: (payload: LoginClientePayload) => Promise<void>;
  userLogout(): Promise<void>;
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

  const userLogout = useCallback(
    async function () {
      setUser(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  async function userLogin(payload: LoginClientePayload) {
    try {
      setError(null);
      setLoading(true);
      const response = await loginCliente(payload);
      console.log(response.data);
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      setUser(response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/paginainicial");
    } catch (err: any) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
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
