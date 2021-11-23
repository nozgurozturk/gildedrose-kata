import { GildedRose } from "app";
import { useCallback, useMemo, useState } from "react";
import { InventoryItem } from "../../components/Item/Item";
import { Inventory } from "../../context/InventoryContext";

export interface GuildInventoryItem extends InventoryItem {
  sellIn: number;
}

// TODO: Fix guild inventory without forceUpdate
function useForceUpdate() {
  const [, updateState] = useState({});
  return useCallback(() => updateState({}), []);
}

const useGuildInventory = (items: GuildInventoryItem[]) => {
  const gildedRose = useMemo(() => new GildedRose(items), [items]);
  const forceUpdate = useForceUpdate();

  return useMemo<Inventory<GuildInventoryItem>>(() => {
    return {
      get: () => {
        return [...gildedRose.items];
      },
      add: (item: GuildInventoryItem) => {
        gildedRose.addItem(item);
        forceUpdate();
      },
      delete: (item: GuildInventoryItem) => {
        gildedRose.dropItem(item);
        forceUpdate();
      },
      update: (dayPass: number) => {
        let dayLeft = dayPass;

        while (dayLeft > 0) {
          gildedRose.items = gildedRose.updateQuality();
          dayLeft--;
        }
        forceUpdate();
      },
    };
  }, [forceUpdate, gildedRose]);
};

export { useGuildInventory };
