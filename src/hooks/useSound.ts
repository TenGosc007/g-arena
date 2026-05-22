import {
  playDrawSound,
  playOccupiedSound,
  playPlaceSound,
  playWinSound,
} from "@/lib/sounds";
import { useSettingsStore } from "@/store/settingsStore";

type GameSound = "place" | "occupied" | "win" | "draw";

export const useSound = () => {
  const soundEnabled = useSettingsStore((s) => s.soundEnabled);

  const playSound = (sound: GameSound) => {
    if (!soundEnabled) return;

    switch (sound) {
      case "place":
        playPlaceSound();
        break;
      case "occupied":
        playOccupiedSound();
        break;
      case "win":
        playWinSound();
        break;
      case "draw":
        playDrawSound();
        break;
      default:
        throw new Error(`Unknown sound: ${sound satisfies never}`);
    }
  };

  return { playSound };
};
