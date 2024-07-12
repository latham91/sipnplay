import { Button } from "@/components/ui/button";

export default function MenuItemCard({ item }) {
  return (
    <div className="flex flex-col justify-between col-span-1 p-4 bg-white border rounded-lg shadow-md ">
      <div className="flex flex-col gap-3">
        <div className="pb-2 border-b border-dashed">
          <div className="flex items-center justify-between">
            <h3>The OG</h3>
            <span className="px-4 py-0.5 bg-sky-300 rounded-full text-white">Boba</span>
          </div>
          <div>
            <p className="italic">Classic milk tea</p>
          </div>
        </div>

        <div>
          <h5>Prices</h5>
          <div className="flex items-center justify-between">
            <p>Medium:</p>
            <p className="font-bold">$4.25</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Large:</p>
            <p className="font-bold">$5.25</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Hot:</p>
            <p className="font-bold">$5.25</p>
          </div>
        </div>

        <div>
          <h5>Additionals</h5>
          <div className="flex items-center justify-between">
            <p>Extra Pearls:</p>
            <p className="font-bold">$1.00</p>
          </div>
        </div>
      </div>
      <Button variant="dashboard" className="mt-5">
        Edit
      </Button>
    </div>
  );
}

export function MenuItemCardPreview({ item }) {
  const smallPrice = item.prices.find((price) => price.size === "small");
  const mediumPrice = item.prices.find((price) => price.size === "medium");
  const largePrice = item.prices.find((price) => price.size === "large");
  const hotPrice = item.prices.find((price) => price.type === "hot");

  return (
    <div className="flex flex-col justify-between col-span-1 p-4 bg-white border rounded-lg shadow-md ">
      <div className="flex flex-col gap-3">
        <div className="pb-2 border-b border-dashed">
          <div className="flex items-center justify-between">
            <h3>{item.name || "Name"}</h3>
            <span className="px-4 py-0.5 bg-sky-300 rounded-full text-white">{item.category || "Category"}</span>
          </div>
          <div>
            <p className="italic">{item.description || "Description"}</p>
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
              <p className="font-bold">$5.25</p>
            </div>
          )}
        </div>

        <div>
          <h5>Additionals</h5>
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
