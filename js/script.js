"use strict";

let numberOfFilms = +prompt(' how many films have you seen', '');

let personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
if (personalMuvieDB.count > 0 && personalMuvieDB.count < 10) {
    alert('not many');
} else if (10 <= personalMuvieDB.count && personalMuvieDB.count < 30) {
    alert('good job');
} else if (personalMuvieDB.count >= 30) {
    alert('kinoman');
} else {
    alert('arror');
}
// for (let i = 0; i < 2; i++) {
//     const a = prompt(' last movie have you seen', ''),
//           b = +prompt(' rate last movie have you seen', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMuvieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;

//     }
// }


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
let i = 0;
do {
    const a = prompt(' last movie have you seen', ''),
          b = +prompt(' rate last movie have you seen', '');
    i++;
}
while(i<2);
if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMuvieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

console.log(personalMuvieDB);