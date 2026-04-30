import { cn } from "@/lib/utils";
import { Apple } from "lucide-react";

interface AppStoreBadgeProps {
  variant?: "apple" | "google";
  className?: string;
  comingSoon?: boolean;
  href?: string;
}

export function AppStoreBadge({
  variant = "apple",
  className,
  comingSoon = false,
  href = "#",
}: AppStoreBadgeProps) {
  const isApple = variant === "apple";
  const Tag = comingSoon ? "div" : "a";

  return (
    <Tag
      {...(comingSoon ? {} : { href, target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black px-5 py-3 transition-all duration-300",
        comingSoon
          ? "cursor-default opacity-60"
          : "hover:border-coral/60 hover:bg-black/80 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-5px_rgba(200,108,80,0.4)]",
        className,
      )}
      aria-label={isApple ? "Download on the App Store" : "Get it on Google Play"}
    >
      {isApple ? (
        <Apple className="h-7 w-7 fill-white text-white" strokeWidth={0} />
      ) : (
        <svg viewBox="0 0 512 512" className="h-7 w-7 fill-white">
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zm-256.7-216C57.4 24.5 50.4 35.5 50.4 49.9v412.2c0 14.4 7 25.4 18.2 31.6l255.7-205.7L68.6 18.3zM464.5 233.4c8.5 6.7 12.3 14.6 12.3 22.6s-3.8 15.9-12.3 22.6l-57.1 33-66.4-55.6 66.4-55.6 57.1 33zM104.6 499L385.4 337.8l-60.1-60.1L104.6 499z"/>
        </svg>
      )}
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
          {comingSoon ? "Coming soon to" : isApple ? "Download on the" : "Get it on"}
        </span>
        <span className="font-serif text-lg font-semibold text-white">
          {isApple ? "App Store" : "Google Play"}
        </span>
      </div>
    </Tag>
  );
}
