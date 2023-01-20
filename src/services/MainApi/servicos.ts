import baseApi from "./config";

// interface ProfissionalPayload {
//   profissional: string;
//   servico: string;
// }

export function listarProfissionalServico() {
  return baseApi.get("/profissionalservico");
}
export function listarProfissionalServicoId(id: string) {
  return baseApi.get(`/profissionalservico/${id}`);
}

export function listarServico() {
  return baseApi.get("/servico");
}
