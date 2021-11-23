import { useState } from "react";

export interface TransferItem {
  name: string;
  quality: number;
  sellIn?: number;
}

const not = (a: TransferItem[], b: TransferItem[]) => {
  return a.filter((value) => b.indexOf(value) === -1);
};

const intersection = (a: TransferItem[], b: TransferItem[]) => {
  return a.filter((value) => b.indexOf(value) !== -1);
};



const useTransfer = (one: TransferItem[], two: TransferItem[]) => {
  const [selected, setSelected] = useState<TransferItem[]>([]);
  const [listOne, setListOne] = useState<TransferItem[]>(one);
  const [listTwo, setListTwo] = useState<TransferItem[]>(two);

  const listOneSelected = intersection(selected, listOne);
  const listTwoSelected = intersection(selected, listTwo);

  const handleSelected = (value: TransferItem) => {
    const currentIndex = selected.indexOf(value);
    const newSelected = [...selected];

    if (currentIndex === -1) {
      newSelected.push(value);
    } else {
      newSelected.splice(currentIndex, 1);
    }
    setSelected(newSelected);
  };

  const handleSelectedOne = () => {
    setListTwo(listTwo.concat(listOneSelected));
    setListOne(not(listOne, listOneSelected));
    setSelected(not(selected, listOneSelected));
  };

  const handleSelectedTwo = () => {
    setListOne(listOne.concat(listTwoSelected));
    setListTwo(not(listTwo, listTwoSelected));
    setSelected(not(selected, listTwoSelected));
  };

  return {
    handleSelected,
    handleSelectedOne,
    handleSelectedTwo,
    listTwo,
    listOne,
    listOneSelected,
    listTwoSelected,
  };
};

export default useTransfer;
