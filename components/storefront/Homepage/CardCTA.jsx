import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CardCTA({ data, dark }) {
  return (
    <div className="relative">
      <div className="relative bg-[#dde9d3] p-14 grid grid-col-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* 🔻 Title - Absolute position */}
        <h2
          className={`absolute -top-8 left-12 pl-6 pr-8 py-4 -rotate-3 my-transition hover:scale-110 ${
            dark ? "bg-stone-50 text-stone-900" : "bg-stone-900 text-stone-50"
          }`}
        >
          {data.title}
        </h2>
        {/* 🔻 Description + Button */}
        <div className="mt-6 flex flex-col gap-8 items-start order-2 md:order-1">
          <p className="">{data.description}</p>
          <Button variant="default" asChild>
            <Link href={data.href} target="_blank">
              {data.btn ? data.btn : "Check now"}
            </Link>
          </Button>
        </div>
        {/* 🔻 Image */}
        <div className="relative group order-1 md:order-2 mt-6">
          <Image
            src={data.image}
            alt={data.title}
            width={500}
            height={500}
            draggable={false}
            className="p-4 relative z-[1] object-cover h-[375px] w-full hover:rotate-3 my-transition opacity-90 group-hover:opacity-100"
          />
          <div
            className={`absolute top-0 left-0 h-[375px] w-full group-hover:-rotate-3 my-transition ${
              dark ? "bg-stone-800" : "bg-stone-50"
            }`}
          />
        </div>
      </div>
      {/* 🔻 Background decorative box */}
      <div
        className={`max-md:hidden absolute -z-[1] -right-14 -top-[10%] h-[120%] w-[300px] ${
          dark ? "bg-stone-50" : "bg-stone-800"
        }`}
      />
    </div>
  );
}
