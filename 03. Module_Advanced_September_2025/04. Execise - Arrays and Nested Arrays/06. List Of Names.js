function listOfNames(arrInp) {
    let sortedArray = arrInp.sort((a, b) => a.localeCompare(b));
    sortedArray.map((element, index) => console.log(`${index+1}. ${element}`) );
}

listOfNames(["John","Bob","Christina","Ema"]);
