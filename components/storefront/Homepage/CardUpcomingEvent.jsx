import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardUpcomingEvent({ event, long }) {
  return (
    <div className="relative">
      <Link
        href={"/"}
        className="relative z-10 flex flex-col gap-4 p-4 border group hover:-rotate-3 my-transition bg-stone-50 backdrop-blur-sm"
      >
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            width={200}
            height={200}
            className="relative z-10 object-cover w-full h-full p-2 group-hover:scale-110 my-transition"
          />
        </div>
        <div className="flex flex-col gap-4 p-2">
          <div className="px-2 py-1 text-white bg-stone-800">
            <h4 className="text-stone-50 my-transition line-clamp-1">🎯 {event.title}</h4>
          </div>
          <div className="flex items-center gap-10">
            <p className="font-medium">📆 {event.date}</p>
            <p>
              🕒 {event.startTime} {event.startTime.slice(0, 2) >= 12 ? "PM" : "AM"} - {event.endTime}{" "}
              {event.endTime.slice(0, 2) >= 12 ? "PM" : "AM"}
            </p>
          </div>
          <p className={`text-stone-400 text-sm ${long ? "" : "line-clamp-3"}`}>{event.description}</p>
          <div className="flex items-center gap-2">
            <p className="font-bold line-clamp-2 group-hover:underline my-transition">
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
