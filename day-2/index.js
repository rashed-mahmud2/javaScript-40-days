console.log("hellow world");

let name = "Rashed Mahmud";
let age = 24;
let isStudent = true;
let favoriteProgrammingLanguage = "JavaScript";

console.log(name, age, isStudent, favoriteProgrammingLanguage);

console.log(
  `My name is ${name}. I am ${age} year old. My favorite programming language is ${favoriteProgrammingLanguage}`
);

// reassigning value

name = "Selina Khatun";
age = 18;
isStudent = false;
favoriteProgrammingLanguage = "Python";

console.log(
  `My name is ${name}. I am ${age} year old. My favorite programming language is ${favoriteProgrammingLanguage}`
);

// const name = "Hridoy";  // you cann't redeclared the variable that declared before by the let identifier.

const fatherName = "Shohidul Islam";
const motherName = "Rowshon Akter";
const villageName = "Nehenda";
const countryName = "Bangladesh";

console.log(
  `My father name is ${fatherName}. My mother name is ${motherName}. We live in a village that name is ${villageName}. And my country that I live is ${countryName}`
);

// fatherName = "Mohammad Selim Reja";
// motherName = "Runa Khatunn";
// villageName = "Madhoil";      // here we can't reassign the variable value.if we  want to reassign, we should use let. or we can change the variable name.
// countryName = "Afghanistan";

// we can use this syntax
const fatherName2 = "Mohammad Selim Reja";
const motherName2 = "Runa Khatunn";
const villageName2 = "Madhoil";
const countryName2 = "Afghanistan";

console.log(
  `My father name is ${fatherName2}. My mother name is ${motherName2}. We live in a village that name is ${villageName2}. And my country that I live is ${countryName2}`
);

// note> variable: variable is a container that is used to stored the value.
//  there are two types of value. they are primitive value and non-primitive value.
// Primitive vlaue: string, number, bolean, symbol, null, undefined.
// / Non-primitive vlaue: object, array, faunction

//  this syntax called "pass by value"
let fruit = "mango";
let vegetable = "carrot";
console.log(fruit, vegetable);

fruit = vegetable;

console.log(fruit, vegetable);

// object

// const student = {
//   name: "Rashed Mahmud",
//   age: 24,
//   favLanguage: "Javascript",
// };

let student = {
  name: "Rashed Mahmud",
  age: 24,
  favLanguage: "Javascript",
};

console.log(student);

student = "Rashed Mahmud";
console.log(student);

// note: declare an object with constant. then try to reassign this. an error occoured.
//  But declaring an object with let with named "student". then you can reassign the value of this variable.

let studentInfo = [
  {
    name: "Rashed Mahmud",
    age: 24,
    favLanguage: "Javascript",
  },
  {
    name: "Selina khatun",
    age: 18,
    favLanguage: "Python",
  },
];

console.log(studentInfo);

studentInfo = {
  name: "Selina khatun",
  age: 18,
  favLanguage: "Python",
};

console.log(studentInfo);

// if we declare object or array that can be easily modified, reassigned and changed. so should avoid let to declare array and object. Rather than if we use constant specifier, none can't change anything. As a result this is easy to control our code and (kono ekta data thakbe jeta constant thakbe) truth of data maintain thakbe.

// In this lesson we have learned many many new things that is absolutely new to me. and this course is very helpfull to learn javaScript properly.
