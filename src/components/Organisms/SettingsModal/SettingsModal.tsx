import { ActionButton } from "@/components/Atoms/ActionButton";
import { Modal } from "@/components/Atoms/Modal";

type Props = {
  ref: React.RefObject<HTMLDialogElement | null>;
  soundEnabled?: boolean;
  onSoundToggle?: () => void;
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
};

export const SettingsModal = ({
  ref,
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
            <div>
              <h3 className="font-semibold">Sound Effects</h3>
              <p className="text-sm text-gray-400">
                {soundEnabled ? "Enabled" : "Disabled"}
              </p>
            </div>
            <button
              onClick={onSoundToggle}
              className={`relative w-14 h-8 rounded-full transition-colors cursor-pointer ${
                soundEnabled ? "bg-primary" : "bg-gray-600"
              }`}
              aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  soundEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Theme</h3>
              <p className="text-sm text-gray-400">
                {isDarkMode ? "Dark mode" : "Light mode"}
              </p>
            </div>
            <button
              onClick={onThemeToggle}
              className={`relative w-14 h-8 rounded-full transition-colors cursor-pointer ${
                isDarkMode ? "bg-primary" : "bg-gray-600"
              }`}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isDarkMode ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </section>

        <ActionButton onClick={() => ref.current?.close()}>Close</ActionButton>
      </div>
    </Modal>
  );
};
