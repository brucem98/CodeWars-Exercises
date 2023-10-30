// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  let countMap = new Map();

  for (let num of arr) {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1);
    } else {
      countMap.set(num, 1);
    }
  }

  for (let [num, count] of countMap) {
    if (count === 1) {
      return num;
    }
  }
}

console.log(findUniq([3, 10, 3, 3, 3])); //10
