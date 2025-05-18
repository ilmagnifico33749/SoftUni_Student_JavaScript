function passCheck(userInput) {
    let userPass = "s3cr3t!P@ssw0rd"
    if (userInput === userPass) {
        console.log(`Welcome`);
    }
    else {
        console.log(`Wrong password!`)
    }
}

passCheck("qwerty");
passCheck("s3cr3t!P@ssw0rd");
