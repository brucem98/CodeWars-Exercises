// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// Iterate through the array and store the integer and the number of times it appears in the array
// Check if the number of times each value appears in the array is odd and return that value

function findOdd(A) {
  const hashmap1 = new Map();
  for (let i = 0; i < A.length; i++) {
    if (hashmap1.has(A[i])) {
      hashmap1.set(A[i], hashmap1.get(A[i]) + 1);
    } else {
      hashmap1.set(A[i], 1);
    }
  }

  for (const [key, value] of hashmap1.entries()) {
    if (value % 2 !== 0) {
      return key;
    }
  }
  return "no odd integer";
}

console.log(
  findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]),
  findOdd([0, 1, 0, 1, 0]),
  findOdd([7])
);
