function listOfNames(arrInp) {
    let arrUsrInp = arrInp;
    let sortedArr = arrUsrInp.sort((a,b) => a.localeCompare(b));
    sortedArr.map((name, index) => console.log(`${index+1}.${name}`));
}

listOfNames(["John","Bob","Christina","Ema"]);
