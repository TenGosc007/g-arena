import Link from "next/link";
import { RefObject } from "react";
import { GameStatus } from "t3core";

import { ActionButton } from "@/components/Atoms/ActionButton";
import { Modal } from "@/components/Atoms/Modal";

type Props = {
  gameStatus: GameStatus;
  resetGame: () => void;
  ref: RefObject<HTMLDialogElement | null>;
};

export const GameResultModal = ({ gameStatus, resetGame, ref }: Props) => {
  return (
    <Modal ref={ref}>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center">
          {gameStatus.status === "win"
            ? `Player ${gameStatus?.winner} wins! 🎉`
            : "Game ended in a draw! 🤝"}
        </h2>

        <div className="flex flex-col gap-4">
          <ActionButton
            onClick={() => {
              resetGame();
              ref.current?.close();
            }}
          >
            Play Again
          </ActionButton>
          <Link href="/">
            <ActionButton variant="outlined">Back to menu</ActionButton>
          </Link>
        </div>
      </div>
    </Modal>
  );
};
