// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

let sif = new SmallestIntegerFinder();
console.log(
  sif.findSmallestInt([78, 56, 232, 412, 228]),
  sif.findSmallestInt([34, -345, -1, 100])
);
