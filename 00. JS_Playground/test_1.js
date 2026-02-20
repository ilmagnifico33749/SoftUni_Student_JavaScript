array1 = [9, 10, 12];

let found = array1.find(isFound);

function isFound(element) {
    return element > 10;
}

console.log(found);
