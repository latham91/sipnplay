"use client";

import { Button } from "@/components/ui/button";
import { deleteEvent } from "@/lib/actions";
import Link from "next/link";

export default function DeleteEvent({ params }) {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="flex flex-col items-center gap-3 p-10 bg-white rounded-lg shadow-sm">
        <div className="text-center">
          <h3>Are you sure you want to delete this event?</h3>
          <p className="text-xl">Performing this action is destructive and irreversible.</p>
        </div>
        <div className="flex items-center justify-between w-full gap-20 mt-10">
          <Button variant="dashboard" className="w-full" asChild>
            <Link href="/dashboard/events">Cancel</Link>
          </Button>
          <form action={() => deleteEvent(params.id)} className="w-full">
            <Button type="submit" variant="destructive" className="w-full">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}