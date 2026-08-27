"use client";

import { useMemo, useState } from "react";
import FoodCard from "@/components/ui/food-card";
import { categories, menuItems } from "@/data/menu";

export default function MenuBrowser() {
  const [selected, setSelected] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(() => selected === "All" ? menuItems : menuItems.filter((item) => item.category === selected), [selected]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button key={category} onClick={() => setSelected(category)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${selected === category ? "bg-orange-500 text-black" : "border border-zinc-300 bg-white text-zinc-700 hover:border-orange-400 hover:text-orange-600"}`}>{category}</button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
        {filtered.map((food) => <FoodCard key={food.id} food={food} light />)}
      </div>
    </div>
  );
}
