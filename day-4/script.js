// task 1: What will be the output of this code snippet and why?

let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

// here the output will be "It's a normal day. Because Monday != monday. So the first case block doesn't work. And as default block work if there any condition don't match. So here default block will be work"

// task 2: Build an ATM Cash Withdrawal System

let enteredAmount = 3900;

if (enteredAmount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

// here multiple of 100 means any ammount which are greater than 100 and they can be division by any descimal number. such as 200, 300, 400, 1000, 2000, 2500, 3900, 4700 etc. You can test by anything with the multiplication of 100.

// task 3: Build a Calculator with switch-case

let operator = "-";
let num1 = 750;
let num2 = 55;

// if (operator === "+") {
//   console.log(num1 + num2);
// } else if (operator === "-") {
//   console.log(num1 - num2);
// } else if (operator === "*") {
//   console.log(num1 * num2);
// } else if (operator === "/") {
//   console.log(num1 / num2);
// } else if (operator === "%") {
//   console.log(num1 % num2);
// } else {
//   console.log("NOT a valid operator");
// }

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "%":
    console.log(num1 % num2);
    break;
  default:
    console.log("NOT a valid operator");
}

// task 4: Pay for your movie ticket

let age = 74;
const prizeForChildren = "$3";
const prizeForAdult = "$10";
const prizeForOlder = "$8";

if (age < 18) {
  console.log(`You are Children and your ticker prize is ${prizeForChildren}`);
} else if (age >= 18 && age <= 60) {
  console.log(`You are adult and your ticket prize is ${prizeForAdult}`);
} else {
  console.log(`you are older man. So your ticket prize is ${prizeForOlder}`);
}

// task 5: Horoscope Sign Checker

let birthMonth = "December";

switch (birthMonth) {
  case "January":
    console.log("Your Zodaic sign is Aquarius");
    break;
  case "February":
    console.log("Your Zodaic sign is Pisces");
    break;
  case "March":
    console.log("Your Zodaic sign is Aries");
    break;
  case "April":
    console.log("Your Zodaic sign is Taurus");
    break;
  case "May":
    console.log("Your Zodaic sign is Gemini");
    break;
  case "June":
    console.log("Your Zodaic sign is Cancer");
    break;
  case "Julay":
    console.log("Your Zodaic sign is Leo");
    break;
  case "August":
    console.log("Your Zodaic sign is Virgo");
    break;
  case "September":
    console.log("Your Zodaic sign is Scorpio");
    break;
  case "October":
    console.log("Your Zodaic sign is Libra");
    break;
  case "November":
    console.log("Your Zodaic sign is Sagittarius");
    break;
  case "December":
    console.log("Your Zodaic sign is Capricorn");
    break;
  default:
    console.log("NOT a valid Month Name");
}

// task 6 :  Which Triangle?

let side1 = 10;
let side2 = 40;
let side3 = 40;

if (side1 === 0 || side2 === 0 || side3 === 0) {
  console.log("This is not a Triangle. May be this is a line");
} else if (side1 === side2 && side1 === side3) {
  console.log("The tiangle is Equilateral Triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("This triangle is Isosceles Triangle");
} else {
  console.log("This triangle is Scalene Triangle");
}
