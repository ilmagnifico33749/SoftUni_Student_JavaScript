function songs(arrInp) {
  let songsList = [];

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    };
  };

  let songsNum = arrInp.shift();
  let playlistToPlay = arrInp.pop();
  for (let currentSong of arrInp) {
    let currentSongDetails = currentSong.split("_");
    let currentSongPlaylist = currentSongDetails[0];
    let currentSongName = currentSongDetails[1];
    let currentSongTime = currentSongDetails[2];
    let song = new Song(currentSongPlaylist, currentSongName, currentSongTime)
    songsList.push(song);

  }

  for (let currentSong of songsList) {
    if (playlistToPlay == "all" || playlistToPlay == currentSong.typeList) {
      console.log(currentSong.name);
    }
  }
}

songs(
  [3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite']
);
songs(
  [4,
  'favourite_DownTown_3:14',
  'listenLater_Andalouse_3:24',
  'favourite_In To The Night_3:58',
  'favourite_Live It Up_3:48',
  'listenLater']
);
songs(
  [2,
  'like_Replay_3:15',
  'ban_Photoshop_3:48',
  'all']
);
