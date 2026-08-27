import { Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  { Icon: MapPin, title: "Address", text: "Colombo, Sri Lanka" },
  { Icon: Phone, title: "Phone", text: "+94 77 000 0000" },
  { Icon: Mail, title: "Email", text: "hello@foodix.com" },
];

export default function ContactPage() {
  return (
    <section className="container-shell py-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">Contact</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Talk to Foodix</h1>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-500">Questions, feedback or a special request? Send us a message.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-4">
            {contactCards.map(({ Icon, title, text }) => (
              <div key={title} className="soft-card rounded-2xl p-5">
                <Icon className="text-orange-500" />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
          <form className="glass-panel rounded-[26px] p-6" action="#">
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Your name" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500/40" />
              <input type="email" placeholder="Email address" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500/40" />
            </div>
            <input placeholder="Subject" className="mt-4 w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500/40" />
            <textarea rows={6} placeholder="Message" className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500/40" />
            <button className="mt-4 rounded-xl bg-orange-500 px-5 py-3 text-sm font-extrabold text-black">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
