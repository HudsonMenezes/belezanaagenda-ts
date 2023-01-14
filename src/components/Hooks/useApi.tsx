import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateClientePayload } from "../../models/models";
import { cadastroCliente } from "../../services/MainApi/clientes";

interface ApiProps {
  loginCreate: (payload: CreateClientePayload) => Promise<void>;
  error: null;
  loading: boolean;
  login: boolean;
}
const useApi = (): ApiProps => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function loginCreate(payload: CreateClientePayload) {
    try {
      setError(null);
      setLoading(true);
      const response = await cadastroCliente(payload);
      console.log(response.data);
      if (response.status !== 200)
        throw new Error(`Error:${response.statusText}`);
      navigate("/paginainicial");
    } catch (err: any) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return {
    loginCreate,
    login,
    loading,
    error,
  };
};

export default useApi;
