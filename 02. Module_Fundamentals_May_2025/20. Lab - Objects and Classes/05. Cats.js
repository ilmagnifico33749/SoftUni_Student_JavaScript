function cats(array){
  let cats = [];

  class Cat {
    constructor(catName, catAge) {
      this.name = catName;
      this.age = catAge;
    }
    meow() { 
        console.log(`${this.name}, age ${this.age} says Meow`) 
        }
  }

  for (let catDetails of array) {
    let currentCat = catDetails.split(" ");
    let currentCatName = currentCat.shift();
    let currentCatAge = currentCat.pop();
    cats.push(new Cat(currentCatName, currentCatAge));    
  }

  for (let cat of cats) {
    cat.meow();
  }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
