import { RefObject, useEffect, useRef } from "react";

import { useSound } from "@/hooks/useSound";

import { useGameData } from "./useGameData";

export const useGameResultModal = (): RefObject<HTMLDialogElement | null> => {
  const { gameStatus } = useGameData();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { playSound } = useSound();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && gameStatus.status !== "running") {
      if (gameStatus.status === "win") {
        playSound("win");
      } else {
        playSound("draw");
      }

      dialog.showModal();
    }

    return () => {
      dialog?.close();
    };
  }, [gameStatus.status, playSound]);

  return dialogRef;
};
