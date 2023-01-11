import baseApi from "./config";

// interface ProfissionalPayload {
//   profissional: string;
//   servico: string;
// }

export function listarProfissionalServico() {
  return baseApi.get("/profissionalservico");
}
