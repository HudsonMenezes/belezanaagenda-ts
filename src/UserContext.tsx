import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { loginCliente, pegarCliente } from "./services/MainApi/clientes";

type ContextProviderData = {
  data: any;
  setData: Dispatch<any>;
  user: {
    sucess: string;
    token: string;
    data: {
      _id: string;
      nome: string;
      email: string;
      senha: string;
      telefone: string;
    };
  } | null;
  userLogin: (email: string, senha: string) => Promise<void>;
  userLogout(): Promise<void>;
  error: null;
  loading: boolean;
  login: boolean;
  id: any;
};

export const UserContext = createContext<ContextProviderData>(
  {} as ContextProviderData
);
export const UserStorage = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(new Date());
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [{ token }, setToken, removeToken] = useCookies(["token"]);
  const [{ id }, setId, removeId] = useCookies(["id"]);
  const navigate = useNavigate();

  const userLogout = useCallback(
    async function () {
      setUser(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      removeToken("token");
      removeId("id");
      navigate("/");
    },
    [navigate, removeToken, removeId]
  );

  async function userLogin(email: string, senha: string) {
    try {
      setError(null);
      setLoading(true);
      const response = await loginCliente({ email, senha });
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      const token = response.data.token;
      const id = response.data.cliente._id;
      setToken("token", token);
      setId("id", id);
      navigate("/agenda");
    } catch (err: any) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function getUser(id: string) {
    const response = pegarCliente(id);
    const dados = await (await response).data;
    setUser(dados);
    setLogin(true);
  }

  useEffect(() => {
    async function autoLogin() {
      if (token && id) {
        try {
          setError(null);
          setLoading(true);
          await getUser(id);
          setLogin(true);
        } catch (err) {
          alert("erro na validaçao do usuario");
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [id, token, userLogout]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        user,
        data,
        setData,
        error,
        loading,
        login,
        id,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
