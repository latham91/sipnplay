import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  // Fake data to use while the backend is not ready

  return (
    <div className="">
      <header className="relative overflow-hidden">
        {/* 🔻 Hero section */}
        <div className="margin-x margin-y ">
          <div className="flex flex-col items-center justify-center gap-12 mb-24 md:mb-36 mt-4 text-center">
            <span className="text-xl md:text-3xl bg-[#dde9d3] px-4 py-2 -mb-14 relative z-30 hover:scale-110 my-transition">
              🧋🥪♟️🎯🎲
            </span>{" "}
            <div className="flex flex-col items-center">
              <h1 className="text-8xl max-md:text-7xl max-sm:text-5xl -mb-1 leading-[60px] md:leading-[80px] bg-stone-50 px-4 md:px-6 py-1.5 md:py-3 relative z-20 hover:scale-110 my-transition">
                Sip & Play
              </h1>
              <h1 className="text-8xl max-md:text-7xl max-sm:text-5xl leading-[60px] md:leading-[80px] bg-[#dde9d3] px-4 md:px-6 py-1.5 md:py-3 relative z-10 hover:scale-110 my-transition">
                Menu
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-stone-400 font-bold">
              At Sip N Play, we offer a diverse and delicious menu designed to
              enhance your board game experience. <br />
              <span className="text-white">
                Check out below and get ready to enjoy a fantastic time! 🍔🍹🎲
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
      {/* 🔻 Menu section */}
      <div className="relative z-10 flex bg-stone-50">
        <div className="margin-x margin-y w-full">
          {/* 🔻 Component to repeat */}
          <div className="flex w-full">
            <div className="bg-stone-50 h-[50vh] w-full">Space for the 3D</div>
            <div className="bg-[#dde9d3] h-[50vh] w-full">
              Space for the food
            </div>
          </div>
          {/* 🔻 Component to repeat */}
          <div className="flex w-full">
            <div className="bg-[#dde9d3] h-[50vh] w-full">
              Space for the food
            </div>
            <div className="bg-stone-50 h-[50vh] w-full">Space for the 3D</div>
          </div>
          {/* 🔻 Component to repeat */}
          <div className="flex w-full">
            <div className="bg-stone-50 h-[50vh] w-full">Space for the 3D</div>
            <div className="bg-[#dde9d3] h-[50vh] w-full">
              Space for the food
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
