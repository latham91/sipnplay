import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import MenuItemCard from "@/components/dashboard/MenuItemCard";

export default function MenuPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <Header title="Menu" subtitle="This is where you manage your menu items" />
        <Button variant="dashboard" asChild>
          <Link href="/dashboard/events/add">
            <CirclePlusIcon className="w-5 h-5 md:mr-2" />
            <span className="hidden md:inline">Add menu item</span>
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
      </div>
    </div>
  );
}
