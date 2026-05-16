import { cn } from "@/lib/utils";

const MIN_WIDTH = "min-w-[1260px]";
const MIN_HEIGHT = "min-h-[480px]";

const COLS = 6;
const ROWS = 4;

const rows = Array.from({ length: ROWS });
const cols = Array.from({ length: COLS });

export const BgGrid = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className={cn("relative aspect-6/4 w-full", MIN_WIDTH, MIN_HEIGHT)}>
        <div className="absolute inset-0 flex flex-row justify-around">
          {cols.map((_, i) => (
            <div key={i} className="w-px h-full bg-gray" />
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col justify-around">
          {rows.map((_, i) => (
            <div key={i} className="w-full h-px bg-gray" />
          ))}
        </div>
      </div>
    </div>
  );
};
