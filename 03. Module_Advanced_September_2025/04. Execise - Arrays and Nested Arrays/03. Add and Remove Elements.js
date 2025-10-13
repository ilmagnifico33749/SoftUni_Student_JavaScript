function addAndRemoveElementArr(arrInp) {
    let finalArr = [];
    
    for (let i=1; i<=arrInp.length; i++) {
        let currentCommand = arrInp[i];
        if (currentCommand === "add") {
            finalArr.push(i);
        }
        else if (currentCommand === "remove") {
            finalArr.shift();
        }
    }
    
    if (finalArr.length === 0) {
        console.log("Empty");
    }
    else if (finalArr.length > 0) {
        finalArr.map(x=> console.log(x))
    }

    console.log(finalArr)

}

addAndRemoveElementArr(['add', 'add', 'add', 'add']);
// addAndRemoveElementArr(['add', 'add', 'remove', 'add', 'add']);
// addAndRemoveElementArr(['remove', 'remove', 'remove']);
