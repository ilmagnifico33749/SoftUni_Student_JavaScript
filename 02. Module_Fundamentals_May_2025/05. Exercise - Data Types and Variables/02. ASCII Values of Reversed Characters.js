function solve(param1, param2, param3) {
    let resultInput = param3+param2+param1
    let resultConverted = `${((param3.toString()).charCodeAt(0))} `+`${((param2.toString()).charCodeAt(0))} `+`${((param1.toString()).charCodeAt(0))}`;
    
    console.log(resultInput);
    console.log(resultConverted);
}

solve('a', 'b', 'c');
solve('%','2','o');
solve('1','5','p');
