function arrayRotation(arrInp, timesToRotate) {
    let arrayToRotate = arrInp;

    for (let rotationTimes = 1; rotationTimes<=timesToRotate; rotationTimes++) {
        let currentElement = arrayToRotate.pop();
        arrayToRotate.unshift(currentElement);
    }

    console.log(arrayToRotate.join(" "))
}

arrayRotation(['1','2','3','4'], 2);
arrayRotation(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
