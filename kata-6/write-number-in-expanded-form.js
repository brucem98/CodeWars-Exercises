// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  let numString = num.toString();
  let result = [];

  for (let i = 0; i < numString.length; i++) {
    if (numString[i] !== "0") {
      result.push(numString[i] + "0".repeat(numString.length - i - 1));
    }
  }

  return result.join(" + ");
}

console.log(expandedForm(804), expandedForm(973));
