export type FoodCategory = "Pizza" | "Burger" | "Rice" | "Pasta" | "Dessert" | "Drinks" | "Healthy";

export type FoodItem = {
  id: number;
  name: string;
  category: FoodCategory;
  price: number;
  rating: number;
  image: string;
  description: string;
  badge?: string;
};

export type CartLine = {
  food: FoodItem;
  quantity: number;
};
