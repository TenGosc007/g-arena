"use client";

import Link from "next/link";

import { useModalStore } from "@/store/modalStore";

import { Button } from "./components/Button";
import { Title } from "./components/Title";

export const Menu = () => {
  const openModal = useModalStore((s) => s.openModal);

  return (
    <div className="flex flex-col items-center gap-12">
      <Title />

      <div className="flex w-full flex-col items-center gap-6">
        <Link href="/game" className="w-full">
          <Button kind="primary">New Game</Button>
        </Link>
        <Button kind="secondary" onClick={() => openModal("settings")}>
          Settings
        </Button>
      </div>
    </div>
  );
};
