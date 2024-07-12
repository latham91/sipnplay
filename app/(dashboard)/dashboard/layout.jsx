import Navbar from "@/components/dashboard/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect("/api/auth/login");
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <main className="p-4 mx-auto max-w-7xl">{children}</main>
    </div>
  );
}
