import Navbar from "@/sections/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full flex flex-col items-center py-3 w-full">
      <Navbar />
      {children}
    </div>
  );
}
