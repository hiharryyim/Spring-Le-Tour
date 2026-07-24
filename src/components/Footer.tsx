import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-vertical.png"
              alt="Spring Le Tour"
              width={180}
              height={80}
              className="mb-4 brightness-0 invert opacity-80"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Premium turn-key mobile solutions, engineered in California,
              built to move your vision forward.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/#about" },
                { label: "Products", href: "/#products" },
                { label: "Grooming Van", href: "/grooming" },
                { label: "Camper Van", href: "/camper" },
                { label: "Why Choose Us", href: "/#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:harry.yan@springletour.com"
                  className="hover:text-primary-light transition-colors"
                >
                  harry.yan@springletour.com
                </a>
              </li>
              <li>11562 Range View Rd</li>
              <li>Jurupa Valley, CA 91752</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Spring Le Tour. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
