import { BgGrid } from "@/components/Atoms/BgGrid";
import { ShapeO } from "@/components/Atoms/ShapeO";
import { ShapeX } from "@/components/Atoms/ShapeX";

export const Background = () => {
  return (
    <div className="absolute z-[-1] opacity-10 w-full h-full">
      <div className="absolute w-full h-full overflow-hidden">
        <div className="w-full h-full transform -rotate-165">
          <BgGrid />
        </div>
      </div>
      <div className="absolute top-6 left-6 w-[30vw] min-w-[180px] max-w-[360px]">
        <ShapeO />
      </div>
      <div className="absolute bottom-6 right-6 w-[30vw] min-w-[180px] max-w-[360px]">
        <ShapeX />
      </div>
    </div>
  );
};
