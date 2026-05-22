import { ActionButton } from "@/components/Atoms/ActionButton";
import { Modal } from "@/components/Atoms/Modal";
import { Switch } from "@/components/ui/switch";

type Props = {
  ref: React.RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  soundEnabled?: boolean;
  onSoundToggle?: () => void;
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
};

export const SettingsModal = ({
  ref,
  onClose,
  soundEnabled,
  onSoundToggle,
  isDarkMode,
  onThemeToggle,
}: Props) => {
  return (
    <Modal ref={ref}>
      <div className="max-w-md flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-primary">Settings</h2>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label htmlFor="sound-toggle" className="cursor-pointer">
              <h3 className="font-semibold">Sound Effects</h3>
              <p className="text-sm text-gray-400">
                {soundEnabled ? "Enabled" : "Disabled"}
              </p>
            </label>
            <Switch
              id="sound-toggle"
              checked={soundEnabled}
              onCheckedChange={onSoundToggle}
              aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="theme-toggle" className="cursor-pointer">
              <h3 className="font-semibold">Theme</h3>
              <p className="text-sm text-gray-400">
                {isDarkMode ? "Dark mode" : "Light mode"}
              </p>
            </label>
            <Switch
              id="theme-toggle"
              checked={isDarkMode}
              onCheckedChange={onThemeToggle}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            />
          </div>
        </section>

        <ActionButton onClick={onClose}>Close</ActionButton>
      </div>
    </Modal>
  );
};
