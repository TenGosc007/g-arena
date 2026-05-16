import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  kind: "primary" | "secondary";
};

const sharedStyles =
  "h-18 lg:h-24 rounded-sm uppercase w-full cursor-pointer transition-all active:scale-95";

export const Button = ({ children, kind }: Props) => {
  const buttonClass =
    kind === "primary"
      ? "bg-primary text-black border-b-6 border-secondary hover:bg-primary/90 " +
        sharedStyles
      : "text-white border-2 border-secondary hover:bg-gray/10 " + sharedStyles;

  return (
    <button className={buttonClass}>
      <p className="font-montserrat font-bold text-xl lg:text-2xl">
        {children}
      </p>
    </button>
  );
};
