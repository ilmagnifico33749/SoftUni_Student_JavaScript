function calorieObject(arrInp) {
    let initArr = arrInp;
    let result = {};
    for (let index=0; index<arrInp.length; index+=2) {
        if (index%2 == 0) {
            let foodName = arrInp[index];
            let foodCalories = Number(arrInp[index+1]);
            result[foodName] = foodCalories
        }
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
