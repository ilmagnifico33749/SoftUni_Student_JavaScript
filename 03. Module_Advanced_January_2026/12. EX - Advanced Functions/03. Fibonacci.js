function getFibonator() {
    let previousNumber = 0
    let currentNumber = 1;

    function nextFibonacciNumber() {
        let nextNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = nextNumber
        return previousNumber;
    }

    return nextFibonacciNumber;
}

// Sample Execution
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
