import { LoginClientePayload } from "../../models/models";
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
export function loginCliente(payload: LoginClientePayload) {
  return baseApi.post("loginCliente", payload);
}
export function pegarCliente(id: string) {
  return baseApi.get(`/cliente/${id}`);
}
