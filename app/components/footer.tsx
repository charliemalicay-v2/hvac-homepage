import { PHONE, EMAIL, ADDRESS, LICENSE } from "./data";
import Animate from "./animate";

export default function Footer() {
  return (
    <Animate as="footer" className="bg-primary py-10" animation="fade-in">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <a
          href={`tel:${PHONE}`}
          className="text-2xl font-bold text-white transition-colors hover:text-accent"
        >
          {PHONE}
        </a>
        <p className="mt-2 text-sm text-white/60">{ADDRESS}</p>
        <p className="mt-1 text-sm text-white/60">
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-accent">
            {EMAIL}
          </a>
        </p>
        <p className="mt-1 text-sm text-white/60">License: {LICENSE}</p>
        <div className="mx-auto mt-8 h-px max-w-xs bg-white/10" />
        <p className="mt-6 text-xs text-white/40">
          &copy; {new Date().getFullYear()} Desert Peak Heating & Cooling. All rights
          reserved.
        </p>
      </div>
    </Animate>
  );
}
