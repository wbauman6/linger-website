import { Polaroid } from "./Polaroid";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  image: string;
  caption: string;
  rotate: number;
  tape: "top" | "topLeft" | "topRight";
}

const features: Feature[] = [
  {
    title: "Cameras with character",
    description:
      "Three modes built for nostalgia. Disposable for that vintage film feel, digital for Y2K vibes, normal for clean shots. Every photo gets the right look.",
    image:
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=700&h=700&fit=crop",
    caption: "click.",
    rotate: -3,
    tape: "topLeft",
  },
  {
    title: "Just for your people",
    description:
      "Memories are private by default. Only the people you invite can see them. No public feeds. No strangers. No followers.",
    image:
      "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=700&h=700&fit=crop",
    caption: "only us.",
    rotate: 2,
    tape: "top",
  },
  {
    title: "Memories that last",
    description:
      "Create a memory, name it, invite the people who lived it with you. Everyone adds their photos and videos to the same private collection.",
    image:
      "https://images.unsplash.com/photo-1531171596281-8b5d26917d8b?w=700&h=700&fit=crop",
    caption: "keep this.",
    rotate: -2,
    tape: "topRight",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-3 font-script text-2xl text-coral">what linger does</p>
          <h2 className="font-serif text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
            Built for the moments<br />
            <span className="italic text-cream">worth keeping.</span>
          </h2>
        </div>

        <div className="grid gap-12 sm:gap-10 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <div
      className={cn(
        "group relative",
        index === 1 ? "lg:translate-y-8" : "",
      )}
    >
      <div className="mb-8 flex justify-center">
        <Polaroid
          src={feature.image}
          alt={feature.title}
          caption={feature.caption}
          rotate={feature.rotate}
          tape={feature.tape}
          size="md"
        />
      </div>

      <div
        className="relative mx-auto max-w-sm border-l-2 border-coral bg-card/40 p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-1"
        style={{ transform: `rotate(${index === 1 ? 0 : index === 0 ? -1 : 1}deg)` }}
      >
        <h3 className="font-serif text-2xl text-white sm:text-3xl">
          {feature.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
