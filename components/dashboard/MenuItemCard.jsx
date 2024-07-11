import { Button } from "@/components/ui/button";

export default function MenuItemCard() {
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
