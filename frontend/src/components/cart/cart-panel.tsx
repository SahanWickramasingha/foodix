"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/format";

export default function CartPanel() {
  const { items, increment, decrement, removeItem } = useCartStore();
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState(false);
  const subtotal = useMemo(() => items.reduce((sum, line) => sum + line.food.price * line.quantity, 0), [items]);
  const delivery = items.length ? 2.99 : 0;
  const discount = applied ? Math.min(2, subtotal) : 0;
  const total = subtotal + delivery - discount;
  const count = items.reduce((sum, line) => sum + line.quantity, 0);

  return (
    <div className="glass-panel mx-auto max-w-2xl rounded-[28px] p-5 sm:p-7">
      <div className="mb-6 flex items-center justify-between"><h1 className="text-2xl font-black">Your Cart <span className="text-zinc-500">({count})</span></h1><Link href="/menu" className="text-sm font-bold text-orange-400">Add more</Link></div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 py-14 text-center"><p className="text-zinc-400">Your cart is empty.</p><Link href="/menu" className="mt-4 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-extrabold text-black">Browse Menu</Link></div>
      ) : (
        <div className="grid gap-3">
          {items.map(({ food, quantity }) => (
            <div key={food.id} className="soft-card flex items-center gap-4 rounded-2xl p-3 sm:p-4">
              <img src={food.image} alt={food.name} className="h-20 w-20 rounded-xl object-cover" />
              <div className="min-w-0 flex-1"><h3 className="truncate font-bold">{food.name}</h3><p className="mt-1 font-bold text-zinc-300">{formatPrice(food.price)}</p><div className="mt-2 flex items-center gap-2"><button onClick={() => decrement(food.id)} className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 hover:bg-white/10"><Minus size={13} /></button><span className="min-w-5 text-center text-sm font-bold">{quantity}</span><button onClick={() => increment(food.id)} className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 hover:bg-white/10"><Plus size={13} /></button></div></div>
              <button onClick={() => removeItem(food.id)} className="grid h-9 w-9 place-items-center rounded-xl text-zinc-500 hover:bg-red-500/10 hover:text-red-400"><Trash2 size={17} /></button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 rounded-2xl border border-white/10 p-4"><p className="mb-3 text-sm font-bold">Have a promo code?</p><div className="flex gap-2"><input value={promo} onChange={(e) => setPromo(e.target.value)} placeholder="Enter code" className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black px-3 py-2.5 text-sm outline-none focus:border-orange-500/50" /><button onClick={() => setApplied(promo.trim().length > 0)} className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 text-sm font-bold text-orange-400">Apply</button></div></div>

      <div className="mt-5 space-y-3 text-sm"><div className="flex justify-between text-zinc-400"><span>Subtotal</span><span className="text-white">{formatPrice(subtotal)}</span></div><div className="flex justify-between text-zinc-400"><span>Delivery Fee</span><span className="text-white">{formatPrice(delivery)}</span></div><div className="flex justify-between text-zinc-400"><span>Discount</span><span className="text-green-400">-{formatPrice(discount)}</span></div><div className="flex justify-between border-t border-white/10 pt-4 text-lg font-black"><span>Total</span><span>{formatPrice(total)}</span></div></div>

      <Link href="/checkout" className={`mt-6 block rounded-xl py-3.5 text-center text-sm font-extrabold ${items.length ? "bg-orange-500 text-black hover:bg-orange-400" : "pointer-events-none bg-zinc-800 text-zinc-500"}`}>Checkout</Link>
      <Link href="/menu" className="mt-4 block text-center text-sm font-bold text-orange-400">Continue Shopping</Link>
    </div>
  );
}
