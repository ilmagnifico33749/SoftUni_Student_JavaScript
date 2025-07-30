function oddOcurrencesFunction(strInp) {
    let arrStrInp = strInp.split(" ");
    let oddOcurrencesArr = [];
    let wordsChecked = [];

    for (let index1=0; index1<arrStrInp.length; index1++) {
        let currentWord = arrStrInp[index1].toLowerCase();
        let count = 1;
        

        for (let index2 = index1+1; index2<arrStrInp.length; index2++) {
            let otherWord = arrStrInp[index2].toLowerCase();
            if (!wordsChecked.includes(currentWord)) {
                if (currentWord === otherWord) {
                    count++;  
                }
            }
        }

        if (count%2 === 1 && !wordsChecked.includes(currentWord)) {
            oddOcurrencesArr.push(currentWord)
        }

        wordsChecked.push(currentWord);


    }

    console.log(oddOcurrencesArr.join(" "));


}

oddOcurrencesFunction('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOcurrencesFunction('Cake IS SWEET is Soft CAKE sweet Food');
