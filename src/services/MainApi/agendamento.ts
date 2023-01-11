import baseApi from "./config";

// interface ProfissionalPayload {
//   nome: string;
//   servico: string;
// }

export function ProfissionalServico() {
  return baseApi.get("/profissionalservico");
}
