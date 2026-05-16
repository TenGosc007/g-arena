import { PlayerMoveStatus, PlayerSymbol as PlayerSymbolType } from "t3core";

import { cn } from "@/lib/utils";

import { BoardItem } from "../BoardItem";

const BOARD_SIZE = "max-h-[610px] max-w-[610px]";
const COLUMNS = "grid-cols-3";

type Props = {
  board: (PlayerSymbolType | number)[];
  onClick: (index: number) => PlayerMoveStatus;
};

export const Board = ({ board, onClick }: Props) => {
  return (
    <div
      className={cn(
        "grid items-center justify-items-center gap-3 lg:gap-4 border-4 lg:border-8 border-primary rounded-md p-3 lg:p-4 aspect-square w-full",
        COLUMNS,
        BOARD_SIZE,
      )}
    >
      {board.map((item, index) => (
        <BoardItem key={index} item={item} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};
