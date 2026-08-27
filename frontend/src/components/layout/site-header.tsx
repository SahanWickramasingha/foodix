"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingCart, UtensilsCrossed, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useCartStore } from "@/store/cart-store";

const nav = [
  ["Home", "/"],
  ["Menu", "/menu"],
  ["About Us", "/about"],
  ["Offers", "/offers"],
  ["Contact", "/contact"],
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const items = useCartStore((s) => s.items);
  const count = useMemo(() => items.reduce((sum, line) => sum + line.quantity, 0), [items]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050505]/95 backdrop-blur-xl">
      <div className="container-shell flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-black tracking-tight">
          <span className="grid h-9 w-9 place-items-center text-orange-500">
            <UtensilsCrossed size={23} strokeWidth={2.6} />
          </span>
          <span className="text-xl">Food<span className="text-orange-500">ix</span></span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative py-2 text-[13px] font-semibold transition ${active ? "text-orange-400" : "text-zinc-300 hover:text-white"}`}
              >
                {label}
                {active && <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-orange-500" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link href="/menu" className="hidden h-9 w-9 place-items-center rounded-lg text-zinc-200 transition hover:bg-white/[0.05] hover:text-orange-400 sm:grid">
            <Search size={18} />
          </Link>
          <Link href="/cart" className="relative grid h-9 w-9 place-items-center rounded-lg text-zinc-200 transition hover:bg-white/[0.05] hover:text-orange-400">
            <ShoppingCart size={18} />
            {count > 0 && <span className="absolute -right-1 -top-1 min-w-[18px] rounded-full bg-orange-500 px-1 text-center text-[10px] font-black leading-[18px] text-black">{count}</span>}
          </Link>
          <Link href="/login" className="hidden rounded-lg border border-orange-400/70 bg-orange-500 px-4 py-2 text-xs font-extrabold text-black shadow-[0_8px_24px_rgba(255,122,0,.18)] transition hover:bg-orange-400 sm:block">Login</Link>
          <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] lg:hidden" aria-label="Toggle navigation">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#080808] lg:hidden">
          <div className="container-shell grid gap-1 py-3">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-zinc-300 hover:bg-white/5 hover:text-orange-400">
                {label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-orange-500 px-4 py-3 text-center text-sm font-bold text-black">Login</Link>
          </div>
        </div>
      )}
    </header>
  );
}
