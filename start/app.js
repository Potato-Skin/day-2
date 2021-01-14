let whatIsAString = "bunch of characters";
const whatIsANumber = 1.123123123;

whatIsAString[1] = "a";
console.log("whatIsAString:", whatIsAString);
whatIsAString[5] = "Hello, I love you wont you tell me your name";
console.log("whatIsAString:", whatIsAString);
whatIsAString = "Brittney is from California";
console.log("whatIsAString:", whatIsAString);
// "bunch of characters"
// "banch of characters"
// error

// Immutable Data Types
// Strings, Numbers, Null, Undefined, NaN, Booleans
// null and undefined?

const iDeclare = null;
const iUndef = undefined;
let variable;

// Boolean
let positive = true;
let negative = false;

// FALSY VALUES
// false null undefined, NaN, "", 0, -0
// Truthy
// true, " ", any < 0 > number, [], {},

// Conditional
console.clear();
if (0) {
  console.log("THIS RUNS");
}

// console.log(!!123);

// console.log(Boolean("Luca"));

let myAge = 12;

if (myAge >= 18) {
  console.log("I can drink alcohol");
} else if (myAge === 17) {
  console.log(
    "I can, probably, ilegally, maybe, drink some alcohol and no one will get arrested"
  );
} else {
  console.log("I can't drink alcohol");
}

let harryPotterHouse = "slythe";

switch (harryPotterHouse) {
  case "grif": {
    console.log("You are one of the good guys, according to JK");
    break;
  }
  case "slyth": {
    console.log("You are one of the baddies");
    break;
  }
  case "huff": {
    console.log("You, like the other team, are kind of irrelevant");
    break;
  }
  case "raven": {
    console.log("Read the previous console, youll get it");
    break;
  }
  default: {
    console.log("You probably have never read harry potter, or had a typo. ");
  }
}

console.clear();
const tadejName = "Tadej Udovic";
// console.log(tadejName.length);

// console.log(tadejName[0].toUpperCase());
// console.log(tadejName[1].toUpperCase());

for (let number = tadejName.length - 1; number > -1; number--) {
  console.log(tadejName[number]);
}
console.clear();

for (let number = 0; number < tadejName.length; number++) {
  //   if (number % 2 === 0) {
  console.log(tadejName[number].toUpperCase());
  //   } else {
  //     console.log(tadejName[number].toLowerCase());
  //   }
}

let yearOfBirth = 1994;

while (2021 - yearOfBirth !== 0) {
  console.log(`I am not ${2021 - yearOfBirth} years old`);
  yearOfBirth++;
}

console.clear();

while (false) {
  console.log("THIS WILL NEVER RUN");
}

do {
  console.log("HELLO");
} while (false);

// while (true) {
//   console.log("HEEEEEY EVERYBODY");
// //   console.log("HEEEEY DR NICK");
// }

// loop analyzes the value of i (0)
// loop sees condition: i < 12 ?
// console.logs(tadejName[0])
// end of first loop: i => 1
// loop alayzes value of i (1)
// loop sees condition: 1 < 12?
// console.log(tadejName[1])
// end of second loop i => 2
// loop analyzes the value of i (2)
//

for (let n of tadejName) {
  console.log(n);
}

for (let number = 0; number < tadejName.length; number++) {
  console.log("number:", number, tadejName[number]);
  //   if (number % 2 === 0) {
  //     console.log(tadejName[number].toUpperCase());
  //   } else {
  //     console.log(tadejName[number].toLowerCase());
  //   }
}

const bigAssNumber = 65465498068706210984032;

for (let i = 0; i < bigAssNumber; i++) {
  console.log("SUPER COMPUTATIONALLY INTERESTING HACKING OF THE MAINFRAME");
  if (i === 5) {
    console.log("THATS ENOUGH");
    break;
  }
}
