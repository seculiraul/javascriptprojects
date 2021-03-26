'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starter, mainIndex) {


    return [this.starterMenu[starter], this.mainMenu[mainIndex]];
  },

  openingHours: {

    [days[2]]: {

      open: 15,
      close: 21,

    },
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};



/*let [first , , second] = restaurant.categories;
console.log(first,second);


[first , second] =[second , first];
console.log(first,second);

const [starter , main] = restaurant.order(2,2);
console.log(starter,main);*/


/*const { openingHours } = restaurant;
console.log(openingHours);

const {name: restaurantName, openingHours: hours , categories: tags} = restaurant
console.log(restaurantName,hours,tags);


const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu , starters);


let a = 111;
let b = 999;
const obj =  {a: 23, b:7 , c: 14 };

const { fri: {open: o , close: c}, } =  openingHours;
console.log(o,c);*/

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menuAll = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuAll);

const [...x] = [...restaurant.starterMenu];
console.log(x);


console.log(restaurant?.openingHours?.mon?.open);




/*for(const day of days) {

  console.log(day);
  const o =restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On day ${day}, we open at ${o}`);
}*/



//console.log(restaurant.oassfsn?.(2) ?? "method not exists");

/*
const obiectul = {


nume: "boss",

varsta: 5,

ocupatie: "nimic"


};


for(const i of Object.values(obiectul)) {


  console.log(i);
}*/


const str = "Buna, eu sunt Raul";
const str1 = "Buna eu sunt Raul";
const str2 = "door salut door xzy"

console.log(str.lastIndexOf("a"));
console.log(str.trim());
console.log(str.replace(",", "."))
console.log(str2.replaceAll("door", "gate"));
console.log(str2.includes("salut"));
console.log(str2.startsWith("door"));
console.log(str1.split(" "));

const [firstName, lastName] = "John Cena".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capName = function (name) {

  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {

    namesUpper.push(n[0].toUpperCase() + n.slice(1));

  }


  console.log(namesUpper.join(" "));
}

capName("jessica ann smitch davis");
capName("Raul haur balaur");



console.log(str.padStart(25, "+"));
console.log(str1.padEnd(35, "+"));


function maskCredit(number) {


  const str = number + "";
  const len = str.slice(-4);
  console.log(len.padStart(str.length, "*"));

}


maskCredit(44455532345232);
maskCredit(12351452);
maskCredit(11111122223123123);




const xxy = "Raul salut raul";
console.log(xxy.slice(7));