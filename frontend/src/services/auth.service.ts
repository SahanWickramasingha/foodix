import { apiRequest } from "./api";

type LoginRequest = { email: string; password: string };
type LoginResponse = { token: string; user: { id: number; name: string; email: string } };

export const authService = {
  login: (payload: LoginRequest) =>
    apiRequest<LoginResponse>("/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
