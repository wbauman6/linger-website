import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  tape?: "top" | "topLeft" | "topRight" | "none";
  size?: "sm" | "md" | "lg";
  className?: string;
  float?: boolean;
  children?: ReactNode;
}

const sizeMap: Record<NonNullable<PolaroidProps["size"]>, string> = {
  sm: "w-44 sm:w-52",
  md: "w-56 sm:w-64 md:w-72",
  lg: "w-64 sm:w-80 md:w-96",
};

export function Polaroid({
  src,
  alt,
  caption,
  rotate = -2,
  tape = "top",
  size = "md",
  className,
  float = false,
  children,
}: PolaroidProps) {
  const style: CSSProperties = {
    transform: `rotate(${rotate}deg)`,
    ...(float ? ({ "--tilt": `${rotate}deg` } as CSSProperties) : {}),
  };

  return (
    <div
      style={style}
      className={cn(
        "group relative bg-cream p-3 pb-12 polaroid-shadow grain transition-transform duration-500 ease-out hover:-translate-y-1.5 hover:!rotate-0",
        sizeMap[size],
        float && "animate-float-slow",
        className,
      )}
    >
      {tape !== "none" ? (
        <div
          aria-hidden
          className={cn(
            "absolute z-10 h-6 w-20 tape-shadow",
            tape === "top" &&
              "left-1/2 -top-3 -translate-x-1/2 -rotate-3",
            tape === "topLeft" && "-top-3 left-4 -rotate-12",
            tape === "topRight" && "-top-3 right-4 rotate-12",
          )}
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0 2px, transparent 2px 6px)",
            backgroundColor: "rgba(245,232,211,0.78)",
          }}
        />
      ) : null}

      <div className="relative aspect-square w-full overflow-hidden bg-ink">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {children}
      </div>

      {caption ? (
        <div className="absolute bottom-3 left-0 right-0 text-center font-script text-lg text-ink/80">
          {caption}
        </div>
      ) : null}
    </div>
  );
}
