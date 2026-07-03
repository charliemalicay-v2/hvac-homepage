"use client";

import { useState, useEffect } from "react";
import { PhoneIcon, MenuIcon, XIcon } from "./icons";
import { PHONE } from "./data";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Area", href: "#service-area" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-primary text-white shadow-lg transition-all duration-700 ${
        loaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="text-xl font-bold tracking-tight">
          Desert Peak
          <span className="block text-xs font-normal tracking-widest text-white/70">
            HEATING & COOLING
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 rounded bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            <PhoneIcon className="h-4 w-4" />
            {PHONE}
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="mt-3 flex items-center justify-center gap-2 rounded bg-accent px-4 py-3 text-sm font-semibold text-white"
          >
            <PhoneIcon className="h-4 w-4" />
            {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
