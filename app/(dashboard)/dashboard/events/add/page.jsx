"use client";

import Header from "@/components/dashboard/Header";
import ImageUploader from "@/components/dashboard/ImageUploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function EventAddPage() {
  const [imageUrl, setImageUrl] = useState("");

  const onImageUpload = (result) => {
    setImageUrl(result);
  };

  return (
    <form>
      <div className="mb-10">
        <Header title="Add new event" subtitle="This is where you can create a new event" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <Label>Image</Label>
          <input type="hidden" name="eventImage" value={imageUrl} />
          <ImageUploader onImageUpload={onImageUpload} />
        </div>
        <div className="space-y-2">
          <Label>Title</Label>
          <Input type="text" name="eventTitle" placeholder="eg. Dungeons & Dragons" />
        </div>
        <div className="space-y-2">
          <Label>Subtitle</Label>
          <Input type="text" name="eventSubtitle" placeholder="eg. The Siege of Dragonspear Event" />
        </div>
        <div className="space-y-2">
          <Label>Event Date</Label>
          <Input type="date" name="eventDate" className="inline" />
        </div>
        <div className="space-y-2">
          <Label>Start Time</Label>
          <Input type="time" name="eventStart" className="inline" />
        </div>
        <div className="space-y-2">
          <Label>End Time</Label>
          <Input type="time" name="eventEnd" className="inline" />
        </div>
        <div>
          <Label>Description</Label>
          <Textarea name="eventDescription" placeholder="Enter a description for the event" className="h-40" />
        </div>
      </div>
      <Button type="submit" className="w-full mt-5">
        Create new event
      </Button>
    </form>
  );
}
