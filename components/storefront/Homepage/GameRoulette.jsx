import { Button } from "@/components/ui/button";
import Link from "next/link";
import CardCTA from "./CardCTA";

export default function GameRoulette() {
  // Bellow is the data I will need to fill out my card that I made as a component
  // (Created as a component because I intend to use it in other sections on the homepage - if I have time)

  const CTA = {
    title: "🎯 A to Z Game List",
    description: (
      <>
        Dive into our A to Z list of board games and uncover your next
        obsession! Whether you're a fan of timeless classics or in search of
        hidden gems, our curated collection has something for everyone.{" "}
        <span className="font-bold text-stone-600">
          From timeless classics that never go out of style to hidden gems
          waiting to be discovered, there's something for everyone. 🥳
        </span>
        <br />
        <br /> Find the perfect game for your next gathering, be it a casual
        get-together or a more competitive event.{" "}
        <span className="font-bold text-stone-600">
          Explore, play, and enjoy an unforgettable experience with friends and
          family! 🎯
        </span>{" "}
        <br /> <br />
      </>
    ),
    href: "/boardgames",
    image: "/SipNPlay 8.png",
    btn: "Check our Boardgames",
  };

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
            your friends! 🎲
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
      {/* 🔻 CTA to boardgame page */}
      <div className="margin-x margin-y">
        <CardCTA data={CTA} />
      </div>
    </div>
  );
}
