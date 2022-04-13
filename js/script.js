"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt(' how many films have you seen', '');
    while (numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms == '') {
        numberOfFilms = +prompt(' how many films have you seen', '');

    }

}
start();

let personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMuvieDB.count > 0 && personalMuvieDB.count < 10) {
        alert('not many');
    } else if (10 <= personalMuvieDB.count && personalMuvieDB.count < 30) {
        alert('good job');
    } else if (personalMuvieDB.count >= 30) {
        alert('kinoman');
    } else {
        alert('arror');
    }
}
detectPersonalLevel();


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt(' last movie have you seen', ''),
            b = +prompt(' rate last movie have you seen', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMuvieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;

        }
    }

}
rememberMyFilms();

function writeYourGenres(){
    for( let i=1; i<4; i++ ){
      let genre =  prompt(`your favorite genre #${i}`, '');
      personalMuvieDB.genres[i-1] = genre;
    }
}
writeYourGenres();

function showMyDB() {
    if (personalMuvieDB.privat == false) {
        console.log(personalMuvieDB);

    } else {
        console.log("error");
    }
}
showMyDB();





    // let i = 0;
    // while (i < 2) {
    //     const a = prompt(' last movie have you seen', ''),
    //         b = +prompt(' rate last movie have you seen', '');
    //     i++;
    //     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    //         personalMuvieDB.movies[a] = b;
    //         console.log('done');
    //     } else {
    //         console.log('error');
    //         i--;

    //     }
    // }