function binaryToDecimal(binaryString) {
  let decimal = 0;
  for (let i = 0; i < binaryString.length; i++) {
    let bit = binaryString[binaryString.length - 1 - i];
    decimal += parseInt(bit) * Math.pow(2, i);
    }
console.log(decimal);
}

binaryToDecimal("00001001");
binaryToDecimal("11110000");
