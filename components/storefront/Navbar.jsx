import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

import Logo from "../../components/ui/logo";
import Link from "next/link";

const navLinks = [
  {
    id: 0,
    title: "Home",
    href: "/",
  },
  // {
  //   id: 1,
  //   title: "About",
  //   href: "/about",
  // },
  {
    id: 2,
    title: "Menu",
    href: "/menu",
  },
  {
    id: 3,
    title: "Events",
    href: "/events",
  },
  {
    id: 5,
    title: "Boardgames",
    href: "/boardgames",
  },
  {
    id: 4,
    title: "Reservations",
    href: "https://www.exploretock.com/sipnplay",
  },
  {
    id: 6,
    title: "Admin",
    href: "/dashboard",
  },
];

export default function Navbar() {
  return (
    <header className="bg-stone-50">
      <nav className="flex items-center justify-between py-4 margin-x">
        <Logo className="w-16" />
        {/* DESKTOP NAVIGATION */}
        <div className="items-center hidden gap-5 md:flex">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href} className="group">
              <p className="group-hover:text-[#96b87b] my-transition">{link.title}</p>
              <div className="h-0.5 w-full bg-transparent group-hover:bg-[#96b87b] my-transition" />
            </Link>
          ))}
        </div>
        {/* MOBILE NAVIGATION */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <Logo className="w-16 mb-12" />
            <nav className="grid gap-4 mt-5 text-lg">
              {navLinks.map((link) => (
                <Link key={link.id} href={link.href} className="group">
                  <p className="group-hover:text-[#96b87b] my-transition">{link.title}</p>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
