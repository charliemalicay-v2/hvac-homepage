import { cities } from "./data";
import Animate from "./animate";

export default function ServiceArea() {
  return (
    <Animate as="section" id="service-area" className="bg-surface py-20" animation="fade-in">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Serving Henderson & the Greater Las Vegas Area
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary/70">
          We provide fast, local service throughout:
        </p>
        <div className="mt-10 grid grid-cols-3 gap-4">
          {cities.map((city, i) => (
            <div
              key={city}
              className="rounded-lg border border-primary/10 bg-white px-4 py-4 text-sm font-medium text-primary shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md"
              style={{ animation: `fadeUp 0.5s ease-out ${0.3 + i * 0.08}s both` }}
            >
              {city}
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-primary/60">
          Not sure if you&apos;re in our service area? Give us a call and we&apos;ll let you
          know right away.
        </p>
        <div className="mt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-accent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Check Your Area
          </a>
        </div>
      </div>
    </Animate>
  );
}
