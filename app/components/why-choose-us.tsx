import { benefits } from "./data";
import { ClockIcon, BadgeCheckIcon, ShieldIcon, HeartIcon } from "./icons";
import { PHONE } from "./data";
import { PhoneIcon } from "./icons";
import Animate from "./animate";

const iconMap: Record<string, typeof ClockIcon> = {
  clock: ClockIcon,
  "badge-check": BadgeCheckIcon,
  shield: ShieldIcon,
  heart: HeartIcon,
};

function BenefitIcon({ name, className }: { name: string; className: string }) {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
}

export default function WhyChooseUs() {
  return (
    <Animate as="section" id="why-us" className="bg-primary py-20" animation="slide-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Why Henderson Homeowners Choose Desert Peak
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="flex gap-5 rounded-lg bg-white/10 p-6 transition-all duration-500 hover:bg-white/20 hover:scale-[1.02]"
              style={{ animation: `fadeIn 0.6s ease-out ${0.4 + i * 0.15}s both` }}
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                <BenefitIcon name={benefit.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/70">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded bg-accent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {PHONE}
          </a>
        </div>
      </div>
    </Animate>
  );
}
