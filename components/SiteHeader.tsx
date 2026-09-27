"use client";

import { useEffect, useState } from "react";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      // A section counts as current while it crosses the band just under the header.
      { rootMargin: "-20% 0px -75% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="flex h-14 items-stretch justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 border-r-2 border-ink px-4 hover:bg-ink hover:text-paper md:px-6"
        >
          <span className="font-wide text-lg font-black leading-none">H.</span>
          <span className="label hidden sm:inline">Muhammad Hamza</span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className="group flex items-center gap-2 border-l-2 border-ink px-6 font-medium hover:bg-signal aria-[current]:bg-ink aria-[current]:text-paper aria-[current]:hover:bg-signal aria-[current]:hover:text-ink"
            >
              <span className="label text-mute group-hover:text-ink group-aria-[current]:text-signal">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="label border-l-2 border-ink px-5 hover:bg-ink hover:text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Primary"
        className={`${open ? "block" : "hidden"} border-t-2 border-ink md:hidden`}
      >
        {nav.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-4 border-b-2 border-ink px-4 py-4 font-narrow text-4xl font-black uppercase last:border-b-0 active:bg-signal"
          >
            <span className="label text-mute">0{i + 1}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
