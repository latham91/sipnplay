"use client";

import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createEvent, createGame } from "@/lib/actions";
import { gameCategories } from "@/lib/gameData";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function GameAddPage() {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      // Image preview logic
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageFile(file);
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
      gameImage: imageUrl,
      gameTitle: formData.get("gameTitle"),
      gameCategory: formData.get("gameCategory"),
      gameMin: formData.get("gameMin"),
      gameMax: formData.get("gameMax"),
    };

    createGame(formBody);
  };

  return (
    <form id="event" onSubmit={onSubmit}>
      <div className="mb-10">
        <Header title="Add new game" subtitle="This is where you can create a new board game" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <Label>Image</Label>
          <input type="hidden" name="gameImage" />
          <div className="flex flex-col gap-2">
            <Input type="file" accept="image/*" name="gameImage" onChange={handleImageChange} />
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
          <Input type="text" name="gameTitle" placeholder="eg. Monopoly Original" required />
        </div>
        <div className="space-y-2">
          <Label>Category</Label>
          <Select name="gameCategory" required>
            <SelectTrigger>
              <SelectValue placeholder="Choose category" />
            </SelectTrigger>
            <SelectContent>
              {gameCategories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Minimum Players</Label>
          <Input type="number" name="gameMin" step={1} min={1} max={10} className="inline" required />
        </div>
        <div className="space-y-2">
          <Label>Maximum Players</Label>
          <Input type="number" name="gameMax" step={1} min={1} max={10} className="inline" required />
        </div>
      </div>
      <Button type="submit" variant="dashboard" className="w-full mt-5">
        Create new game
      </Button>
    </form>
  );
}
