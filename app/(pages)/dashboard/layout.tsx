import DNavbar from "@/components/pages/dashboard/DNavbar";
import DSidebar from "@/components/pages/dashboard/DSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <DNavbar />
      <DSidebar />
      {children}
    </div>
  );
}
