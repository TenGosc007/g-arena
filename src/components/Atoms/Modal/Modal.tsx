import { DialogHTMLAttributes, ReactNode } from "react";

type Props = DialogHTMLAttributes<HTMLDialogElement> & {
  children: ReactNode;
  ref?: React.RefObject<HTMLDialogElement | null>;
};

export const Modal = ({ children, ref, ...props }: Props) => {
  return (
    <dialog
      className="border border-primary rounded-md bg-dark text-white p-6 lg:p-12 w-full md:max-w-md"
      {...props}
      ref={ref}
    >
      {children}
    </dialog>
  );
};
