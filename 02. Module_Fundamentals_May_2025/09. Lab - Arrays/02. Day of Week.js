function solve(num) {
	let daysWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let result;
  if (num >= 1 && num <=7) {
  	result = daysWeek[num-1];
  }
  else {
    result = `Invalid day!`;
  }
  
  console.log(result);
}

solve(3);
solve(6);
solve(11);
