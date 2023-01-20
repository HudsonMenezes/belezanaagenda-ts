import baseApi from "./config";

// interface ProfissionalPayload {
//   profissional: string;
//   servico: string;
// }

export function listarProfissionalServico() {
  return baseApi.get("/profissionalservico");
}
export function listarProfissionalServicoId(idProf: string) {
  return baseApi.get(`/profissionalservico/${idProf}`);
}

export function listarServico() {
  return baseApi.get("/servico");
}
