export interface CreateClientePayload {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}
export interface LoginClientePayload {
  email: string;
  senha: string;
}
