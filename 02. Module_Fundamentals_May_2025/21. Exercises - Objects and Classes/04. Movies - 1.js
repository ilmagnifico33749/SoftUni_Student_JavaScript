// Getting 100/100 however with 1 error because Judge apparently seems to want it without class and constructor but with an object being created each time and values being added whenever their is valid data.  
function movies(arrInp) {
  let listAllMovies = [];

  class Movie {
    constructor(name, director, date) {
      this.name = name,
      this.director = director,
      this.date = date
    }
  }

  for (let commandDetails of arrInp) {
    let currentCommandDetails = commandDetails.split(" ");
    if (currentCommandDetails[0] == "addMovie") {
      let currentMovieName = currentCommandDetails
        .splice(1)
        .join(" ");
      listAllMovies.push(new Movie(currentMovieName, undefined, undefined));
    }

    else if (currentCommandDetails.includes("directedBy")) {
      let directedByIndex = currentCommandDetails.indexOf("directedBy");
      let currentMovieName = currentCommandDetails.slice(0, directedByIndex).join(" ");
      let currentMovieDirector = currentCommandDetails.slice(directedByIndex+1).join(" ");

      for (let moviesObject of listAllMovies) {
        if (moviesObject.name == currentMovieName) {
          moviesObject.director = currentMovieDirector;
          break;
        }
      }
    }

    else if (currentCommandDetails.includes("onDate")) {
      let onDateIndex = currentCommandDetails.indexOf("onDate");
      let currentMovieName = currentCommandDetails.slice(0, onDateIndex).join(" ");
      let currentMovieDate = currentCommandDetails.slice(onDateIndex+1).join("");

      for (let moviesObect of listAllMovies) {
        if (moviesObect.name == currentMovieName) {
          moviesObect.date = currentMovieDate;
          break;
        }
      }
    }
  }
  
  for (let movieObject of listAllMovies) {
    let movieObjectValues = Object.values(movieObject);
    let validMovie = true;
    for (let value of movieObjectValues) {
      if (value == undefined) {
        validMovie = false;
        break;
      }
    }
    if (validMovie == true) {
      console.log(JSON.stringify(movieObject));
    }
  }
}

movies(
  [
  'addMovie Fast and Furious', 
  'addMovie Godfather', 
  'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 
  'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 
  'Fast and Furious directedBy Rob Cohen'
  ]
  );
movies(
  [
  'addMovie The Avengers',
  'addMovie Superman',
  'The Avengers directedBy Anthony Russo',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo'
  ]
);
