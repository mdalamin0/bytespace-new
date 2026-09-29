import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "blue" | "outline" | "ghost";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-primary text-black hover:opacity-90 active:scale-95",
    blue: "bg-blue text-white hover:bg-blue/90 active:scale-95",
    outline:
      "border border-white/20 text-white bg-transparent hover:bg-white/10",
    ghost: "text-white/90 bg-transparent hover:text-white hover:bg-white/5",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 shrink-0 px-5 py-3 text-xs sm:px-10 sm:py-4 sm:text-sm cursor-pointer ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
