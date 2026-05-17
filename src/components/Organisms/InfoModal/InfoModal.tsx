import { ActionButton } from "@/components/Atoms/ActionButton";
import { Modal } from "@/components/Atoms/Modal";

type Props = {
  ref: React.RefObject<HTMLDialogElement | null>;
  onClose: () => void;
};

export const InfoModal = ({ ref, onClose }: Props) => {
  return (
    <Modal ref={ref}>
      <div className="max-w-md flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Tic Tac Toe</h2>

        <section>
          <h3 className="font-semibold mb-2">About the Game</h3>
          <p className="text-sm text-gray-400">
            Tic Tac Toe is a classic two-player strategy game played on a 3x3
            grid. Players take turns marking spaces with their symbol (X or O)
            to compete for victory.
          </p>
        </section>

        <section>
          <h3 className="font-semibold mb-2">How to Play</h3>
          <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
            <li>Player O always goes first</li>
            <li>Click any empty square to place your mark</li>
            <li>
              Players alternate turns until someone wins or the board is full
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Winning</h3>
          <p className="text-sm text-gray-400">
            Get three of your marks in a row — horizontally, vertically, or
            diagonally — to win! If all 9 squares are filled with no winner, the
            game ends in a draw.
          </p>
        </section>

        <ActionButton onClick={onClose}>Got it</ActionButton>
      </div>
    </Modal>
  );
};
