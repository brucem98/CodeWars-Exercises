const countSheep = function (num) {
  let result = [];

  for (let i = num; i >= 1; i--) {
    result.push(`${i} sheep...`);
  }

  return result.reverse().join().replaceAll(",", "");
};

console.log(countSheep(3));
