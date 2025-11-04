
// Setup
const assemblyLine = createAssemblyLine();

const myCar = {
make: 'Toyota',
model: 'Avensis'
}


myCar.hasClima = function(customObject) {
    this.temp = 21;
    this.tempSettings = 21;
    this.adjustTemp = function() {
        if (this.temp < this.tempSettings) {
            this.temp += 1;
        }
        else if (this.temp > this.tempSettings) {
            this.temp -= 1;
        }
        else if (this.temp == this.tempSettings) {
        }
    }
}


myCar.hasAudio = function(customObject) {
    this.currentTrack = {name: null, artist: null};
    this.nowPlaying = function() {
        if (this.currentTrack.name != null && this.currentTrack.artist != null) {
            console.log(`Now playing '${this.currentTrack.name}' by '${this.currentTrack.artist}'`);
        }
    }
}


myCar.hasParktronic = function(customObject) {
    this.checkDistance = function(distance) {
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
