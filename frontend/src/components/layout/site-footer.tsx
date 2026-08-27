import Link from "next/link";
import { Clock3, Mail, MapPin, Phone, UtensilsCrossed } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/5 bg-[#060606]">
      <div className="container-shell grid gap-8 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-4 lg:gap-10">
        <div>
          <div className="mb-4 flex items-center gap-2 font-black">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-500 text-black"><UtensilsCrossed size={16} /></span>
            <span>Food<span className="text-orange-500">ix</span></span>
          </div>
          <p className="max-w-xs text-sm leading-6 text-zinc-500">Good food, good mood. Fresh dishes, fast delivery and a smooth ordering experience.</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold">Quick Links</h3>
          <div className="grid gap-2 text-sm text-zinc-500">
            <Link href="/menu" className="hover:text-orange-400">Menu</Link>
            <Link href="/about" className="hover:text-orange-400">About Us</Link>
            <Link href="/offers" className="hover:text-orange-400">Offers</Link>
            <Link href="/contact" className="hover:text-orange-400">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold">Our Services</h3>
          <div className="grid gap-2 text-sm text-zinc-500">
            <span>Fast Delivery</span><span>Easy Payment</span><span>24/7 Support</span><span>Best Offers</span>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold">Contact Info</h3>
          <div className="grid gap-3 text-sm text-zinc-500">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-orange-500" /> Colombo, Sri Lanka</span>
            <span className="flex items-center gap-2"><Phone size={15} className="text-orange-500" /> +94 77 000 0000</span>
            <span className="flex items-center gap-2"><Mail size={15} className="text-orange-500" /> hello@foodix.com</span>
            <span className="flex items-center gap-2"><Clock3 size={15} className="text-orange-500" /> 10:00 AM – 11:00 PM</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-zinc-600">© 2026 Foodix. All rights reserved.</div>
    </footer>
  );
}
