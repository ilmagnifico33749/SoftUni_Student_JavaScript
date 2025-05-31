function solve(arr) {
    let topIntegers = [];

    for (let i=0; i<arr.length; i++) {
        let currentElement = arr[i];
        let topInteger;

        if(i===(arr.length-1)) {
            topInteger = true;
            topIntegers.push(currentElement);
        }

        else {
            for (let j=i+1; j<arr.length; j++) {
                let nextElement = arr[j]
                if (currentElement > nextElement) {
                    topInteger = true;
                }
                else if (currentElement <= nextElement) {
                    topInteger = false;
                    break;
                }
                else if(j==(arr.length-1)) {
                    topInteger = true; break;
                }
            }

            if (topInteger) {
                topIntegers.push(currentElement);
            } 
        }
    }
    console.log(topIntegers.join(" "));
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);
