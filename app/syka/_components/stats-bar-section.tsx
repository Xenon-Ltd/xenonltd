const stats = [
  {
    value: "$500K+",
    label: "Monthly Transaction Volume",
    sublabel: "and scaling",
  },
  {
    value: "2,000+",
    label: "Active Customers",
    sublabel: "across 3 countries",
  },
  {
    value: "60+",
    label: "Rural Bank Partnerships",
    sublabel: "in Ghana alone",
  },
  {
    value: "1.5%",
    label: "All-In Transaction Fee",
    sublabel: "vs. 8–15% traditional",
  },
  {
    value: "5–15 min",
    label: "Settlement Time",
    sublabel: "vs. 5–10 days SWIFT",
  },
];

export default function StatsBarSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-primary-400 px-4 sm:px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 px-4 py-5 sm:py-4 ${
                /* On mobile (single col): draw a bottom border between items, not on the last */
                index < stats.length - 1
                  ? "border-b border-white/20 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  : ""
              }`}
            >
              <p className="font-heading text-[32px] font-extrabold text-white leading-8">
                {stat.value}
              </p>
              <p className="font-sans text-[13px] font-medium text-white leading-tight">
                {stat.label}
              </p>
              <p className="font-sans text-xs font-light text-white/70">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
