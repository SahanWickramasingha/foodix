"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/format";

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const subtotal = useMemo(() => items.reduce((sum, line) => sum + line.food.price * line.quantity, 0), [items]);
  const total = subtotal + (items.length ? 2.99 : 0);

  if (!items.length) return <section className="container-shell py-16 text-center"><h1 className="text-4xl font-black">Nothing to checkout yet.</h1><Link href="/menu" className="mt-6 inline-block rounded-xl bg-orange-500 px-5 py-3 font-bold text-black">Go to Menu</Link></section>;

  return <section className="container-shell py-12"><div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]"><div className="glass-panel rounded-[28px] p-6"><h1 className="text-3xl font-black">Checkout</h1><div className="mt-6 grid gap-4 sm:grid-cols-2"><input placeholder="First name" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500/40" /><input placeholder="Last name" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500/40" /><input placeholder="Phone number" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500/40" /><input placeholder="City" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500/40" /></div><textarea rows={5} placeholder="Delivery address" className="mt-4 w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500/40" /><div className="mt-6 rounded-2xl border border-white/10 p-4"><p className="font-bold">Payment</p><p className="mt-2 text-sm text-zinc-500">Payment UI is ready. Connect this step to your Spring Boot payment/order API later.</p></div></div><aside className="soft-card h-fit rounded-[26px] p-6"><h2 className="text-xl font-black">Order Summary</h2><div className="mt-5 space-y-4">{items.map((line) => <div key={line.food.id} className="flex items-center justify-between gap-4 text-sm"><span className="text-zinc-400">{line.quantity} × {line.food.name}</span><span>{formatPrice(line.food.price * line.quantity)}</span></div>)}</div><div className="mt-6 flex justify-between border-t border-white/10 pt-4 text-lg font-black"><span>Total</span><span>{formatPrice(total)}</span></div><button className="mt-6 w-full rounded-xl bg-orange-500 py-3.5 text-sm font-extrabold text-black">Place Order</button></aside></div></section>;
}
