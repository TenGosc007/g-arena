"use client";

import { PlayerMoveStatus } from "t3core";

import { useSound } from "@/hooks/useSound";

import { Board } from "./components/Board";
import { CurrentPlayer } from "./components/CurrentPlayer";
import { GameResultModal } from "./components/GameResultModal";
import { useGameData, useGameResultModal } from "./hooks";

export const Game = () => {
  const { currentPlayer, board, gameStatus, saveMove, resetGame } =
    useGameData();
  const dialogRef = useGameResultModal();
  const { playSound } = useSound();

  const handleSaveMove = (index: number) => {
    const status = saveMove(index);

    if (status === PlayerMoveStatus.SUCCESS) {
      playSound("place");
    } else {
      playSound("occupied");
    }

    return status;
  };

  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center gap-4 p-6">
      <CurrentPlayer currentPlayer={currentPlayer} />
      <Board board={board} onClick={handleSaveMove} />

      <GameResultModal
        gameStatus={gameStatus}
        resetGame={resetGame}
        ref={dialogRef}
      />
    </div>
  );
};
