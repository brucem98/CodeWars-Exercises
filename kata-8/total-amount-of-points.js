// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(matches) {
  let points = 0;

  for (let match of matches) {
    const [x, y] = match.split(":").map(Number); //split the match result string into an array of two numbers (the scores) and convert them from strings to actual numbers.

    if (x > y) {
      points += 3;
    } else if (x === y) {
      points += 1;
    }
  }

  return points;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
); // 30
