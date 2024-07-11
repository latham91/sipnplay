import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GameRoulette() {
  return (
    <div className="relative z-20 bg-stone-50">
      <div className="margin-x margin-y grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* 🔻 Game Rouelette space - We will try to implement tomorrow */}
        <div className="bg-pink-600 min-h-[400px]"></div>
        {/* 🔻 Title + description + buttons */}
        <div className="flex flex-col gap-16 items-start">
          <div className="flex flex-col items-start">
            <h1 className="relative z-20 bg-stone-900 text-stone-50 px-4 md:px-6 py-2 -mb-2 hover:scale-110 my-transition">
              Let our{" "}
              <span className="text-5xl max-md:text-4xl max-sm:text-3xl">
                ✨
              </span>
            </h1>
            <h1 className="relative z-10 bg-[#dde9d3] px-4 md:px-6 py-2 -mb-2 hover:scale-110 my-transition">
              Game Roulette
            </h1>
            <h1 className="relative z-0 bg-stone-900 text-stone-50 px-4 md:px-6 py-2 -mb-2 hover:scale-110 my-transition">
              decide for you!
            </h1>
          </div>
          <p className="">
            <span className="font-bold text-stone-600">
              Welcome to Game Roulette, the perfect way to choose from our
              collection of over 300 board games.
            </span>{" "}
            Simply click the button below to access this amazing feature! 🤩
            <br />
            <br />
            Press "Play" and let the wheel decide your next adventure. Ask our
            friendly staff for the game and enjoy a fresh, fun experience with
            your friends!
          </p>
          <div className="flex gap-3">
            <Button variant="default" asChild>
              <Link href="/boardgames" target="_blank">
                Try out now
              </Link>
            </Button>
            <Button variant="green" asChild>
              <Link href="https://www.exploretock.com/sipnplay" target="_blank">
                Reservations
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
