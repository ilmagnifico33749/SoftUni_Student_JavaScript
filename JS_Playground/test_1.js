let firstName = 'Ivaylo';
let middleName = 'Vladimirov';
let surName = 'Kenov';
let age = 36

if (age > 18) {
    console.log(firstName + ' can drink beer!');
}
else if (age => 16) {
    console.log(firstName + ' wants cognac!');
}
else {
    console.log('No drinking allowed!')
}

function checkAge(firstName, age){
    if (age > 18) {
    console.log(firstName + ' can drink beer!');
    }
    else if (age >= 16) {
        console.log(firstName + ' wants cognac!');
    }
    else if (age > 30) {
        console.log(firstName + ' can drink cognac!');
        console.log(firstName + ' can drink whiskey!');
    }
    else {
        console.log(firstName + ' - No drinking allowed!');
    }

}

checkAge('John', 15)
checkAge('Michael', 18)
checkAge('Oliver', 29)
checkAge('Kennet', 30)
checkAge('James', 36)