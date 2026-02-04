import Link from "next/link"
import { Building2, MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

const services = [
  "Project Planning",
  "Foundation Work",
  "Interior Design",
  "Renovation",
  "Turnkey Construction",
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight font-[family-name:var(--font-heading)]">
                  Annamalaiyar
                </span>
                <span className="text-xs uppercase tracking-wider text-primary-foreground/70">
                  Construction
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Building dreams into reality with quality construction services in Tirupur, Tamil Nadu. Trust, transparency, and craftsmanship define our work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-heading)]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-heading)]">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-heading)]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/70 shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Tirupur, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/70 shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +91 XXXXX XXXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/70 shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  info@annamalaiyarconstruction.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              &copy; {new Date().getFullYear()} Annamalaiyar Construction. All rights reserved.
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Trusted Builders in Tirupur
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
