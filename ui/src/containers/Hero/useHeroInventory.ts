import { useEffect, useMemo, useState } from "react";
import { InventoryItem } from "../../components/Item/Item";
import { Inventory } from "../../context/InventoryContext";

const useHeroInventory = (items: InventoryItem[]) => {
  const [heroInventory, setHeroInventory] = useState<InventoryItem[]>(items);

  useEffect(() => {
    setHeroInventory(items);
  }, [items]);

  return useMemo<Inventory<InventoryItem>>(
    () => ({
      get: () => [...heroInventory],
      add: (item: InventoryItem) => {
        setHeroInventory((prevItems) => [...prevItems, item]);
      },
      delete: (item: InventoryItem) => {
        setHeroInventory((prevItems) => {
          const newItems = prevItems.splice(prevItems.indexOf(item), 1);
          return [...newItems];
        });
      },
    }),
    [heroInventory]
  );
};

export { useHeroInventory };
