function circleArea(userInp) {
    if (typeof(userInp) != 'number') {
        let userInpTypeOf = typeof(userInp);
        console.log(`We can not calculate the circle area, because we receive a ${userInpTypeOf}.`)
    }

    else {
        let circleRadius = userInp;
        let areaCircle = Math.pow(circleRadius, 2) * Math.PI;
        console.log(areaCircle.toFixed(2));
    }
}

circleArea(5);
circleArea('name');
