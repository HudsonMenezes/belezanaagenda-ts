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

export interface ServicosProps {
  id: string;
  servico: string;
  preco: string;
  duracao: string;
  descrcao: string;
}

export interface ProfissionalProps {
  nome: string;
  servico: string;
}
