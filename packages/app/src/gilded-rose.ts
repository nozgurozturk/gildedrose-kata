export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        continue;
      }

      switch (item.name) {
        case "Aged Brie":
          this.increaseQuality(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.increaseQuality(item);
          if (item.sellIn < 11) {
            this.increaseQuality(item);
          }
          if (item.sellIn < 6) {
            this.increaseQuality(item);
          }
          break;
        default:
          this.decreaseQuality(item);
          break;
      }

      item.sellIn -= 1;

      if (item.sellIn < 0) {
        switch (item.name) {
          case "Aged Brie":
            this.increaseQuality(item);
            break;
          case "Backstage passes to a TAFKAL80ETC concert":
            item.quality = 0;
            break;
          default:
            this.decreaseQuality(item);
            break;
        }
      }
    }

    return this.items;
  }

  decreaseQuality(item: Item): void {
    if (item.quality > 0) {
      item.quality -= 1;
    }
  }

  increaseQuality(item: Item): void {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }
}
