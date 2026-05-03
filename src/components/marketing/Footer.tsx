import { Link } from "react-router-dom";
import { AppStoreBadge } from "./AppStoreBadge";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Brand */}
        <div className="mb-12 flex flex-col items-start gap-4 border-b border-white/5 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a href="#" className="font-serif text-3xl font-semibold text-white">
              Linger
            </a>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              A private app for the memories worth keeping.
            </p>
          </div>
          <p className="font-script text-2xl text-coral">
            quiet. private. intimate.
          </p>
        </div>

        {/* 3 columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="font-serif text-base text-white">Bauman Apps LLC</li>
              <li>West Caldwell, NJ</li>
              <li className="pt-2">
                <span className="text-white/60">Contact</span>
                <br />
                <a
                  href="mailto:founders@thelingerapp.com"
                  className="text-cream transition-colors hover:text-coral"
                >
                  founders@thelingerapp.com
                </a>
              </li>
              <li>
                <span className="text-white/60">Support</span>
                <br />
                <a
                  href="mailto:support@thelingerapp.com"
                  className="text-cream transition-colors hover:text-coral"
                >
                  support@thelingerapp.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-muted-foreground transition-colors hover:text-coral"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-muted-foreground transition-colors hover:text-coral"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@thelingerapp.com?subject=Report%20Content"
                  className="text-muted-foreground transition-colors hover:text-coral"
                >
                  Report inappropriate content
                </a>
              </li>
            </ul>
          </div>

          {/* App */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              App
            </h3>
            <div className="flex flex-col items-start gap-3">
              <AppStoreBadge variant="apple" />
              <AppStoreBadge variant="google" comingSoon />
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Bauman Apps LLC. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60">
            Made with care in West Caldwell, New Jersey.
          </p>
        </div>
      </div>
    </footer>
  );
}
