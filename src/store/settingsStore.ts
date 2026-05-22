import { create } from "zustand";

export type ThemeMode = "light" | "dark";

type SettingsStore = {
  soundEnabled: boolean;
  themeMode: ThemeMode;
  toggleSound: () => void;
  toggleTheme: () => void;
};

export const useSettingsStore = create<SettingsStore>((set) => ({
  soundEnabled: false,
  themeMode: "light",
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  toggleTheme: () =>
    set((state) => ({
      themeMode: state.themeMode === "light" ? "dark" : "light",
    })),
}));
