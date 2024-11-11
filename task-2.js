/**
 * 
 * write a `for` loop that goes from 0 until `max` (not included) with an increment
 * defined by the variable `step` and prints every number to the console. 
 * 
 * the values for `max` and `step` should be passed to the script from the command line
 * 
 * **important**: the input coming from the command line is always a string. when you
 * need numbers, remember to convert it
 * 
 * for example:
 * 
 * count up to 10 with an increment of 2:
 * node task-2.js 10 2 
 * 
 * expected output:
 * 
 * 0
 * 2
 * 4
 * 6
 * 8
 * 
 * count up to 50 with an increment of 5:
 * node task-2.js 50 5
 * 
 * 0
 * 5
 * 10
 * 15
 * 20
 * 25
 * 30
 * 35
 * 40
 * 45
 * 
 */

const max = Number(process.argv[2]);
const step = Number (process.argv[3]); 

if (isNaN(max)|| isNaN(step)){
    console.log("Please provide valid numbers for max and step.");
 } else {
    for (let i= 0; i< max; i +=step){
        console.log(i);
        
    }
 }
    

/*  step = 2, bedeutet dies, dass die Variable step gleich 2 sein wird. Das heißt, dass die Schleife die Variable i bei jeder Iteration um 2 erhöht. */