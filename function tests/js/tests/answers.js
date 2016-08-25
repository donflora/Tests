// ALL FUNCTION NAMES ARE CASE SENSITIVE. READ THE DIRECTIONS CAREFULLY.
// BE VERY MINDFUL OF YOUR SYNTAX. A SINGLE ERROR WILL CAUSE ALL TESTS TO FAIL.

// 1. Create a function called giveMeFive. The function
// should take no arguments and return the number 5

function giveMeFive() {
    "use strict";
    return (5);
}


/* -------------------------------------------------- */

// 2. Create a function called addTogether that takes two arguments.
// The function should return the sum of those two arguments

function addTogether(var1, var2){
    return(var1+var2);
}


/* -------------------------------------------------- */

// 3. Create a function called isOdd that takes a number as an argument.
// if the number is odd, the function should return true. If the number is 
// even the function should return false. Hint: use the % operator. 

function isOdd(value) {
	if (value%2 == 0)
		return false;
	else
		return true;
}



/* -------------------------------------------------- */

// 4. Create a function called isEven that takes a number as an argument.
// if the number is even, the function should return true. If the number is 
// odd the function should return false. Hint: use the % operator. 

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}



/* -------------------------------------------------- */

// 5. Create a function called max that takes two numbers as arguments.
// max should return the larger of the two numbers. If the numbers are 
// equal one of the numbers should be returned.


function max(num1, num2){
    var total = Math.max(num1, num2);
    return total;
    }



/* -------------------------------------------------- */

// 6. Create a function called min that takes two numbers as arguments.
// min should return the smaller of the two numbers. If the numbers are 
// equal one of the numbers should be returned.


function min(num1, num2){
    var total = Math.min(num1, num2);
    return total;
    }


/* -------------------------------------------------- */

// 7. Create a function called clamp that takes three arguments.
// The first value should be a number, the second should be a minimum value,
// and the third should be a maximum value. If the first value is less than the minimum,
// clamp() should return the minimum value. If the first value is greater than the maximum 
// clamp() should return the maximum value. If the value is greater than the mimimum, but less
// than the maxium, clamp() should return the value


    //return Math.max(min, Math.min(max, val))

function clamp(NUM, MIN, MAX){

//function clamp(NUM, max:Number = MIN, max:Number = MAX){
    if (NUM < MIN){
        return MIN;
    }
    else if (NUM > MAX){      
        return MAX;
    }
    //else if (NUM >= MIN && NUM <= MAX){
        return NUM;
    //}
}



/* -------------------------------------------------- */

// 8. Create a function called average that takes an array of numbers as its argument.
// This function should return the average of the numbers in that array. Be sure to account
// for empty elements in the array. Hint: you can use the typeof operator to see if a value
// is equal to "number"

//var arrayInput = [];

function average(arrayInput){
    var sum = 0;
    var avgNum = 0;
    for( var i = 0; i < arrayInput.length; i++ ){
        if (typeof arrayInput[i] === 'number' && isNaN(arrayInput[i])===false){
        sum = sum + (arrayInput[i]);
        avgNum++;
        }
    //var avg = sum/arrayInput.length;
    }
    var avg = sum / avgNum;
    return avg;
}

/*
function average(arrayInput){
var sum = average.reduce(function(a, b) { return a + b; });
var avg = sum / average.length;
}
*/

/* -------------------------------------------------- */

// 9. Create a function called disagree that takes a boolean as an argument. 
// This function should return the opposite value(true if the argument is false, 
// false if the argument is true). Hint: use the ! operator.

function disagree(x){
    x = !x;
    console.log(x);
    return(x);
}


/* -------------------------------------------------- */

// BONUS. Create a function called fizzBuzz that takes a number as an argument. 
// If the number is divisible by 3, return the string "fizz".
// If the number is divisible by 5, return the string "buzz".
// If the number is divisible by both 3 AND 5, return the string "fizzbuzz". 
// Hint: use the % operator and be careful of the order of your if statements