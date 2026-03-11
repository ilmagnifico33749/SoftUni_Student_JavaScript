function cars(usrInpCommandsArr) {
    const objects = {};

    const commandExe = {
        create(newObjectName, inherits, parentObjectName) {
            if (inherits) {
                objects[newObjectName] = Object.create(objects[parentObjectName]);
            }

            else {
                objects[newObjectName] = {};
            }
        },

        set(objectName, objectKey, objectKeyValue) {
            objects[objectName][objectKey] = objectKeyValue;
        },

        print(objectName) {
            const result = [];
            for (let key in objects[objectName]) {
                result.push(`${key}: ${objects[objectName][key]}`);
            }
            console.log(result.join(","));
        }
    };

    for (let command of usrInpCommandsArr) {
        const commandParts = command.split(" ");

        if (commandParts[0] === "create" && commandParts[2] === "inherit") {
            commandExe.create(commandParts[1], true, commandParts[3]);
        } 

        else if (commandParts[0] === "create") {
            commandExe.create(commandParts[1]);
        } 

        else if (commandParts[0] === "set") {
            commandExe.set(commandParts[1], commandParts[2], commandParts[3]);
        }

        else if (commandParts[0] === "print") {
            commandExe.print(commandParts[1]);
        }
    }
}


// Sample input 1:
cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);
