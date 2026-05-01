import Navbar from "@/sections/navbar";
import Footer from "@/sections/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-col items-center py-3 w-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
