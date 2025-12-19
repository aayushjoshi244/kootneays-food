import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";

const PHONE_DISPLAY = "+(639) 916-0335";
// Tel links should be digits/+ only (no spaces, parentheses)
const PHONE_TEL = "+6399160335";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 bg-slate-950">
        {/* Hero */}
        <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden border-b border-white/10">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2400&q=80)",
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-slate-950/70" />

          {/* Content */}
          <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-white/80 uppercase">
              Kiera Transportation Ltd.
            </p>

            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              Your trusted delivery solution
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
              Based in Cranbrook, British Columbia — delivering food-service
              goods to restaurants and fast-food chains across the Kootenays.
              Partnered with Sysco Canada.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-medium text-slate-900 transition hover:bg-amber-400"
              >
                Call {PHONE_DISPLAY}
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-white transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="mx-auto max-w-6xl px-4 py-16 sm:py-20"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Services
            </h2>
            <p className="mt-3 text-slate-300">What we help you with</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <DarkCard
              title="Food-service goods delivery"
              desc="Delivery support for food-service goods to keep operations running smoothly."
            />
            <DarkCard
              title="Restaurant & fast-food support"
              desc="Built to meet the pace and reliability expectations of commercial kitchens."
            />
            <DarkCard
              title="Kootenays-wide coverage"
              desc="Regional delivery coverage across the Kootenays area from our Cranbrook base."
            />
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              About
            </h2>
            <p className="mt-3 text-slate-300">
              Local, dependable, and business-first
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-white">Who we are</h3>
              <p className="mt-2 text-slate-300">
                We’re a local business based in Cranbrook, BC providing delivery
                services of food-service goods to restaurants and fast-food
                chains throughout the Kootenays area. We partner with Sysco
                Canada to support efficient supply and distribution.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-white">
                Business details
              </h3>
              <div className="mt-3 space-y-2 text-slate-300">
                <p>
                  <span className="font-semibold text-white">Owner:</span>{" "}
                  Premjit Singh Sandhu
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  <a
                    className="underline underline-offset-4 hover:text-white"
                    href={`tel:${PHONE_TEL}`}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Base:</span>{" "}
                  Cranbrook, British Columbia
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Service area:
                  </span>{" "}
                  Kootenays region
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-16 sm:pb-24">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Contact Us
            </h2>
            <p className="mt-3 text-slate-300">Drop us a line!</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <form className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Name"
                name="name"
                autoComplete="name"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Email*"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <textarea
                className="min-h-[180px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Message"
                name="message"
                required
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-900 hover:bg-amber-400"
              >
                SEND
              </button>

              <p className="text-center text-xs text-slate-400">
                Prefer calling?{" "}
                <a
                  className="underline underline-offset-4 hover:text-white"
                  href={`tel:${PHONE_TEL}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </form>
          </div>
        </section>

        {/* Final CTA (Dark) */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:pb-28">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-sm">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Ready to get started?
            </h2>
            <p className="mt-3 text-slate-300">
              Fast, reliable delivery support across the Kootenays.
            </p>

            <p className="mt-6 text-slate-300">
              Call to discuss service coverage and delivery needs for your
              restaurant or fast-food location.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-medium text-slate-900 transition hover:bg-amber-400"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function DarkCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-300">{desc}</p>
    </div>
  );
}
