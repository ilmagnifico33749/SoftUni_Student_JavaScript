function calculator(lenght, width, height, percentage) {
    let aquariumVolume = lenght * width * height;
    let volumeInLitres = aquariumVolume * 0.001
    let occupiedSpace = percentage / 100;
    let requiredWater = volumeInLitres * (1 - occupiedSpace);
    
    console.log(requiredWater)
}

calculator(85,75,47,17);
calculator(105,77,89,18.5);
