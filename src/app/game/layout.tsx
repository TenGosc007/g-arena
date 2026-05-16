import { Header } from "@/components/Organisms/Header";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Header />
      {children}
    </div>
  );
}
