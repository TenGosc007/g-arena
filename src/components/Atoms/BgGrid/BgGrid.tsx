const MIN_WIDTH = 1280;
const MIN_HEIGHT = 720;

const COLS = 6;
const ROWS = 4;

const rows = Array.from({ length: ROWS });
const cols = Array.from({ length: COLS });

export const BgGrid = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className={`relative aspect-6/4 w-full min-w-[${MIN_WIDTH}px] min-h-[${MIN_HEIGHT}px]`}
      >
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
