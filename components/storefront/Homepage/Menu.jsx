import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="relative margin-x margin-y grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* 🔻 Illustrations and gradient on the footer */}
      <div className="absolute top-0 -left-[50%] z-10 w-[200vw] h-[200px] bg-gradient-to-b from-stone-900 to-transparent" />
      <div className="opacity-100 absolute -top-8 md:-top-16 left-0 w-full flex items-center justify-center gap-14 md:gap-20">
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
      {/* 🔻 Title + description + buttons */}
      <div className="lg:mt-36 flex flex-col gap-16 items-start order-2 lg:order-1">
        <div className="flex flex-col items-start">
          <h1 className="relative z-20 bg-stone-50 px-4 md:px-6 py-2 -mb-2 hover:scale-110 my-transition">
            Our tasty
          </h1>
          <h1 className="relative z-10 bg-[#dde9d3] px-4 md:px-6 py-2 hover:scale-110 my-transition">
            menu{" "}
            <span className="text-5xl max-md:text-4xl max-sm:text-3xl">😋</span>
          </h1>
        </div>
        <p className="text-stone-300">
          Hungry? Thirsty? Dive into our menu packed with delicious food, hot
          drinks, and refreshing bubble teas. Whether you're after a hearty
          bite, a cosy cuppa, or a fun bubble tea, we've got just what you need.{" "}
          <br />
          <br />
          <span className="font-bold text-white">
            Take your time checking out all our tasty choices and enjoy a yummy
            experience in our friendly and welcoming place. It's the perfect
            spot to relax, unwind, and enjoy some great flavours!
          </span>
        </p>
        <div className="flex gap-3">
          <Button variant="green" asChild>
            <Link href="/menu" target="_blank">
              Check our menu
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="https://www.exploretock.com/sipnplay" target="_blank">
              Reservations
            </Link>
          </Button>
        </div>
      </div>
      {/* 🔻 Image */}
      <div className="mt-28 lg:mt-36 relative order-1 lg:order-2">
        <Image
          src="/SipNPlay 5.png"
          width={500}
          height={500}
          draggable={false}
          className="relative z-[1] object-cover h-[400px] lg:h-[550px] w-full hover:rotate-3 my-transition opacity-90 hover:opacity-100"
        />
        <div className="absolute top-0 left-0 h-[400px] lg:h-[550px] w-full bg-[#dde9d3]" />
      </div>
    </div>
  );
}
