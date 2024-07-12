import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardUpcomingEvent({ event, long }) {
  return (
    <div className="relative">
      <Link
        href={event.link}
        className="relative z-10 group flex flex-col gap-4 hover:-rotate-3 my-transition bg-stone-50 backdrop-blur-sm border p-4"
      >
        <div className="relative overflow-hidden h-56 w-full">
          <Image
            src={event.image}
            alt={event.title}
            width={200}
            height={200}
            className="relative z-10 w-full h-full object-cover group-hover:scale-110 my-transition p-2"
          />
        </div>
        <div className="p-2 flex flex-col gap-4">
          <div className="bg-stone-800 text-white px-2 py-1">
            <h4 className="text-stone-50 my-transition line-clamp-1">
              🎯 {event.title}
            </h4>
          </div>
          <p className={`text-stone-400 text-sm ${long ? "" : "line-clamp-3"}`}>
            {event.description}
          </p>
          <div className="flex gap-2 items-center">
            <p className=" font-bold line-clamp-2 group-hover:underline my-transition">
              {long ? "Reserve your spot now" : "Read more"}
            </p>
            <ChevronRight className="size-4 -mb-0.5 my-transition" />
          </div>
        </div>
      </Link>
      <div className="absolute top-0 left-0 bg-[#dde9d3] h-full w-full" />
    </div>
  );
}
