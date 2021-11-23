import Inventory from "../../components/Inventory";
import { GuildInventoryItem, useGuildInventory } from "./useGuildInventory";
import { InventoryProvider } from "../../context/InventoryContext";
import { FC } from "react";
import { useTransfer } from "../../context/TransferContext";
import { InventoryItem } from "../../components/Item/Item";
import DayController from "../../components/Controller/DayController";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface GuildInventoryProps {
  items: InventoryItem[];
}

const GuildInventory: FC<GuildInventoryProps> = ({ items }) => {
  const inventory = useGuildInventory(items as GuildInventoryItem[]);

  const { handleSelected, listOneSelected } = useTransfer();

  return (
    <InventoryProvider inventory={inventory}>
      <Container>
        <Inventory
          selectedItems={listOneSelected}
          handleSelected={handleSelected}
          items={inventory.get()}
          name="Guild"
        >
          <DayController />
        </Inventory>
      </Container>
    </InventoryProvider>
  );
};

export { GuildInventory };
