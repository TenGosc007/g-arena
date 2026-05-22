"use client";

import { useEffect, useRef } from "react";

import { useModalStore } from "@/store/modalStore";
import { useSettingsStore } from "@/store/settingsStore";

import { InfoModal } from "../InfoModal";
import { SettingsModal } from "../SettingsModal";

const syncDialog = (element: HTMLDialogElement | null, open: boolean) => {
  if (open) element?.showModal();
  else if (element?.open) element.close();
};

export const ModalProvider = () => {
  const activeModal = useModalStore((s) => s.activeModal);
  const closeModal = useModalStore((s) => s.closeModal);
  const soundEnabled = useSettingsStore((s) => s.soundEnabled);
  const themeMode = useSettingsStore((s) => s.themeMode);
  const toggleSound = useSettingsStore((s) => s.toggleSound);
  const toggleTheme = useSettingsStore((s) => s.toggleTheme);

  const infoRef = useRef<HTMLDialogElement>(null);
  const settingsRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const info = infoRef.current;
    const settings = settingsRef.current;

    syncDialog(info, activeModal === "info");
    syncDialog(settings, activeModal === "settings");

    return () => {
      syncDialog(info, false);
      syncDialog(settings, false);
    };
  }, [activeModal]);

  return (
    <>
      <InfoModal ref={infoRef} onClose={closeModal} />
      <SettingsModal
        ref={settingsRef}
        onClose={closeModal}
        soundEnabled={soundEnabled}
        isDarkMode={themeMode === "dark"}
        onSoundToggle={toggleSound}
        onThemeToggle={toggleTheme}
      />
    </>
  );
};
