console.log("Day-09");

// Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

// console.log(number2);

/*

GEC 
   creation phase : 
       name : undefined
    execution phase : 
       log funciton will be executed and print rashed .
*/

// console.log(name1);

// var name1 = "Rashed";

// name = "Rashed";

// name = "";

// console.log(number2);
// let number2 = 10;

console.log(`name is `, name);
var name;
name = "tom";
console.log(`name is `, name);

name = "";

// Execution Context of this

/*
GEC 
   creation phase:
      allocated memory for log() form console   
      name : undefined
      allocated memory for log() from console
   execution phase :
      execute log() with name is 
      name : "tom"
      execute log() with name is tom
*/

// console.log(`my name is ${name1}`);
// let name1;
// name1 = "jerry";
// console.log(`my name is ${name1}`);

// here Execution Eontext like that

/*
GEC
   creation phase :
      allocated memory for log() form console   
      the memory of name is created but not initializing with anything.
      allocated memory for log() from console
   execution phase :
      execute log() with name is 
      name : "tom"
      execute log() with name is tom


// Temporal dead zone: Temporal dead zone is between where the code is start in block and whrere the variable is declared. these all line are temporal dead zone for that's specific varable. So we can say that when the code find that specific variable that is the end point of temporal dead zone

{
  //  ===> temporal dead zone starts here
  //
  //
  //

  //
  //
  //    ====> temporal dead zone is end here for "name2" variable
  //   console.log(name2);
  let name2 = "Rashed";
  //
  //
  //
  console.log(age);
  //
  //   ====> Temporal dead zone is end here for "age" variable
  let age = 24;
}

// here in this block line num 70 to line num 78. this is the temporal dead zone of name2 variable and line number 70 to line number 86 is the temporal dead zone for age variable.



//Now we are talking about funciton hoisting. hoising means allocated the memory. It's not mean pulling up.

chase();

function chase() {
  console.log("Tom chase Jerry");

  caught();
}

function caught() {
  console.log("Tom caught Jerry");
}


//  What is the Execution Context of these 2 function 

GEC 
   Creation Phase => 
      allocated the memory location for chase() 
      allocated the merory location for caught()
   execution pahse => 
      execute the chase() and create new execution context 
      FEC for chase()
         Creation phase => 
            allocated memory location for log() form console
         execution phase => 
            execute log() and print "Tom chase Jerry"
            execute caught() and create new Execution Context for caught()
            FEC for caught()
               creation phase => nothing will be happen 
               executtion phase =>
                  exetuion log() "Tom caught Jerry"
         
*/

// So what's the definition of Hoisting :: Hoisting means the creation phase in the Global execution context or the Function Execution Context. Then JavaScript create a memory of a variable or a function called it hoisting.
// Ponint to be noted that: Hoisting occured in the normal function but not in the arrow function. explaination in the bellow

test();

// console.log(test);

var test = () => {
  console.log("This is the testing purpose");
};

// It's not work. Because of the Execution ConText. So get explaination

/*
GEC 
   creation phase 
      test = undefined 
   execution phase 
      want to execute test as a fucntion but from the creation phase we got test as undefined. if we want just console.log(test) it's return undefined

*/

// Note: point to be noted that: let and const don't be the hoisted. Rather just var can be hoisted. And for function => arrow funciton or function expression are not allowed for hoisting. Standerd function can be hoisted.
