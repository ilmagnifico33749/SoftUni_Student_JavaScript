function phoneShop(arrInput) {
    
    let storageSplit = arrInput.slice(0,1);
    let storageArr = storageSplit[0].split(", ");

    let commandsArr = arrInput.slice(1, arrInput.length);
    
    for (let command of commandsArr) {
        let currentCommand = (command.split(" - "));
        let action = currentCommand[0];
        let phone = currentCommand[1];

        if (action === "Add") {
            if (!storageArr.includes(phone)) {
                storageArr.push(phone);
            }
        }

        else if (action === "Remove") {
            if (storageArr.includes(phone)) {
                let indexToRemove = storageArr.indexOf(phone);
                storageArr.splice(indexToRemove, 1);
            }
        }

        else if (action === "Bonus phone") {
            let oldPhone = phone.split(":")[0];
            let newPhone = phone.split(":")[1];
            if (storageArr.includes(oldPhone)) {
                let indexOldPhone = storageArr.indexOf(oldPhone);
                storageArr.splice(indexOldPhone+1, 0, newPhone);
            }
        }

        else if (action === "Last") {
            if (storageArr.includes(phone)) {
                let indexPhoneToShuffle = storageArr.indexOf(phone);
                storageArr.splice(indexPhoneToShuffle, 1);
                storageArr.push(phone);
            }
        }

        else if (action === "End") {
            console.log(storageArr.join(", "))
        }
    }
}

phoneShop(["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]);
phoneShop(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"]);
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"]);
