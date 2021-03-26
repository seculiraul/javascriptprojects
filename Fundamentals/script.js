'use strict';


/*const jonas = {

    firstName: "Jonas",
    lastName: "Schred",
    ocupation: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    birthYear: 1991,

    calcAge: function () {

        this.age = 2021 - this.birthYear;
        return this.age;

    },

    getSummary: function () {


        return this.firstName + " is a " + this.ocupation + " and is " + this.calcAge() + " years old";
    }


};


console.log(jonas.age);*/



/*const mark = {

    name: "Mark",
    mass: 78,
    heigth: 1.69,

    bmi: function () {

        return this.mass / this.heigth ** 2
    }


};


const john = {

    name: "John",
    mass: 92,
    heigth: 1.95,

    bmi: function () {

        return this.mass / this.heigth ** 2
    }


};


mark.bmi() > john.bmi() ? console.log("Mark has the bigger bmi " + mark.bmi()) :
    console.log("John has the bigger bmi " + john.bmi()); */


/*const arr = ["Mark", "Cristi", 431, "Boss", true];

const types = [];

const x = 1;

for (let i = 0; i < arr.length; i++) {


    console.log(arr[i]);
    types.push(typeof arr[i]);
}


console.log(`this is ${x} i love this feature`);
*/




const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {

    tips[i] = bills[i] * 0.15;
    total.push(tips[i] + bills[i]);


}

const calcAvg = arr => {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

    }

    return sum / arr.length;
}

console.log(calcAvg(bills));

