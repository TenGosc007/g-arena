"use client";

import Link from "next/link";
import { useRef } from "react";

import { SettingsModal } from "@/components/Organisms/SettingsModal";

import { Button } from "./components/Button";
import { Title } from "./components/Title";

export const Menu = () => {
  const settingsModalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div className="flex flex-col items-center gap-12">
        <Title />

        <div className="flex w-full flex-col items-center gap-6">
          <Link href="/game" className="w-full">
            <Button kind="primary">New Game</Button>
          </Link>
          <Button
            kind="secondary"
            onClick={() => settingsModalRef.current?.showModal()}
          >
            Settings
          </Button>
        </div>
      </div>
      <SettingsModal ref={settingsModalRef} />
    </>
  );
};
