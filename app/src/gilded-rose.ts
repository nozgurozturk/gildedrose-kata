import { Item } from "./item";

export class GildedRose {
  items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public dropItem(item: Item): void {
    this.items.splice(this.items.indexOf(item), 1);
  }

  public updateQuality() {
    for (const item of this.items) {
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        continue;
      }
      item.sellIn -= 1;

      switch (item.name) {
        case "Aged Brie":
          this.increaseQuality(item);
          if (item.sellIn < 0) {
            this.increaseQuality(item);
          }
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.increaseQuality(item);
          if (item.sellIn < 11) {
            this.increaseQuality(item);
          }
          if (item.sellIn < 6) {
            this.increaseQuality(item);
          }
          if (item.sellIn < 0) {
            item.quality = 0;
          }
          break;
        case "Conjured Mana Cake":
          this.decreaseQuality(item);
          this.decreaseQuality(item);
          if (item.sellIn < 0) {
            this.decreaseQuality(item);
            this.decreaseQuality(item);
          }
          break;
        default:
          this.decreaseQuality(item);
          if (item.sellIn < 0) {
            this.decreaseQuality(item);
          }
          break;
      }
    }

    return this.items;
  }

  private decreaseQuality(item: Item): void {
    if (item.quality > 0) {
      item.quality -= 1;
    }
  }

  private increaseQuality(item: Item): void {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }
}
