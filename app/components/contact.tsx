import { PHONE, EMAIL, ADDRESS, HOURS } from "./data";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "./icons";
import Animate from "./animate";

export default function Contact() {
  return (
    <Animate as="section" id="contact" className="bg-surface py-20" animation="fade-up">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Ready to Get Comfortable Again?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-primary/70">
          Whether it&apos;s a quick repair, a seasonal tune-up, or a brand-new system,
          Desert Peak is ready to help. Reach out today and find out why Henderson trusts
          us to keep the air just right.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6" style={{ animation: "fadeIn 0.8s ease-out 0.3s both" }}>
            <div className="flex items-start gap-4">
              <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold text-primary">Phone</h3>
                <a
                  href={`tel:${PHONE}`}
                  className="text-primary/70 transition-colors hover:text-accent"
                >
                  {PHONE}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MailIcon className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold text-primary">Email</h3>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-primary/70 transition-colors hover:text-accent"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold text-primary">Address</h3>
                <p className="text-primary/70">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold text-primary">Hours</h3>
                <p className="text-primary/70">{HOURS}</p>
              </div>
            </div>
          </div>

          <form className="space-y-5" style={{ animation: "fadeIn 0.8s ease-out 0.5s both" }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-sm text-primary placeholder:text-primary/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-sm text-primary placeholder:text-primary/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="mt-1 w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-sm text-primary placeholder:text-primary/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="(555) 555-0000"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-sm text-primary placeholder:text-primary/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Tell us about your HVAC needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Animate>
  );
}
