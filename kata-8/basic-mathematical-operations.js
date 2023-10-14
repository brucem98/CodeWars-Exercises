// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

function basicOp(operator, value1, value2) {
  switch (operator) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      if (value2 !== 0) {
        return value1 / value2;
      } else {
        return "Error: Division by zero is not allowed.";
      }
    default:
      return "Error: Invalid operator.";
  }
}

console.log(basicOp("*", 5, 5));
