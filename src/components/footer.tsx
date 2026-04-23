import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold text-white">
                EKOS
              </span>
              <span className="text-xs text-white/50">
                Research Associates Inc.
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Knowledge for Action — Canada&apos;s leading public opinion and
              policy research firm since 1980.
            </p>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Research</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/research" className="hover:text-gold transition-colors">
                  Latest Research
                </Link>
              </li>
              <li>
                <Link href="/research?topic=federal-politics" className="hover:text-gold transition-colors">
                  Federal Politics
                </Link>
              </li>
              <li>
                <Link href="/research?topic=economy" className="hover:text-gold transition-colors">
                  Economy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About EKOS
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-gold transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>359 Kent Street, Suite 300</li>
              <li>Ottawa, ON K2P 0R6</li>
              <li>
                <a href="tel:6132357215" className="hover:text-gold transition-colors">
                  (613) 235-7215
                </a>
              </li>
              <li>
                <a href="mailto:info@ekos.com" className="hover:text-gold transition-colors">
                  info@ekos.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; 2025 EKOS Research Associates Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
