class Laptop {
  constructor(info, quality, isOn=false) {
    this.info = info;
    this.producer = info.producer;
    this.age = info.age;
    this.brand = info.brand;
    this.isOn = isOn;
    this.quality = quality;
  }

  turnOn() {
    this.isOn = true;
    this.quality -= 1;
  }

  turnOff() {
    this.isOn = false;
    this.quality -= 1;
  }

  showInfo() {
    return JSON.stringify(this.info);
  }

  get price() {
    let price = Number((800 - (Number(this.age) * 2) + (Number(this.quality) * 0.5)));
    return price;
  }
}

//------------------------------------
let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
//------------------------------------
let info = {producer: "Lenovo", age: 1, brand: "Legion"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)
//------------------------------------
