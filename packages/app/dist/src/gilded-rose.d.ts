import { Item } from "./item";
export declare class GildedRose {
    items: Item[];
    constructor(items: Item[]);
    addItem(item: Item): void;
    dropItem(item: Item): void;
    updateQuality(): Item[];
    private decreaseQuality;
    private increaseQuality;
}
