function solve(age) {
    let personType;

    if (age >= 0 && age <=2) {
        personType = "baby";
    }
    else if (age >=3 && age <= 13) {
        personType = "child";
    }
    else if (age >= 14 && age <= 19) {
        personType = "teenager";
    }
    else if (age >= 20 && age <= 65) {
        personType = "adult";
    }
    else if (age >=  66) {
        personType = "elder";
    }
    else {
        personType = "out of bounds";
    }
    console.log(personType)
}

solve(20);
solve(1);
solve(100);
solve(-1);
