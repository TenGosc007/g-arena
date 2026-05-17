import { BoardField } from "t3core";

import { cn } from "@/lib/utils";

import { PlayerSymbol } from "../PlayerSymbol";

type Props = {
  item: BoardField;
  onClick?: () => void;
};

const sharedStyle =
  "w-full h-full aspect-square bg-dark flex items-center justify-center text-6xl lg:text-8xl select-none";

export const BoardItem = ({ item, onClick }: Props) => {
  if (!item || typeof item !== "string") {
    return (
      <button
        onClick={onClick}
        className={cn(
          sharedStyle,
          "cursor-pointer hover:opacity-80 active:scale-95 transition-transform",
        )}
      />
    );
  }

  return (
    <div className={sharedStyle}>
      {item && typeof item === "string" ? <PlayerSymbol symbol={item} /> : null}
    </div>
  );
};
