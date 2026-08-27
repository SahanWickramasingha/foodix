"use client";

import { Plus, Star } from "lucide-react";
import { FoodItem } from "@/types/food";
import { formatPrice } from "@/lib/format";
import { useCartStore } from "@/store/cart-store";

export default function FoodCard({ food, light = false }: { food: FoodItem; light?: boolean }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <article className={`group overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 ${light ? "border-black/10 bg-white text-zinc-950 shadow-xl shadow-black/5" : "border-white/10 bg-[#101010] text-white hover:border-orange-500/35"}`}>
      <div className="relative h-40 overflow-hidden bg-zinc-900 sm:h-44">
        <img src={food.image} alt={food.name} className="food-img h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {food.badge && <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-2.5 py-1 text-[11px] font-extrabold text-black">{food.badge}</span>}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold">{food.name}</h3>
            <p className={`mt-1 text-sm ${light ? "text-zinc-500" : "text-zinc-400"}`}>{food.category}</p>
          </div>
          <span className={`font-extrabold ${light ? "text-orange-600" : "text-orange-400"}`}>{formatPrice(food.price)}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-sm"><Star size={15} className="fill-orange-500 text-orange-500" /> {food.rating}</span>
          <button onClick={() => addItem(food)} className="flex items-center gap-1.5 rounded-xl bg-orange-500 px-3 py-2 text-xs font-extrabold text-black transition hover:bg-orange-400">
            <Plus size={14} /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
