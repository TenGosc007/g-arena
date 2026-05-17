import { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  kind: "primary" | "secondary";
};

const sharedStyles =
  "h-18 lg:h-24 rounded-sm uppercase w-full cursor-pointer transition-all active:scale-95";

export const Button = ({ children, kind, ...props }: Props) => {
  return (
    <button
      className={cn(
        sharedStyles,
        kind === "primary"
          ? "bg-primary text-black border-b-6 border-secondary hover:bg-primary/90"
          : "text-white border-2 border-secondary hover:bg-gray/10",
      )}
      {...props}
    >
      <p className="font-montserrat font-bold text-xl lg:text-2xl">
        {children}
      </p>
    </button>
  );
};
