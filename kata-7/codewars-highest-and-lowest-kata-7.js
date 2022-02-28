// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers){
    const arr = numbers.split(" ")
    let lowest = parseInt(arr[0]) //+arr[0], coverts string to a number
    let highest = parseInt(arr[0]) 
    for(let n of arr){
        if(+n < lowest) lowest = +n
        if(+n > highest) highest = +n
    }
    return `${highest} ${lowest}`
}

console.log(highAndLow("1 2 -3 4 5"))


function highAndLowTwo(numbers){
    numbers = numbers.split(' ').map(Number); //converts to an array of numbers automatically,
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

console.log(highAndLowTwo("1 -8 -3 7 5"))