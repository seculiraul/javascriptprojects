'use strict';


/*const books = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {


    const booking = {


        flightNum,
        numPassengers,
        price,

    };

    console.log(booking);

    books.push(booking);
}



createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 5);*/

/*
const oneWord = str => {



    return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {


    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');

};


console.log(upperFirstWord("salut ce faci?"));


const transformer = function (str, fn) {


    console.log(fn(str));
}

transformer("Java is the best", upperFirstWord);


const hihg5 = function () {

    console.log("Salut");
}

document.body.addEventListener("click", hihg5);

*/


const greet = function (greeting) {


    return function (name) {

        console.log(`${greeting} ${name}`);

    };
};

//const greeter = greet("Salut");
//greeter("Raul");
//greeter("Andrei");




const greet2 = greeting2 => name2 => console.log(`${greeting2} ${name2}`);

greet2("Hello")("Raul");
