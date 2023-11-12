// https://www.codewars.com/kata/5411c4205f3a7fd3f90009ea/train/javascript

function stringParse(string){
// Check if the input is a string
if (typeof string !== 'string') {
    return "Please enter a valid string";
  }

  // Use regex to find consecutive duplicates of more than two alphabetical characters
  let result = string.replace(/(\w)\1{2,}/g, '[$&]');

  return result;
}

console.log(stringParse('aaaabbcdefffffffg'))