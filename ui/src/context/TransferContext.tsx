import { Item } from "app";
import { ReactNode, useContext, createContext } from "react";
import useTransferHook, { TransferItem } from "../hooks/useTransfer";

const INITIAL_ONE = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item("Conjured Mana Cake", 3, 6),
];

const INITIAL_TWO = [
  new Item("Sulfuras, Hand of Ragnaros", 20, 60),
  new Item("Backstage passes to a TAFKAL80ETC concert", 20, 12),
  new Item("Elixir of the Mongoose", 20, 12),
  new Item("Aged Brie", 20, 3),
];

export interface Transfer {
  listOne: TransferItem[];
  listTwo: TransferItem[];
  listOneSelected: TransferItem[];
  listTwoSelected: TransferItem[];
  handleSelectedOne: () => void;
  handleSelectedTwo: () => void;
  handleSelected: (item: TransferItem) => void;
}

const TransferContext = createContext<Transfer | undefined>(undefined);

export const useTransfer = () => {
  const inventory = useContext(TransferContext);
  if (!inventory) throw new Error("Inventory not provided");

  return inventory as Transfer;
};

const Provider = TransferContext.Provider;

type ListProps = {
  listOne: TransferItem[];
  listTwo: TransferItem[];
};

export interface TransferProviderProps {
  children: (args: ListProps) => ReactNode;
}

export const TransferProvider = ({ children }: TransferProviderProps) => {
  const transfer = useTransferHook([...INITIAL_ONE], [...INITIAL_TWO]);
  return (
    <Provider value={transfer}>
      {children({ listOne: transfer.listOne, listTwo: transfer.listTwo })}
    </Provider>
  );
};
