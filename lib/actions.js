"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import { redirect } from "next/navigation";
import prisma from "./prisma";

export async function createEvent(formData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Check if the user is an admin
  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    redirect("/");
  }

  //   Create the event
  await prisma.event.create({
    data: {
      title: formData.eventTitle,
      subtitle: formData.eventSubtitle,
      date: formData.eventDate,
      startTime: formData.eventStart,
      endTime: formData.eventEnd,
      description: formData.eventDescription,
      image: formData.eventImage,
    },
  });

  redirect("/dashboard/events");
}

export async function createMenuItem(formData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Check if the user is an admin
  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    redirect("/");
  }

  // Create the menu item
  await prisma.menuItem.create({
    data: {
      name: formData.name,
      description: formData.description,
      category: formData.category,
      prices: {
        create: formData.prices.map((price) => ({
          size: price.size,
          type: price.type,
          price: price.price,
        })),
      },
      additionals: {
        create: formData.additionals.map((additional) => ({
          name: additional.name,
          price: additional.price,
        })),
      },
    },
  });

  redirect("/dashboard/menu");
}
