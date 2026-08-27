import MenuBrowser from "@/components/menu/menu-browser";

export default function MenuPage() {
  return (
    <>
      <section className="border-b border-white/5 bg-[#080808] py-9 sm:py-12">
        <div className="container-shell text-center">
          <p className="text-sm font-bold text-zinc-500">Home <span className="mx-2 text-orange-500">›</span> Menu</p>
          <h1 className="mt-4 text-3xl font-black sm:text-5xl">Menu <span className="text-orange-500">Restaurant</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-500">Choose your favorite meal, add it to the cart and enjoy a smooth ordering experience.</p>
        </div>
      </section>
      <section className="bg-[#f3ede4] py-9 text-zinc-950 sm:py-12">
        <div className="container-shell">
          <div className="mb-8 text-center"><p className="text-xs font-black uppercase tracking-[0.24em] text-zinc-500">Freshly prepared</p><h2 className="mt-2 text-2xl font-black sm:text-3xl">Choose Menu</h2></div>
          <MenuBrowser />
        </div>
      </section>
    </>
  );
}
