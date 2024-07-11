import { CalendarIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function EventCard() {
  return (
    <div className="col-span-1 p-4 bg-white border rounded-lg shadow-md md:col-span-2">
      <div className="relative h-[250px] mb-3">
        <Image src="/eventplaceholder_1.jpg" alt="Event image" fill className="object-cover w-full h-full rounded-md" />
      </div>

      <div className="pb-3 mb-2 border-b border-dashed border-slate-300">
        <div>
          <h3>Dungeons & Dragons</h3>
          <p>The Siege of Dragonspear Event</p>
        </div>
        <div className="flex gap-10 mt-1">
          <p className="flex items-center text-sm font-medium text-slate-600">
            <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" /> Thurs August 15, 2024
          </p>
          <p className="flex items-center text-sm font-medium text-slate-600">
            <ClockIcon className="w-5 h-5 mr-2 text-blue-500" /> 6:00 PM - 9:00 PM
          </p>
        </div>
      </div>

      <div>
        <p className="leading-6 line-clamp-4">
          Join us for an epic evening of adventure and strategy in our Dungeons & Dragons event, "The Siege of Dragonspear."
          Gather your party and prepare for an immersive experience as you embark on a quest to defend the fortress of
          Dragonspear from a horde of invading monsters....
        </p>
      </div>

      <div className="mt-4">
        <Button variant="dashboard" className="w-full">
          Manage Event
        </Button>
      </div>
    </div>
  );
}
