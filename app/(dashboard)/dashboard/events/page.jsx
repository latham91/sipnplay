import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Header title="Events" subtitle="This is where you manage your events" />
        <Button asChild>
          <Link href="/dashboard/events/add">
            <CirclePlusIcon className="w-5 h-5 md:mr-2" />
            <span className="hidden md:inline">Add new event</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
