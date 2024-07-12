import { Button } from "@/components/ui/button";
import Link from "next/link";
import Boardgame from "./Boardgame";
import CardUpcomingEvent from "./CardUpcomingEvent";

export default function Events() {
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
    <>
      <div className="relative margin-x margin-y grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* 🔻 Title + description + buttons */}
        <div className="flex flex-col gap-16 items-start order-2 lg:order-1">
          <div className="flex flex-col items-start">
            <h1 className="relative z-20 bg-stone-50 px-4 md:px-6 py-2 -mb-2 hover:scale-110 my-transition">
              Upcoming
            </h1>
            <h1 className="relative z-10 bg-[#dde9d3] px-4 md:px-6 py-2 hover:scale-110 my-transition">
              events
              <span className="text-5xl max-md:text-4xl max-sm:text-3xl">
                🤩
              </span>
            </h1>
          </div>
          <p className="text-stone-300">
            Get ready for some serious fun at our café! We've got a bunch of
            awesome board game events lined up just for you. Grab your friends,
            enjoy some tasty food and drinks, and dive into your favourite games
            or try something new. 🤪
            <br />
            <br />
            <span className="font-bold text-white">
              We've got something for everyone! Check out our schedule below and
              don't miss out on the good times. 🚀
            </span>
          </p>
          <div className="flex gap-3">
            <Button variant="green" asChild>
              <Link href="/events" target="_blank">
                Upcoming events
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/boardgames" target="_blank">
                Boardgames
              </Link>
            </Button>
          </div>
        </div>
        {/* 🔻 Little boardgame*/}
        <div className="relative order-1 lg:order-2">
          <Boardgame />
        </div>
      </div>
      {/* 🔻 Events section */}
      <div className="margin-x pb-24 max-sm:pb-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16">
        {fakeData.slice(0, 3).map((event, i) => (
          <CardUpcomingEvent key={i} event={event} />
        ))}
      </div>
    </>
  );
}
