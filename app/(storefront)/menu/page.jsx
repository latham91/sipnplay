import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import prisma from "@/lib/prisma";

const SceneOne = dynamic(() => import("@/components/storefront/3d/SceneOne"), {
  ssr: false,
});
const SceneTwo = dynamic(() => import("@/components/storefront/3d/SceneTwo"), {
  ssr: false,
});
const SceneThree = dynamic(
  () => import("@/components/storefront/3d/SceneThree"),
  { ssr: false }
);

async function getMenuItems() {
  const data = await prisma.menuItem.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      category: true,
      prices: {
        select: {
          id: true,
          size: true,
          type: true,
          price: true,
        },
      },
      additionals: {
        select: {
          id: true,
          name: true,
          price: true,
        },
      },
    },
  });

  return data;
}

export default async function Menu() {
  const menuItems = await getMenuItems();

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
          <div className="flex max-md:flex-col-reverse w-full">
            <div className="relative z-20 w-full md:w-1/2 bg-[#dde9d3] p-10 flex flex-col items-start gap-12">
              <div className="text-center flex flex-col items-center bg-stone-800 px-4 py-2 -mt-16">
                <h2 className="text-stone-50">☕ Coffee</h2>
              </div>
              <div className="w-full grid md:grid-cols-2 gap-12">
                {/* COFFEE CARD */}
                <div className="flex flex-col">
                  <div className="bg-stone-800">
                    <h5 className="text-stone-50 ml-2">Name</h5>
                  </div>
                  <div className="mt-2 mb-4">
                    <p className="-mb-1">
                      <span className="font-bold text-stone-700">Small:</span>{" "}
                      $10.00 (H) • $10.99 (C)
                    </p>
                    <p className="-mb-1">
                      <span className="font-bold text-stone-700">Medium:</span>{" "}
                      $10.00 (H) • $10.99 (C)
                    </p>
                    <p className="-mb-1">
                      <span className="font-bold text-stone-700">Large:</span>{" "}
                      $10.00 (H) • $10.99 (C)
                    </p>
                  </div>
                  <p className="text-md font-extrabold text-stone-700">
                    • Additionals{" "}
                  </p>

                  <p className="-mb-1">
                    <span className="font-bold text-stone-700">Name</span> +
                    $10.00
                  </p>
                </div>
                {/* END COFFEE CARD */}
              </div>
            </div>{" "}
            <div className="w-full md:w-1/2 min-h-[350px] bg-stone-50">
              <SceneTwo />
            </div>
          </div>
          {/* 🔻 Component to repeat */}
          <div className="flex max-md:flex-col w-full">
            <div className="w-full md:w-1/2 min-h-[350px] bg-stone-50">
              {" "}
              <SceneOne />
            </div>
            <div className="relative z-20 w-full md:w-1/2 bg-[#dde9d3] p-10 flex flex-col items-start gap-12">
              <div className="text-center flex flex-col items-center bg-stone-800 px-4 py-2 -mt-16">
                <h2 className="text-stone-50">🧋 Boba</h2>
              </div>
              <div className="w-full grid md:grid-cols-2 gap-12">
                {/* BOBA CARD */}
                <div className="flex flex-col">
                  <div className="bg-stone-800">
                    <h5 className="text-stone-50 ml-2">Name</h5>
                  </div>
                  <p className="text-sm mt-2">Small description</p>
                  <div className="mt-2 mb-4">
                    <p className="-mb-1">
                      <span className="font-bold text-stone-700">Small:</span>{" "}
                      $10.00 (H) • $10.99 (C)
                    </p>
                    <p className="-mb-1">
                      <span className="font-bold text-stone-700">Medium:</span>{" "}
                      $10.00 (H) • $10.99 (C)
                    </p>
                    <p className="-mb-1">
                      <span className="font-bold text-stone-700">Large:</span>{" "}
                      $10.00 (H) • $10.99 (C)
                    </p>
                  </div>
                  <p className="text-md font-extrabold text-stone-700">
                    • Additionals
                  </p>

                  <p className="-mb-1">
                    <span className="font-bold text-stone-700">Name</span> +
                    $10.00
                  </p>
                </div>
                {/* END BOBA CARD */}
              </div>
            </div>
          </div>
          {/* 🔻 Component to repeat */}
          <div className="flex max-md:flex-col-reverse w-full">
            <div className="relative z-20 w-full md:w-1/2 bg-[#dde9d3] p-10 flex flex-col items-start gap-12">
              <div className="text-center flex flex-col items-center bg-stone-800 px-4 py-2 -mt-16">
                <h2 className="text-stone-50">🥪 Sandwiches</h2>
              </div>
              <div className="w-full grid md:grid-cols-2 gap-12">
                {/* SANDWICH CARD */}
                <div className="flex flex-col">
                  <div className="bg-stone-800">
                    <h5 className="text-stone-50 ml-2">Name</h5>
                  </div>
                  <p className="text-sm mt-2">Small description</p>
                  <div className="mt-2 mb-4">
                    <p className="-mb-1">
                      <span className="font-bold text-stone-700">Price:</span>{" "}
                      $10.00
                    </p>
                  </div>
                  <p className="text-md font-extrabold text-stone-700">
                    • Additionals
                  </p>
                  <p className="-mb-1">
                    <span className="font-bold text-stone-700">Name</span> +
                    $10.00
                  </p>
                </div>
                {/* END SANDWICH CARD */}
              </div>
            </div>{" "}
            <div className="w-full md:w-1/2 min-h-[350px] bg-stone-50">
              <SceneThree />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
