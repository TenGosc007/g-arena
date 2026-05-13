import { useSyncExternalStore } from "react";
import {
  Game,
  GameEvent,
  GameStatus,
  PlayerSymbol,
  PlayerMoveStatus,
} from "t3core";

type GameData = {
  board: (PlayerSymbol | number)[];
  currentPlayer: PlayerSymbol;
  gameStatus: GameStatus;
  saveMove: (index: number) => PlayerMoveStatus;
  resetGame: () => void;
};

export const useGameData = (game: Game): GameData => {
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

  const saveMove = (index: number) => game.savePlayerMove(index);
  const resetGame = () => game.reset();

  return {
    board,
    currentPlayer,
    gameStatus,
    saveMove,
    resetGame,
  };
};
