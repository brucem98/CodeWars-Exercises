// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function filterFriends(names) {
  return names.filter((name) => name.length === 4);
}

console.log(filterFriends(["Ryan", "Kieran", "Mark"]));
