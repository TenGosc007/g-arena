import { PlayerSymbol as PlayerSymbolType } from "t3core";

import { PlayerSymbol } from "../PlayerSymbol";

type Props = {
  currentPlayer: PlayerSymbolType;
};

export const CurrentPlayer = ({ currentPlayer }: Props) => {
  return (
    <h1 className="font-handlee text-3xl lg:text-5xl">
      Player: <PlayerSymbol symbol={currentPlayer} />
    </h1>
  );
};
