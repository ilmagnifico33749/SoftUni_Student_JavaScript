function countStringOcurrences(strInp, strToCount) {
    let stringUserInp = strInp.split(" ");
    let count = 0;
    for (let word of stringUserInp) {
        if (word === strToCount) {
            count++;
        }  
    }
    console.log(count);
}

countStringOcurrences('This is a word and it also is a sentence', 'is');
countStringOcurrences('softuni is great place for learning new programming languages', 'softuni');
