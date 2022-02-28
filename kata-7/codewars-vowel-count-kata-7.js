// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


console.log("hello")
const str = "hello"

function getCount (str) {
    let vowelsCount = 0;

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const strArr = str.split('') // splits string into each individual character and stores then in an array

    // Compares each index of the string away to each vowel to see if it matches on of those

    strArr.forEach((el) => {
        for (let i = 0; i < vowels.length - 1; i++){
            if(el === vowels[i]){
                vowelsCount++; 
            }
        }
    });
    return vowelsCount;
}

console.log(getCount("hello"))
