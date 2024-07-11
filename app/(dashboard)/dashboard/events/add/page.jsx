"use client";

import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createEvent } from "@/lib/actions";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function EventAddPage() {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageFile(file);
        console.log(file);
      };

      reader.readAsDataURL(file);

      // Upload the image to ImgBB
      const imageFile = new FormData();
      imageFile.set("key", process.env.NEXT_PUBLIC_IMGBB_API_KEY);
      imageFile.append("image", file);

      const res = await axios.post("https://api.imgbb.com/1/upload", imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setImageUrl(res.data.data.image.url);
    } else {
      setImagePreview(null);
      setImageFile(null);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const formBody = {
      eventImage: formData.get("eventImage"),
      eventTitle: formData.get("eventTitle"),
      eventSubtitle: formData.get("eventSubtitle"),
      eventDate: formData.get("eventDate"),
      eventStart: formData.get("eventStart"),
      eventEnd: formData.get("eventEnd"),
      eventDescription: formData.get("eventDescription"),
      eventImage: imageUrl,
    };

    createEvent(formBody);
  };

  return (
    <form id="event" onSubmit={onSubmit}>
      <div className="mb-10">
        <Header title="Add new event" subtitle="This is where you can create a new event" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <Label>Image</Label>
          <input type="hidden" name="eventImage" />
          <div className="flex flex-col gap-2">
            <Input type="file" accept="image/*" name="eventImage" onChange={handleImageChange} />
            {imagePreview && (
              <div className="relative h-[350px] rounded-lg overflow-hidden">
                <Image
                  src={imagePreview}
                  fill
                  alt="Event image preview"
                  className="object-cover object-center w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Title</Label>
          <Input type="text" name="eventTitle" placeholder="eg. Dungeons & Dragons" required />
        </div>
        <div className="space-y-2">
          <Label>Subtitle</Label>
          <Input type="text" name="eventSubtitle" placeholder="eg. The Siege of Dragonspear Event" required />
        </div>
        <div className="space-y-2">
          <Label>Event Date</Label>
          <Input type="date" name="eventDate" className="inline" required />
        </div>
        <div className="space-y-2">
          <Label>Start Time</Label>
          <Input type="time" name="eventStart" className="inline" required />
        </div>
        <div className="space-y-2">
          <Label>End Time</Label>
          <Input type="time" name="eventEnd" className="inline" required />
        </div>
        <div>
          <Label>Description</Label>
          <Textarea name="eventDescription" placeholder="Enter a description for the event" className="h-40" required />
        </div>
      </div>
      <Button type="submit" variant="dashboard" className="w-full mt-5">
        Create new event
      </Button>
    </form>
  );
}
