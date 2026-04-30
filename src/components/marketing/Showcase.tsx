import { PhoneMockup } from "./PhoneMockup";

export function Showcase() {
  return (
    <section id="showcase" className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative background scribble */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <p className="mb-3 font-script text-2xl text-coral">a closer look</p>
          <h2 className="font-serif text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
            Built for the moments<br />
            <span className="italic text-cream">worth keeping.</span>
          </h2>
        </div>

        {/* Phones */}
        <div className="relative flex flex-col items-center justify-center gap-8 sm:gap-12 md:flex-row md:items-end md:gap-6 lg:gap-10">
          <PhoneMockup
            src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=1300&fit=crop"
            alt="Linger memory grid view"
            rotate={-6}
            className="md:translate-y-6"
          />
          <PhoneMockup
            src="https://images.unsplash.com/photo-1488861859915-4b5a5e57649f?w=600&h=1300&fit=crop"
            alt="Linger disposable camera mode"
            rotate={0}
            className="md:-translate-y-4"
          />
          <PhoneMockup
            src="https://images.unsplash.com/photo-1525160354320-d8e92641c563?w=600&h=1300&fit=crop"
            alt="Linger memory with friends"
            rotate={6}
            className="md:translate-y-6"
          />
        </div>

        <p className="mx-auto mt-16 max-w-md text-center font-script text-2xl text-cream/80">
          a tiny scrapbook in your pocket
        </p>
      </div>
    </section>
  );
}
