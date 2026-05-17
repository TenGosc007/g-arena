import { create } from "zustand";

export type ModalName = "info" | "settings";

type ModalStore = {
  activeModal: ModalName | null;
  openModal: (name: ModalName) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  activeModal: null,
  openModal: (name) => set({ activeModal: name }),
  closeModal: () => set({ activeModal: null }),
}));
