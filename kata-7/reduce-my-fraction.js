// https://www.codewars.com/kata/576400f2f716ca816d001614/train/javascript

// Reduce the numerator and denominator to their simplest form using common denominators

function reduce(fraction) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b); // recursion, checks if b is 0 first, if it is returns a
  }

  const [numerator, denominator] = fraction;
  const divisor = gcd(numerator, denominator);

  return [numerator / divisor, denominator / divisor];
}

console.log(
  reduce([45, 120]), // [3,8];
  reduce([80, 120]) // [2, 3]
);
