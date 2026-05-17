import Link from "next/link";
import { RefObject } from "react";
import { GameStatus } from "t3core";

type Props = {
  gameStatus: GameStatus;
  resetGame: () => void;
  ref: RefObject<HTMLDialogElement | null>;
};

export const GameResultModal = ({ gameStatus, resetGame, ref }: Props) => {
  return (
    <dialog
      ref={ref}
      className="border border-primary rounded-md bg-dark text-white p-6 lg:p-12 w-full lg:max-w-md"
    >
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center">
          {gameStatus.status === "win"
            ? `Player ${gameStatus?.winner} wins!`
            : "Game ended in a draw!"}
        </h2>

        <div className="flex flex-col gap-4 text-sm lg:text-base font-bold">
          <button
            className="bg-primary text-dark p-3 rounded-xs uppercase cursor-pointer"
            onClick={() => {
              resetGame();
              ref.current?.close();
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
  );
};
