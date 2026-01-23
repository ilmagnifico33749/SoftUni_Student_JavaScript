function arrayRotation(arrInp, turnTimes) {
    let arrUsrInp = arrInp;

    for (turn=0; turn<turnTimes; turn++) {
        let currentElement = arrUsrInp.pop();
        arrUsrInp.unshift(currentElement);
    }

    console.log(arrUsrInp.join(" "));
}

arrayRotation(['1','2','3','4'], 2);
arrayRotation(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
