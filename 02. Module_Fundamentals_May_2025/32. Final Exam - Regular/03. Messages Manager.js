function messagesManagerFunction(arrInp) {
    let capacityMessagesPerUser = arrInp.shift();
    let commands = arrInp;
    let records = new Map;

    class User {
        constructor(userName, messagesSent, messagesReceived) {
            this.userName = userName;
            this.messagesSent = Number(messagesSent);
            this.messagesReceived = Number(messagesReceived);
        }

        get totalMessages() {
            return this.messagesSent + this.messagesReceived;
        }
    }

    class Message {
        constructor(sender, receiver) {
            this.sender = sender;
            this.receiver = receiver;
        }
    }

    for (let command of commands) {
        let commandDetails = command.split("=");
        let action = commandDetails.shift();
        
        if (action === "Add") {
            let [userName, messagesSent, messagesReceived] = commandDetails;
            if (!records.has(userName)) {
                let newUser = new User(userName, messagesSent, messagesReceived);
                records.set(newUser.userName, newUser)
            }
        }

        else if (action === "Message") {
            let [sender, receiver] = commandDetails;
            let newMessage = new Message(sender, receiver);
            let userSender;
            let userReceiver;

            if (records.has(sender) && records.has(receiver)) {
                userSender = records.get(sender);
                userSender.messagesSent++;
                userReceiver = records.get(receiver);
                userReceiver.messagesReceived++;
            }

            if (userSender.totalMessages >= capacityMessagesPerUser) {
                console.log(`${userSender.userName} reached the capacity!`);
                records.delete(sender);
            }

            else if (userReceiver.totalMessages >= capacityMessagesPerUser) {
                console.log(`${userReceiver.userName} reached the capacity!`);
                records.delete(receiver);
            }
        }

        else if (action === "Empty") {
            let userToDelete = commandDetails.pop();
            if (userToDelete !== "All") {
                records.delete(userToDelete);
            }
            else if (userToDelete === "All") {
                records.clear();
            }
        }

        else if (action === "Statistics") {
            let statisticsMessage = `Users count: ${records.size}`
            for (let [user, userObject] of records) {
                let currentUser = userObject;
                statisticsMessage = statisticsMessage.concat(`\n${currentUser.userName} - ${currentUser.totalMessages}`);
            }
            console.log(statisticsMessage);
        }

    }
}

messagesManagerFunction(
    [
        "10",
        "Add=Berg=9=0",
        "Add=Kevin=0=0",
        "Message=Berg=Kevin",
        "Add=Mark=5=4",
        "Statistics"
    ]
);

messagesManagerFunction(
    [
        "20",
        "Add=Mark=3=9",
        "Add=Berry=5=5",
        "Add=Clark=4=0",
        "Empty=Berry",
        "Add=Blake=9=3",
        "Add=Michael=3=9",
        "Add=Amy=9=9",
        "Message=Blake=Amy",
        "Message=Michael=Amy",
        "Statistics"
    ]
);

messagesManagerFunction(
    [
        "12",
        "Add=Bonnie=3=5",
        "Add=Johny=4=4",
        "Empty=All",
        "Add=Bonnie=3=3",
        "Statistics"
    ]
);
