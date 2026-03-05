function listProcessor(usrInpCommandsArr) {
    let usrInpCommands = usrInpCommandsArr;
    let currentObject = {
        innerCollection: [],
        add: function(usrInpString) {
            this.innerCollection.push(usrInpString)
        },
        remove: function(userInpString) {
            this.innerCollection = this.innerCollection.filter(x => x !== userInpString);
        },
        print: function() {
            console.log(this.innerCollection.join(","))
        }
    }
    for (let command of usrInpCommands) {
        if (command == "print") {
            currentObject.print();
        }
        else {
            let [commandType, commandValue] = command.split(" ");
            currentObject[commandType](commandValue);
        }
    }
}


// Sample input 1
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

// Sample Input 2
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
