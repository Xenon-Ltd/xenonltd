import React from "react";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  dotColor?: string;
}

export default function SectionTag({
  children,
  className = "",
  dotColor = "bg-primary-400",
}: SectionTagProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden="true" />
      <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-grey-500">
        {children}
      </span>
    </div>
  );
}
