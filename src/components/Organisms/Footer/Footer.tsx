import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { version } from "../../../../package.json";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white p-6 opacity-75 text-sm lg:text-base flex flex-col lg:flex-row justify-between items-center gap-2">
      <p className="order-last lg:order-0">v{version}</p>
      <p>© {year} Game Arena. All rights reserved.</p>
      <a
        href="https://github.com/tengosc007/t3core"
        target="_blank"
        rel="noopener noreferrer"
        className="order-first lg:order-0"
      >
        <GitHubLogoIcon className="cursor-pointer w-5 h-5 lg:w-6 lg:h-6" />
      </a>
    </footer>
  );
};
