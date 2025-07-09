// Getting only 20/100 points in Judge - to check why.

function catalogue(userInpArr) {
  class Catalogue {
    constructor(itemsArray) {
      this.catalogue = {};

      for (let item of itemsArray) {
        let [itemName, itemPrice] = item.split(" : ");
        let section = itemName[0].toUpperCase();

        if (!this.catalogue[section]) {
          this.catalogue[section] = {};
        }

        this.catalogue[section][itemName] = Number(itemPrice);
      }
    }

    print() {
      let sortedSections = Object.keys(this.catalogue).sort();

      for (let section of sortedSections) {
        console.log(section);

        let items = this.catalogue[section];
        let sortedItems = Object.keys(items).sort();

        for (let name of sortedItems) {
          console.log(`  ${name}: ${items[name]}`);
        }
      }
    }
  }

  let myCatalogue = new Catalogue(userInpArr);
  myCatalogue.print();
}


catalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
]
)

catalogue(
    [
        'Omlet : 5.4',
        'Shirt : 15',
        'Cake : 59'
    ]
)

