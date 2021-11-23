import { FC } from "react";
import styled from "styled-components";

export interface InventoryItem {
  name: string;
  quality: number;
  sellIn?: number;
}

interface ItemProps extends InventoryItem {
  isSelected: boolean;
  onSelect: () => void;
}

interface ContainerProps extends ItemProps {
  isSelected: boolean;
}

const Container = styled.div<Partial<ContainerProps>>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid
    ${(props) => (props.sellIn && props.sellIn < 0 ? "salmon" : "wheat")};

  border-radius: 4px;

  margin: 4px;
  padding: 4px;

  width: 70px;
  height: 70px;

  background-color: ${(props) => (props.isSelected ? "skyblue" : "white")};
  transform: scale(${(props) => (props.isSelected ? 1.1 : 1)});
  box-shadow: ${(props) =>
    props.isSelected ? `0 4px 8px rgba(0, 0, 0, 0.6)` : "none"};

  transition: transform 0.2s ease-in-out;
`;

const Quality = styled.div`
  position: absolute;
  font-weight: bold;
  top: 4px;
  right: 4px;
  font-size: 0.8rem;
`;

const Name = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  max-width: 90%;
  // ellipsis with 2 lines
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const SellIn = styled.div`
  position: absolute;
  font-weight: bold;
  bottom: 4px;
  right: 4px;
  font-size: 0.8rem;
`;

const Item: FC<ItemProps> = ({
  name,
  sellIn,
  quality,
  onSelect,
  isSelected,
}) => {
  return (
    <Container isSelected={isSelected} sellIn={sellIn} onClick={onSelect}>
      <Quality>Q:{quality}</Quality>
      <Name>{name}</Name>
      <SellIn>S:{sellIn}</SellIn>
    </Container>
  );
};

export { Item };
