console.log("Day 10");

// task 1. What will be the output of the following code and why?

let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();

// Here the output will be "Bob". Here inner() is difined inside the outer() funciton and here user variable is initialized with "Bob". Then call the inner() funciton. That's why console.log(user) return the value of user as "Bob". We can think this in the way of variable shadowing. user is globally declare with "Alice". But in the outer() function it is declare with "Bob". Here global user variable has no effect in the outer function's variable. Then in the Context of Outer function, if we think with Execution Context. We can see this ->

// FEC
//    CP
//      inner() function is allocated in the  memory
//      user variable is created with not initailized
//   Ep
//      inner() in allocated so nothing happend with this
//      user : Bob
//      Inner() funciton is executed and print user variable that is "Bob"
//

//
// task 2:  What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
  total += num;
  console.log(total);
}

add(5);
add(10);
// console.log(total);

// here the mistake was printing total's value outsite the funciton. when we place it in the funciotn. It has fix the problem.

function parent() {
  let a = 23;

  function child() {
    console.log(`This is form parent function ${a}`);
  }
  child();
}

parent();

// explaination with scopechain: If child function can't find any variable. It go to the outside of the function. form the child variable to the global. here variable a is found in the parent() fucntion. so execute this easily.

function loopInside() {
  for (var i = 0; i <= 5; i++) {
    console.log(i);
  }
  console.log(i);
}

loopInside();

// If we declare variable with var then access it form the outside of loop block. Becasue var is the funciton scope. So if we declare a variable inside a block it can be accessable outside the block. But If we declare a variable in the for loop block. We can't able to access it. Because this let is block scope variable. And const is not usable in the loop.

// task 6. What will be the output and why?

console.log(a); // ReferenceError
let a = 10;

// here the output will come ReferenceError. Because We want to execute a variable before declaration. If we try this with var specifier. Then it return undefined. If we want to realize clarely, we should think with Execution Context or hoisting parsepecitve.

// In Hoiting Parsepective: for a varibale with let, we can't access it, because of Temporal Dead Zone.

// Execution Context Parsepective:

// GEC
//    creation phase
//      log() form console is allocated in memory
//      a : just allocated in memory but not initialize
//   Execution pahse
//      As a variable is not initialize. That's why log function can't be acceess a. show referenceError. and the message is. can't access before initialization.

// task 7. Where is the age variable accessible?

function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age);

//  showAge() function don't execute yet.

//If there had been call the showAge() function, then the answer was Only inside showAge() function.

//Explaination: here let is declare within a function. when a variable decalre within a function It can't be accessable outside of the funcion. Even though there age was decalre with var or const.

// task 8:. What will be the output and explain the output?

let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message); // Hi
  }

  inner();
}

outer();

// The Output is Hi.
// Explaination: here message variable is declare in the globally. But in the Outer funcion it also be declared. So varibale

//  task 9. What will be the output and why?

let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();

/// The result is "Inner"

//Explaination:  Because X is defined with Inner within the inner() funcion. and the closest value weill be executed.Other explaination can be like this. Here result is Inner. because of variable shadowing. variable x is defined globally with "Global".  And then is has been declare in the outer function with "Outer" and then in inner funcion it has been declare with "Inner". here x is not reassigned. but variable is shadowing. and the closest one will be executed.

// task 10. What will be the output and why?

function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();

// here first output is -1 and second output is -2. here 2nd function is a closure. So it can memorise the value of a variable.
