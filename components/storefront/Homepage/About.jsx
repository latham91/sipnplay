import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative z-20 bg-neutral-50">
      <div className="margin-x margin-y grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="relative">
          <Image
            src="/SipNPlay 4.png"
            width={500}
            height={500}
            draggable={false}
            className="relative z-[1] object-cover h-[400px] lg:h-[550px] w-full hover:rotate-3 my-transition opacity-80 hover:opacity-100"
          />
          <div className="absolute top-0 left-0 h-[400px] lg:h-[550px] w-full bg-[#dde9d3]" />
        </div>
        <div className="flex flex-col gap-16 items-start">
          <div className="flex flex-col items-start">
            <h1 className="relative z-20 bg-stone-900 text-stone-50 px-4 md:px-6 py-2 -mb-2">
              But how
            </h1>
            <h1 className="relative z-10 bg-[#dde9d3] px-4 md:px-6 py-2">
              it works?!{" "}
              <span className="text-5xl max-md:text-4xl max-sm:text-3xl">
                🤔
              </span>
            </h1>
          </div>
          <p className="">
            Come on in with your friends and family and play boardgames from our
            collection of over 500+ games!{" "}
            <span className="font-bold">
              Just $10 a person for 3 hours of gameplay.
            </span>{" "}
            ($12 a person Friday-Sunday and Holidays)
            <br />
            <br /> Play while enjoying bubble tea, coffee, beer sandwiches or
            salads and have a great time! If you want to guarantee a table, you
            can make a reservation which is $15 a person for 3 hours of
            gameplay.
          </p>
          <div className="flex gap-3">
            <Button variant="default" asChild>
              <Link href="https://www.exploretock.com/sipnplay" target="_blank">
                Book now
              </Link>
            </Button>
            <Button variant="green" asChild>
              <Link href="/menu" target="_blank">
                Check our menu
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
