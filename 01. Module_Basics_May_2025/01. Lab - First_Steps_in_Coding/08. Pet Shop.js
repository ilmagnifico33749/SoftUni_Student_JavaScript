function expenses(dogFood, catFood) {
    let priceDogFood = 2.50;
    let priceCatFood = 4;
    let result = ((dogFood * priceDogFood) + (catFood * priceCatFood));
    let output = `${result} lv.` ;
    console.log(output);
}

expenses(5, 4);
expenses(13, 9);
