import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";

async function getGames() {
  const data = await prisma.games.findMany({
    orderBy: {
      title: "asc",
    },
  });
}

export default async function GamesPage() {
  const games = await getGames();
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <Header title="Board Games" subtitle="This is where you manage your boardgames" />
        <Button variant="dashboard" asChild>
          <Link href="/dashboard/games/add">
            <CirclePlusIcon className="w-5 h-5 md:mr-2" />
            <span className="hidden md:inline">Add new game</span>
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-4">{/* GAME CARD HERE */}</div>
    </div>
  );
}
