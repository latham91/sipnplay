import { CalendarIcon, ClockIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function EventCard({ event }) {
  return (
    <div className="flex flex-col justify-between col-span-1 p-4 bg-white border rounded-lg shadow-md md:col-span-2">
      <div>
        {/* CARD IMAGE */}
        <div className="relative h-[250px] mb-3">
          <Image
            src={event.image || "/eventplaceholder_1.jpg"}
            alt="Event image"
            fill
            sizes="100%"
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        {/* CARD TITLE & DATE TIME */}
        <div className="pb-3 mb-2 border-b border-dashed border-slate-300">
          <div>
            <h3>{event.title}</h3>
            <p>{event.subtitle}</p>
          </div>
          <div className="flex gap-10 mt-1">
            <p className="flex items-center text-sm font-medium text-slate-600">
              <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" /> {event.date}
            </p>
            <p className="flex items-center text-sm font-medium text-slate-600">
              <ClockIcon className="w-5 h-5 mr-2 text-blue-500" /> {event.startTime}{" "}
              {event.startTime.slice(0, 2) >= 12 ? "PM" : "AM"} - {event.endTime}{" "}
              {event.endTime.slice(0, 2) >= 12 ? "PM" : "AM"}
            </p>
          </div>
        </div>

        {/* CARD DESCRIPTION */}

        <div>
          <p className="mb-auto leading-6 line-clamp-4">{event.description}</p>
        </div>
      </div>

      {/* CARD BUTTON */}
      <div className="mt-4">
        <Button variant="destructive" className="w-full">
          <Trash2Icon className="w-5 h-5 mr-2" />
          Delete Event
        </Button>
      </div>
    </div>
  );
}
