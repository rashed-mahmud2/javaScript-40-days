console.log("Welcome to day 10");

// Definition of Scope: Scope means where the variable is accessable in JavaScript. When the variable is accessable in the global araa it's called global scope. when the variable is accessabe in the function then we call it funciton scope. When the varable is accessable in the block we call it block scpoe

// when a variable declared in globally. whatever it is var let or const. It is the global variable.

// when a varibale declared in a function it can't be accessable to the outer side of this particuller funciton.

// whenever a variable declared in inside a block. Then it's call block scope.

// When declared a variable with var in a block. it can be accessable outside the block. But when declare a varibale with let or const in a block. It can't be accessable outside the block. That's why can say that let and const are block scope.

// when we declared a variable with var. that becomes a property of global object. but when we declared a varibale with let or const. It will be global varibale but not becomes the property of global object. Example below

const nam = "Rashed";

console.log(`my name is ${nam}`);

const number = 23;

console.log(`The number is ${number}`);

{
  console.log(`This is ${number} form block`);
}

function greet() {
  console.log(`${number} and ${nam} form greet function`);
}

greet();

// here every variable declared with var. They all are the property of Global Object window. But the same thing we are work in with let and const. They are not to be the property of global object.

//var:  when we execute with window.variable or this.variable the the return the value of the varibale.
// let or const : when we execute with window.variable or this.variable the return undefined. Because they are not to be the property fo global object.

// function scope: If variable is declared in funciton they can't be accessable outside the function. Even though they are declare with let or const. They are accessable in just that varable.

function greeting() {
  var message = "Hellow world";
  console.log(message);
}

greeting();

//console.log(message); // RefercenceError

// block scope : when we create a syntax with a peer of carlebase it's called block of javaScript.

// In the block scope when we declare a variable with let or const they can't be accessable form outside of the block. if we declare a variable with var they are can be accessable form outsite the block. so if we want, the variable don't go outside form the block. we should use let or const. And we can say that .let and const both are block scope. example below here ->

{
  let mylocation = "Dhaka";

  console.log(`My location is ${mylocation}`);
}

// Now if I want to access location variable form outside we can't

// console.log(mylocation);  // ReferenceError

// Now we declare a variable with var in the block. then we will try to access form the outside form the block. let go what happed ?

{
  var myLocation = "Rajshahi";

  console.log(`My Home Town is ${myLocation}`);
}

console.log(`My home location is ${myLocation}`);

// var is funciton scope and let and const are block scope.

// scope Chain: JavaScript starts with the nearest scope. If it doesn't find the varibale value. Then it's go outside the form nearest to global.

let globalVar = "I am a Global variable";

function outer() {
  let outerVar = "I amd a Outer variable";

  function inner() {
    let innerVar = "I am a inner varibale";

    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }

  inner();
}

outer();

// console.log(outerVar); // Referec=nceError

console.log(globalVar); // This gives the output because this is a global varibale.

var count = 10;

function outerCount() {
  var count = 20;

  function innerCount() {
    var count = 30;

    console.log(count);
  }

  innerCount();
  console.log(count);
}

outerCount();

console.log(count);

// variable shadowing: Variable shadowing is the situation i would say, when the variable in the inner scope has the same name with the outer scope. and what happen then. it's affectively hidding the outer scope variable within the inner scope. Example below ->

// just same as before example here the variable name will be same ->

let greetingMessage = "I am doing well";

function situation() {
  let greetingMessage = "I am not doing well";

  console.log(greetingMessage);
}

situation();

console.log(greetingMessage); /// here  the greeting message won't be reassigned. Think as within scope, or execution contenxt topic.

/// in for loop var is not recommended
