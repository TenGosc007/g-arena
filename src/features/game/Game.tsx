"use client";

import { useEffect, useRef } from "react";

import { Board } from "./components/Board";
import { CurrentPlayer } from "./components/CurrentPlayer";
import { GameResultModal } from "./components/GameResultModal";
import { useGameData } from "./hooks";

export const Game = () => {
  const { currentPlayer, board, gameStatus, saveMove, resetGame } =
    useGameData();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && gameStatus.status !== "running") {
      dialog.showModal();
    }

    return () => {
      dialog?.close();
    };
  }, [gameStatus.status]);

  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center gap-4 p-6">
      <CurrentPlayer currentPlayer={currentPlayer} />
      <Board board={board} onClick={saveMove} />

      <GameResultModal
        gameStatus={gameStatus}
        resetGame={resetGame}
        ref={dialogRef}
      />
    </div>
  );
};
