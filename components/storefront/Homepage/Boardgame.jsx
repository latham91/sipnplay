import Image from "next/image";

export default function Boardgame() {
  return (
    <div className="relative aspect-square lg:order-2 order-1 md:mx-32 lg:mx-0 max-md:-mb-16">
      <Image
        src="/Stair.svg"
        alt="Stair"
        width={200}
        height={200}
        className="absolute z-10 top-6 left-28 h-36 md:h-48 w-auto -rotate-6"
      />
      <Image
        src="/Stair.svg"
        alt="Stair"
        width={200}
        height={200}
        className="absolute z-10 bottom-32 right-28 h-36 md:h-48 w-auto rotate-12"
      />
      <div className="rotate-6 grid grid-cols-8 grid-rows-7 gap-0.5 hover:gap-2 my-transition px-8 md:px-8">
        <div className="boardgame-field bg-blue-200 col-start-8 row-start-1"></div>
        <div className="boardgame-field bg-orange-200 col-start-7 row-start-1">
          <span className="text-xl md:text-4xl -mt-1.5">☕</span>
        </div>
        <div className="boardgame-field bg-purple-200 col-start-6 row-start-1"></div>
        <div className="boardgame-field bg-blue-200 col-start-5 row-start-1">
          <span className="text-xl md:text-4xl -mt-1.5">🥪</span>
        </div>
        <div className="boardgame-field bg-red-100 col-start-4 row-start-1"></div>
        <div className="boardgame-field bg-[#dde9d3] col-start-3 row-start-1">
          {" "}
          <span className="text-xl md:text-4xl -mt-1.5">🧋</span>
        </div>
        <div className="boardgame-field bg-yellow-100 col-start-2 row-start-1"></div>
        <div className="boardgame-field bg-blue-200 col-start-1 row-start-1">
          START
        </div>
        <div className="boardgame-field bg-stone-50 col-start-8"></div>
        <div className="boardgame-field bg-orange-200 col-start-8 row-start-3">
          <span className="text-xl md:text-4xl -mt-1.5">🍷</span>
        </div>
        <div className="boardgame-field bg-[#dde9d3] row-start-4">
          <span className="text-xl md:text-4xl -mt-1.5">🍔</span>
        </div>
        <div className="boardgame-field bg-purple-200 row-start-4"></div>
        <div className="boardgame-field bg-fuchsia-200 row-start-4"></div>
        <div className="boardgame-field bg-stone-50 row-start-4">
          {" "}
          <span className="text-xl md:text-4xl -mt-1.5">🍷</span>
        </div>
        <div className="boardgame-field bg-orange-200 row-start-4"></div>
        <div className="boardgame-field bg-blue-200 row-start-4">
          <span className="text-xl md:text-4xl -mt-1.5">🍕</span>
        </div>
        <div className="boardgame-field bg-red-100 row-start-4"></div>
        <div className="boardgame-field bg-[#dde9d3] row-start-4"></div>
        <div className="boardgame-field bg-purple-200 row-start-5"></div>
        <div className="boardgame-field bg-yellow-100 row-start-6">
          <span className="text-xl md:text-4xl -mt-1.5">🎲</span>
        </div>
        <div className="boardgame-field bg-fuchsia-200 col-start-8 row-start-7">
          <span className="text-xl md:text-4xl -mt-1.5">👑</span>
        </div>
        <div className="boardgame-field bg-orange-200 col-start-7 row-start-7"></div>
        <div className="boardgame-field bg-blue-200 col-start-6 row-start-7">
          <span className="text-xl md:text-4xl -mt-1.5">🥯</span>
        </div>
        <div className="boardgame-field bg-[#dde9d3] col-start-5 row-start-7"></div>
        <div className="boardgame-field bg-fuchsia-200 col-start-4 row-start-7"></div>
        <div className="boardgame-field bg-yellow-100 col-start-3 row-start-7">
          {" "}
          <span className="text-xl md:text-4xl -mt-1.5">🌯</span>
        </div>
        <div className="boardgame-field bg-orange-200 col-start-2 row-start-7"></div>
        <div className="boardgame-field bg-blue-200 col-start-1 row-start-7"></div>
      </div>
    </div>
  );
}
