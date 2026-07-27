import React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
}

export default function PrimaryButton({
  children,
  variant = "solid",
  className = "",
  ...props
}: PrimaryButtonProps) {
  const baseStyles = `group ${
    className.includes("absolute") || className.includes("fixed") ? "" : "relative"
  } inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-sans text-base font-medium transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2`;

  const variantStyles =
    variant === "solid"
      ? "bg-primary-400 text-white hover:bg-success-400 hover:text-[#E9FF1F]"
      : "bg-transparent text-primary-400 hover:bg-primary-400/5";

  return (
    <button type="button" className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
