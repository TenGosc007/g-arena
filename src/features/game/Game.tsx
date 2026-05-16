"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { Board } from "./components/Board";
import { CurrentPlayer } from "./components/CurrentPlayer";
import { useGameData } from "./hooks";
import { getGame } from "./services/gameSession";

const game = getGame();

export const Game = () => {
  const { currentPlayer, board, gameStatus, saveMove, resetGame } =
    useGameData(game);
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

      <dialog ref={dialogRef}>
        <div className="border border-primary rounded-md bg-dark text-white p-12 flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-primary">
            {gameStatus.status === "win"
              ? `Player ${gameStatus?.winner} wins!`
              : "Game ended in a draw!"}
          </h2>

          <div className="flex flex-col gap-4 text-base font-bold">
            <button
              className="bg-primary text-dark p-3 rounded-xs uppercase cursor-pointer"
              onClick={() => {
                resetGame();
                dialogRef.current?.close();
              }}
            >
              Play Again
            </button>
            <Link href="/">
              <button className="w-full bg-dark border border-primary text-white p-3 rounded-xs uppercase cursor-pointer">
                Back to menu
              </button>
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
};
