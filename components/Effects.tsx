"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Efeitos de página que não precisam de estado React: reveal ao rolar e brilho que segue o cursor
export function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }),
      { threshold: 0.12 },
    );

    document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const glow = document.querySelector<HTMLElement>(".bg-glow");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!glow || reduce || !window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      glow.style.setProperty("--mx", e.clientX + "px");
      glow.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
