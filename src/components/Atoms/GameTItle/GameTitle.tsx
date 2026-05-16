import { cn } from "@/lib/utils";

type Props = {
  size: "medium" | "large";
};

export const GameTitle = ({ size }: Props) => {
  const isLarge = size === "large";
  return (
    <div className="flex flex-col items-center">
      <h2
        className={cn(
          "text-center font-bold font-handlee",
          isLarge ? "text-xl lg:text-4xl" : "text-xs lg:text-sm",
        )}
      >
        Tic Tac Toe
      </h2>
      <h1
        className={cn(
          "text-center font-bold font-montserrat uppercase text-primary",
          isLarge ? "text-4xl lg:text-6xl" : "text-xl lg:text-2xl",
        )}
      >
        Game Arena
      </h1>
    </div>
  );
};
