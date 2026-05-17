import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type Variant = "normal" | "outlined";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const variantStyles: Record<Variant, string> = {
  normal:
    "bg-primary text-dark hover:bg-primary/90 active:scale-95 transition-colors",
  outlined:
    "bg-dark border border-primary text-white hover:bg-gray/10 active:scale-95 transition-colors",
};

export const ActionButton = ({
  variant = "normal",
  className = "",
  children,
  ...props
}: Props) => {
  return (
    <button
      className={cn(
        "w-full p-3 rounded-xs uppercase cursor-pointer font-bold text-sm lg:text-base",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
