import { Link } from "react-router-dom";

interface SiteNavProps {
  homeLink?: string;
}

export function SiteNav({ homeLink = "#" }: SiteNavProps) {
  const isExternal = homeLink === "#";

  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 sm:pt-10">
      {isExternal ? (
        <a href={homeLink} className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold tracking-tight text-white">
            Linger
          </span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            Memory App
          </span>
        </a>
      ) : (
        <Link to={homeLink} className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold tracking-tight text-white">
            Linger
          </span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            Memory App
          </span>
        </Link>
      )}
      <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
        <a href="/#features" className="transition-colors hover:text-cream">Features</a>
        <a href="/#showcase" className="transition-colors hover:text-cream">Preview</a>
        <a href="/#plus" className="transition-colors hover:text-cream">Plus</a>
        <a href="/#faq" className="transition-colors hover:text-cream">FAQ</a>
      </nav>
    </header>
  );
}
