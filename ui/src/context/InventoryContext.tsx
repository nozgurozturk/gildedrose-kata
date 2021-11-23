import { ReactNode, useContext, createContext } from "react";

export interface Inventory<T = unknown> {
  get: () => T[];
  add: (item: T) => void;
  delete: (item: T) => void;
  update?: (day: number) => void;
}

const InventoryContext = createContext<Inventory<unknown> | undefined>(
  undefined
);

export const useInventory = <T extends any>() => {
  const inventory = useContext(InventoryContext);
  if (!inventory) throw new Error("Inventory not provided");

  return inventory as Inventory<T>;
};

const Provider = InventoryContext.Provider;

export interface InventoryProviderProps {
  children?: ReactNode;
  inventory: Inventory<any>;
}

export const InventoryProvider = ({
  children,
  inventory,
}: InventoryProviderProps) => <Provider value={inventory}>{children}</Provider>;
