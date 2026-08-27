import Link from "next/link";

export default function SpecialOffer() {
  return (
    <section className="container-shell mt-7 sm:mt-8">
      <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0d0d0d] p-6 sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,122,0,.18),transparent_30%)]" />
        <div className="relative z-10 grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.26em] text-orange-500">Today’s Special</span>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">Combo offers made for your cravings.</h2>
            <p className="mt-3 max-w-2xl text-zinc-400">Get up to 30% off on selected meals, burgers and family combos for a limited time.</p>
          </div>
          <Link href="/offers" className="w-fit rounded-xl bg-orange-500 px-5 py-3 text-sm font-extrabold text-black transition hover:bg-orange-400">View Offers</Link>
        </div>
      </div>
    </section>
  );
}
