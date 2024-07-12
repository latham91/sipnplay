import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Boardgames() {
  // Fake data to use while the backend is not ready
  const fakeData = [
    {
      id: 1,
      title: "Game 1",
      image: "/defaultimg.png",
      category: "Strategy",
      minPlayers: 2,
      maxPlayers: 4,
    },
    {
      id: 2,
      title: "Game 2",
      image: "/defaultimg.png",
      category: "Strategy",
      minPlayers: 2,
      maxPlayers: 4,
    },
    {
      id: 3,
      title: "Game 3",
      image: "/defaultimg.png",
      category: "Strategy",
      minPlayers: 2,
      maxPlayers: 4,
    },
    {
      id: 4,
      title: "Game 4",
      image: "/defaultimg.png",
      category: "Strategy",
      minPlayers: 2,
      maxPlayers: 4,
    },
    {
      id: 5,
      title: "Game 5",
      image: "/defaultimg.png",
      category: "Strategy",
      minPlayers: 2,
      maxPlayers: 4,
    },
    {
      id: 6,
      title: "Game 6",
      image: "/defaultimg.png",
      category: "Strategy",
      minPlayers: 2,
      maxPlayers: 4,
    },
    {
      id: 7,
      title: "Game 7",
      image: "/defaultimg.png",
      category: "Strategy",
      minPlayers: 2,
      maxPlayers: 4,
    },
  ];

  return (
    <div className="">
      <header className="relative">
        {/* 🔻 Hero section */}
        <div className="margin-x margin-y">
          <div className="flex flex-col items-center justify-center gap-12 mb-24 md:mb-36 mt-4 text-center">
            <span className="text-xl md:text-3xl bg-[#dde9d3] px-4 py-2 -mb-14 relative z-30 hover:scale-110 my-transition">
              🧋🥪♟️🎯🎲
            </span>{" "}
            <div className="flex flex-col items-center">
              <h1 className="text-8xl max-md:text-7xl max-sm:text-5xl -mb-1 leading-[60px] md:leading-[80px] bg-stone-50 px-4 md:px-6 py-1.5 md:py-3 relative z-20 hover:scale-110 my-transition">
                Sip & Play
              </h1>
              <h1 className="text-8xl max-md:text-7xl max-sm:text-5xl leading-[60px] md:leading-[80px] bg-[#dde9d3] px-4 md:px-6 py-1.5 md:py-3 relative z-10 hover:scale-110 my-transition">
                Boardgames
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-stone-400 font-bold">
              Do you already know that we have a 300+ boardgames collection? 🎲
              <br />
              <span className="text-white">
                Join us for a game night and have fun with your friends and
                family! 🎉
              </span>
            </p>
            <div className="flex gap-3">
              <Button variant="green" asChild>
                <Link
                  href="https://www.exploretock.com/sipnplay"
                  target="_blank"
                >
                  Reservations
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/events" target="_blank">
                  Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* 🔻 Illustrations and gradient on the footer */}
        <div className="absolute bottom-0 -left-[50%] z-10 w-[200vw] h-[200px] bg-gradient-to-t from-stone-900 to-transparent" />
        <div className="opacity-100 absolute -bottom-8 md:-bottom-16 left-0 w-full flex items-center justify-center gap-14 md:gap-20">
          <Image
            src="/Dices1.png"
            alt="Boardgame"
            width={500}
            height={500}
            draggable="false"
            className="w-28 md:w-52 h-auto object-cover rotate-45"
          />
          <Image
            src="/Boardgame2.png"
            alt="Boardgame"
            width={500}
            height={500}
            draggable="false"
            className="w-28 md:w-52 h-auto object-cover -rotate-12 -ml-16"
          />
          <Image
            src="/Dices2.png"
            alt="Boardgame"
            width={500}
            height={500}
            draggable="false"
            className="w-28 md:w-52 h-auto object-cover rotate-12"
          />{" "}
          <Image
            src="/Boardgame1.png"
            alt="Boardgame"
            width={500}
            height={500}
            draggable="false"
            className="w-28 md:w-40 h-auto object-cover -rotate-45"
          />{" "}
          <Image
            src="/Dices1.png"
            alt="Boardgame"
            width={500}
            height={500}
            draggable="false"
            className="w-28 md:w-52 h-auto object-cover -rotate-45 -ml-10"
          />
          <Image
            src="/Boardgame2.png"
            alt="Boardgame"
            width={500}
            height={500}
            draggable="false"
            className="w-28 md:w-52 h-auto object-cover rotate-12 -ml-16"
          />
        </div>
      </header>
      {/* 🔻 Game Roulette section */}
      <div className="bg-stone-50 relative z-10">
        <div className="margin-x margin-y grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center">
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
                Welcome to Game Roulette, your go-to tool for finding the
                perfect board game when you just can’t decide!
              </span>{" "}
              Press "Play" and let the wheel decide your next adventure. Ask our
              friendly staff for the game and enjoy a fresh, fun experience with
              your friends! 🎲
              <br />
              <br />
              It’ll land on a game that's just right for you to try. Once you
              have your game, ask our friendly staff for it and dive into a new
              and exciting adventure with your friends. Game Roulette takes the
              guesswork out of your game night, ensuring you have a fantastic
              time, every time! 💖 <br />
              <br />
              <span className="font-bold text-stone-600">
                If you want to try a different game, just refresh the page and
                spin the wheel again. 🚀
              </span>
            </p>
          </div>
          {/* 🔻 Game Rouelette space - We will try to implement tomorrow */}
          <div className="bg-pink-600 min-h-[400px]"></div>
        </div>
      </div>
      {/* 🔻 Boardgames section */}
      <div className="">
        <div className="relative margin-x margin-y grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 🔻 Title + description + buttons */}
          <div className="flex flex-col gap-16 items-start order-2 lg:order-1">
            <div className="flex flex-col items-start">
              <h1 className="relative z-20 bg-stone-50 px-4 md:px-6 py-2 -mb-2 hover:scale-110 my-transition">
                Check out our
              </h1>
              <h1 className="relative z-10 bg-[#dde9d3] px-4 md:px-6 py-2 hover:scale-110 my-transition">
                collection of
              </h1>{" "}
              <h1 className="relative z-20 bg-stone-50 px-4 md:px-6 py-2 -mb-2 hover:scale-110 my-transition">
                boardgames
              </h1>
            </div>
          </div>
          {/* 🔻 Description side*/}
          <div className="relative order-1 lg:order-2">
            <p className="text-stone-300">
              Welcome to our curated collection of board games, where fun and
              excitement await! Whether you're a seasoned strategist, a casual
              player, or a family looking for a great way to spend time
              together, we have the perfect game for you. Our extensive
              selection includes timeless classics, modern favourites, and
              hidden gems that cater to all ages and interests. 😊
              <br />
              <br />
              <span className="font-bold text-white">
                Dive into the world of strategy, adventure, and creativity with
                our handpicked games. Explore the list below and discover your
                next favourite game today! 🚀
              </span>
            </p>
          </div>
        </div>
        {/* 🔻 Boardgames games */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 margin-x pb-24 max-sm:pb-20">
          {fakeData.map((boardgame, i) => (
            <div className="relative" key={i}>
              <div
                key={boardgame.id}
                className="relative z-10 rotate-3 hover:-rotate-3 my-transition flex max-md:flex-col gap-4 bg-stone-50 shadow-md shadow-stone-800/5 p-4"
              >
                <Image
                  src={boardgame.image}
                  alt={boardgame.title}
                  width={200}
                  height={200}
                  draggable={false}
                  className="h-32 w-auto  aspect-square object-cover border border-stone-200/50 select-none"
                />
                <div className="w-full flex flex-col items-start">
                  <div className="px-2 py-0.5 rounded-sm border flex bg-[#dde9d3]/10 border-[#96b87b]">
                    <p className="text-xs text-[#96b87b] uppercase">
                      {boardgame.category}
                    </p>
                  </div>
                  <h6 className="mt-4 line-clamp-2">{boardgame.title}</h6>
                  <p>
                    Players: {boardgame.minPlayers} - {boardgame.maxPlayers}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-0 h-full w-full bg-[#dde9d3]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
