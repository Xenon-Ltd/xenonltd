import Image from "next/image";
import Link from "next/link";

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
    <footer className="relative w-full overflow-hidden bg-[#F9F4F1]">
      <div
        className="absolute inset-x-0 bottom-0 xl:inset-0"
        style={{ height: "clamp(181px, 41.171875vw, 527px)" }}
        aria-hidden="true"
      >
        <Image
          src="/images/footer-background-3b5c4e.png"
          alt=""
          fill
          className="object-fill"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-56 pt-16 sm:px-8 sm:pt-20 md:px-12 xl:px-20 xl:pb-[150px] xl:pt-[100px]">
        <div className="flex flex-col gap-12 xl:min-h-[277px] xl:flex-row xl:justify-between xl:gap-0">
          <div className="w-full space-y-4 xl:w-[278px] xl:shrink-0">
            <Link href="/" aria-label="Xenon home" className="inline-block">
              <Image
                src="/images/xenon-wordmark-766d7f.png"
                alt=""
                width={143}
                height={40}
                className="h-10 w-[143px] object-contain"
              />
            </Link>
            <p className="max-w-[278px] font-sans text-base leading-[1.45] text-office-brown-800">
              Africa&apos;s Financial Infrastructure Holding Company
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-10 xl:flex xl:w-[838px] xl:items-start xl:justify-between xl:gap-6">
            {footerLinks.map((column) => (
              <div
                key={column.title}
                className="min-w-0 space-y-6 last:col-span-2 sm:last:col-span-1"
              >
                <h2 className="font-sans text-base font-medium leading-[1.45] text-office-brown-700">
                  {column.title}
                </h2>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="font-sans text-base leading-[1.45] text-office-brown-800 transition-colors [overflow-wrap:anywhere] hover:text-primary-400 focus-visible:text-primary-400"
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
    </footer>
  );
}
