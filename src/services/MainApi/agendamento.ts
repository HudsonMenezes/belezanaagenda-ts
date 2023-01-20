import { AxiosResponse } from "axios";
import { AgendaCriarProps } from "../../models/models";
import baseApi from "./config";

export function ProfissionalServico() {
  return baseApi.get("/profissionalservico");
}

export function agendaCriar(payload: AgendaCriarProps): Promise<AxiosResponse> {
  return baseApi.post("/agenda", payload.payload, {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  });
}
