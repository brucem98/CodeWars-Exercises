// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
  let classAverage = classPoints.reduce((a, b) => a + b) / classPoints.length;

  return yourPoints > classAverage;
}

console.log(betterThanAverage[(12, 23, 34, 45, 56, 67, 78, 89, 90)], 9);
