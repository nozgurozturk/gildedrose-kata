"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gilded_rose_1 = require("../src/gilded-rose");
const item_1 = require("../src/item");
const items = [
    new item_1.Item("+5 Dexterity Vest", 10, 20),
    new item_1.Item("Aged Brie", 2, 0),
    new item_1.Item("Elixir of the Mongoose", 5, 7),
    new item_1.Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new item_1.Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new item_1.Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new item_1.Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new item_1.Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    new item_1.Item("Conjured Mana Cake", 3, 6)
];
const gildedRose = new gilded_rose_1.GildedRose(items);
var days = 2;
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
    });
    console.log();
    gildedRose.updateQuality();
}
//# sourceMappingURL=golden-master-text-test.js.map