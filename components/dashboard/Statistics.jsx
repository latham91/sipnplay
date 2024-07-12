import prisma from "@/lib/prisma";

async function getStats() {
  const [games, events, menuItems] = await Promise.all([prisma.game.count(), prisma.event.count(), prisma.menuItem.count()]);

  return { games, events, menuItems };
}

export default async function Statistics() {
  const stats = await getStats();
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      <div className="flex flex-col justify-between p-4 bg-white border rounded-lg shadow-md">
        <div>
          <h3 className="text-lg font-semibold">Total Games</h3>
          <p className="font-bold text-blue-500 text-7xl">{stats.games}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total number of games available</p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 p-4 bg-white border rounded-lg shadow-md">
        <div>
          <h3 className="text-lg font-semibold">Events</h3>
          <p className="font-bold text-blue-500 text-7xl">{stats.events}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total number of created events</p>
        </div>
      </div>

      <div className="flex flex-col justify-between p-4 bg-white border rounded-lg shadow-md">
        <div>
          <h3 className="text-lg font-semibold">Menu Items</h3>
          <p className="font-bold text-blue-500 text-7xl">{stats.menuItems}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total number of items on the menu</p>
        </div>
      </div>
    </div>
  );
}
