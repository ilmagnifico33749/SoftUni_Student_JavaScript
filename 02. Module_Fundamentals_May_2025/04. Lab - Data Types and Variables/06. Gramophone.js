function gramphone(bandName, albumName, songName) {
    let plateFullRotationSecs = 2.5;
    let songDurationFormula = (albumName.length * bandName.length) * (songName.length/2);
    let rotations = Math.ceil(songDurationFormula / plateFullRotationSecs)
    let output = `The plate was rotated ${rotations} times.`
    
    console.log(output);
}

gramphone('Black Sabbath', 'Paranoid', 'War Pigs');
gramphone('Rammstein', 'Sehnsucht', 'Engel');
