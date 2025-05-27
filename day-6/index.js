console.log("task of day 6");

// Task 1 : A Function to Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(celsiusToFahrenheit(32));

// task 2 : Create a Function to Find the Maximum of Two Numbers
function findMax(num1, num2) {
  const largeNumber = num1 > num2 ? num1 : num2;
  return largeNumber;
}
console.log(findMax(54, 78));

// Task 3 : Function to Check if a String is a Palindrome

function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);

  if (str === reversed) {
    console.log(`The string you have given "${str}". This is a Palindrome`);
  } else {
    console.log(`You have given the string "${str}".This is not a Palindrome`);
  }
}

isPalindrome("rever");

// task 4 : Write a Function to Find Factorial of a Number
function factorial(n) {
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

console.log(factorial(5));

// task 5 : Write a function to Count Vowels in a String

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

countVowels("umbrela");

// task 6 : Write a Function to Capitalize the First Letter of Each Word in a Sentence
function capitalizeWords(sentence) {
  const words = sentence.split(" ");
  const newSentence = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const letterFromWord = word.split("");

    for (let j = 0; j < letterFromWord.length; j++) {
      letterFromWord.shift();
      letterFromWord.unshift(word[0].toUpperCase());
    }

    const joinedLetterFromWord = letterFromWord.join("");
    newSentence.push(joinedLetterFromWord);
  }

  const ns = newSentence.join(" ");
  console.log(ns);
}

capitalizeWords("the name of my country is Bangaldehs.");

capitalizeWords("amar sonar bangla ami tomay valo basi.");

capitalizeWords(
  "ooo cokheri isaray rekhechi paharay jete debo na dure. tumihin ami je shudhu paglami je hridoy ta voboghure. cokheri isharay rekhechi paharay jete debo na dure. tumi hin ami je sudhu paglami je hridoy ta vobo ghure. Tumi cokher arale kokhono harele hoye jabo elo melo. amar moton ke ache bolo basbe tomay eto valo. amar moton ke ache bolo basbe tomay eto valo. jekhane fulera kokhono jhore na. jekhane alote adhar name na. jekhane royeche sukheri mohona. nei dukkho nei kosto nei jatona. jekhane sute ache cluster boma bataser subase vase baruder dhoya. peyechye omio sudha sahaday chayay. jekhane se tora bora ebota baderi sena."
);

// task 7 : Use an IIFE to Print “Hello, JavaScript!”

(function hello(str) {
  console.log(`hellow, ${str}`);
})("JavaScript");

// 8. Create a Simple Callback Function

function greet(name, callback) {
  callback(name);
}

const callback = (name) => {
  console.log(`hellow ${name}`);
};

greet("Rashed", callback);

/* task 9: Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {
    f1();
}
f2(); 

here first call f2() has been pushed in callstack. Then when  will be executed it find a call f1(). then f1 has also been push in callstack. now callstack work for  call f1(). After finishing call f1(), it will has been poped out form the call stack. Then work for f2(). After complete f2() fully. f2() also will has been poped form the callStack. and call stack will be. closed. 

*/

/* task 10. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();


here in line number 127 function f1 has been defined. Then function f2 hase been defined in line number 128. After that function f3 has been defined. Under the f3 f1 has been called. But this call doesn't go to the call stack under the hood.
the call f2 has been comed.f2 will be pushed in the call stack. f2 will be direct executed. Then it poped out form the callstack.

Then f3 will pushed in the call stack. During executing it will find another call f1. Now f1 will also be pushed in the call stack. Now call stack has to call. f1 in last/top and f3 is in the first/bottom. When f1 has been completed it will be poped out form the call stack. Now f3 has been still there. Ater that f3 will be executed completely and poped out form the callStack. 

then f1 call again pushed in the callStack cause of again calling. It will be executed and poped out form the callStack again. and CallStack will be clean and closed. 

*/
