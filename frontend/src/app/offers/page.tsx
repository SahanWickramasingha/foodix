import Link from "next/link";

const offers = [
  { title: "Burger Combo", off: "20% OFF", text: "Burger + fries + drink", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85" },
  { title: "Pizza Night", off: "25% OFF", text: "Selected large pizzas", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85" },
  { title: "Family Feast", off: "30% OFF", text: "Selected family meals", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85" },
];

export default function OffersPage() {
  return <section className="container-shell py-10 sm:py-14"><div className="text-center"><p className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">Limited time</p><h1 className="mt-3 text-4xl font-black sm:text-5xl">Special Offers</h1><p className="mx-auto mt-4 max-w-2xl text-zinc-500">Premium combos and discounts designed to match the Foodix dark-orange visual system.</p></div><div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">{offers.map((offer) => <article key={offer.title} className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0e0e]"><div className="h-60 overflow-hidden"><img src={offer.image} alt={offer.title} className="food-img h-full w-full object-cover" /></div><div className="p-5"><span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-black text-black">{offer.off}</span><h2 className="mt-4 text-2xl font-black">{offer.title}</h2><p className="mt-2 text-zinc-500">{offer.text}</p><Link href="/menu" className="mt-5 inline-block rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-black">Order now</Link></div></article>)}</div></section>;
}
