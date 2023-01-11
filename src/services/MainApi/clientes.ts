import baseApi from "./config";

interface ClientePayload {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  aniversario?: Date;
  sexo?: string;
}

export function cadastroCliente(payload: ClientePayload) {
  return baseApi.post("/cliente", payload);
}
