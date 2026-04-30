import { Check } from "lucide-react";

const perks = [
  "Unlimited memories",
  "Save photos and videos to your phone",
  "Early access to new camera modes",
];

export function LingerPlus() {
  return (
    <section id="plus" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-coral/40 bg-gradient-to-br from-coral/15 via-ink to-ink p-8 sm:p-12 md:p-16">
          {/* Decorative corner gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-coral/20 blur-3xl"
          />

          {/* Tape detail */}
          <div
            aria-hidden
            className="absolute -top-3 left-12 hidden h-7 w-24 -rotate-6 tape-shadow sm:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0 2px, transparent 2px 6px)",
              backgroundColor: "rgba(245,232,211,0.85)",
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 font-script text-2xl text-coral">membership</p>
              <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
                Linger <span className="italic text-coral">Plus</span>
              </h2>
              <p className="mt-4 text-xl text-cream/90">
                Hold onto every memory.
              </p>

              <ul className="mt-8 space-y-4">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-base text-white/90 sm:text-lg">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-coral text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing card */}
            <div className="relative">
              <div
                className="relative bg-cream p-6 polaroid-shadow grain"
                style={{ transform: "rotate(2deg)" }}
              >
                <div
                  aria-hidden
                  className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 tape-shadow"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(0,0,0,0.06) 0 2px, transparent 2px 6px)",
                    backgroundColor: "rgba(245,232,211,0.95)",
                  }}
                />

                <div className="text-center">
                  <p className="font-script text-2xl text-coral">7 days free</p>
                  <div className="mt-3 flex items-baseline justify-center gap-1">
                    <span className="font-serif text-6xl text-ink">$2.99</span>
                    <span className="text-ink/60">/mo</span>
                  </div>
                  <div className="mt-4 border-t border-ink/15 pt-4">
                    <p className="text-sm text-ink/70">
                      or <span className="font-semibold text-ink">$19.99/year</span>
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-coral">
                      Save 44%
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-muted-foreground">
                Available in-app via Apple App Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
