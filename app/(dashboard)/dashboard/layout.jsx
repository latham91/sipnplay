import Navbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <main className="p-4 mx-auto max-w-7xl">{children}</main>
    </div>
  );
}
