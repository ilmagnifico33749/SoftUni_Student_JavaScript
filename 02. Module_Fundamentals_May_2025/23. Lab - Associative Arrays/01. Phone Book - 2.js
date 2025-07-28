function phoneBookFunction(arrInp) {
    let phoneBook = new Map();
  
    for (let info of arrInp) {
        let [name, phoneNum] = info.split(" ");
            phoneBook.set(name, phoneNum);
    }

    for (let [key, value] of phoneBook) {
        console.log(`${key} -> ${value}`);
    }
}


phoneBookFunction(
    [
        'Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344'
    ]
);

phoneBookFunction(
    [
        'George 0552554',
        'Peter 087587',
        'George 0453112',
        'Bill 0845344'
    ]
);
