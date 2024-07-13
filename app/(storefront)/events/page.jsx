import CardUpcomingEvent from "@/components/storefront/Homepage/CardUpcomingEvent";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

async function getEvents() {
  const data = await prisma.event.findMany({
    orderBy: {
      date: "asc",
    },
  });

  return data;
}

export default async function Events() {
  const events = await getEvents();

  // Fake data to use while the backend is not ready
  const fakeData = [
    {
      id: 1,
      title: "Event 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      dateTime: "2022-12-31T23:59:59",
      location: "Sip N Play Café",
      image: "/defaultimg.png",
      link: "/",
    },
    {
      id: 2,
      title: "Event 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      dateTime: "2022-12-31T23:59:59",
      location: "Sip N Play Café",
      image: "/defaultimg.png",
      link: "/",
    },
    {
      id: 3,
      title: "Event 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      dateTime: "2022-12-31T23:59:59",
      location: "Sip N Play Café",
      image: "/defaultimg.png",
      link: "/",
    },
    {
      id: 4,
      title: "Event 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      dateTime: "2022-12-31T23:59:59",
      location: "Sip N Play Café",
      image: "/defaultimg.png",
      link: "/",
    },
  ];

  return (
    <div className="">
      <header className="relative overflow-hidden">
        {/* 🔻 Hero section */}
        <div className="margin-x margin-y">
          <div className="flex flex-col items-center justify-center gap-12 mt-4 mb-24 text-center md:mb-36">
            <span className="text-xl md:text-3xl bg-[#dde9d3] px-4 py-2 -mb-14 relative z-30 hover:scale-110 my-transition">
              🧋🥪♟️🎯🎲
            </span>{" "}
            <div className="flex flex-col items-center">
              <h1 className="text-8xl max-md:text-7xl max-sm:text-5xl -mb-1 leading-[60px] md:leading-[80px] bg-stone-50 px-4 md:px-6 py-1.5 md:py-3 relative z-20 hover:scale-110 my-transition">
                Upcoming
              </h1>
              <h1 className="text-8xl max-md:text-7xl max-sm:text-5xl leading-[60px] md:leading-[80px] bg-[#dde9d3] px-4 md:px-6 py-1.5 md:py-3 relative z-10 hover:scale-110 my-transition">
                Events
              </h1>
            </div>
            <p className="text-xl font-bold md:text-2xl text-stone-400">
              Are you ready for the next event at Sip N Play Café?
              <br />
              <span className="text-white">Check out the upcoming events and join us for a great time!</span>
            </p>
            <div className="flex gap-3">
              <Button variant="green" asChild>
                <Link href="https://www.exploretock.com/sipnplay" target="_blank">
                  Reservations
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/boardgames" target="_blank">
                  Boardgames
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
      {/* 🔻 Events section */}
      <div className="relative z-10 bg-stone-50 margin-y">
        <div className="grid grid-cols-1 gap-16 pb-24 margin-x max-sm:pb-20 lg:grid-cols-2">
          {events.map((event) => (
            <CardUpcomingEvent key={event.id} event={event} long />
          ))}
        </div>
      </div>
    </div>
  );
}
