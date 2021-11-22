import { Item, GildedRose } from "../src/gilded-rose";

type ITCase = {
  name: string;
  sellIn: number;
  quality: number;
  expectedSellIn: number;
  expectedQuality: number;
};
/*
${"Conjured Mana Cake"}                        | ${10}  | ${6}    | ${9}           | ${4}
    ${"Conjured Mana Cake"}                        | ${10}  | ${1}    | ${9}           | ${0}
*/
describe("Gilded Rose", () => {
  test.each`
    name                                           | sellIn | quality | expectedSellIn | expectedQuality
    ${"+5 Dexterity Vest"}                         | ${10}  | ${20}   | ${9}           | ${19}
    ${"+5 Dexterity Vest"}                         | ${-1}  | ${10}   | ${-2}          | ${8}
    ${"+5 Dexterity Vest"}                         | ${10}  | ${0}    | ${9}           | ${0}
    ${"Aged Brie"}                                 | ${2}   | ${0}    | ${1}           | ${1}
    ${"Aged Brie"}                                 | ${20}  | ${50}   | ${19}          | ${50}
    ${"Elixir of the Mongoose"}                    | ${5}   | ${7}    | ${4}           | ${6}
    ${"Sulfuras, Hand of Ragnaros"}                | ${10}  | ${20}   | ${10}          | ${20}
    ${"Sulfuras, Hand of Ragnaros"}                | ${0}   | ${80}   | ${0}           | ${80}
    ${"Backstage passes to a TAFKAL80ETC concert"} | ${15}  | ${20}   | ${14}          | ${21}
    ${"Backstage passes to a TAFKAL80ETC concert"} | ${10}  | ${20}   | ${9}           | ${22}
    ${"Backstage passes to a TAFKAL80ETC concert"} | ${10}  | ${49}   | ${9}           | ${50}
    ${"Backstage passes to a TAFKAL80ETC concert"} | ${5}   | ${20}   | ${4}           | ${23}
    ${"Backstage passes to a TAFKAL80ETC concert"} | ${5}   | ${49}   | ${4}           | ${50}
    ${"Backstage passes to a TAFKAL80ETC concert"} | ${0}   | ${49}   | ${-1}          | ${0}
  `(
    "$name is created with SellIn: $sellIn Quality: $quality,\nexpected  SellIn: $expectedSellIn, Quality: $expectedQuality after one day",
    ({ name, sellIn, quality, expectedSellIn, expectedQuality }: ITCase) => {
      const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
      gildedRose.updateQuality();
      const [item] = gildedRose.items;
      expect(item.sellIn).toBe(expectedSellIn);
      expect(item.quality).toBe(expectedQuality);
    }
  );
});
