// Variable Immutability

let string = "My name";
string[1] = "a";
// string will still be `My name` even though we are trying to change it in line 4. Because strings are immutable. You can't change them. Same thing for numbers, booleans, undefineds and nulls

// BOOLEANS
let positive = true;
let negative = false;

// difference between undefined and null
// undefined is, theoretically, a value that is never instantiated
// null is a value that we initialize as empty.
// both values are similar, but appear in different circumstances
const nullVal = null;
const undefiVal = undefined;
console.log(nullVal == undefiVal);
// they both have "similar" values, but not the same
console.log(nullVal === undefiVal);

// Loops
if (true) {
  console.log("SOMETHING HAPPENS IN THIS IF STATEMENTE. ALWAYS");
} else {
  console.log("WHERE NOTHING WILL BE READ");
}

// falsy
// "", 0, -0, false, null, undefined, NaN,
// truthy, in comparrison - is the rest:
// " ", any <  0  > number here, {}, [], "0", "null", "false", true, new Date(), -3.14, Infinity

// truthy values get interpreted as if its a true value
if (" ") {
} // will get read
if (1) {
} // will get read
if ("false") {
} // will get read

// falsy values will never get read inside an if statement, unless we are doing a comparrison
if (undefined) {
} // will never get read

// If you ever want to see if a value is truthy or value you can use one of three options:
// 1: Put it in an if statement and see if something inside runs:
// 2: Add (one or two) `!` in front: !true => false. Therefore: !0 => true // !!0 => false
// 3: My favorite, because its easier to read (in my opinion): Boolean(undefined) => false

// LOOPS
// for => reserved keyword in javascript that signals the begining of a loop
// the basic for loops are divided in 3 sections:
// (let i: 0;) => created the `i` variable. the value that will be carried over every single loop for us to take care of it
// i < x => the comparison. as long as this is true (or truthy) the loop will run
// i++ => the action at the end of each version of the loop
for (let i = 0; i < 3; i++) {
  console.log("i = ", i);
}
// before a first loop begins: i(0) < 3
// first loop: console.logs i = 0
// first loop ends: i becomes 1
// before a second loop begins: i(1) < 3
// second loop loop: console.logs i = 1
// second loop ends: i becomes 2
// before a third loop begins: 1(2) < 3
// third loop: console.logs (i = 2)
// third loop ends: i becomes 3
// before a fourth loop begins: i(3) === 3
// never starts a fourth loop

for (let i = 0; i < 99; i++) {
  console.log(i);
}
// will do a loop as long as i is smaller than 99. it starts at 0 and goes all the way to 98

// we can use the for loop to iterate using (usually numbers)
// with strings we use the length (a value that is a number in a string). An empty string has  0 length

// WHILE LOOPS
// dont tend to get used a lot, because without us wanting we can get stuck in an infitie loop and it can break software, your computer, or the internet
// syntax:
let i = 0;
while (i <= 50) {
  console.log(i);
  i++;
}

// DO ... WHILE LOOP. Not used a lot. Some people will advise against because people dont tend to see a lot
let num = 1;
do {
  console.log(num);
  num++;
} while (num < 1);

// runs always, at least, once

// for of loops. Nicer to read, less amount of [i] all over the place

let myStr = "abcdefghijklmnopqrstuvwyz";
for (let letter of myStr) {
  console.log(letter);
}

// the letter is already the myStr[i] of the loop. Used specially when the index is not relevant for the loop at all

// BREAK STATEMENTS "break out of a loop"

const bigAssNum = 1000000000;

for (let num = 1; num < bigAssNum; num++) {
  console.log(`Here we go, still ${bigAssNum - num} times to go`);
  if (num === 5) {
    console.log("Im tired, dont want this");
    break;
  }
}

// There is also the continue but I personally have never used it at all. You can have it or not, personally I have never seen a need for it
