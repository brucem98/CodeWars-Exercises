// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 

// Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  // place to store the sum
  let sum = 0;

  // iterate down from the number minues 1
  for (let i = number - 1; i > 0; i--) {
    // if the number is divisible by 5
    if (i % 5 === 0) {
        // add it to sum
        sum += i;
    } else if (i % 3 === 0) {  // else if the number is divisible by 3   
        // add it to sum
        sum += i;
    }
  } 
  return sum;
}

console.log(solution(15))

function solutionTwo(number){
    let sum = 0

    for (let i = 1; i < number; i++){
        if(i % 3 == 0 || i % 5 == 0){    // The logical OR (||) operator (logical disjunction) for a set 
            sum +=i                      // of operands is true if and only if one or more of its operands is true.
        }
    }
    return sum;
}

console.log(solution(10))