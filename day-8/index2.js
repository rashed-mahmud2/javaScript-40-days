console.log("Inside Global Execution Context");

var a = 5;

function testMe() {
  console.log("Inside TestMe(functional) Execution Context");
  var b = 10;
  var user = {
    name: "Rashed",
    Country: "Bangladesh",
  };

  function testAgain() {
    console.log("Inside testAgian(sub-fucntional) Execution Context");
    console.log("Exeiting testAgian Execution Context");
  }

  testAgain();

  console.log("Exeiting testMe Exetution Context");
}

testMe();
console.log("Exeiting Global Execution Context");

/*

GEC 
   creation phase
        log() funciton form console stored in the memory 
        a : undefined 
        testMe() funciton stored in memory 
        log() from console stored in the memory 
    execution phae 
        execute log() form console 
        FEC for log()
            creation phase 

            execution phase 
               execute log() funciton form console 
               var a is assigned with 5 
        execute testMe() 
        FEC for testMe() 
            creation phase 
                log() funciton stored in memory 
                var b : undefined 
                var user : undefined 
                testAgain() is stored in memory 
                log() is stored in memory 
            execution phase 
                execute log() function 
                b = 10 ;
                user = {
                    name : "Rashed",
                    country : "Bangladesh"
                }
                execute testAgain()
                FEC for testAgain()
                    creation phase 
                        log() is stored 
                        log() is stored 
                    execution phase 
                        execute log()
                        execute log()
                execute log() funciton 
        execute log()
                      
      
*/

let count = 20;

function outer() {
  let count = 30;

  function inner() {
    let count = 10;

    console.log(`the inner value is ${count}`);
  }

  inner();

  console.log(`the outer value is ${count}`);
}

outer();

console.log(`the global context is ${count}`);
