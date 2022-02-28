// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// You will need to know two things

// How to initialize a Date const date = new Date(year, month, day)
// How to query the Date to get a given day. this is done with the Date.prototype.getDay() method.

// *SOLUTION*
// To solve the problem we simply have to ask for each month of the year if it has a friday 13th. 
// So we need a counter, and a loop for the months of the year, and then just return the value of the counter.

function unluckyDays(year){
    let unlucky = 0
    for (x = 0; x < 12; x++) {
        unlucky += new Date(year, x, 13).getDay() === 5 ? 1 : 0         // The addition assignment operator (+=) adds                                                                  // the value of the right operand to a variabl                                                               // and assigns the result to the variable.
    }
    return unlucky;
};

console.log(unluckyDays(2009))

function unluckyDaysTwo(year){
    let unlucky = 0;
    for (let i = 0; i < 12; i++) {
        if(new Date(year, i, 13).getDay() === 5){
            unlucky++;
        }
    }
    return unlucky;
}

console.log(unluckyDaysTwo(2021))