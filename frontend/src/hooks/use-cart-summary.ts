"use client";

import { useMemo } from "react";
import { useCartStore } from "@/store/cart-store";

export function useCartSummary() {
  const items = useCartStore((state) => state.items);
  return useMemo(() => {
    const subtotal = items.reduce((sum, line) => sum + line.food.price * line.quantity, 0);
    const count = items.reduce((sum, line) => sum + line.quantity, 0);
    return { items, subtotal, count };
  }, [items]);
}
