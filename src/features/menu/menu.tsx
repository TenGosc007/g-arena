import { Button } from "./components/Button";
import { Title } from "./components/Title";

export const Menu = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      <Title />

      <div className="flex w-full flex-col items-center gap-6">
        <Button kind="primary">New Game</Button>
        <Button kind="secondary">Settings</Button>
      </div>
    </div>
  );
};
