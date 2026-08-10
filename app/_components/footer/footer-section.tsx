import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/_components/logo";

interface FooterLinkItem {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLinkItem[];
}

const footerLinks: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/contact" },
      { name: "Careers", href: "/contact" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { name: "Syka", href: "/syka" },
      { name: "Kura", href: "/#portfolio" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Cross-border Payment", href: "/syka" },
      { name: "Payment Infrastructure", href: "/banking" },
      { name: "Compliance", href: "/compliance" },
      { name: "Escrow", href: "/escrow" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "API Documentation", href: "/contact" },
      { name: "Case Studies", href: "/contact" },
      { name: "Regulatory Info", href: "/compliance" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "partnership@xenonlimited.co", href: "mailto:partnership@xenonlimited.co" },
      { name: "Twitter", href: "https://twitter.com" },
      { name: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="relative w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.png"
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          priority={false}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20 lg:py-28 xl:py-32 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo + tagline */}
          <div className="lg:col-span-4 space-y-6">
            <Logo />
            <p className="font-sans text-base leading-relaxed text-office-brown-800 max-w-[20rem]">
              Africa&apos;s Financial Infrastructure Holding Company
            </p>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10">
              {footerLinks.map((column) => (
                <div key={column.title} className="space-y-4">
                  <h4 className="font-sans text-sm font-medium text-office-brown-700">
                    {column.title}
                  </h4>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="font-sans text-sm text-office-brown-800 hover:text-primary-400 transition-colors break-words"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
