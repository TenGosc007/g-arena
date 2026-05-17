"use client";

import { GearIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRef } from "react";

import { GameTitle } from "@/components/Atoms/GameTItle";
import { Icon } from "@/components/Atoms/Icon/Icon";

import { InfoModal } from "../InfoModal";

const ICON_SIZE = 24;

export const Header = () => {
  const modalInfoRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <header className="flex w-full items-center justify-between p-4">
        <Link href="/">
          <GameTitle size="medium" />
        </Link>

        <div className="flex items-center gap-4">
          <Icon
            icon={InfoCircledIcon}
            width={ICON_SIZE}
            height={ICON_SIZE}
            onClick={() => modalInfoRef.current?.showModal()}
          />
          <Icon icon={GearIcon} width={ICON_SIZE} height={ICON_SIZE} />
        </div>
      </header>

      <InfoModal ref={modalInfoRef} />
    </>
  );
};
