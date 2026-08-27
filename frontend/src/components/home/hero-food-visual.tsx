"use client";

import type { PointerEvent } from "react";

export default function HeroFoodVisual() {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--hero-x", `${x * 14}px`);
    event.currentTarget.style.setProperty("--hero-y", `${y * 10}px`);
    event.currentTarget.style.setProperty("--hero-rx", `${y * -1.5}deg`);
    event.currentTarget.style.setProperty("--hero-ry", `${x * 1.9}deg`);
  };

  const resetPointer = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--hero-x", "0px");
    event.currentTarget.style.setProperty("--hero-y", "0px");
    event.currentTarget.style.setProperty("--hero-rx", "0deg");
    event.currentTarget.style.setProperty("--hero-ry", "0deg");
  };

  return (
    <div
      className="hero-visual relative h-full min-h-[320px] w-full overflow-hidden sm:min-h-[390px] lg:min-h-full"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="hero-ambient-glow pointer-events-none absolute left-[16%] top-[12%] h-[55%] w-[66%] rounded-full bg-orange-500/15 blur-[90px]" />

      <div className="hero-parallax-stage absolute -inset-[5%]">
        <div className="hero-image-breathe relative h-full w-full">
          <img
            src="/images/hero/grilled-chicken-bowl.png"
            alt="Grilled chicken pasta bowl"
            className="hero-food-image h-full w-full object-cover object-center"
            draggable={false}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/20 to-transparent lg:from-[#080808] lg:via-[#080808]/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] via-[#080808]/45 to-transparent sm:h-36" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#080808]/60 to-transparent" />
      <div className="hero-light-sweep pointer-events-none absolute -inset-y-12 -left-1/2 w-1/3 rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.055] to-transparent blur-xl" />

      <span className="hero-particle hero-particle-1" />
      <span className="hero-particle hero-particle-2" />
      <span className="hero-particle hero-particle-3" />
      <span className="hero-particle hero-particle-4" />

      <div className="pointer-events-none absolute bottom-[16%] right-[10%] h-24 w-24 rounded-full border border-orange-400/10 sm:h-32 sm:w-32" />
      <div className="pointer-events-none absolute bottom-[12%] right-[7%] h-16 w-16 rounded-full border border-orange-400/10 sm:h-20 sm:w-20" />
    </div>
  );
}
