import { apiRequest } from "./api";

export const offerService = {
  validatePromo: (code: string) =>
    apiRequest<{ valid: boolean; discount: number }>(`/v1/offers/validate?code=${encodeURIComponent(code)}`),
};
