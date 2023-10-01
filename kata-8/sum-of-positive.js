// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  let positiveNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbers.push(arr[i]);
    }
  }
  return positiveNumbers.reduce((a, b) => a + b, 0);
}

console.log(positiveSum([1, -4, 7, 12]));
