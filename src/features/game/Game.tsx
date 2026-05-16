import { Board } from "./components/Board";
import { CurrentPlayer } from "./components/CurrentPlayer";

export const Game = () => {
  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center gap-4 p-6">
      <CurrentPlayer />
      <Board />
    </div>
  );
};
