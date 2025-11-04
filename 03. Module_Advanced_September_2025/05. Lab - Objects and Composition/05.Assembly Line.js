function createAssemblyLine() {
    return {
        hasClima(userObject) {
            userObject.temp = 21;
            userObject.tempSettings = 21;
            userObject.adjustTemp = function() {
                if (userObject.temp < userObject.tempSettings) {
                    userObject.temp += 1;
                }
                else if (userObject.temp > userObject.tempSettings) {
                    userObject.temp -= 1;
                }
                else if (userObject.temp == userObject.tempSettings) {
                }
            }
        },


        hasAudio(userObject) {
            userObject.currentTrack = {name: null, artist: null};
            userObject.nowPlaying = function() {
                if (userObject.currentTrack.name != null && userObject.currentTrack.artist != null) {
                    console.log(`Now playing '${userObject.currentTrack.name}' by '${userObject.currentTrack.artist}'`);
                }
            }
        },


        hasParktronic(userObject) {
            userObject.checkDistance = function(distance) {
                let outputMessage = "";
                if (distance < 0.1) {
                    outputMessage = "Beep! Beep! Beep!";
                }
                else if (distance >= 0.1 && distance < 0.25) {
                    outputMessage = "Beep! Beep!";
                }
                else if (distance >= 0.25 && distance < 0.5) {
                    outputMessage = "Beep!";
                }
                console.log(outputMessage);
            }
        }
    }
};


// Setup
const assemblyLine = createAssemblyLine()
const myCar = {
make: 'Toyota',
model: 'Avensis'
}


// Input 1
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

// Input 2
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

// Input 3
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

// Input 4
console.log(myCar);
