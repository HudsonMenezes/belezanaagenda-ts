import baseApi from "./config";

interface ClientePayload {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
}

export function cadastroCliente(payload: ClientePayload) {
  return baseApi.post("/cliente", payload);
}
