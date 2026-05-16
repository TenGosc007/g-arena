"use client";

import { Board } from "./components/Board";
import { CurrentPlayer } from "./components/CurrentPlayer";
import { useGameData } from "./hooks";
import { getGame } from "./services/gameSession";

const game = getGame();

export const Game = () => {
  const { currentPlayer, board, saveMove } = useGameData(game);

  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center gap-4 p-6">
      <CurrentPlayer currentPlayer={currentPlayer} />
      <Board board={board} onClick={saveMove} />
    </div>
  );
};
