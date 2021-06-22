// jshint esversion:10

// Iteration 1: All directors? - Get the array of all directors.

let movie = require('./data');

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  if (!arr) throw new Error('You need to input an array!');
  let directors = arr.map((item) => item.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let numberOfDrama = arr.filter(
    (movies) =>
      movies.director === 'Steven Spielberg' &&
      movies.genre.indexOf('Drama') !== -1
  );

  if (!numberOfDrama) return 0;
  return numberOfDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length < 1) return 0;

  let sumOfScore = arr.reduce((sum, movies) => {
    if (!movies.score) return sum + 0;
    return sum + movies.score;
  }, 0);

  return Number((sumOfScore / arr.length).toPrecision(3));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (arr.length < 1) return 0;
  return scoresAverage(
    arr.filter((movie) => movie.genre.indexOf('Drama') !== -1)
  );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  return [
    ...arr.sort((firstMovie, secondMovie) => {
      if (firstMovie.year === secondMovie.year) {
        return firstMovie.title.localeCompare(secondMovie.title);
      }
      return firstMovie.year - secondMovie.year;
    })
  ];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  return [...arr]
    .sort((firstMovie, secondMovie) =>
      firstMovie.title.localeCompare(secondMovie.title)
    )
    .map((movie) => movie.title)
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
