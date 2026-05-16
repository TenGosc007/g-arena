import { cn } from "@/lib/utils";

const BOARD_SIZE = "max-h-[610px] max-w-[610px]";
const COLUMNS = "grid-cols-3";

export const Board = () => {
  return (
    <div
      className={cn(
        "grid items-center justify-items-center gap-3 lg:gap-4 border-4 lg:border-8 border-primary rounded-md p-3 lg:p-4 aspect-square w-full",
        COLUMNS,
        BOARD_SIZE,
      )}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <div key={item} className="w-full h-full bg-dark"></div>
      ))}
    </div>
  );
};
