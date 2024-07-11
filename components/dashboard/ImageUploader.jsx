"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";

export default function ImageUploader({ onImageUpload }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        onImageUpload(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      onImageUpload(null);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <Input type="file" accept="image/*" name="eventImage" onChange={handleImageChange} />
        {imagePreview && (
          <div className="relative h-[350px] rounded-lg overflow-hidden">
            <Image src={imagePreview} fill alt="Event image preview" className="object-cover object-center w-full h-full" />
          </div>
        )}
      </div>
    </div>
  );
}
