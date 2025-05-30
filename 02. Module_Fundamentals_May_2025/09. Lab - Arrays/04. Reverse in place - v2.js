function solve(arr) {

	for (let i  =  0; i < arr.length/2; i++) {
    let curCharPos = i;
    let currCharValue = arr[i];
    let oppositeChatLoc = (arr.length - 1) - i;
    let oppositeCharValue = arr[oppositeChatLoc];
    arr[i] = oppositeCharValue;
    arr[oppositeChatLoc] = currCharValue;
  } 
  console.log(arr.join(" "));
}

solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);
solve(['33', '123', '0', 'dd']);
