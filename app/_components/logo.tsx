import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 select-none group">
      {/* Dynamic Stylized X Logo */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 ease-out group-hover:rotate-12"
        aria-hidden="true"
      >
        {/* Left-Top and Right-Bottom slash path (Warm Coral/Red Gradient) */}
        <path
          d="M6 13.5L13.5 6L32 24.5L24.5 32L6 13.5Z"
          fill="url(#logo-warm-grad)"
        />
        {/* Left-Bottom and Right-Top slash path (Teal/Green/Blue Gradient) */}
        <path
          d="M13.5 32L6 24.5L24.5 6L32 13.5L13.5 32Z"
          fill="url(#logo-cool-grad)"
        />
        <defs>
          <linearGradient
            id="logo-warm-grad"
            x1="6"
            y1="6"
            x2="32"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F08237" />
            <stop offset="0.5" stopColor="#E15A3E" />
            <stop offset="1" stopColor="#D8412F" />
          </linearGradient>
          <linearGradient
            id="logo-cool-grad"
            x1="32"
            y1="6"
            x2="6"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#10B981" />
            <stop offset="0.5" stopColor="#0EA5E9" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Brand Text */}
      <span className="font-heading text-2xl font-bold tracking-tight text-zinc-900 transition-colors duration-200 group-hover:text-black">
        xenon
      </span>
    </div>
  );
}
