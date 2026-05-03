import { Polaroid } from "./Polaroid";
import { AppStoreBadge } from "./AppStoreBadge";
import { SiteNav } from "./SiteNav";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Ambient warm glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[300px] w-[300px] rounded-full bg-cream/5 blur-[100px]" />
      </div>

      {/* Top brand bar */}
      <SiteNav homeLink="#" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 sm:pt-24 lg:grid-cols-12 lg:gap-8 lg:pb-32 lg:pt-28">
        {/* Copy */}
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-coral-200">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            Now on iOS · United States &amp; Canada
          </div>

          <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Memories that{" "}
            <span className="relative inline-block italic text-coral">
              linger
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 h-2.5 w-full text-coral/70"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C 60 2, 140 2, 198 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A private app for sharing the moments that matter — only with the people
            who lived them with you.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <AppStoreBadge variant="apple" />
            <AppStoreBadge variant="google" comingSoon />
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&h=80&fit=crop",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-8 w-8 rounded-full border-2 border-ink object-cover"
                />
              ))}
            </div>
            <span>For your closest people. No public feeds. No strangers.</span>
          </div>
        </div>

        {/* Polaroid stack */}
        <div className="relative h-[440px] sm:h-[520px] lg:col-span-5 lg:h-[600px]">
          <div className="absolute left-[8%] top-[6%] hidden sm:block" style={{ zIndex: 1 }}>
            <Polaroid
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop"
              alt="Friends at sunset"
              caption="that summer."
              rotate={-7}
              tape="topLeft"
              size="md"
            />
          </div>

          <div className="absolute right-[2%] top-[20%]" style={{ zIndex: 3 }}>
            <Polaroid
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=700&h=700&fit=crop"
              alt="Hands holding film camera"
              caption="june 17"
              rotate={5}
              tape="top"
              size="lg"
              float
              className="coral-glow"
            />
          </div>

          <div className="absolute bottom-[4%] left-[18%]" style={{ zIndex: 2 }}>
            <Polaroid
              src="https://images.unsplash.com/photo-1502781252888-9143ba7f074e?w=600&h=600&fit=crop"
              alt="Group of friends laughing"
              caption="us, again."
              rotate={3}
              tape="topRight"
              size="md"
            />
          </div>
        </div>
      </div>

      {/* Soft bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink" />
    </section>
  );
}
