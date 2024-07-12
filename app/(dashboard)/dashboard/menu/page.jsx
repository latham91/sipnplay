import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import MenuItemCard from "@/components/dashboard/MenuItemCard";
import prisma from "@/lib/prisma";

async function getMenuItems() {
  const data = await prisma.menuItem.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      category: true,
      prices: {
        select: {
          size: true,
          type: true,
          price: true,
        },
      },
      additionals: {
        select: {
          name: true,
          price: true,
        },
      },
    },
    orderBy: {
      category: "asc",
    },
  });

  return data;
}

export default async function MenuPage() {
  const menuItems = await getMenuItems();
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <Header title="Menu" subtitle="This is where you manage your menu items" />
        <Button variant="dashboard" asChild>
          <Link href="/dashboard/menu/add">
            <CirclePlusIcon className="w-5 h-5 md:mr-2" />
            <span className="hidden md:inline">Add menu item</span>
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {menuItems.length > 0 ? (
          menuItems.map((item) => <MenuItemCard key={item.id} item={item} />)
        ) : (
          <p className="text-2xl">No menu items found</p>
        )}
      </div>
    </div>
  );
}
