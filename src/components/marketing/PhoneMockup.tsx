import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src: string;
  alt: string;
  rotate?: number;
  className?: string;
}

export function PhoneMockup({ src, alt, rotate = 0, className }: PhoneMockupProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Glow under phone */}
      <div
        aria-hidden
        className="absolute -inset-x-6 -bottom-10 h-24 rounded-full bg-coral/30 blur-3xl"
      />

      {/* Phone body */}
      <div className="relative w-[260px] overflow-hidden rounded-[3rem] border-[6px] border-zinc-900 bg-zinc-900 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),inset_0_0_0_2px_rgba(255,255,255,0.06)] sm:w-[300px]">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.5rem] bg-ink">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
