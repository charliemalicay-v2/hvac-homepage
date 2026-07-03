import { services } from "./data";
import { SnowflakeIcon, SettingsIcon, FlameIcon, WindIcon, BuildingIcon } from "./icons";
import Animate from "./animate";

const iconMap: Record<string, typeof SnowflakeIcon> = {
  snowflake: SnowflakeIcon,
  settings: SettingsIcon,
  flame: FlameIcon,
  wind: WindIcon,
  building: BuildingIcon,
};

function ServiceIcon({ name, className }: { name: string; className: string }) {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
}

export default function Services() {
  return (
    <Animate as="section" id="services" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Full-Service HVAC for the Las Vegas Valley
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-primary/70">
          From emergency repairs to full system replacements, our NATE-certified
          technicians handle it all. We service every major brand and stand behind our
          work with a 100% satisfaction guarantee.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group rounded-lg border border-primary/10 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1"
              style={{ animation: `fadeUp 0.6s ease-out ${0.3 + i * 0.1}s both` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/65">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-accent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            See All Services
          </a>
        </div>
      </div>
    </Animate>
  );
}
