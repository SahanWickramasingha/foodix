import Link from "next/link";
import FoodCard from "@/components/ui/food-card";
import { menuItems } from "@/data/menu";

export default function PopularMenu() {
  return (
    <section className="container-shell mt-10 sm:mt-12">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div><p className="text-xs font-extrabold uppercase tracking-[0.24em] text-orange-500">Customer favorites</p><h2 className="mt-2 text-2xl font-black sm:text-3xl">Popular Menu</h2></div>
        <Link href="/menu" className="text-sm font-bold text-orange-400 hover:text-orange-300">View all →</Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {menuItems.slice(0, 5).map((food) => <FoodCard key={food.id} food={food} />)}
      </div>
    </section>
  );
}
