function squareOfStars(num) {
 let output = "";
    for (let index=0; index<num; index++) {
        output+= `${"* ".repeat(num)}\n`
    }

    console.log(output);
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
