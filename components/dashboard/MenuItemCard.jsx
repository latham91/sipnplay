import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Trash2Icon } from "lucide-react";

export default function MenuItemCard({ item }) {
  const smallPrice = item.prices.find((price) => price.size === "small");
  const mediumPrice = item.prices.find((price) => price.size === "medium");
  const largePrice = item.prices.find((price) => price.size === "large");
  const hotPrice = item.prices.find((price) => price.type === "hot");
  const coldPrice = item.prices.find((price) => price.type === "cold");
  const priceOnly = item.prices.find((price) => price.size === "none" && price.type === "none");

  return (
    <div className="flex flex-col justify-between col-span-1 p-4 bg-white border rounded-lg shadow-md ">
      <div className="flex flex-col gap-3">
        <div className="pb-2 border-b border-dashed">
          <div className="flex items-center justify-between">
            <h3>{item.name}</h3>
            <span
              className={cn(
                item.category === "Boba"
                  ? "bg-sky-400"
                  : item.category === "Coffee"
                  ? "bg-stone-800"
                  : item.category === "Specialty"
                  ? "bg-purple-400"
                  : item.category === "Hot Bites"
                  ? "bg-red-400"
                  : item.category === "Sandwiches"
                  ? "bg-yellow-400"
                  : item.category === "Salads"
                  ? "bg-emerald-400"
                  : item.category === "Seasonal"
                  ? "bg-amber-700"
                  : item.category === "Alcohol"
                  ? "bg-pink-400"
                  : "bg-stone-400",
                "px-4 py-0.5 rounded-full text-white"
              )}
            >
              {item.category}
            </span>
          </div>
          <div>
            <p className="italic">{item.description}</p>
          </div>
        </div>

        <div>
          <h5>Price(s)</h5>
          {smallPrice && (
            <div className="flex items-center justify-between">
              <p>Small:</p>
              <p className="font-bold">$4.25</p>
            </div>
          )}
          {mediumPrice && (
            <div className="flex items-center justify-between">
              <p>Medium:</p>
              <p className="font-bold">${mediumPrice.price}</p>
            </div>
          )}
          {largePrice && (
            <div className="flex items-center justify-between">
              <p>Large:</p>
              <p className="font-bold">${largePrice.price}</p>
            </div>
          )}
          {hotPrice && (
            <div className="flex items-center justify-between">
              <p>Hot:</p>
              <p className="font-bold">${hotPrice.price}</p>
            </div>
          )}
          {coldPrice && (
            <div className="flex items-center justify-between">
              <p>Cold:</p>
              <p className="font-bold">${coldPrice.price}</p>
            </div>
          )}
          {priceOnly && (
            <div className="flex items-center justify-between">
              <p className="font-bold">${priceOnly.price}</p>
            </div>
          )}
        </div>

        <div>
          {item.additionals.length > 0 && <h5>Additionals</h5>}
          {item.additionals.map((additional, index) => (
            <div key={index} className="flex items-center justify-between">
              <p>{additional.name}:</p>
              <p className="font-bold">+${additional.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Button variant="destructive" className="mt-5">
        <Trash2Icon className="w-5 h-5 mr-2" />
        Delete Item
      </Button>
    </div>
  );
}

export function MenuItemCardPreview({ item }) {
  const smallPrice = item.prices.find((price) => price.size === "small");
  const mediumPrice = item.prices.find((price) => price.size === "medium");
  const largePrice = item.prices.find((price) => price.size === "large");
  const hotPrice = item.prices.find((price) => price.type === "hot");
  const coldPrice = item.prices.find((price) => price.type === "cold");
  const priceOnly = item.prices.find((price) => price.size === "none" && price.type === "none");

  return (
    <div className="flex flex-col justify-between col-span-1 p-4 bg-white border rounded-lg shadow-md ">
      <div className="flex flex-col gap-3">
        <div className="pb-2 border-b border-dashed">
          <div className="flex items-center justify-between">
            <h3>{item.name}</h3>
            <span
              className={cn(
                item.category === "Boba"
                  ? "bg-sky-400"
                  : item.category === "Coffee"
                  ? "bg-stone-800"
                  : item.category === "Specialty"
                  ? "bg-purple-400"
                  : item.category === "Hot Bites"
                  ? "bg-red-400"
                  : item.category === "Sandwiches"
                  ? "bg-yellow-400"
                  : item.category === "Salads"
                  ? "bg-emerald-400"
                  : item.category === "Seasonal"
                  ? "bg-amber-700"
                  : item.category === "Alcohol"
                  ? "bg-pink-400"
                  : "bg-stone-400",
                "px-4 py-0.5 rounded-full text-white"
              )}
            >
              {item.category}
            </span>
          </div>
          <div>
            <p className="italic">{item.description}</p>
          </div>
        </div>

        <div>
          <h5>Prices</h5>
          {smallPrice && (
            <div className="flex items-center justify-between">
              <p>Small:</p>
              <p className="font-bold">$4.25</p>
            </div>
          )}
          {mediumPrice && (
            <div className="flex items-center justify-between">
              <p>Medium:</p>
              <p className="font-bold">${mediumPrice.price}</p>
            </div>
          )}
          {largePrice && (
            <div className="flex items-center justify-between">
              <p>Large:</p>
              <p className="font-bold">${largePrice.price}</p>
            </div>
          )}
          {hotPrice && (
            <div className="flex items-center justify-between">
              <p>Hot:</p>
              <p className="font-bold">${hotPrice.price}</p>
            </div>
          )}
          {coldPrice && (
            <div className="flex items-center justify-between">
              <p>Cold:</p>
              <p className="font-bold">${coldPrice.price}</p>
            </div>
          )}
          {priceOnly && (
            <div className="flex items-center justify-between">
              <p className="font-bold">${priceOnly.price}</p>
            </div>
          )}
        </div>

        <div>
          {item.additionals.length > 0 && <h5>Additionals</h5>}
          {item.additionals.map((additional, index) => (
            <div key={index} className="flex items-center justify-between">
              <p>{additional.name}:</p>
              <p className="font-bold">+${additional.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
