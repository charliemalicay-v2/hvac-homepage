import { PHONE } from "./data";
import { PhoneIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative flex min-h-[75vh] items-center bg-primary">
      <div className="absolute inset-0 animate-[fadeIn_1.5s_ease-out] bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8 animate-[fadeUp_1s_ease-out_0.3s_both]">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Henderson&apos;s Trusted Heating & Cooling Experts
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          When the desert heat hits triple digits, a working AC isn&apos;t a luxury, it&apos;s a
          necessity. Desert Peak Heating & Cooling keeps Henderson homes and businesses
          comfortable year-round with honest pricing, fast response times, and technicians
          who treat your home like their own.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-accent px-8 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-accent/90"
          >
            Schedule Service
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
