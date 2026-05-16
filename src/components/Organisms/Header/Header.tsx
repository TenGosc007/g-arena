import { GearIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { GameTitle } from "@/components/Atoms/GameTItle";

const ICON_SIZE = 24;

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <Link href="/">
        <GameTitle size="medium" />
      </Link>

      <div className="flex items-center gap-4">
        <InfoCircledIcon width={ICON_SIZE} height={ICON_SIZE} />
        <GearIcon width={ICON_SIZE} height={ICON_SIZE} />
      </div>
    </header>
  );
};
