import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden md:overflow-visible margin-x margin-y">
      {/* 🔻 Title + description + buttons */}
      <div className="flex flex-col items-center justify-center gap-12 mt-4 mb-24 text-center md:mb-36">
        <span className="text-xl md:text-3xl bg-[#dde9d3] px-4 py-2 -mb-14 relative z-30 hover:scale-110 my-transition">
          🧋🥪♟️🎯🎲
        </span>{" "}
        <div className="flex flex-col items-center">
          <h1 className="text-8xl max-md:text-7xl max-sm:text-5xl -mb-1 leading-[60px] md:leading-[80px] bg-stone-50 px-4 md:px-6 py-1.5 md:py-3 relative z-20 hover:scale-110 my-transition">
            Welcome to
          </h1>
          <h1 className="text-8xl max-md:text-7xl max-sm:text-5xl leading-[60px] md:leading-[80px] bg-[#dde9d3] px-4 md:px-6 py-1.5 md:py-3 relative z-10 hover:scale-110 my-transition">
            Sip & Play!
          </h1>
        </div>
        <p className="text-xl font-bold md:text-2xl text-stone-400">
          Sip & Play is a board game cafe where you can enjoy a variety of games while sipping on your favorite drink.
          <span className="text-white"> Get ready to have a great time with your friends and family!</span>
        </p>
        <div className="flex gap-3">
          <Button variant="green" asChild>
            <Link href="https://www.exploretock.com/sipnplay" target="_blank">
              Reservations
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/events" target="_blank">
              Upcoming Events
            </Link>
          </Button>
        </div>
      </div>
      {/* 🔻 Illustrations and gradient on the footer */}
      <div className="absolute bottom-0 -left-[50%] z-10 w-[200vw] h-[200px] bg-gradient-to-t from-stone-900 to-transparent" />
      <div className="absolute left-0 flex items-center justify-center w-full opacity-100 -bottom-8 md:-bottom-16 gap-14 md:gap-20">
        <Image
          src="/Dices1.png"
          alt="Boardgame"
          width={500}
          height={500}
          draggable="false"
          className="object-cover h-auto rotate-45 w-28 md:w-52"
        />
        <Image
          src="/Boardgame2.png"
          alt="Boardgame"
          width={500}
          height={500}
          draggable="false"
          className="object-cover h-auto -ml-16 w-28 md:w-52 -rotate-12"
        />
        <Image
          src="/Dices2.png"
          alt="Boardgame"
          width={500}
          height={500}
          draggable="false"
          className="object-cover h-auto w-28 md:w-52 rotate-12"
        />{" "}
        <Image
          src="/Boardgame1.png"
          alt="Boardgame"
          width={500}
          height={500}
          draggable="false"
          className="object-cover h-auto -rotate-45 w-28 md:w-40"
        />{" "}
        <Image
          src="/Dices1.png"
          alt="Boardgame"
          width={500}
          height={500}
          draggable="false"
          className="object-cover h-auto -ml-10 -rotate-45 w-28 md:w-52"
        />
        <Image
          src="/Boardgame2.png"
          alt="Boardgame"
          width={500}
          height={500}
          draggable="false"
          className="object-cover h-auto -ml-16 w-28 md:w-52 rotate-12"
        />
      </div>
    </div>
  );
}
