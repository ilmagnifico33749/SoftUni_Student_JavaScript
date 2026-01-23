function addAndRemoveElementArr(arrInp) {
    let arrUsrInp = arrInp;
    let num = 1;
    let outputArr = [];

    for (let command of arrUsrInp) {
        if (command === "add") {
            outputArr.push(num);
        }
        else if (command === "remove") {
            outputArr.pop();
        }
        num++;
    }

    if (outputArr.length > 0) {
    outputArr.map(el => console.log(el));
    }
    else {
        console.log(`Empty`);
    }
}


addAndRemoveElementArr(['add', 'add', 'add', 'add']);
addAndRemoveElementArr(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElementArr(['remove', 'remove', 'remove']);
