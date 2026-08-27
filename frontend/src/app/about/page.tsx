import { BadgeCheck, HeartHandshake, Leaf, TimerReset } from "lucide-react";

const features = [
  [Leaf, "Fresh ingredients", "We focus on fresh ingredients and consistent quality."],
  [TimerReset, "Fast preparation", "Efficient kitchen workflows keep orders moving quickly."],
  [BadgeCheck, "Quality first", "Every dish is prepared with care and attention to detail."],
  [HeartHandshake, "Made for people", "Simple ordering, clear pricing and reliable support."],
] as const;

export default function AboutPage() {
  return (
    <section className="container-shell py-10 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div><p className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500">About Foodix</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Food that feels <span className="text-orange-500">worth ordering.</span></h1><p className="mt-5 max-w-xl leading-7 text-zinc-400">Foodix is designed around a modern restaurant experience: craveable meals, fast service, secure checkout and a clean digital ordering journey.</p></div>
        <div className="overflow-hidden rounded-[28px] border border-orange-500/20"><img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85" alt="Restaurant interior" className="h-[300px] w-full object-cover sm:h-[420px]" /></div>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(([Icon, title, text]) => <div key={title} className="soft-card rounded-2xl p-5"><Icon className="text-orange-500" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p></div>)}</div>
    </section>
  );
}
