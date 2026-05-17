import { DialogHTMLAttributes, ReactNode } from "react";

type Props = DialogHTMLAttributes<HTMLDialogElement> & {
  children: ReactNode;
};

export const Modal = ({ children, ...props }: Props) => {
  return (
    <dialog
      className="border border-primary rounded-md bg-dark text-white p-6 lg:p-12 w-full lg:max-w-md"
      {...props}
    >
      {children}
    </dialog>
  );
};
