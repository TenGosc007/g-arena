import { Game } from "t3core";

let game: Game | null = null;

export const getGame = () => {
  if (!game) {
    game = new Game();
  }

  return game;
};
