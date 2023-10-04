// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/

function filter_list(l) {
  return l.filter((x) => Number.isInteger(x));
}

console.log(
  filter_list([1, 2, "a", "b"]),
  filter_list([1, 2, "aasf", "1", "123", 123])
);
