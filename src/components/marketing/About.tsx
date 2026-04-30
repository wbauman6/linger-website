export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 font-script text-2xl text-coral">built with care</p>
        <h2 className="font-serif text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
          About <span className="italic text-coral">Linger</span>
        </h2>

        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-cream/90 sm:text-xl">
          <p>
            Linger was built for the small group of people who actually lived a moment
            with you — your closest friends, your family, your partner. Most apps are
            loud. Public feeds, strangers, ads.{" "}
            <span className="italic text-coral">
              Linger is the opposite — quiet, private, and intimate.
            </span>
          </p>
          <p className="text-muted-foreground">
            We&rsquo;re a small team based in New Jersey, building software that
            respects your time and your memories. Linger is published by{" "}
            <span className="text-cream">Bauman Apps LLC</span>.
          </p>
        </div>

        <div className="mt-14 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="h-px w-12 bg-coral/40" />
          <span className="font-script text-xl text-coral">West Caldwell, NJ</span>
          <span className="h-px w-12 bg-coral/40" />
        </div>
      </div>
    </section>
  );
}
