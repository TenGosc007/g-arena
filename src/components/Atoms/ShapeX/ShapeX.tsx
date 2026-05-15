export const ShapeX = () => {
  return (
    <div className="aspect-square w-full relative">
      <div
        className="absolute inset-0 bg-gray"
        style={{
          clipPath:
            "polygon(100% 5.66%, 5.73% 100%, 0% 100%, 0% 94.34%, 94.34% 0%, 100% 0%)",
        }}
      />
      <div
        className="absolute inset-0 bg-gray"
        style={{
          clipPath:
            "polygon(0% 5.66%, 94.34% 100%, 100% 100%, 100% 94.34%, 5.66% 0%, 0% 0%)",
        }}
      />
    </div>
  );
};
