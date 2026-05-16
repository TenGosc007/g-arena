import Link from "next/link";

import { Button } from "./components/Button";
import { Title } from "./components/Title";

export const Menu = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      <Title />

      <div className="flex w-full flex-col items-center gap-6">
        <Link href="/game" className="w-full">
          <Button kind="primary">New Game</Button>
        </Link>
        <Link href="/settings" className="w-full">
          <Button kind="secondary">Settings</Button>
        </Link>
      </div>
    </div>
  );
};
