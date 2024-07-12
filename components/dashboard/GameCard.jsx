import { CalendarIcon, ClockIcon, TagIcon, Trash2Icon, Users2Icon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <div className="flex flex-col justify-between col-span-1 p-4 bg-white border rounded-lg shadow-md md:col-span-2">
      <div>
        {/* CARD IMAGE */}
        <div className="relative h-[250px] mb-3">
          <Image
            src={game.image ?? "/eventplaceholder_1.jpg"}
            alt="Game image"
            fill
            sizes="100%"
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        {/* CARD TITLE & DATE TIME */}
        <div className="pb-3 mb-2 border-b border-dashed border-slate-300">
          <div>
            <h3>{game.title}</h3>
          </div>
          <div className="flex gap-10 mt-1">
            <p className="flex items-center font-medium text-slate-600">
              <TagIcon className="w-5 h-5 mr-2 text-blue-500" /> {game.category}
            </p>
            <p className="flex items-center font-medium text-slate-600">
              <Users2Icon className="w-5 h-5 mr-2 text-blue-500" /> {game.minPlayers}-{game.maxPlayers} Players
            </p>
          </div>
        </div>
      </div>

      {/* CARD BUTTON */}
      <div className="mt-4">
        <Button variant="destructive" className="w-full" asChild>
          <Link href={`/dashboard/games/delete/${game.id}`}>
            <Trash2Icon className="w-5 h-5 mr-2" />
            Delete Game
          </Link>
        </Button>
      </div>
    </div>
  );
}
