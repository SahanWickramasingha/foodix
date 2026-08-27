import { BadgeCheck, CreditCard, Truck } from "lucide-react";

const items = [
  { icon: Truck, title: "Fast Delivery", text: "On time, every time" },
  { icon: BadgeCheck, title: "Best Quality", text: "Fresh & tasty food" },
  { icon: CreditCard, title: "Easy Payment", text: "Secure & safe" },
];

export default function Benefits() {
  return (
    <section className="container-shell mt-5 grid gap-3 md:grid-cols-3">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="soft-card flex items-center gap-4 rounded-2xl p-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-500/10 text-orange-500"><Icon size={22} /></span>
          <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm text-zinc-500">{text}</p></div>
        </div>
      ))}
    </section>
  );
}
