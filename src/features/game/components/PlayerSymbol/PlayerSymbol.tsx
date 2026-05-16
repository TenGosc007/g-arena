import { PlayerSymbol as PlayerSymbolType } from "t3core";

import { cn } from "@/lib/utils";

type Props = {
  symbol: PlayerSymbolType;
};

export const PlayerSymbol = ({ symbol }: Props) => {
  const isO = symbol === "O";

  return (
    <span
      className={cn(
        "font-bold font-handlee",
        isO ? "text-primary" : "text-white",
      )}
    >
      {symbol}
    </span>
  );
};
