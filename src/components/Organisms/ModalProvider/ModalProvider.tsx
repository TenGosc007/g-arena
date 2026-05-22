"use client";

import { useEffect, useRef } from "react";

import { useModalStore } from "@/store/modalStore";

import { InfoModal } from "../Modals/InfoModal";
import { SettingsModal } from "../Modals/SettingsModal";

const syncDialog = (element: HTMLDialogElement | null, open: boolean) => {
  if (open) element?.showModal();
  else if (element?.open) element.close();
};

export const ModalProvider = () => {
  const activeModal = useModalStore((s) => s.activeModal);
  const closeModal = useModalStore((s) => s.closeModal);

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
      <SettingsModal ref={settingsRef} onClose={closeModal} />
    </>
  );
};
