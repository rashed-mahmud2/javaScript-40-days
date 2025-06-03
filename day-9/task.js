// Task 1 : Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

{
  //
  console.log(name);

  //
  console.log(age);
  //
  //
  let age = 23;
  //
  console.log(location);
  let location = "Dhaka";
  //
  //
  //
  //
  let name = "Rashed";
}

//In this block Temporal Dead Zone for
// "age" is : form block's start to line number 11
// "location" is : form block's start to line number 14
// "name" is : form block's start to line number 19

// task 2: Explain Variable and Function Hoisting with Example. Post the code as your answer.

// variable hoising

console.log(`My name is ${name}`);
var name = "Rashed";
console.log(`My name is ${name}`);

// Note that: var is hoisted with undefined and let & const is hoisted with not initialization thats means create temporal dead zone;

// function hoisting

greet();

function greet() {
  console.log("Welsome to the Temporal Dead Zone");
}

// Note that: Function Expression is Not Hoisted. Example in the bellow

greeting();
greeting2();

var greeting = function () {
  console.log("This is greeting funciton");
};

var greeting2 = () => {
  console.log("This is greeting 2 funciton");
};

// If i want to explain why this occur. I will explain with execution context.

// Exetution Context

// GEC
//   cretion phase:
//     greeting : undefined
//     greeting2 : undefined
//   execution phase :
//     here both greeting and greeting2 is a variable. and in the creation phase both ar initialized with undefined. A variable can't call just like a funciton. so we can't use this syntax. So we can say that function expresion and arrow funciton can't be hoisted.
