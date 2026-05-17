import type { IconProps } from "@radix-ui/react-icons/dist/types";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

import { cn } from "@/lib/utils";

type Props = IconProps & {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
};

export const Icon = ({ icon: IconComponent, className, ...props }: Props) => {
  return (
    <IconComponent
      className={cn(
        "cursor-pointer hover:opacity-90 hover:text-primary active:scale-95 transition-all",
        className,
      )}
      {...props}
    />
  );
};
