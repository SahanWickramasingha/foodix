import { FoodItem } from "@/types/food";
import { apiRequest } from "./api";

export const foodService = {
  getAll: () => apiRequest<FoodItem[]>("/v1/foods"),
  getById: (id: number) => apiRequest<FoodItem>(`/v1/foods/${id}`),
};
