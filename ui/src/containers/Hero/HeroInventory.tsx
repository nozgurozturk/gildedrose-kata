import { FC } from "react";
import Inventory from "../../components/Inventory";
import { useHeroInventory } from "./useHeroInventory";
import { InventoryProvider } from "../../context/InventoryContext";
import { useTransfer } from "../../context/TransferContext";
import { InventoryItem } from "../../components/Item/Item";

interface HeroInventoryProps {
  items: InventoryItem[];
}

const HeroInventory: FC<HeroInventoryProps> = ({ items }) => {
  const inventory = useHeroInventory(items);
  const { handleSelected, listTwoSelected } = useTransfer();

  return (
    <InventoryProvider inventory={inventory}>
      <Inventory
        selectedItems={listTwoSelected}
        handleSelected={handleSelected}
        items={inventory.get()}
        name="Hero"
      >

      </Inventory>
    </InventoryProvider>
  );
};

export { HeroInventory };
