function perfectNumberCheck(num) {
    let sumDivisors = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sumDivisors += i;
        }
    }
    if (sumDivisors === num) {
        console.log("We have a perfect number!")
    }
    else {
        console.log("It's not so perfect.")
    }
}

perfectNumberCheck(6);
perfectNumberCheck(28);
perfectNumberCheck(1236498);
