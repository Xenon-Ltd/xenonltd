import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
