// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  const result = [];
  const lowerStr = s.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      str += lowerStr[i];
    }
    result.push(str);
  }

  return result.join("-");
}

console.log(accum("RqaEzty"));
