import Link from "next/link";
import { ArrowRight, BadgeCheck, CreditCard, Truck } from "lucide-react";
import HeroFoodVisual from "@/components/home/hero-food-visual";

const benefits = [
  { icon: Truck, title: "Fast Delivery", text: "On time, every time" },
  { icon: BadgeCheck, title: "Best Quality", text: "Fresh & tasty food" },
  { icon: CreditCard, title: "Easy Payment", text: "Secure & safe" },
];

export default function Hero() {
  return (
    <section className="container-shell pt-4 sm:pt-6 lg:pt-8">
      <div className="hero-panel relative overflow-hidden rounded-[20px] border border-orange-500/25 bg-[#080808] shadow-[0_30px_110px_rgba(0,0,0,.58)] sm:rounded-[24px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_36%,rgba(255,122,0,.12),transparent_24%),radial-gradient(circle_at_4%_0%,rgba(255,122,0,.06),transparent_24%)]" />

        <div className="relative grid items-center lg:min-h-[590px] lg:grid-cols-[0.86fr_1.14fr] xl:min-h-[640px]">
          <div className="relative z-20 px-5 pb-8 pt-9 sm:px-9 sm:pb-10 sm:pt-11 lg:px-12 lg:pb-36 lg:pt-12 xl:px-14">
            <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.24em] text-orange-500 sm:text-xs sm:tracking-[0.26em]">Fresh taste. Fast delivery.</p>
            <h1 className="max-w-[560px] text-[42px] font-black leading-[0.95] tracking-[-0.045em] min-[420px]:text-[48px] sm:text-6xl xl:text-[78px]">
              Good food
              <br />
              <span className="orange-text">good mood</span>
            </h1>
            <p className="mt-5 max-w-[480px] text-sm leading-6 text-zinc-400 sm:mt-6 sm:text-base sm:leading-7 xl:text-lg">
              Discover delicious cuisines from top restaurants and get them delivered fresh to your doorstep.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              <Link href="/menu" className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-extrabold text-black shadow-[0_10px_35px_rgba(255,122,0,.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-orange-400 sm:px-6 sm:py-3.5">Order Now</Link>
              <Link href="/menu" className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0d0d0d] px-5 py-3 text-sm font-bold text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:border-orange-500/40 hover:text-white sm:px-6 sm:py-3.5">Explore Menu <ArrowRight size={16} /></Link>
            </div>
          </div>

          <HeroFoodVisual />
        </div>

        <div className="relative z-30 grid gap-3 border-t border-white/[0.06] bg-black/20 p-4 sm:grid-cols-3 sm:p-5 lg:absolute lg:bottom-5 lg:left-5 lg:right-5 lg:border-0 lg:bg-transparent lg:p-0 xl:left-7 xl:right-7">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="hero-benefit flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0b0b0b]/92 p-3.5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-orange-500/20 sm:gap-4 sm:p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-500/10 text-orange-500 sm:h-10 sm:w-10"><Icon size={20} /></span>
              <div>
                <h3 className="text-sm font-extrabold text-white">{title}</h3>
                <p className="mt-1 text-[11px] text-zinc-500 sm:text-xs">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
