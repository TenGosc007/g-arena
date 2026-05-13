"use client";

import { useSyncExternalStore } from "react";
import { Game, GameEvent } from "t3core";

const game = new Game();

export function useGame() {
  const { board, currentPlayer, gameStatus } = useSyncExternalStore(
    (onStoreChange) => {
      game.on(GameEvent.PLAYER_MOVE, onStoreChange);
      game.on(GameEvent.RESET, onStoreChange);

      return () => {
        game.off(GameEvent.PLAYER_MOVE, onStoreChange);
        game.off(GameEvent.RESET, onStoreChange);
      };
    },
    () => game.snapshot,
    () => game.snapshot,
  );

  return {
    board,
    currentPlayer,
    gameStatus,
    saveMove: (index: number) => game.savePlayerMove(index),
    reset: () => game.reset(),
  };
}

export default function Home() {
  const { board, gameStatus, currentPlayer, reset, saveMove } = useGame();

  const handleCellClick = (index: number) => {
    const res = saveMove(index);
    console.log("Result:", res);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <div className="grid grid-cols-3 gap-4 items-center justify-center">
          {board.map((item: number | "O" | "X", i: number) => (
            <div key={i}>
              <p
                className="cursor-pointer text-center"
                onClick={() => handleCellClick(i)}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
        <br />
        <hr />
        <br />
        <h3>Current Player: {currentPlayer}</h3>

        <br />
        <h3>Game Status: {gameStatus.status}</h3>
        {gameStatus.status === "win" && <h3>Winner: {gameStatus.winner}</h3>}
        {gameStatus.status === "draw" && <h3>Draw</h3>}

        {gameStatus.status !== "running" && (
          <button onClick={() => reset()}>Reset game</button>
        )}
      </main>
    </div>
  );
}
