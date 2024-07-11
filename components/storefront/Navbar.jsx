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
];

export default function Navbar() {
  return (
    <header className="bg-neutral-50">
      <nav className="margin-x py-4 flex items-center justify-between">
        <Logo className="w-16" />
        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href} className="group">
              <p>{link.title}</p>
            </Link>
          ))}
        </div>
        {/* MOBILE NAVIGATION */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <Logo className="w-16 mb-12" />
            <nav className="grid gap-4 text-lg mt-5">
              {navLinks.map((link) => (
                <Link key={link.id} href={link.href} className="group">
                  <p>{link.title}</p>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
