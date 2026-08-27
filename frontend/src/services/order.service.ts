import { apiRequest } from "./api";

export type CreateOrderRequest = {
  customerName: string;
  phone: string;
  address: string;
  items: { foodId: number; quantity: number }[];
};

export const orderService = {
  create: (payload: CreateOrderRequest) =>
    apiRequest<{ id: number; status: string }>("/v1/orders", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
