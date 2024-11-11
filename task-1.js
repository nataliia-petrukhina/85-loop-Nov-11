/**
 * 
 * Write a `for` loop that goes from 0 until `max` (not included) and prints every number
 * to the console. 
 * 
 * The value for `max` should be passed to the script from the command line
 * 
 * **IMPORTANT**: the input coming from the command line is always a string. When you
 * need numbers, remember to convert it
 * 
 * For example:
 * 
 * node task-1.js 5 
 * 
 * Expected output:
 * 
 * 0
 * 1
 * 2
 * 3
 * 4
 * 
 */
const max = parseInt(process.argv[2], 10);

if (isNaN(max)){
    console.log("Geben Sie einen numerischen Wert für max ein");
    
} else {
    for(let i = 0; i < max; i++){
        console.log(i);
        
    }
} 

