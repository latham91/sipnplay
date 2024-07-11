import EventCard from "@/components/dashboard/EventCard";
import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <Header title="Events" subtitle="This is where you manage your events" />
        <Button variant="dashboard" asChild>
          <Link href="/dashboard/events/add">
            <CirclePlusIcon className="w-5 h-5 md:mr-2" />
            <span className="hidden md:inline">Add new event</span>
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-4">
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
