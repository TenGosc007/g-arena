import { useSyncExternalStore } from "react";
import {
  GameEvent,
  GameStatus,
  PlayerSymbol,
  PlayerMoveStatus,
  BoardField,
} from "t3core";

import { getGame } from "../services/gameSession";

type GameData = {
  board: BoardField[];
  currentPlayer: PlayerSymbol;
  gameStatus: GameStatus;
  saveMove: (index: number) => PlayerMoveStatus;
  resetGame: () => void;
};

const game = getGame();

export const useGameData = (): GameData => {
  const { board, currentPlayer, gameStatus } = useSyncExternalStore(
    (onStoreChange) => {
      game.on(GameEvent.STATE_CHANGE, onStoreChange);

      return () => {
        game.off(GameEvent.STATE_CHANGE, onStoreChange);
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
