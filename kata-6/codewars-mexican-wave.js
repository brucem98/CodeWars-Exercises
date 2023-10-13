// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// initialize a result array
// iterate through each character of the initial string
// capatalize the current i and push the word with capitalized i to array
// check if the character is an empty space then just pass it over

function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      let string =
        str.substring(0, i) + `${str[i].toUpperCase()}` + str.substring(i + 1);
      result.push(string);
    }
  }
  return result;
}

console.log(wave("hello"));
