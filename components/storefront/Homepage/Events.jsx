import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Events() {
  return (
    <div className="relative margin-x margin-y grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* 🔻 Title + description + buttons */}
      <div className="flex flex-col gap-16 items-start order-2 lg:order-1">
        <div className="flex flex-col items-start">
          <h1 className="relative z-20 bg-stone-50 px-4 md:px-6 py-2 -mb-2 hover:scale-110 my-transition">
            Upcoming
          </h1>
          <h1 className="relative z-10 bg-[#dde9d3] px-4 md:px-6 py-2 hover:scale-110 my-transition">
            events
            <span className="text-5xl max-md:text-4xl max-sm:text-3xl">🤩</span>
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
      <div className="relative order-1 lg:order-2">xxxxxxxxx</div>
    </div>
  );
}
