import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const SceneOne = dynamic(() => import("@/components/storefront/3d/SceneOne"), { ssr: false });
const SceneTwo = dynamic(() => import("@/components/storefront/3d/SceneTwo"), { ssr: false });
const SceneThree = dynamic(() => import("@/components/storefront/3d/SceneThree"), { ssr: false });

export default function Menu() {
  // Fake data to use while the backend is not ready

  return (
    <div className="">
      <header className="relative overflow-hidden">
        {/* 🔻 Hero section */}
        <div className="margin-x margin-y ">
          <div className="flex flex-col items-center justify-center gap-12 mt-4 mb-24 text-center md:mb-36">
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
            <p className="text-xl font-bold md:text-2xl text-stone-400">
              At Sip N Play, we offer a diverse and delicious menu designed to enhance your board game experience. <br />
              <span className="text-white">Check out below and get ready to enjoy a fantastic time! 🍔🍹🎲</span>
            </p>
            <div className="flex gap-3">
              <Button variant="green" asChild>
                <Link href="https://www.exploretock.com/sipnplay" target="_blank">
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
      </header>
      {/* 🔻 Menu section */}
      <div className="relative z-10 flex bg-stone-50">
        <div className="w-full margin-x margin-y">
          {/* 🔻 Component to repeat */}
          <div className="flex w-full">
            <div className="bg-stone-50 h-[50vh] w-full">
              <SceneOne />
            </div>
            <div className="bg-[#dde9d3] h-[50vh] w-full">Space for the food</div>
          </div>
          {/* 🔻 Component to repeat */}
          <div className="flex w-full">
            <div className="bg-[#dde9d3] h-[50vh] w-full">Space for the food</div>
            <div className="bg-stone-50 h-[50vh] w-full">
              <SceneTwo />
            </div>
          </div>
          {/* 🔻 Component to repeat */}
          <div className="flex w-full">
            <div className="bg-stone-50 h-[50vh] w-full">
              <SceneThree />
            </div>
            <div className="bg-[#dde9d3] h-[50vh] w-full">Space for the food</div>
          </div>
        </div>
      </div>
    </div>
  );
}
