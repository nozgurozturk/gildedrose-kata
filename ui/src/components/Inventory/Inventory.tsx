import { FC, useMemo } from "react";
import styled from "styled-components";
import Item from "../Item";

const WIDTH = 5;
const HEIGHT = 5;
const SIZE = 91;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  padding: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: darkslategray;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${WIDTH}, minmax(${SIZE}px, 1fr));
  grid-template-rows: repeat(${HEIGHT}, minmax(${SIZE}px, 1fr));
  border-radius: 4px;
  overflow: hidden;
`;

const Cell = styled.div`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);

  border-right: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  &:nth-child(${WIDTH}n) {
    border-right: none;
  }

  &:nth-last-child(-n + ${HEIGHT}) {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

interface InventoryItem {
  name: string;
  quality: number;
  sellIn?: number;
}

interface InventoryProps {
  items: InventoryItem[];
  name: "Hero" | "Guild";
  selectedItems: InventoryItem[];
  handleSelected: (item: InventoryItem) => void;
}

const Inventory: FC<InventoryProps> = ({
  items,
  name,
  selectedItems,
  handleSelected,
  children
}) => {
  const inventoryItems = useMemo(() => {
    const cells = new Array(WIDTH * HEIGHT).fill(null);
    items.forEach((item, index) => {
      cells[index] = item;
    });
    return cells;
  }, [items]);

  return (
    <Container>
      {children}
      <Title>{name} Inventory</Title>
      <Grid>
        {inventoryItems.map((item, index) => (
          <Cell key={index}>
            {item ? (
              <Item
                isSelected={selectedItems.includes(item)}
                onSelect={() => {
                  handleSelected(item);
                }}
                {...item}
              />
            ) : null}
          </Cell>
        ))}
      </Grid>
    </Container>
  );
};

export { Inventory };
