// Version 1
// ---------
function processOddPositions(arrInp){ 
    let arrOrig = arrInp; 

    console.log(arrOrig)
    for (let index=arrOrig.length-1; index>=0; index--) { 
        let currentElement = arrOrig[index]; 
        if (index%2==1) {
            console.log(currentElement*2)
        }
    }

};
// ==========================================================
// Version 2
// ---------
// function processOddPositions(arrInp) {
//     let arrOrigRev = arrInp.reverse();
//     for (let index in arrOrigRev) {
//         let currentElement = arrOrigRev[index];
//         if (index%2==0) {
//             let currentElementDouble = arrOrigRev[index] * 2;
//             console.log(currentElementDouble)
//         }
//     }
// }
// ===========================================================

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);
