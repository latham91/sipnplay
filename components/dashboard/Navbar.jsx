import Link from "next/link";
import { Button } from "../ui/button";
import UserDropdown from "./UserDropdown";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const navItems = [
  { id: 0, name: "Events", path: "/dashboard/events" },
  { id: 0, name: "Menu", path: "/dashboard/menu" },
  { id: 0, name: "Games", path: "/dashboard/games" },
];
export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header>
      <nav className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        {/* DESKTOP NAVIGATION */}
        <div className="flex items-center gap-10">
          <div className="text-3xl font-bold">
            <Link href="/dashboard">Dashboard</Link>
          </div>

          <div className="hidden md:inline">
            {navItems.map((item) => (
              <Button key={item.id} variant="link" asChild>
                <Link href={item.path}>{item.name}</Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          {/* MOBILE NAVIGATION */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <h2 className="pb-4 text-xl font-semibold border-b">Dashboard Menu</h2>
              <nav className="grid gap-6 mt-5 text-lg">
                {navItems.map((item) => (
                  <Link key={item.id} href={item.path}>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <UserDropdown user={user} />
        </div>
      </nav>
    </header>
  );
}
