"use strict";

let numberOfFilms = +prompt(' how many films have you seen', '');

let personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt(' last movie have you seen', ''),
    b = +prompt(' rate last movie have you seen', ''),
    c = prompt(' last movie have you seen', ''),
    d = +prompt(' rate last movie have you seen', '');

personalMuvieDB.movies[a] = b;
personalMuvieDB.movies[c] = d;

console.log(personalMuvieDB);