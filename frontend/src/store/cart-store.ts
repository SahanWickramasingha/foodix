"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartLine, FoodItem } from "@/types/food";

type CartState = {
  items: CartLine[];
  addItem: (food: FoodItem) => void;
  removeItem: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (food) =>
        set((state) => {
          const existing = state.items.find((line) => line.food.id === food.id);
          if (existing) {
            return {
              items: state.items.map((line) =>
                line.food.id === food.id ? { ...line, quantity: line.quantity + 1 } : line,
              ),
            };
          }
          return { items: [...state.items, { food, quantity: 1 }] };
        }),
      removeItem: (id) => set((state) => ({ items: state.items.filter((line) => line.food.id !== id) })),
      increment: (id) =>
        set((state) => ({
          items: state.items.map((line) =>
            line.food.id === id ? { ...line, quantity: line.quantity + 1 } : line,
          ),
        })),
      decrement: (id) =>
        set((state) => ({
          items: state.items
            .map((line) =>
              line.food.id === id ? { ...line, quantity: Math.max(0, line.quantity - 1) } : line,
            )
            .filter((line) => line.quantity > 0),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: "foodix-cart" },
  ),
);
