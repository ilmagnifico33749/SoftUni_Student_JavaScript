function squareOfStars(num=5) {
    for (let times=0; times<num; times++) {
        console.log("* ".repeat(num).trim());
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
