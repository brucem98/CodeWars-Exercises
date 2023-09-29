// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}

console.log(grow([4, 1, 2, 4, 5])); //160;
