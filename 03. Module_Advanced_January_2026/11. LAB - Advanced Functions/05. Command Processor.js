function solution() {
    let output = "";
    
    return {
        append(usrInpString) {
        output += usrInpString;
        },

        removeStart(n) {
            output = output.substring(n);
        },

        removeEnd(n) {
            output = output.substring(0, (output.length-n));
        },

        print() {
            console.log(output);
        }
    };
}


// Sample Input 1
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

// -----------------------------
// Sample Input 2

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
