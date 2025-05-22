//  1. Odd or even number
const number = 3;
const result = number % 2 === 0 ? "Even number" : "Odd number";
console.log(result);

// 2. Do you have a driving lisecse
const age = 23;
const isEligible =
  age >= 18
    ? "You are eligible for a driving license"
    : "You are not eligible for driving license";

console.log(isEligible);

//3. Calculate CTC with a bonus
const mothlySalary = 12300;
const yearlySalary = mothlySalary * 12;
const CTC = yearlySalary + (yearlySalary * 20) / 100;
console.log(`You have earnd form you office per annum as a CTC ${CTC}`);

//  4. Write a program for the Traffic light Simulation.
const color = "green";
const lightsColor = color === "green" ? "green light" : "Red Light";
const travellersBehavior = lightsColor === "green light" ? "GO" : "STOP";
console.log(travellersBehavior);

// 5. A Electricity Bill Calculator
const units = 50;
const perMonthCost = units * 150;
console.log(`Your Monthly Electricyty cost is ${perMonthCost} Rupees`);
// if i use this units(50 units) and each unit cost 150 rupees. How much charge per month then
const PerMonthcostOn50Unit = units * 150 * 30;
console.log(
  `If you consume a fix units per day and each unit cost 150 rupees. the charged per month: ${PerMonthcostOn50Unit}`
);
// if 20% discount
const yourAnnualPayment =
  PerMonthcostOn50Unit * 12 - (PerMonthcostOn50Unit * 12 * 20) / 100;

console.log(
  `If there is a 20% of discount, your annual payment will be ${yourAnnualPayment}`
);

// 6. Leap Year Checker
const year = 2025;
const isLeapYear =
  year % 4 === 0 ? "This is a Leap yaar" : "This is not a leap year";
console.log(isLeapYear);

// 7. Max of three numbers
const p = 23;
const q = 145;
const r = 65;

const maxNumber =
  p > q && p > r
    ? `Max Number is ${p}`
    : q > p && q > r
    ? `Max Number is ${q}`
    : `Max Number is ${r}`;

console.log(maxNumber);

// Bitwise Doubling

const count = 5;
let binnary = count.toString(2);
let shiftLeft = binnary + 0;
let desimalDouble = parseInt(shiftLeft, 2);
console.log(desimalDouble);

// or we can solve this by this below
const double = count << 1;
console.log(double);
