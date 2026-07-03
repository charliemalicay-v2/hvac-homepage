import { PHONE } from "./data";
import { PhoneIcon } from "./icons";
import Animate from "./animate";

export default function Emergency() {
  return (
    <Animate as="section" className="bg-accent py-16" animation="fade-in">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Emergency AC Repair When You Need It Most
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
          A broken AC in a Las Vegas summer can&apos;t wait. Our emergency line is open
          evenings and weekends, and our trucks are stocked to handle most repairs on the
          first visit, so you&apos;re not left sweating for days.
        </p>
        <div className="mt-8">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-3 rounded bg-white px-10 py-4 text-lg font-bold text-accent shadow-lg transition-colors hover:bg-white/90"
          >
            <PhoneIcon className="h-6 w-6" />
            Call {PHONE}
          </a>
        </div>
      </div>
    </Animate>
  );
}
