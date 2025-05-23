// Task 1: Generate a Pyramid Pattern using Nested Loop
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = i; j >= 1; j--) {
    pattern += "* ";
  }
  console.log(pattern);
}

// task 2: Craete Multiplication Table (Using for loop)
const givenNumber = 3;
for (let i = 1; i <= 10; i++) {
  console.log(`${givenNumber} × ${i} = ${givenNumber * i}`);
}

// Task 3:
let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 === 1) {
    // console.log(i);
    sum += i;
  }
}
console.log(`The summation of all odd number between 1 to 500 is ${sum}`);

// Task 4: Skipping Multiples of 3
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// task 5 : Reverse Digits of a Number
const input = "6789";
let output = [];
let x = input.length - 1;
while (x >= 0) {
  console.log(input[x]);
  output += input[x];
  x--;
}

console.log(output);

// task 6 :
// for loop I use when the iteration number i know;
// while loop I use when I don't know the iteration number and don't know while the loop stoped;
// do while loop I use when I need at least One iteration.
